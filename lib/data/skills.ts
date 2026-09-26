export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "C++", "Java", "C"],
  },
  {
    label: "Machine Learning",
    items: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Development",
      "Model Evaluation",
      "Data Preprocessing",
    ],
  },
  {
    label: "Deep Learning",
    items: ["Deep Learning", "TensorFlow", "Keras", "PyTorch", "Neural Networks"],
  },
  {
    label: "AI & Generative AI",
    items: [
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models",
      "Transformers",
      "RAG",
      "AI Assistants",
    ],
  },
  {
    label: "NLP",
    items: ["NLP", "Transformers", "Text Processing", "Document Intelligence"],
  },
  {
    label: "Computer Vision",
    items: [
      "Computer Vision",
      "Image Classification",
      "Image-Based AI Systems",
      "Deep Learning for Vision",
    ],
  },
  {
    label: "Generative AI / LLM Tooling",
    items: ["LangChain", "FAISS", "Document-Grounded AI"],
  },
  {
    label: "Data",
    items: ["Pandas", "NumPy"],
  },
  {
    label: "Backend / APIs",
    items: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    label: "Applications",
    items: ["Streamlit", "AI-Powered Applications", "Intelligent Dashboards"],
  },
  {
    label: "Development",
    items: ["Git", "GitHub"],
  },
];

/** Short technical blurbs shown on hover for a subset of core tools. */
export const skillNotes: Record<string, string> = {
  RAG: "Documents → Embeddings → Vector Search → LLM",
  LangChain: "Orchestrates retrieval + LLM reasoning chains",
  FAISS: "Vector similarity search over embeddings",
  PyTorch: "Model definition, training, inference",
  TensorFlow: "Model training and deployment",
  FastAPI: "Async REST APIs for serving ML models",
  "Computer Vision": "Image classification & detection pipelines",
  NLP: "Text processing and language understanding",
};
