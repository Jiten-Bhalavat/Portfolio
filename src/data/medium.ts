export type MediumArticle = {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
  tags: string[];
  topics?: string[];
  displayTags?: string[];
  /** Optional line under title, e.g. "Towards AI · LLMs & Quantization" */
  blogMeta?: string;
};

export function blogMetaLine(article: MediumArticle): string {
  if (article.blogMeta) return article.blogMeta;
  const plat = article.url.includes('towardsai')
    ? 'Towards AI'
    : article.url.includes('medium.com')
      ? 'Medium'
      : 'Blog';
  const prettyTags = article.tags
    .slice(0, 2)
    .map((t) =>
      t.split('-').map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : '')).join(' ')
    )
    .join(' & ');
  return `${plat} · ${prettyTags}`;
}

/** Matches portfolio-v2 homepage "Latest Blog Posts" order and copy */
export const allMediumArticles: MediumArticle[] = [
  {
    title:
      'Understanding LLM Quantization: Why FP32, FP16, BF16 and INT8 Matter for Modern AI Systems',
    excerpt:
      'How floating-point and INT8 formats shape model quality, speed, and memory when you deploy and scale modern LLM systems.',
    readTime: '12 min read',
    date: 'Mar 9, 2026',
    url: 'https://pub.towardsai.net/understanding-llm-quantization-why-fp32-fp16-bf16-and-int8-matter-for-modern-ai-systems-076ea6eb9ca6',
    tags: ['llm-quantization', 'efficient-llm-inference', 'int8-quantization', 'fp16-vs-bf16-vs-fp32', 'llm'],
    topics: ['LLMs'],
    displayTags: ['LLMs', 'Quantization', 'Inference'],
    blogMeta: 'Towards AI · LLMs & Quantization',
  },
  {
    title: 'Think You Know RAG? Take This 16-Point Checklist and Prove It Wrong',
    excerpt:
      'A comprehensive 16-point checklist to evaluate and improve your RAG pipelines. Most people get at least 5 of these wrong — and one of them will surprise you.',
    readTime: '2 min read',
    date: 'Oct 12, 2025',
    url: 'https://infinityai.medium.com/think-you-know-rag-take-this-16-point-checklist-and-prove-it-wrong-4fe75c0448bc',
    tags: ['rags', 'top-5', 'llamaparse', 'how-to-parse-pdf', 'generative-ai-tools'],
    topics: ['RAG', 'LLMs'],
    displayTags: ['RAG', 'LLMs', 'Vector DB'],
    blogMeta: 'Medium · RAG & LLMs',
  },
  {
    title: 'Proven Techniques to Accurately Parse Your PDFs',
    excerpt:
      'PDF parsing is a bottleneck for most RAG systems. These 3 techniques dramatically improve extraction accuracy and downstream retrieval quality.',
    readTime: '5 min read',
    date: 'Sep 5, 2025',
    url: 'https://infinityai.medium.com/3-proven-techniques-to-accurately-parse-your-pdfs-2c01c5badb84',
    tags: ['generative-ai', 'parsing-techniques', 'agentic-ai', 'retrieval-augmented-gen', 'artificial-intelligence'],
    topics: ['RAG', 'LLMs'],
    displayTags: ['RAG', 'PDF Parsing', 'Document AI'],
    blogMeta: 'Medium · RAG & Document AI',
  },
  {
    title: 'Excalidraw MCP: Turning Agent Markdown into Instant Diagrams',
    excerpt:
      'How to connect Claude agents to Excalidraw via Model Context Protocol to auto-generate beautiful diagrams from markdown output — no manual diagramming needed.',
    readTime: '2 min read',
    date: 'Feb 18, 2026',
    url: 'https://infinityai.medium.com/excalidraw-mcp-turning-agent-markdown-into-instant-diagrams-64ab8471fd67',
    tags: ['mcp-server', 'excalidraw', 'software-development', 'claude-ai', 'claude-code'],
    topics: ['Agents', 'LLMs'],
    displayTags: ['Agents', 'MCP', 'Claude', 'Excalidraw'],
    blogMeta: 'Medium · Agents & MCP',
  },
  {
    title: 'Claude Code Just Ended Manual Coding for Me: My Step-by-Step Guide to 3x Faster Builds in 2026',
    excerpt:
      'My step-by-step guide to 3x faster software builds using Claude Code for agentic development — what changed, what works, and what doesn\'t.',
    readTime: '1 min read',
    date: 'Feb 9, 2026',
    url: 'https://infinityai.medium.com/claude-code-just-ended-manual-coding-for-me-my-step-by-step-guide-to-3x-faster-builds-in-2026-f7f2abe8f611',
    tags: ['productivity-hacks', 'anthropic-claude', 'claude-code', 'clawdbot', 'openclaw'],
    topics: ['Productivity', 'LLMs'],
    displayTags: ['Claude Code', 'Productivity', 'AI Tools'],
    blogMeta: 'Medium · Productivity & AI',
  },
  {
    title: 'How to Create Your Personal AI Agent — Part 2',
    excerpt:
      'Part 2 of building a personal AI agent: adding memory, tool use, and real-time web data via Firecrawl to make your agent truly context-aware.',
    readTime: '4 min read',
    date: 'Jan 17, 2025',
    url: 'https://infinityai.medium.com/how-to-create-your-personal-ai-agent-part-2-a28729b6f8c7',
    tags: ['how-to', 'ai-agent', 'llm', 'ai', 'create'],
    topics: ['Agents', 'LLMs'],
    displayTags: ['AI Agent', 'Firecrawl', 'Memory'],
    blogMeta: 'Medium · AI Agents',
  },
  {
    title: 'How to Create Your Personal AI Agent — Part 1',
    excerpt:
      'Getting started with building a personal AI agent from scratch using Phidata — architecture, tools, and first steps.',
    readTime: '3 min read',
    date: 'Jan 17, 2025',
    url: 'https://infinityai.medium.com/how-to-create-your-personal-ai-agent-part-1-1a6423966911',
    tags: ['how-to-create-ai-agent', 'phidata', 'agents', 'llm', 'ai-agent'],
    topics: ['Agents', 'LLMs'],
    displayTags: ['AI Agent', 'Phidata', 'LLMs'],
    blogMeta: 'Medium · AI Agents',
  },
  {
    title: 'How to Run Llama3 & Phi3 on Your Local PC Using Ollama',
    excerpt:
      'Step-by-step guide to running open-source LLMs (Llama 3, Phi-3) locally using Ollama — no GPU cloud required.',
    readTime: '8 min read',
    date: 'Nov 4, 2024',
    url: 'https://infinityai.medium.com/how-to-run-llama3-phi3-on-your-local-pc-using-ollama-b84213b2960a',
    tags: ['llama-3', 'llm', 'google-colab', 'local-pc', 'ollama'],
    topics: ['LLMs', 'Cloud'],
    displayTags: ['Ollama', 'Local LLMs', 'Llama 3'],
    blogMeta: 'Medium · Local LLMs',
  },
  {
    title: 'Ollama ConnectError: errno 99 — Cannot Assign Requested Address (Fix)',
    excerpt:
      'Quick fix for the common Ollama network binding error when running local LLMs — covers the root cause and exact solution.',
    readTime: '8 min read',
    date: 'Oct 29, 2024',
    url: 'https://infinityai.medium.com/ollama-connecterror-errno-99-cannot-assign-requested-address-f0facad8027a',
    tags: ['large-language-models', 'ollama', 'error', 'llm', 'ollama-connecterror'],
    topics: ['LLMs'],
    displayTags: ['Ollama', 'Debugging', 'LLMs'],
    blogMeta: 'Medium · Debugging',
  },
  {
    title: 'No Coding Required: Create a Powerful Chatbot on Google Cloud\'s Vertex AI',
    excerpt:
      'How to build and deploy a powerful AI chatbot on Google Cloud\'s Vertex AI without writing a single line of code — a complete walkthrough.',
    readTime: '5 min read',
    date: 'Oct 25, 2024',
    url: 'https://infinityai.medium.com/no-coding-required-create-a-powerful-chatbot-on-google-clouds-vertex-ai-a82a2e503094',
    tags: ['google-cloud-platform', 'generative-ai-tools', 'no-code', 'chatbots', 'chatgpt'],
    topics: ['Cloud', 'LLMs'],
    displayTags: ['Google Cloud', 'Vertex AI', 'Chatbot'],
    blogMeta: 'Medium · Cloud AI',
  },
];
