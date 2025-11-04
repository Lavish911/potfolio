import ProjectCard from "../ProjectCard";
import projectImage from "@assets/generated_images/AI_chatbot_project_showcase_44acb415.png";

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="AI Chatbot"
        description="Designed an AI chatbot for semantic search over 75+ scanned documents using OCR, NLP, and LangChain."
        image={projectImage}
        technologies={["Python", "LangChain", "NLP", "Streamlit"]}
        sourceUrl="https://github.com/lavish-rahangdale"
      />
    </div>
  );
}
