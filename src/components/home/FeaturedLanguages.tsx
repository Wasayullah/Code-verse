import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageCard from "./LanguageCard";
import { languages } from "@/data/languages";

const FeaturedLanguages = () => {
  const featuredLanguages = languages.slice(0, 6);

  return (
    <section className="section-padding relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Popular <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the most in-demand programming languages shaping the future of technology.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLanguages.map((lang, index) => (
            <LanguageCard
              key={lang.id}
              name={lang.name}
              description={lang.description}
              color={lang.color}
              icon={lang.icon}
              useCases={lang.useCases}
              delay={index * 100}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/languages">
            <Button variant="outline" size="lg" className="font-semibold px-8">
              View All Languages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLanguages;
