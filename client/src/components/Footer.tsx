import { Github, Mail, Linkedin, Heart } from "lucide-react";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lavish-rahangdale",
    },
    {
      icon: SiGmail,
      label: "Email",
      href: "mailto:lavishr213@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/lavish-rahangdale",
    },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Lavish Rahangdale</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI & Web Developer passionate about creating innovative solutions through
              technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-elevate active-elevate-2 p-2 rounded-md"
                    aria-label={link.label}
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover-elevate active-elevate-2 text-left px-3 py-2 rounded-md w-fit"
                  data-testid={`link-footer-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <a
                  href="mailto:lavishr213@gmail.com"
                  className="hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md"
                >
                  lavishr213@gmail.com
                </a>
              </p>
              <p>Nagpur, Maharashtra, India</p>
              <p className="text-xs pt-2">
                Open to freelance opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Lavish Rahangdale. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary inline" /> using
              React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
