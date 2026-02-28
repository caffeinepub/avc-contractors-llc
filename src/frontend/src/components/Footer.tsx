import { Globe, Hammer, Phone, Shield } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center shadow-cta">
                <Hammer className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg block leading-tight">
                  AVC Contractors LLC
                </span>
                <span className="text-white/50 text-xs uppercase tracking-wider block">
                  Home Improvement Specialists
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              Dedicated to making families happier in their homes. Over 10 years
              of quality craftsmanship you can trust.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm font-body">
              <Shield
                className="w-4 h-4 text-orange flex-shrink-0"
                strokeWidth={2.5}
              />
              <span className="font-semibold">Licensed, Insured & Bonded</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h3>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="block text-white/60 hover:text-orange font-body text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wide text-sm">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:5550000000"
                className="flex items-center gap-3 text-white/60 hover:text-orange transition-colors font-body text-sm group"
              >
                <Phone
                  className="w-4 h-4 text-orange flex-shrink-0"
                  strokeWidth={2.5}
                />
                (555) 000-0000
              </a>
              <a
                href="https://avccontractors.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-orange transition-colors font-body text-sm"
              >
                <Globe
                  className="w-4 h-4 text-orange flex-shrink-0"
                  strokeWidth={2}
                />
                avccontractors.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-body text-white/40">
          <p>© {currentYear} AVC Contractors LLC. All Rights Reserved.</p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
