const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 md:px-12 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Joker Seven
              </span>
            </div>
            <p className="text-foreground/70 mb-6">
              Transforming businesses through cutting-edge technology and innovative solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-primary">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-primary">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-primary">GH</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI & ML</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/40">
            © 2025 Joker Seven. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
