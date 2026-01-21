import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { applications } from "@/data/applications";

const ApplicationsSection = () => {
  const featuredApps = applications.slice(0, 4);

  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Real-World <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover how programming languages power every aspect of modern technology.
            </p>
          </div>
          <Link to="/applications">
            <Button variant="outline" className="font-semibold shrink-0">
              Explore All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredApps.map((app, index) => (
            <div
              key={app.id}
              className="glass-card-hover p-8 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                  style={{ backgroundColor: `hsl(${app.color} / 0.15)` }}
                >
                  {app.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{app.title}</h3>
                    <span 
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ 
                        backgroundColor: `hsl(${app.color} / 0.15)`,
                        color: `hsl(${app.color})`
                      }}
                    >
                      {app.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
