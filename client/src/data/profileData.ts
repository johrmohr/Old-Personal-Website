import { Linkedin, Twitter, Github, FileText, Mail } from "lucide-react";

export const professorData = {
  name: "Jordan Moreno",
  title: "Undergraduate Student — UC Irvine",
  shortBio: "I’m currently majoring in Software Engineering and interested in physics and AI. I enjoy coding, building apps, and thinking about the universe.",
  
  about: {
    bio: [
      "I am an Undergraduate student at the Donald Bren School of Information and Computer Science in UC Irvine, where I am majoring in Software Engineering. I am interested in artificial intelligence and its intersection with theoretical physics."
    ],
    researchInterests: [
      "Natural Language Processing & Understanding",
      "Machine Learning & Neural Networks",
      "Quantum Gravity",
      "The Hard Problem of Consciousness",
      "Quantum Computing",
      "Ethics in AI and Algorithm Bias"
    ],
    education: [
      {
        degree: "A.S. in Computer Science",
        institution: "Riverside City College",
        years: "2020 - 2024"
      },
      {
        degree: "A.S. in Physics",
        institution: "Riverside City College",
        years: "2020 - 2024"
      },
      {
        degree: "A.S. in Mathematics",
        institution: "Riverside City College",
        years: "2020 - 2024"
      },
      {
        degree: "A.S. in Social and Behavioral Studies",
        institution: "Riverside City College",
        years: "2020 - 2024"
      },
      {
        degree: "B.S. in Software Engineering",
        institution: "University of California, Irvine",
        years: "2024 - 2026"
      }
    ]
  },
  
  research: [
    {
      title: "Advanced Neural Language Models",
      description: "Developing next-generation transformer architectures for improved language understanding with reduced computational requirements.",
      status: "Active",
      period: "2021 - Present",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ethical AI Frameworks",
      description: "Creating comprehensive guidelines and tools for developing AI systems that are fair, transparent, and accountable.",
      status: "Collaboration",
      period: "2020 - Present",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Multimodal Learning Systems",
      description: "Investigating how AI can effectively learn from and integrate multiple types of data, including text, images, and audio.",
      status: "Active",
      period: "2022 - Present",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ],
  
  publications: [
    {
      title: "Transformer-based architectures for context-aware sentiment analysis in multi-turn conversations",
      authors: "Smith, J., Chen, L., Williams, R., & Johnson, M.",
      tags: ["Natural Language Processing", "Sentiment Analysis", "Transformers"],
      journal: "Journal of Computational Linguistics, 48(2), 357-389",
      year: "2023",
      type: "Journal Articles"
    },
    {
      title: "A comparative study of ethical frameworks for AI development: challenges and recommendations",
      authors: "Smith, J., Garcia, A., & Peterson, T.",
      tags: ["AI Ethics", "Governance"],
      journal: "Proceedings of the International Conference on AI Ethics (ICAIE)",
      year: "2022",
      type: "Conference Papers"
    },
    {
      title: "Multimodal fusion techniques for improved visual question answering in medical imaging",
      authors: "Wu, H., Smith, J., Anderson, K., & Martin, F.",
      tags: ["Computer Vision", "Medical AI", "Multimodal Learning"],
      journal: "IEEE Transactions on Medical Imaging, 41(3), 823-841",
      year: "2021",
      type: "Journal Articles"
    },
    {
      title: "Advances in Explainable AI for High-Stakes Decision Making",
      authors: "Smith, J., & Wilson, R.",
      tags: ["Explainable AI", "Decision Systems", "Ethics"],
      journal: "Handbook of Artificial Intelligence in Healthcare",
      year: "2022",
      type: "Book Chapters"
    }
  ],
  
  cv: {
    positions: [
      {
        title: "Associate Professor",
        institution: "Stanford University, Department of Computer Science",
        period: "2018 - Present",
        description: "Leading research in artificial intelligence and natural language processing. Teaching graduate courses in machine learning and computational linguistics."
      },
      {
        title: "Assistant Professor",
        institution: "Stanford University, Department of Computer Science",
        period: "2013 - 2018",
        description: "Established the Machine Intelligence Research Lab. Secured $2.5M in research grants. Advised 8 PhD students."
      },
      {
        title: "Postdoctoral Researcher",
        institution: "Carnegie Mellon University, Language Technologies Institute",
        period: "2012 - 2013",
        description: "Conducted research on statistical methods for machine translation and cross-lingual information retrieval."
      }
    ],
    awards: [
      {
        title: "ACM Distinguished Paper Award",
        description: "International Conference on Computational Linguistics",
        year: "2021"
      },
      {
        title: "Google Faculty Research Award",
        description: "Machine Learning",
        year: "2019"
      },
      {
        title: "NSF CAREER Award",
        description: "\"Advancing Neural Approaches to Natural Language Understanding\"",
        year: "2016"
      },
      {
        title: "MIT Technology Review's 35 Innovators Under 35",
        description: "Technology Innovation",
        year: "2015"
      }
    ],
    service: [
      {
        role: "Program Committee Chair",
        organization: "International Conference on Machine Learning (ICML)",
        period: "2022"
      },
      {
        role: "Associate Editor",
        organization: "Journal of Artificial Intelligence Research",
        period: "2019-Present"
      },
      {
        role: "Board Member",
        organization: "Association for Computational Linguistics",
        period: "2020-Present"
      }
    ]
  },
  
  contact: {
    officeLocation: "Gates Computer Science Building\nStanford University\nStanford, CA 94305",
    email: "jsmith@stanford.edu",
    officeHours: "Tuesday & Thursday\n2:00 PM - 4:00 PM (PST)\nOr by appointment",
    socialLinks: [
      { name: "LinkedIn", url: "#", icon: "linkedin" },
      { name: "GitHub", url: "#", icon: "github" },
      { name: "ResearchGate", url: "#", icon: "fileText" },
      { name: "Email", url: "#", icon: "mail" }
    ]
  }
};
