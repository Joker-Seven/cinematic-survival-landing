import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/tech-hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        {/* Purple Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-sm font-semibold text-primary">Innovation Meets Excellence</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
          Transforming Ideas Into
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We build cutting-edge software solutions that drive growth, efficiency, and innovation for forward-thinking businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="animate-glow-pulse">
            Start Your Project
          </Button>
          <Button variant="outline" size="xl" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            View Our Work
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
