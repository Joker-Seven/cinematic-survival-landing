import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display tracking-wider mb-6 text-glow">
          SURVIVE THE
          <br />
          DARKNESS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto font-light">
          Every decision matters. Every moment counts. Face the unknown in a world where survival is the only option.
        </p>
        <Button variant="hero" size="xl" className="animate-glow-pulse">
          Enter the Experience
        </Button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
