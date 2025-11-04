import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import heroBackground from "@assets/generated_images/Hero_section_abstract_background_0adc9994.png";

export default function HeroSection() {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">Hi, I'm</p>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Lavish
                <br />
                Rahangdale
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                AI & Web Developer
              </p>
            </div>

            <p className="text-lg text-foreground max-w-2xl leading-relaxed">
              B.Tech student specializing in Artificial Intelligence and Machine Learning,
              with hands-on experience in building innovative web applications, blockchain
              solutions, and AI-powered systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToExperience}
                className="text-base"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base backdrop-blur-sm"
                data-testid="button-github"
              >
                <a
                  href="https://github.com/lavish-rahangdale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base backdrop-blur-sm"
                data-testid="button-email"
              >
                <a href="mailto:lavishr213@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-xl border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm text-muted-foreground">Currently Available</p>
                  </div>
                  <h3 className="text-xl font-bold">Web Developer Engineer</h3>
                  <p className="text-muted-foreground">
                    @ Ativeer Solutions
                  </p>
                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-medium">Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI/ML", "Web3", "Full Stack", "IoT"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToExperience}
            className="flex flex-col items-center gap-2 text-muted-foreground hover-elevate active-elevate-2 p-3 rounded-lg"
            data-testid="button-scroll-indicator"
          >
            <ArrowDown className="w-6 h-6" />
            <span className="text-sm">Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}
