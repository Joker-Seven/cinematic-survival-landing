import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 backdrop-blur-sm bg-background/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Joker Seven
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#solutions" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#services" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
