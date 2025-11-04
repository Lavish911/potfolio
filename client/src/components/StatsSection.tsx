import { Card } from "@/components/ui/card";
import { Code2, Rocket, Award, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Code2,
      value: "10+",
      label: "Technologies Mastered",
      description: "From AI/ML to Blockchain",
    },
    {
      icon: Rocket,
      value: "4+",
      label: "Major Projects",
      description: "Deployed & Live",
    },
    {
      icon: Award,
      value: "3+",
      label: "Certifications",
      description: "AI & Data Analytics",
    },
    {
      icon: Users,
      value: "2",
      label: "Professional Roles",
      description: "Web Development",
    },
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
