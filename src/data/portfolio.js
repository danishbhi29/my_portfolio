export const profile = {
  name: 'Danish Farman',
  role: 'Junior AI / Machine Learning Engineer',
  location: 'Islamabad, Pakistan',
  email: 'danishfarman1910@gmail.com',
  phone: '+92 370 5161245',
  github: 'https://github.com/danishbhi29',
  linkedin: 'https://www.linkedin.com/in/danish-farman-1ba091324/',
  intro: 'I build practical AI systems, from classical NLP models to retrieval-augmented applications and tool-using agents. I enjoy connecting model work with clean APIs and useful product experiences.',
  availability: 'Open to junior AI / ML engineering roles',
  education: 'BS Software Engineering · International Islamic University Islamabad · 2022–2026',
  languages: ['Urdu', 'English'],
};

export const skills = [
  { group: 'AI & ML', items: ['PyTorch', 'scikit-learn', 'TensorFlow / Keras', 'NLP', 'Model evaluation'] },
  { group: 'LLM systems', items: ['RAG', 'LangChain', 'LangGraph', 'AI agents', 'Embeddings', 'ChromaDB'] },
  { group: 'Engineering', items: ['Python', 'FastAPI', 'REST APIs', 'Pandas', 'NumPy', 'SQL'] },
  { group: 'Platforms', items: ['Supabase', 'PostgreSQL', 'MongoDB', 'Git', 'n8n', 'React'] },
];

export const experience = [
  { role: 'AI/ML Engineer Intern', company: 'Parallax Labs', mode: 'Remote', text: 'Built machine-learning and deep-learning models for computer vision and predictive analytics, then exposed model functionality through FastAPI REST APIs.' },
  { role: 'AI/ML Intern', company: 'Sigma Evolution Pvt. Ltd.', mode: 'Remote', text: 'Developed AI/ML modules and integrated trained models into full-stack applications and backend systems.' },
  { role: 'AI Automation Intern', company: 'Devrolin', mode: '', text: 'Created n8n workflows that connect APIs and AI services to automate data processing, notifications, and repetitive tasks.' },
];

export const education = {
  degree: 'BS Software Engineering',
  school: 'International Islamic University Islamabad',
  period: '2022 — 2026',
  coursework: ['Artificial Intelligence', 'Data Structures', 'Algorithms', 'Databases', 'Software Engineering', 'Web Technologies'],
  certifications: ['Machine Learning with Python · Coursera', 'Advanced Machine Learning · NAVTTC'],
};

