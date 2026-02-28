import { Award, DollarSign, Shield, Star } from "lucide-react";
import { type Variants, motion } from "motion/react";

const highlights = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "Over a decade of hands-on craftsmanship serving homeowners across the region.",
  },
  {
    icon: Star,
    title: "Guaranteed Work",
    description:
      "We stand behind every project with a satisfaction guarantee — no compromises.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed, insured, and bonded for your protection and peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description:
      "Transparent estimates with no hidden costs. Quality work at reasonable rates.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-orange font-display font-bold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <span className="section-divider" />
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
            >
              About AVC Contractors LLC
            </h2>
            <div className="space-y-4 text-foreground/75 font-body text-base lg:text-lg leading-relaxed">
              <p>
                AVC Contractors LLC is a dedicated home improvement company
                committed to making families happier in their homes. With over{" "}
                <strong className="text-navy font-semibold">
                  10 years of hands-on experience
                </strong>
                , our licensed and insured team brings professionalism,
                attention to detail, and quality craftsmanship to every project
                — big or small.
              </p>
              <p>
                We offer{" "}
                <strong className="text-navy font-semibold">
                  reasonable pricing with no surprises
                </strong>
                , and we stand behind every job with a satisfaction guarantee.
                Whether you're updating a bathroom, remodeling a kitchen, or
                improving your home's exterior, we treat your home like our own.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 p-4 bg-orange-light rounded-lg border border-orange/20">
              <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0 shadow-cta">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <p className="font-body font-semibold text-navy text-sm leading-snug">
                Licensed, Insured & Bonded for your complete protection. We take
                pride in operating with integrity and transparency on every job.
              </p>
            </div>
          </motion.div>

          {/* Right – Feature grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group p-6 bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
