#!/usr/bin/env node
/**
 * Sync Medium RSS feed to portfolio's medium.ts
 * Fetches articles from Medium RSS, merges with existing data, and updates the data file.
 * Run: node scripts/sync-medium.mjs
 * Used by GitHub Actions to auto-update portfolio when new Medium posts are published.
 */

import { readFileSync, writeFileSync } from 'fs';
const RSS_FEED_URL = 'https://infinityai.medium.com/feed';
const MEDIUM_DATA_PATH = './src/data/medium.ts';

// Strips HTML tags and returns plain text
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract excerpt (first ~200 chars of content)
function getExcerpt(description, maxLength = 200) {
  const text = stripHtml(description);
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength).trim();
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '...';
}

// Format date: "Wed, 18 Feb 2026" -> "Feb 18, 2026"
function formatDate(pubDate) {
  if (!pubDate) return '';
  try {
    const date = new Date(pubDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  } catch {
    return '';
  }
}

// Estimate read time from content (avg ~200 words/min)
function estimateReadTime(content) {
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return minutes <= 1 ? '1 min read' : `${minutes} min read`;
}

// Parse link to get clean URL (remove ?source=...)
function cleanUrl(link) {
  if (!link) return '';
  try {
    const url = new URL(link);
    return `${url.origin}${url.pathname}`;
  } catch {
    return link;
  }
}

// Escape string for TypeScript
function escapeForTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

async function fetchRssFeed() {
  const res = await fetch(RSS_FEED_URL);
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`);
  return res.text();
}

function parseRssXml(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const getTag = (name) => {
      const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i');
      const m = itemXml.match(re);
      return m ? m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : '';
    };
    const getTags = (name) => {
      const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'gi');
      const matches = [...itemXml.matchAll(re)];
      return matches.map((m) => m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim()).filter(Boolean);
    };
    const title = getTag('title');
    const link = getTag('link');
    const pubDate = getTag('pubDate');
    const categories = getTags('category');
    // Medium uses content:encoded for full article; description may be empty
    const content = getTag('content:encoded') || getTag('description');
    if (title && link) {
      items.push({
        title,
        url: cleanUrl(link),
        excerpt: getExcerpt(content),
        readTime: estimateReadTime(content),
        date: formatDate(pubDate),
        tags: categories.slice(0, 6),
      });
    }
  }
  return items;
}

function loadExistingUrls() {
  try {
    const content = readFileSync(MEDIUM_DATA_PATH, 'utf-8');
    const urlMatches = content.matchAll(/url:\s*["']([^"']+)["']/g);
    return new Set([...urlMatches].map((m) => m[1]));
  } catch {
    return new Set();
  }
}

function buildMediumTs(articles) {
  const lines = articles.map((a) => {
    const tagsStr = a.tags.map((t) => `"${escapeForTs(t)}"`).join(', ');
    return `  {
    title: "${escapeForTs(a.title)}",
    excerpt: "${escapeForTs(a.excerpt)}",
    readTime: "${escapeForTs(a.readTime)}",
    date: "${escapeForTs(a.date)}",
    url: "${escapeForTs(a.url)}",
    tags: [${tagsStr}]
  }`;
  });
  return `export const allMediumArticles = [
${lines.join(',\n')}
];
`;
}

async function main() {
  console.log('Fetching Medium RSS feed...');
  const xml = await fetchRssFeed();
  const rssArticles = parseRssXml(xml);
  console.log(`Found ${rssArticles.length} articles in RSS feed`);

  const existingUrls = loadExistingUrls();
  const newCount = rssArticles.filter((a) => !existingUrls.has(a.url)).length;
  const forceUpdate = process.argv.includes('--force');

  if (newCount === 0 && !forceUpdate) {
    console.log('No new articles. Nothing to update.');
    return;
  }

  // Replace file with RSS data (RSS is already newest-first)
  const allArticles = rssArticles;
  const content = buildMediumTs(allArticles);
  writeFileSync(MEDIUM_DATA_PATH, content, 'utf-8');
  console.log(`Updated ${MEDIUM_DATA_PATH} with ${allArticles.length} articles (${newCount} new)`);
}

main().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
