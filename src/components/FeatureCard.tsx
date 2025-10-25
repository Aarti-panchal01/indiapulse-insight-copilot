import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth border border-border hover:border-primary/50">
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
