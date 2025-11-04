import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MicroCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const MicroCard = ({ title, description, icon: Icon, color }: MicroCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] border-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
