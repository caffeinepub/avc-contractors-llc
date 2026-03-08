import { Globe, Phone, Shield } from "lucide-react";

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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center shadow-cta flex-shrink-0">
                <span className="font-display font-bold text-white text-base">
                  A
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-[1.05rem] block leading-tight tracking-tight">
                  AVC Contractors LLC
                </span>
                <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.12em] block mt-0.5">
                  Home Improvement Specialists
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Dedicated to making families happier in their homes. Over 10 years
              of quality craftsmanship you can trust.
            </p>
            <div className="flex items-center gap-2 text-white/65 text-sm font-body">
              <Shield
                className="w-4 h-4 text-orange flex-shrink-0"
                strokeWidth={2.5}
              />
              <span className="font-semibold">Licensed, Insured & Bonded</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-[0.12em] text-white/60">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="block text-white/55 hover:text-orange font-body text-sm transition-colors leading-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-xs mb-5 uppercase tracking-[0.12em] text-white/60">
              Contact
            </h3>
            <div className="space-y-3.5">
              <a
                href="tel:5550000000"
                className="flex items-center gap-3 text-white/55 hover:text-orange transition-colors font-body text-sm group"
              >
                <Phone
                  className="w-4 h-4 text-orange flex-shrink-0"
                  strokeWidth={2.5}
                />
                (555) 000-0000
              </a>
              <a
                href="https://avchandymanservices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/55 hover:text-orange transition-colors font-body text-sm"
              >
                <Globe
                  className="w-4 h-4 text-orange flex-shrink-0"
                  strokeWidth={2}
                />
                avchandymanservices.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-white/35">
          <p>© {currentYear} AVC Contractors LLC. All Rights Reserved.</p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
