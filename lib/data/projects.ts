export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nexusai",
    name: "NexusAI",
    category: "Document Intelligence / Generative AI",
    description:
      "A document-grounded AI knowledge assistant. Users upload documents and ask questions about the content inside them — retrieval and language-model reasoning work together so answers stay grounded in the source material.",
    technologies: ["RAG", "LLM", "LangChain", "FAISS", "Python", "Embeddings", "Vector Search"],
    featured: true,
  },
  {
    slug: "agriguard-ai",
    name: "AgriGuard AI",
    category: "Agriculture AI / Computer Vision",
    description:
      "An AI workflow for early detection and management of crop diseases and pest infestations — combining crop image analysis, disease confidence and severity assessment, weather context, and farm-level monitoring into early warnings and recommendations. Built in the context of Smart India Hackathon work.",
    technologies: ["Computer Vision", "Deep Learning", "Python", "Risk Forecasting"],
    featured: true,
  },
  {
    slug: "producttrust-ai",
    name: "ProductTrust AI",
    category: "AI / Product Analysis",
    description: "An AI-focused product analysis project designed around turning product-related information into a structured intelligent workflow. The project reflects my interest in applying AI to practical product research and decision-support experiences.",
    technologies: ["Python", "Machine Learning"],
  },
  {
    slug: "smart-krishi",
    name: "Smart Krishi",
    category: "Agriculture / AI",
    description: "An agriculture-focused intelligent system exploring how AI can support farming workflows. The project connects the broader idea of agricultural data and intelligent assistance with practical farm-oriented use cases.",
    technologies: ["Python", "AI"],
  },
  {
    slug: "ai-insurance-assistant",
    name: "AI Insurance Assistant",
    category: "AI / Insurance",
    description: "An AI assistant focused on insurance-related information and user interaction. The project explores how conversational AI can make insurance information easier to work with while keeping the experience centered on user questions and responses.",
    technologies: ["Python", "LLM", "AI Assistants"],
  },
  {
    slug: "resume-analyzer-bot",
    name: "Resume Analyzer Bot",
    category: "NLP / Career AI",
    description: "An NLP-oriented AI project for analyzing resume information and supporting career workflows. The concept focuses on extracting useful information from resumes and presenting it in a form that can support review and career-oriented decisions.",
    technologies: ["NLP", "Python"],
  },
  {
    slug: "pdf-summarizer",
    name: "PDF Summarizer",
    category: "NLP / Document AI",
    description: "A Streamlit-based document AI application that takes PDF content and produces a concise summary. It demonstrates a practical workflow for turning long-form documents into easier-to-consume information using Python and NLP.",
    technologies: ["Python", "Streamlit", "NLP"],
  },
  {
    slug: "cattle-breed-recognition",
    name: "Cattle Breed Recognition",
    category: "Computer Vision",
    description: "A computer vision application focused on recognizing cattle breeds from visual input. The project explores image-based classification with deep learning and exposes the model through an application/API-oriented workflow using FastAPI.",
    technologies: ["Computer Vision", "Deep Learning", "FastAPI"],
  },
  {
    slug: "splitify",
    name: "Splitify",
    category: "Full-Stack Web Application",
    description: "A full-stack expense sharing application inspired by Splitwise. Splitify is built with Next.js and React, uses Prisma for data access, SQLite during development, and PostgreSQL for production-oriented database usage. The project demonstrates application architecture beyond AI-specific work.",
    technologies: ["Next.js", "React", "Prisma", "SQLite", "PostgreSQL"],
  },
  {
    slug: "java-atm-banking-system",
    name: "Java ATM Banking System",
    category: "Java / Software Development",
    description: "A Java-based ATM and banking system project covering core banking interactions and object-oriented programming concepts. It represents my foundation in Java, software design and data-structure-oriented problem solving.",
    technologies: ["Java", "OOP", "DSA"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
