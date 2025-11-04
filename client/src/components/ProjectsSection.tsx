import ProjectCard from "./ProjectCard";
import aiChatbotImg from "@assets/generated_images/AI_chatbot_project_showcase_44acb415.png";
import blockchainImg from "@assets/generated_images/Blockchain_voting_project_interface_113c40fb.png";
import smartHelmetImg from "@assets/generated_images/Smart_helmet_IoT_system_7c30beda.png";
import portfolioImg from "@assets/generated_images/Portfolio_website_project_preview_dd9a54c2.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Chatbot for Semantic Search",
      description:
        "Designed an AI chatbot for semantic search over 75+ scanned documents using OCR, NLP, and LangChain. Implemented theme tagging and citation tracing features with a clean, interactive interface using Streamlit for real-time user queries.",
      image: aiChatbotImg,
      technologies: ["Python", "LangChain", "OCR", "NLP", "Streamlit"],
      sourceUrl: "https://github.com/lavish-rahangdale",
      featured: true,
    },
    {
      title: "Blockchain E-Voting System",
      description:
        "Designed secure decentralized vote casting application using Solidity smart contracts, Node.js, and MongoDB. Enables secure, tamper-proof online elections using Ethereum blockchain.",
      image: blockchainImg,
      technologies: ["Solidity", "Web3.js", "Node.js", "MongoDB", "Ethereum"],
      sourceUrl: "https://github.com/lavish-rahangdale",
    },
    {
      title: "IoT-Based Smart Helmet System",
      description:
        "Built a real-time accident detection and alert system using ESP32, sensors (alcohol, temperature), and Node.js. Integrated MQTT/HTTP protocols for cloud communication. Published in ACT-2025 conference.",
      image: smartHelmetImg,
      technologies: ["ESP32", "IoT", "Node.js", "MQTT", "Arduino"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built a professional portfolio site to showcase skills, projects, and resume using modern web technologies with Firebase and MySQL for backend features.",
      image: portfolioImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase", "MySQL"],
      sourceUrl: "https://github.com/lavish-rahangdale",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of innovative projects spanning AI, blockchain, IoT, and web
            development, showcasing practical applications of cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
