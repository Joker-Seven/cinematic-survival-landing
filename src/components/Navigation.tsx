import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-display tracking-wider text-primary">
          SURVIVE
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#about" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#features" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-primary">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
