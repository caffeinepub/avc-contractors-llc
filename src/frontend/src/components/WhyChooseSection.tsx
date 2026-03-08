import {
  DollarSign,
  Shield,
  Star,
  ThumbsUp,
  Trophy,
  UserCheck,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

const reasons = [
  {
    icon: Trophy,
    title: "10+ Years Experience",
    description:
      "Over a decade of expertise means we've seen it all and can handle any challenge your home throws at us.",
  },
  {
    icon: Shield,
    title: "Licensed, Insured & Bonded",
    description:
      "Your home and investment are protected at every step. We carry full coverage for your peace of mind.",
  },
  {
    icon: Star,
    title: "Quality Guaranteed Work",
    description:
      "Every project is backed by our satisfaction guarantee. We don't consider the job done until you're happy.",
  },
  {
    icon: DollarSign,
    title: "Reasonable Pricing",
    description:
      "Fair rates, honest estimates, and transparent billing. Quality craftsmanship shouldn't cost a fortune.",
  },
  {
    icon: UserCheck,
    title: "Reliable & Professional",
    description:
      "We show up when we say we will, communicate clearly, and treat your home with the respect it deserves.",
  },
  {
    icon: ThumbsUp,
    title: "Serious Inquiries Only",
    description:
      "We work with clients who value quality and are serious about their home. That keeps our standards high.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48 },
  },
};

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            Why AVC
          </span>
          <h2
            id="why-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy mb-5 leading-[1.05]"
          >
            Why Homeowners
            <br className="hidden sm:block" /> Choose AVC Contractors
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
            When you hire us, you're not just getting a contractor — you're
            getting a team that genuinely cares about your home.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="group relative p-7 bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden cursor-default"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-display text-7xl font-bold text-navy/[0.04] select-none leading-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-[1rem] mb-2.5 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
