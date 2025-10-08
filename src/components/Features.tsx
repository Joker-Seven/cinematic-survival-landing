import { Card } from "@/components/ui/card";

const features = [
  {
    title: "IMMERSIVE WORLD",
    description: "Explore a beautifully crafted post-apocalyptic environment that reacts to every choice you make.",
  },
  {
    title: "DYNAMIC STORYTELLING",
    description: "Experience a narrative that adapts to your decisions, creating a unique journey every time.",
  },
  {
    title: "SURVIVAL MECHANICS",
    description: "Master resource management, crafting, and combat to stay alive in a hostile world.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display text-center mb-16 text-glow">
          THE EXPERIENCE
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-display mb-4 text-primary group-hover:text-glow transition-all">
                {feature.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
