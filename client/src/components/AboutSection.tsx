import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import profileImg from "@assets/image lavish_1762253344402.jpg";

export default function AboutSection() {
  const skills = [
    "C++",
    "Python",
    "C",
    "JavaScript",
    "Node.js",
    "React.js",
    "Socket.io",
    "HTML5",
    "CSS3",
    "SQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Solidity",
    "Web3.js",
    "Smart Contracts",
    "Ethereum",
    "ESP32",
    "Arduino",
    "MQTT/HTTP",
    "WebRTC",
    "LangChain",
    "Machine Learning",
    "Generative AI",
    "Agentic AI",
    "Power BI",
    "IoT",
    "GN Build System",
  ];

  const accomplishments = [
    "Published research paper on Smart Helmet System – ACT-2025 Phase I",
    "1st Place – Tug of War Championship (RTMNU)",
    "A Grade – Skill Training on AI & ML",
  ];

  const certifications = [
    "Agentic AI Certification",
    "Generative AI Certification",
    "Power BI Certification",
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate about leveraging technology to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex justify-center lg:justify-start">
              <Avatar className="w-64 h-64 border-4 border-primary/20">
                <AvatarImage src={profileImg} alt="Lavish Rahangdale" />
                <AvatarFallback className="text-4xl">LR</AvatarFallback>
              </Avatar>
            </div>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold">Education</p>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in AI & ML
                  </p>
                  <p className="text-sm text-muted-foreground">
                    G.H. Raisoni College, Nagpur
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Aug 2022 - May 2026
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold">Current Role</p>
                  <p className="text-sm text-muted-foreground">
                    Web Developer Engineer
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ativeer Solutions
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Background</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-foreground">
                  I'm a driven and detail-oriented B.Tech student in Artificial Intelligence 
                  (graduating in 2026), passionate about building smart, scalable, and real-time 
                  solutions. With hands-on experience in both backend and frontend technologies, 
                  I specialize in crafting full-stack applications, integrating blockchain, IoT, 
                  and AI to solve real-world problems.
                </p>
                <p className="text-foreground">
                  My technical foundation spans across C++, Python, and JavaScript, with practical 
                  exposure to frameworks and tools like Node.js, Socket.io, React.js, Solidity, 
                  Firebase, and MongoDB. I've successfully developed and deployed projects ranging 
                  from blockchain-based voting systems and IoT-enabled smart helmets to responsive 
                  web apps and personal portfolios.
                </p>
                <p className="text-foreground">
                  Currently, I'm expanding my expertise in secure WebSocket communication and C++ 
                  network programming, backed by GN build systems and real-time protocols. I also 
                  hold a recent internship as a Web Developer at Byte Uprise, where I enhanced 
                  UI/UX features and contributed to scalable front-end solutions.
                </p>
                <p className="text-foreground">
                  I bring a strong learning mindset, having published research, participated in 
                  international AI summits, and led projects with real impact. Always open to 
                  collaborations that push the boundary of innovation in AI, IoT, and decentralized tech.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Accomplishments</h3>
              </div>
              <div className="space-y-3">
                {accomplishments.map((item, index) => (
                  <Card key={index} className="p-6">
                    <p className="text-foreground">{item}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="default"
                    className="text-sm px-4 py-2"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Core Strengths</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Problem-solving, collaborative development, and system design are at the heart 
                of what I do. I excel at breaking down complex challenges into elegant solutions, 
                whether it's architecting secure blockchain systems, optimizing real-time 
                communication protocols, or building intuitive user interfaces.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Beyond Code</h3>
              <p className="text-lg text-foreground leading-relaxed">
                When I'm not coding, I'm actively involved in college-level athletics and
                tournaments. I'm also passionate about social volunteering, focusing on
                mentoring and promoting education and career empowerment for underprivileged
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
