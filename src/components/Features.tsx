import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.",
    icon: "💻",
  },
  {
    title: "Cloud Architecture",
    description: "Design and implement robust cloud infrastructure that ensures reliability, scalability, and optimal performance.",
    icon: "☁️",
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage artificial intelligence to automate processes, gain insights, and create competitive advantages.",
    icon: "🤖",
  },
  {
    title: "Digital Transformation",
    description: "Guide your organization through comprehensive digital transformation with strategic planning and execution.",
    icon: "🚀",
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with modern DevOps practices and intelligent automation.",
    icon: "⚙️",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with enterprise-grade security measures and proactive threat management.",
    icon: "🔒",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to elevate your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:glow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
