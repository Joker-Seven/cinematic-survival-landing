import heroBackground from "@/assets/minimal-tech-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm text-foreground/60 mb-4 tracking-wide uppercase">
            Technical Lead · AI Engineer · Cloud Architect
          </p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none text-foreground">
            Joker Seven
          </h1>
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
            Cloud & AI Engineering Lead with 12+ years in full-stack architecture, scalable cloud infrastructure, and intelligent systems. Currently focused on generative AI and cloud-native architecture for real-world business systems.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