export const projects = [
  {
    number: '01', title: 'Parallax RAG Knowledge Extractor', category: 'RETRIEVAL · NLP · API', color: 'mint',
    description: 'An API-driven pipeline for research-paper discovery: clean and chunk documents, enrich metadata, embed content, retrieve relevant passages, and generate grounded answers.',
    details: 'README documents a 4,998-paper corpus, ChromaDB retrieval, NLP metadata, and a FastAPI query service.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Hugging Face', 'Groq'],
    href: 'https://github.com/danishbhi29/parallax-rag-knowledge-extractor',
    featured: true, metric: 'RAG · Research papers', symbol: '⌘',
  },
  {
    number: '02', title: 'PDF Chatbot', category: 'RAG · FULL STACK', color: 'violet',
    description: 'A full-stack document assistant that lets users upload PDFs and ask questions grounded in their contents.',
    details: 'React interface with a FastAPI and LangChain backend, PDF processing, and Gemini-powered answers.',
    stack: ['React', 'FastAPI', 'LangChain', 'Gemini', 'PyPDF'],
    href: 'https://github.com/danishbhi29/PDFChatbot',
    featured: true, metric: 'Ask your documents', symbol: '▤',
  },
  {
    number: '03', title: 'SMS Spam Classifier', category: 'CLASSIFICATION · NLP', color: 'orange',
    description: 'An end-to-end SMS spam detector with text preprocessing, TF-IDF features, balanced Logistic Regression, and an interactive app.',
    details: 'Repository README reports held-out evaluation: 97.10% accuracy and 90.84% spam recall.',
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Streamlit', 'Joblib'],
    href: 'https://github.com/danishbhi29/sms-spam-classifier',
    featured: true, metric: '97.10% accuracy*', symbol: '✳',
  },
  {
    number: '04', title: 'IMDb Sentiment Lab', category: 'NLP · MODEL COMPARISON', color: 'blue',
    description: 'A comparative sentiment-analysis study exploring traditional machine learning, ANN, LSTM, and Transformer approaches.',
    details: 'Includes TF-IDF baselines and experiments on validation behavior and overfitting in deep-learning models.',
    stack: ['Python', 'scikit-learn', 'TensorFlow', 'NLP', 'Jupyter'],
    href: 'https://github.com/danishbhi29/imdb_sentiment-analysis',
    featured: true, metric: 'ML → LSTM → Transformer', symbol: '◉',
  },
  {
    number: '05', title: 'Personal AI Agent', category: 'AGENTS · TOOL USE', color: 'lime',
    description: 'A Gemini-powered command-line assistant with tool calling, MCP integration, local system tools, weather, and a restricted workspace terminal.',
    details: 'Built with Python, LangChain, and MCP adapters, with credentials managed through environment variables.',
    stack: ['Python', 'Gemini', 'LangChain', 'MCP'],
    href: 'https://github.com/danishbhi29/personal-ai-agent',
    featured: true, metric: 'Tool-using assistant', symbol: '✳',
  },
  {
    number: '06', title: 'MindSense', category: 'MULTIMODAL · DEEP LEARNING', color: 'pink',
    description: 'A university project for emotional-wellness screening that combines language, audio, and facial signals for PHQ-8 score prediction.',
    details: 'The resume describes a PyTorch gated-fusion model with RoBERTa, OpenFace, OpenSMILE, FastAPI, and Supabase. First-position project.',
    stack: ['PyTorch', 'RoBERTa', 'OpenFace', 'OpenSMILE', 'FastAPI'],
    href: 'https://github.com/danishbhi29',
    featured: true, metric: 'Multimodal fusion', symbol: '◌',
  },
  {
    number: '07', title: 'Next Word Generator', category: 'SEQUENCE MODELING', color: 'blue',
    description: 'An LSTM-based next-word prediction and text-generation project with corpus tokenization, n-gram sequences, and interactive inference.',
    details: 'Repository includes separate training and prediction scripts using TensorFlow and Keras.',
    stack: ['Python', 'TensorFlow', 'Keras', 'LSTM'],
    href: 'https://github.com/danishbhi29/NextWordGenrator-LSTM',
    featured: false, metric: 'LSTM · Text generation', symbol: '⌁',
  },
  {
    number: '08', title: 'Depression Detection Using Text', category: 'NLP · CLASSIFICATION', color: 'violet',
    description: 'A text-classification project exploring preprocessing, data analysis, feature extraction, and model evaluation for depression-related language.',
    details: 'Presented as an educational classification project; not a clinical diagnostic tool.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'NLP'],
    href: 'https://github.com/danishbhi29/Depression-Dectection-Using-Text',
    featured: false, metric: 'Text classification', symbol: '◍',
  },
  {
    number: '09', title: 'OfflineGPT', category: 'LLM APPLICATION', color: 'mint',
    description: 'A local Ollama chat app with streaming conversations, plus a Gmail-connected agent that organizes job-related messages with Gemini.',
    details: 'The backend streams chat responses from a local Ollama server and uses Gmail read-only access with LangGraph and Gemini to classify job emails.',
    stack: ['Python', 'JavaScript', 'LLMs'],
    href: 'https://github.com/danishbhi29/OfflineGPT',
    featured: false, metric: 'Local Ollama + Gmail agent', symbol: '◈',
  },
];

export const principles = [
  { n: '01', title: 'Useful over flashy', text: 'Start with a real task, then choose the simplest model that can solve it well.' },
  { n: '02', title: 'Grounded by design', text: 'Build retrieval and evaluation into the system so answers can be traced to context.' },
  { n: '03', title: 'Ready to integrate', text: 'Make models useful through clear APIs, maintainable code, and thoughtful interfaces.' },
];

