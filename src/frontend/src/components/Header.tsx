import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    handleNavClick("#contact");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/98 backdrop-blur-md shadow-[0_2px_32px_rgba(10,20,50,0.35)] py-3"
          : "bg-navy/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-3 group"
          aria-label="Back to top"
        >
          {/* Logo mark */}
          <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center shadow-cta group-hover:shadow-cta-hover transition-shadow flex-shrink-0">
            <span className="font-display font-bold text-white text-base leading-none">
              A
            </span>
          </div>
          <div className="leading-tight text-left">
            <span className="font-display font-bold text-white text-[1.05rem] leading-none block tracking-tight">
              AVC Contractors
            </span>
            <span className="text-white/45 text-[0.65rem] font-body tracking-[0.12em] uppercase block mt-0.5">
              LLC
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-2 text-white/70 hover:text-white font-body font-medium text-sm transition-colors rounded-lg hover:bg-white/8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:5550000000">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/75 hover:text-white hover:bg-white/10 font-body font-semibold gap-2 text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              (555) 000-0000
            </Button>
          </a>
          <Button
            size="sm"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange-hover text-white font-body font-bold shadow-cta hover:shadow-cta-hover transition-all text-sm px-5 rounded-full"
          >
            Free Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-navy border-navy-mid w-72 p-0"
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center shadow-cta">
                  <span className="font-display font-bold text-white text-base">
                    A
                  </span>
                </div>
                <div>
                  <span className="font-display font-bold text-white text-base block leading-tight tracking-tight">
                    AVC Contractors
                  </span>
                  <span className="text-white/45 text-[0.65rem] uppercase tracking-[0.12em] block mt-0.5">
                    LLC
                  </span>
                </div>
              </div>
            </div>

            <nav className="p-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-white/75 hover:text-white font-body font-medium text-base transition-colors rounded-xl hover:bg-white/10 block"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="p-4 pt-2 flex flex-col gap-3 border-t border-white/10 mt-2">
              <a href="tel:5550000000" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/12 bg-white/6 font-semibold gap-2 rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  (555) 000-0000
                </Button>
              </a>
              <Button
                className="w-full bg-orange hover:bg-orange-hover text-white font-bold shadow-cta rounded-xl"
                onClick={() => {
                  setMobileOpen(false);
                  handleNavClick("#contact");
                }}
              >
                Get a Free Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
