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

export const allMediumArticles: MediumArticle[] = [
  {
    title: "[LATEST] How I Passed the Claude Certified Architect Exam on My First Attempt + Complete Resources…",
    excerpt: "[LATEST] How I Passed the Claude Certified Architect Exam on My First Attempt + Complete Resources & Step-by-Step Guide If you’re planning to take the Claude Certified Architect (CCA) exam in 2026,...",
    readTime: "19 min read",
    date: "Jul 5, 2026",
    url: "https://ai.gopubby.com/latest-how-i-passed-the-claude-certified-architect-exam-on-my-first-attempt-complete-resources-8afd320512d3",
    tags: ["claudecertifiedarchitect", "ai-certification", "anthropic-claude", "ccaf", "claude-architect"]
  },
  {
    title: "LoRA & QLoRA Mastery: The Beginner-to-Advanced Guide to Efficient LLM Fine-Tuning",
    excerpt: "Understand the intuition behind LoRA and QLoRA, learn the math without getting lost in equations, and fine-tune LLMs efficiently using Hugging Face, PEFT, and real-world code examples. Hello, If...",
    readTime: "15 min read",
    date: "Jun 30, 2026",
    url: "https://pub.towardsai.net/lora-qlora-mastery-the-beginner-to-advanced-guide-to-efficient-llm-fine-tuning-d554b0db1066",
    tags: ["peft", "qlora", "large-language-models", "lora", "fine-tuning"]
  },
  {
    title: "How Cloudflare’s MCP Server Solved in 10 Minutes What I Couldn’t Debug in 2 Hours",
    excerpt: "A real story about the moment MCP servers stopped being a demo and started being useful The Problem I have my portfolio deployed on Cloudflare Workers — multiple versions built up over time as I...",
    readTime: "3 min read",
    date: "May 5, 2026",
    url: "https://infinityai.medium.com/how-cloudflares-mcp-server-solved-in-10-minutes-what-i-couldn-t-debug-in-2-hours-63c1037b9f2a",
    tags: ["cloudflare-mcp-server", "anthropic-claude", "cloudflare", "claude-code", "mcp-server"]
  },
  {
    title: "Understanding LLM Quantization: Why FP32, FP16, BF16 and INT8 Matter for Modern AI Systems",
    excerpt: "Large Language Models are extremely large and computationally expensive, so techniques like reduced-precision data types (FP16, BF16) and quantization (INT8, INT4) are used to significantly lower...",
    readTime: "12 min read",
    date: "Mar 9, 2026",
    url: "https://pub.towardsai.net/understanding-llm-quantization-why-fp32-fp16-bf16-and-int8-matter-for-modern-ai-systems-076ea6eb9ca6",
    tags: ["llm-quantization", "efficient-llm-inference", "int8-quantization", "fp16-vs-bf16-vs-fp32", "llm"]
  },
  {
    title: "Excalidraw MCP: Turning Agent Markdown into Instant Diagrams",
    excerpt: "Ugly ASCII Workflow diagram One of the most underrated bottlenecks in technical learning and system design is visualization. We understand concepts faster when we see them, yet creating diagrams...",
    readTime: "2 min read",
    date: "Feb 18, 2026",
    url: "https://infinityai.medium.com/excalidraw-mcp-turning-agent-markdown-into-instant-diagrams-64ab8471fd67",
    tags: ["mcp-server", "excalidraw", "software-development", "claude-ai", "claude-code"]
  },
  {
    title: "Claude Code Just Ended Manual Coding for me — My Step-by-Step Guide to 3x Faster Builds in 2026",
    excerpt: "Claude Code Just Ended Manual Coding for me — My Step-by-Step Guide to 3x Faster Builds in 2026 I lost hours switching branches and fixing merge conflicts every week. Features stalled. Context...",
    readTime: "1 min read",
    date: "Feb 9, 2026",
    url: "https://infinityai.medium.com/claude-code-just-ended-manual-coding-for-me-my-step-by-step-guide-to-3x-faster-builds-in-2026-f7f2abe8f611",
    tags: ["productivity-hacks", "anthropic-claude", "claude-code", "clawdbot", "openclaw"]
  },
  {
    title: "Think You Know RAG? Take This 16-Point Checklist and Prove It Wrong",
    excerpt: "The RAG Checklist That Exposes Your 10-Line Pipeline 𝗬𝗼𝘂 𝗱𝗼𝗻’𝘁 𝗸𝗻𝗼𝘄 𝗥𝗔𝗚!! Just because you connected Embeddings → VectorDB → Query → Result, doesn’t mean you “know RAG.” That’s not...",
    readTime: "2 min read",
    date: "Oct 12, 2025",
    url: "https://infinityai.medium.com/think-you-know-rag-take-this-16-point-checklist-and-prove-it-wrong-4fe75c0448bc",
    tags: ["rags", "top-5", "llamaparse", "how-to-parse-pdf", "generative-ai-tools"]
  },
  {
    title: "Fix RAG Hallucinations at the Source: Top PDF Parsers Ranked 2025",
    excerpt: "This is your Data, yes, Garbage. If you’re still relying on PyPDF / PyMuPDF / pdfplumber for parsing, your RAG pipeline is already broken at the data layer . No matter how advanced your workflow is...",
    readTime: "5 min read",
    date: "Sep 5, 2025",
    url: "https://infinityai.medium.com/3-proven-techniques-to-accurately-parse-your-pdfs-2c01c5badb84",
    tags: ["generative-ai", "parsing-techniques", "agentic-ai", "retrieval-augmented-gen", "artificial-intelligence"]
  },
  {
    title: "How to Create Your Personal AI Agent [ Part-2 ]",
    excerpt: "Read till the end to watch the Video of your Personal Agent 😎 If you haven’t read Part 1, I strongly recommend you read that first and then come here: Part-1 Now, let’s understand what we will need...",
    readTime: "4 min read",
    date: "Jan 16, 2025",
    url: "https://infinityai.medium.com/how-to-create-your-personal-ai-agent-part-2-a28729b6f8c7",
    tags: ["how-to", "ai-agent", "llm", "ai", "create"]
  },
  {
    title: "How to Create Your First Personal AI Agent For Beginners [ Part-1 ]",
    excerpt: "Ever wondered if there should be a personal agent that has all your information? No worries, you can build one right here! 😉 First Lets Understand, what is AI agent ? An AI agent is a software...",
    readTime: "3 min read",
    date: "Jan 16, 2025",
    url: "https://infinityai.medium.com/how-to-create-your-personal-ai-agent-part-1-1a6423966911",
    tags: ["how-to-create-ai-agent", "phidata", "agents", "llm", "ai-agent"]
  },
  {
    title: "How To Run llama3, phi3 on your Local PC Using Ollama",
    excerpt: "If you want to use Large Language Models on your Local Environment then, Ollama is For You, My Friend !! Read till the end, there’s a surprise for you !!!! 🤩🥳🥳 If you are Facing the Connection...",
    readTime: "8 min read",
    date: "Nov 4, 2024",
    url: "https://infinityai.medium.com/how-to-run-llama3-phi3-on-your-local-pc-using-ollama-b84213b2960a",
    tags: ["llama-3", "llm", "google-colab", "local-pc", "ollama"]
  },
  {
    title: "Ollama ConnectError: [Errno 99] Cannot assign requested address",
    excerpt: "Ever Faced this Error while Using Ollama ?? ConnectError: [Errno 99] Cannot assign requested address Fed up with this Error ? And Don’t Know what to do ? Then you are at the Right Place. I got you...",
    readTime: "8 min read",
    date: "Oct 29, 2024",
    url: "https://infinityai.medium.com/ollama-connecterror-errno-99-cannot-assign-requested-address-f0facad8027a",
    tags: ["large-language-models", "ollama", "error", "llm", "ollama-connecterror"]
  },
  {
    title: "No Coding Required! — Create a Powerful Chatbot on Google Cloud’s Vertex AI",
    excerpt: "There are Multiple ways to Create a ChatBot without code/Low Code and today we will Look into the Google Cloud Platform.",
    readTime: "5 min read",
    date: "Oct 25, 2024",
    url: "https://infinityai.medium.com/no-coding-required-create-a-powerful-chatbot-on-google-clouds-vertex-ai-a82a2e503094",
    tags: ["chatgpt", "chatbots", "google-cloud-platform", "no-code", "generative-ai-tools"]
  },
  {
    title: "20 Lines of Code To Generate Messages Using OpenAI API",
    excerpt: "The article explains how to use the OpenAI API to generate messages in just 20 lines of code, covering the Completions API for text generation and the Chat Completion API for conversational interactions.",
    readTime: "2 min read",
    date: "Oct 22, 2024",
    url: "https://infinityai.medium.com/20-lines-of-code-to-generate-messages-using-openai-api-36f8ae44142a",
    tags: ["chatgpt", "chatbots", "messaging", "openai", "openai-chatgpt"]
  },
  {
    title: "5 Easy Steps to Start With The OpenAI API",
    excerpt: "Ever wondered how to unleash the potential of the OpenAI API key? Well, look no further. This blog is your roadmap to understanding and setting up your OpenAI API key.",
    readTime: "3 min read",
    date: "Oct 16, 2024",
    url: "https://infinityai.medium.com/5-easy-steps-to-start-with-the-openai-api-bb1f1049eaf8",
    tags: ["chatgpt4", "openai", "openai-chatgpt", "large-language-models", "llm"]
  }
];
