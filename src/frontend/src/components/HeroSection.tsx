import { Button } from "@/components/ui/button";
import { Award, BadgeCheck, Phone, Shield } from "lucide-react";
import { motion } from "motion/react";

const trustBadges = [
  { icon: Shield, label: "Licensed" },
  { icon: Award, label: "Insured" },
  { icon: BadgeCheck, label: "Bonded" },
];

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg.dim_1600x900.jpg')`,
        }}
        role="presentation"
      />

      {/* Multi-layer overlay for depth and professionalism */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/88 to-navy-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-36 pt-44">
        {/* Trust badge strip */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm"
            >
              <Icon className="w-4 h-4 text-orange" strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-5xl mx-auto mb-7"
        >
          Quality Home <br className="hidden sm:block" />
          Improvement <span className="text-orange italic">You Can Trust</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="text-lg sm:text-xl text-white/75 max-w-xl mx-auto mb-12 font-body leading-relaxed"
        >
          Over 10 years serving homeowners with reliable, guaranteed
          craftsmanship — done right the first time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange-hover text-white font-display font-bold text-base px-9 py-6 shadow-cta hover:shadow-cta-hover transition-all hover:-translate-y-0.5 w-full sm:w-auto rounded-full"
          >
            Get a Free Quote
          </Button>
          <a href="tel:5550000000" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/12 bg-white/8 backdrop-blur-sm font-bold text-base px-9 py-6 gap-2.5 w-full transition-all hover:-translate-y-0.5 rounded-full"
            >
              <Phone className="w-4.5 h-4.5" strokeWidth={2.5} />
              Call Now
            </Button>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-20 pt-10 border-t border-white/12 flex items-center justify-center gap-8 sm:gap-16 flex-wrap max-w-2xl mx-auto"
        >
          {[
            { value: "10+", label: "Years in Business" },
            { value: "500+", label: "Projects Completed" },
            { value: "100%", label: "Satisfaction Guaranteed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center min-w-[90px]">
              <div className="font-display text-4xl font-bold text-orange mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-white/55 text-xs font-body uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
