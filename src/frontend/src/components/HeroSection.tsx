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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg.dim_1600x900.jpg')`,
        }}
        role="presentation"
      />

      {/* Dark overlay with navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/85 to-navy-dark/75" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.5) 40px,
            rgba(255,255,255,0.5) 41px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32 pt-40">
        {/* Trust badge strip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-8 flex-wrap"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full"
            >
              <Icon className="w-4 h-4 text-orange" strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6"
        >
          Quality Home Improvement{" "}
          <span className="text-orange">You Can Trust</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          Over 10 Years of Experience Serving Homeowners with Reliable,
          Guaranteed Work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange-hover text-white font-display font-bold text-lg px-8 py-6 shadow-cta hover:shadow-cta-hover transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Get a Free Quote
          </Button>
          <a href="tel:5550000000" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/15 bg-transparent font-bold text-lg px-8 py-6 gap-2 w-full transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call Now
            </Button>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-orange mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs font-body uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
