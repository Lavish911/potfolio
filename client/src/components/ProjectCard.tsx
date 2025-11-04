import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  sourceUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`overflow-hidden hover-elevate transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {sourceUrl && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid={`button-view-project-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Source
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
