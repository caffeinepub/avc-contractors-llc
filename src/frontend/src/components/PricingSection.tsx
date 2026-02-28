import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, DollarSign, FileText } from "lucide-react";
import { motion } from "motion/react";

const pricingFeatures = [
  {
    icon: DollarSign,
    title: "$50 – $125 / Hour",
    description:
      "Handyman labor rates vary by job type and complexity. Simple repairs start lower; specialized work is priced accordingly.",
  },
  {
    icon: FileText,
    title: "Free Estimates",
    description:
      "Every project starts with a no-obligation free estimate. Know exactly what to expect before work begins.",
  },
  {
    icon: Clock,
    title: "Minimum Charges Apply",
    description:
      "Minimum service charges and trip fees may apply for smaller jobs. We'll always be upfront about any fees.",
  },
  {
    icon: CheckCircle2,
    title: "No Hidden Costs",
    description:
      "We believe in transparent pricing — what you're quoted is what you pay. No surprises, ever.",
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-navy relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(255,255,255,0.6) 30px,
            rgba(255,255,255,0.6) 31px
          )`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-orange font-display font-bold text-sm uppercase tracking-widest mb-3">
            Pricing
          </span>
          <span className="section-divider mx-auto" />
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Transparent, Fair Pricing
          </h2>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            No guessing games. We quote clearly and charge fairly — because you
            deserve to know what you're paying for before work starts.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-10 mb-10"
        >
          {/* Price highlight */}
          <div className="text-center mb-10 pb-8 border-b border-white/15">
            <div className="inline-flex items-end gap-2 mb-3">
              <span className="font-display text-6xl font-bold text-orange">
                $50
              </span>
              <span className="font-display text-3xl font-bold text-white/60 mb-2">
                –
              </span>
              <span className="font-display text-6xl font-bold text-orange">
                $125
              </span>
              <span className="text-white/60 font-body text-lg mb-3">/hr</span>
            </div>
            <p className="text-white/70 font-body text-base max-w-lg mx-auto">
              Our handyman labor rates vary depending on the type and complexity
              of the job. Specialty trades and custom work may fall outside this
              range — always ask for a free quote.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pricingFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-orange" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/65 text-sm font-body leading-relaxed">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/70 font-body text-base mb-5">
            Ready to get started? Request your free, no-obligation estimate
            today.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-orange hover:bg-orange-hover text-white font-display font-bold text-lg px-10 py-6 shadow-cta hover:shadow-cta-hover transition-all hover:-translate-y-0.5"
          >
            Request a Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
