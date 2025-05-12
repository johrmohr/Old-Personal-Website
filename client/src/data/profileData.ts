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
      title: "The Influence of Fiber Alignment on Cell Migration Patterns and Morphology",
      description: "Developing next-generation transformer architectures for improved language understanding with reduced computational requirements.",
      status: "",
      period: "Summer 2024",
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
      title: "Malta—Position Paper for the General Assembly Plenary: Implementation of the Convention against Corruption; Science, Technology, and Innovation for Sustainable Development",
      authors: "Jordan Moreno, Greg Burchett",
      tags: ["Sustainable Development", "Public Policy", "Anti-Corruption"],
      journal: "National Model United Nations - Germany",
      year: "2023",
      type: "Journal Articles"
    },
    {
      title: "Haiti—Position Paper for the United Nations Educational, Scientific, and Cultural Organization: Artificial Intelligence and the Rule of Law; Strengthening Partnerships on Science, Technology, and Innovation for Sustainable Development",
      authors: "Jordan Moreno, ",
      tags: ["AI Ethics", "AI Public Policy", "Sustainable Development"],
      journal: "National Model United Nations - New York",
      year: "2022",
      type: "Book Chapters"
    }
  ],
  
  cv: {
    positions: [
      {
        title: "Software Engineer",
        institution: "Cute Nyanko",
        period: "2025",
        description: "Co-founded an e-commerce business generating $5K+ in revenue by identifying niche market needs."
      },
      {
        title: "Undergraduate Research Assistant",
        institution: "UC Riverside Interdisciplinary Center for Quantitative Modeling in Biology",
        period: "Summer 2024",
        description: "Investigated using computational modeling of cell migration aiming to understand the interactions between cells and substrates under different conditions."
      },
      {
        title: "Software Engineering Intern",
        institution: "San Bernardino Department of Public Health",
        period: "Fall 2023",
        description: "Developed and deployed automation scripts for data processing workflows, maintained IT system documentation and user guides for 100+ staff members, and streamlined data tracking processes by implementing automated reporting tools."
      },
      {
        title: "Computer Science and Calculus Academic Tutor",
        institution: "Riverside City College",
        period: "2022 - 2024",
        description: "Successfully aided 100+ students to pass their classes in several Calculus, Math, and Computer Science courses as a student tutor."
      }
    ],
    awards: [
      {
        title: "Berkeley Douglass Powell Endowed Engineering Scholar",
        description: "",
        year: "2024"
      },
      {
        title: "Eagle Scholarship Award",
        description: "Eagle Community Credit Union",
        year: "2024"
      },
      {
        title: "NSF S-STEM Scholar Award",
        description: "",
        year: "2022-2024"
      },
      {
        title: "Outstanding Delegate Peer Award",
        description: "National Model United Nations - New York",
        year: "2022"
      },
      {
        title: "Position Paper Award",
        description: "National Model United Nations - Germany",
        year: "2023"
      }
    ],
    service: [
      {
        role: "Assistant Director",
        organization: "National Model United Nations",
        period: "2025-Present"
      },
      {
        role: "Director of Alumni Relations",
        organization: "Lambda Phi Nu",
        period: "2025-Present"
      }
    ]
  },
  
  contact: {
    officeLocation: "",
    email: "3moreno.jordan@gmail.com",
    phoneNumber: "(951) 454-8767",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jordan-moreno-", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/johrmohr", icon: "github" },
      { name: "Resume", url: "/Jordan Moreno — RESUME.pdf", icon: "fileText" },
      { name: "Email", url: "mailto:3moreno.jordan@gmail.com", icon: "mail" }
    ]
  }
};
