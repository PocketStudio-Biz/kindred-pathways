import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <div className={cn("bg-card rounded-lg p-6 shadow-lg transition-transform hover:scale-[1.02]", className)}>
      <h3 className="text-xl font-semibold mb-4 text-secondary">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default Card;