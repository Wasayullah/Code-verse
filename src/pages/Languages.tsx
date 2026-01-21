import { useState } from "react";
import { Search, TrendingUp, Calendar, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { languages } from "@/data/languages";

const Languages = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.useCases.some((use) => use.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Programming <span className="gradient-text">Languages</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore detailed information about the world's most popular programming languages, 
              their features, and applications.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search languages or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-background/50 border-border text-lg"
            />
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8">
            {filteredLanguages.map((lang, index) => (
              <div
                key={lang.id}
                id={lang.id}
                className="glass-card p-8 lg:p-10 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Icon & Basic Info */}
                  <div className="lg:w-64 shrink-0">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-4"
                      style={{ backgroundColor: `hsl(${lang.color} / 0.15)` }}
                    >
                      {lang.icon}
                    </div>
                    <h2 
                      className="text-3xl font-bold mb-2"
                      style={{ color: `hsl(${lang.color})` }}
                    >
                      {lang.name}
                    </h2>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Created in {lang.yearCreated}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>By {lang.creator}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ 
                                  width: `${lang.popularity}%`,
                                  backgroundColor: `hsl(${lang.color})`
                                }}
                              />
                            </div>
                            <span className="text-foreground font-medium">{lang.popularity}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description & Details */}
                  <div className="flex-1">
                    <p className="text-muted-foreground text-lg mb-6">
                      {lang.longDescription}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Use Cases */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          {lang.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="px-3 py-1.5 text-sm rounded-lg font-medium"
                              style={{ 
                                backgroundColor: `hsl(${lang.color} / 0.1)`,
                                color: `hsl(${lang.color})`
                              }}
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {lang.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No languages found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Languages;
