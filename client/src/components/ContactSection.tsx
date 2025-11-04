import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: SiGmail,
      label: "Email",
      value: "lavishr213@gmail.com",
      href: "mailto:lavishr213@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "lavish-rahangdale",
      href: "https://github.com/lavish-rahangdale",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/lavish-rahangdale",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Methods</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I typically respond
                within 24-48 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={method.label}
                    className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
                    onClick={() => window.open(method.href, "_blank")}
                    data-testid={`card-contact-${method.label.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${method.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold">{method.label}</p>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-2">
                <p className="font-bold text-sm">Response Time</p>
                <p className="text-sm text-muted-foreground">
                  I aim to respond to all inquiries within 24-48 hours during weekdays.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
