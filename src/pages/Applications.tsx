import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { applications } from "@/data/applications";
import { Link } from "react-router-dom";

const Applications = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.1),transparent_50%)]" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real-World <span className="gradient-text">Applications</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover how programming languages are used across different industries and domains 
              to build the technology that powers our world.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={app.id}
                className="glass-card-hover p-8 lg:p-10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
                  style={{ backgroundColor: `hsl(${app.color} / 0.15)` }}
                >
                  {app.icon}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold">{app.title}</h2>
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ 
                      backgroundColor: `hsl(${app.color} / 0.15)`,
                      color: `hsl(${app.color})`
                    }}
                  >
                    {app.stats}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {app.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">POPULAR LANGUAGES</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/languages" 
                  className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Industry <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Programming languages continue to shape industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$100B+", label: "Software Industry Value" },
              { value: "27M+", label: "Professional Developers" },
              { value: "700+", label: "Programming Languages" },
              { value: "94%", label: "Websites Use JavaScript" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Applications;
