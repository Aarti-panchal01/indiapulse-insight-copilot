import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "accent" | "dark";
}

const SlideSection = ({ id, children, className, background = "default" }: SlideSectionProps) => {
  const bgClass = {
    default: "bg-background",
    accent: "gradient-accent",
    dark: "bg-secondary"
  }[background];

  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center py-20 px-4 md:px-8",
        bgClass,
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SlideSection;
