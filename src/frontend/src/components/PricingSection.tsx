import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, DollarSign, FileText } from "lucide-react";
import { motion } from "motion/react";

const pricingFeatures = [
  {
    icon: FileText,
    title: "Free Estimates",
    description:
      "Every project starts with a no-obligation free estimate. Know exactly what to expect before work begins.",
  },
  {
    icon: CheckCircle2,
    title: "No Hidden Costs",
    description:
      "Transparent pricing — what you're quoted is what you pay. No surprises, ever.",
  },
  {
    icon: Clock,
    title: "Minimum Charges Apply",
    description:
      "Minimum service charges and trip fees may apply for smaller jobs. We'll always be upfront.",
  },
  {
    icon: DollarSign,
    title: "Fair for All Job Types",
    description:
      "Simple repairs start on the lower end; specialty and custom work is priced accordingly.",
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-navy relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="section-label"
            style={{ justifyContent: "center", color: "oklch(0.66 0.20 42)" }}
          >
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white mb-5 leading-[1.05]"
          >
            Transparent, Fair Pricing
          </h2>
          <p className="text-white/65 font-body text-lg max-w-xl mx-auto leading-relaxed">
            No guessing games. We quote clearly and charge fairly — because you
            deserve to know what you're paying for before work starts.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-white/[0.06] backdrop-blur-sm border border-white/12 rounded-3xl p-8 sm:p-12 mb-12"
        >
          {/* Price highlight */}
          <div className="text-center mb-12 pb-10 border-b border-white/12">
            <p className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
              Handyman Labor Rate
            </p>
            <div className="flex items-end justify-center gap-3 mb-4">
              <span className="font-display text-7xl sm:text-8xl font-bold text-orange leading-none">
                $50
              </span>
              <div className="flex flex-col items-center pb-3">
                <span className="font-display text-2xl font-bold text-white/40">
                  to
                </span>
              </div>
              <span className="font-display text-7xl sm:text-8xl font-bold text-orange leading-none">
                $125
              </span>
              <span className="text-white/50 font-body text-xl pb-4">/hr</span>
            </div>
            <p className="text-white/60 font-body text-base max-w-md mx-auto leading-relaxed">
              Rates vary by job complexity. Specialty trades may fall outside
              this range — always ask for your free quote.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-7">
            {pricingFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.42 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-orange/15 border border-orange/25 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-orange" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-[0.95rem] mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm font-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center"
        >
          <p className="text-white/60 font-body text-base mb-6">
            Ready to get started? Request your free, no-obligation estimate
            today.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange-hover text-white font-display font-bold text-base px-10 py-6 shadow-cta hover:shadow-cta-hover transition-all hover:-translate-y-0.5 rounded-full"
          >
            Request a Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
