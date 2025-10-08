import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Centered Navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-background/30 border border-border/30">
            <a href="#home" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
              Home
            </a>
            <a href="#work" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
              Work
            </a>
            <a href="#skills" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
              Skills
            </a>
            <a href="#about" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
              About
            </a>
            <a href="#contact" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
              Contact
            </a>
          </div>
        </div>
        
        {/* Right CTA */}
        <div className="absolute right-6">
          <Button variant="outline" size="sm" className="rounded-full border-border/50 hover:border-primary hover:bg-foreground/5">
            View Work
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
