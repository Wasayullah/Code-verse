import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LanguageCardProps {
  name: string;
  description: string;
  color: string;
  icon: string;
  useCases: string[];
  delay?: number;
}

const LanguageCard = ({ name, description, color, icon, useCases, delay = 0 }: LanguageCardProps) => {
  return (
    <div 
      className="glass-card-hover p-6 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
          style={{ backgroundColor: `hsl(${color} / 0.15)` }}
        >
          {icon}
        </div>
        <Link 
          to={`/languages#${name.toLowerCase()}`}
          className="p-2 rounded-lg bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      
      <h3 
        className="text-xl font-bold mb-2"
        style={{ color: `hsl(${color})` }}
      >
        {name}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {useCases.slice(0, 3).map((useCase) => (
          <span 
            key={useCase}
            className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
          >
            {useCase}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageCard;
