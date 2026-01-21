import { Code2, Target, Users, Zap, Heart, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to making programming education accessible to everyone, everywhere."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our vibrant community of developers helps each other grow and succeed together."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly updating our content and resources."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're developers ourselves, passionate about sharing our love for coding with the world."
    }
  ];

  const team = [
    { name: "Alex Chen", role: "Founder & CEO", emoji: "👨‍💻" },
    { name: "Sarah Johnson", role: "CTO", emoji: "👩‍💻" },
    { name: "Marcus Williams", role: "Head of Content", emoji: "📚" },
    { name: "Emily Rodriguez", role: "Community Lead", emoji: "🤝" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">CodeVerse</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We're on a mission to democratize programming education and help developers 
              worldwide master the languages that power modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CodeVerse was founded in 2020 with a simple idea: make learning programming 
                  languages as intuitive and engaging as possible. We noticed that many aspiring 
                  developers struggled to find comprehensive, up-to-date resources about modern 
                  programming languages.
                </p>
                <p>
                  Today, we've grown into a community of over 50 million developers worldwide, 
                  all learning, sharing, and building together. Our platform covers 10+ major 
                  programming languages and their real-world applications.
                </p>
                <p>
                  We believe that everyone should have the opportunity to learn to code, 
                  regardless of their background or circumstances. That's why we're committed 
                  to providing free, high-quality educational content.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <Code2 className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">Founded in 2020</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">50M+</div>
                  <p className="text-sm text-muted-foreground">Developers</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                  <p className="text-sm text-muted-foreground">Languages</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">150+</div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">1M+</div>
                  <p className="text-sm text-muted-foreground">Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at CodeVerse.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card-hover p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind CodeVerse.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-card-hover p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
