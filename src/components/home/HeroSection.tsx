import { ArrowRight, Play, Terminal, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-[10%] opacity-20 animate-float hidden lg:block">
        <pre className="font-mono text-sm text-primary">
{`function hello() {
  return "world";
}`}
        </pre>
      </div>
      <div className="absolute bottom-1/4 right-[10%] opacity-20 animate-float-delayed hidden lg:block">
        <pre className="font-mono text-sm text-accent">
{`const future = async () => {
  await learn();
  return success;
}`}
        </pre>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Explore 10+ Modern Languages</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up stagger-1">
            Master the Art of
            <span className="block gradient-text">Modern Programming</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2">
            Discover the power of today's most influential programming languages. 
            From web development to AI, find your path to becoming a skilled developer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Link to="/languages">
              <Button size="lg" className="glow-effect bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-lg">
                Explore Languages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary font-semibold px-8 h-14 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in-up stagger-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-bold">10+</span>
              </div>
              <p className="text-sm text-muted-foreground">Languages Covered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-3xl sm:text-4xl font-bold">50M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Developers Worldwide</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-lang-javascript" />
                <span className="text-3xl sm:text-4xl font-bold">100+</span>
              </div>
              <p className="text-sm text-muted-foreground">Use Cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
