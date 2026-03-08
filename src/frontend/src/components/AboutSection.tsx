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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">About Us</span>
            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy mb-7 leading-[1.05]"
            >
              About AVC
              <br />
              Contractors LLC
            </h2>
            <div className="space-y-5 text-foreground/70 font-body text-base lg:text-[1.05rem] leading-[1.75]">
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

            <div className="mt-9 flex items-start gap-4 p-5 bg-orange-light rounded-2xl border border-orange/15">
              <div className="w-11 h-11 bg-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-cta mt-0.5">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <p className="font-body font-semibold text-navy text-sm leading-relaxed">
                Licensed, Insured & Bonded for your complete protection. We
                operate with integrity and transparency on every single job.
              </p>
            </div>
          </motion.div>

          {/* Right – Feature grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group p-7 bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                >
                  <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-[0.95rem] mb-2 leading-snug">
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
