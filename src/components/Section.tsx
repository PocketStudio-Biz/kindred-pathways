import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className={cn("animate-fade-in section-padding", className)}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-primary mb-8">{title}</h2>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default Section;