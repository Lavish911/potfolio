import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Ativeer Solutions",
      role: "Web Developer Engineer",
      period: "July 2025 - Present",
      location: "Kanpur, Uttar Pradesh, India",
      current: true,
      responsibilities: [
        "Building and maintaining the company's e-commerce website for product showcasing and online sales",
        "Working on backend development using Node.js, MongoDB, and API integration",
        "Designing and implementing product listing modules, ensuring smooth data handling and search functionality",
        "Collaborating with team members to improve site performance, UI/UX, and scalability",
      ],
      technologies: ["Node.js", "MongoDB", "API Integration", "E-commerce", "UI/UX Design"],
    },
    {
      company: "Byte Uprise",
      role: "Web Developer Engineer",
      period: "April 2025 - May 2025",
      location: "Nagpur, Maharashtra, India",
      responsibilities: [
        "Built and maintained responsive and interactive web applications using HTML, CSS, JavaScript, and Node.js",
        "Collaborated in a team to enhance UI/UX design and cross-browser compatibility",
        "Implemented version control using Git and contributed to efficient deployment pipelines",
        "Participated in code reviews and optimized front-end performance",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Git", "UI/UX"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional journey building scalable web solutions and e-commerce platforms
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className={index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div
                    className={`inline-block ${
                      index % 2 === 0 ? "md:float-right" : ""
                    }`}
                  >
                    <Card className="p-8 hover-elevate transition-all duration-300 relative">
                      {exp.current && (
                        <div className="absolute -top-3 -right-3">
                          <Badge className="bg-primary text-primary-foreground animate-pulse">
                            Current
                          </Badge>
                        </div>
                      )}

                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div className="space-y-1 flex-1">
                              <h3 className="text-2xl font-bold text-foreground">
                                {exp.role}
                              </h3>
                              <p className="text-lg font-semibold text-primary">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            Key Responsibilities
                          </p>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-foreground leading-relaxed"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            Technologies Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full -ml-2 hidden md:block border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
