const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display tracking-wider text-primary">
            SURVIVE
          </div>
          <div className="flex gap-8 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-foreground/40">
          © 2025 Survive the Darkness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
