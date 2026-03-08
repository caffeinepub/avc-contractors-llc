import {
  DoorOpen,
  Layers,
  Paintbrush,
  Square,
  TreePine,
  Wrench,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

interface ServiceCard {
  title: string;
  description: string;
  image?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const services: ServiceCard[] = [
  {
    title: "Bathroom Remodeling",
    description:
      "Full bathroom renovations, tile work, vanity installation, and more. Transform your bathroom into a luxury retreat.",
    image: "/assets/generated/service-bathroom.dim_600x400.jpg",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Cabinet replacement, countertops, backsplash, and complete kitchen makeovers that add value to your home.",
    image: "/assets/generated/service-kitchen.dim_600x400.jpg",
  },
  {
    title: "Deck Construction & Repair",
    description:
      "Build, repair, or refinish your outdoor deck to perfection. Expand your living space with a custom deck.",
    image: "/assets/generated/service-deck.dim_600x400.jpg",
  },
  {
    title: "Flooring Installation",
    description:
      "Natural Stone, Marble, Granite, Ceramic Tile, Hardwood, Laminate, and LVP Flooring — we do it all.",
    image: "/assets/generated/service-flooring.dim_600x400.jpg",
  },
  {
    title: "Carpentry & Trim Work",
    description:
      "Custom carpentry solutions crafted with precision and care for any interior or exterior application.",
    icon: Wrench,
  },
  {
    title: "Baseboard & Crown Molding",
    description:
      "Elegant molding installation to elevate any room — flawless finishing that makes a real difference.",
    icon: Layers,
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Professional painting that protects and beautifies your home. Clean prep, flawless finish, lasting results.",
    icon: Paintbrush,
  },
  {
    title: "Drywall Repair",
    description:
      "Seamless drywall patching and installation. We make repairs invisible and surfaces paint-ready.",
    icon: Square,
  },
  {
    title: "Exterior Rotten Wood Replacement",
    description:
      "Remove and replace damaged wood to protect your home's structure, appearance, and long-term value.",
    icon: TreePine,
  },
  {
    title: "Door & Window Installation",
    description:
      "Energy-efficient door and window installations done right. Improve comfort, security, and curb appeal.",
    icon: DoorOpen,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function ServiceCardImage({ service }: { service: ServiceCard }) {
  return (
    <div className="group bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full flex flex-col">
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-bold text-white text-lg leading-tight drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="p-5 flex-1">
        <p className="text-muted-foreground text-sm font-body leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function ServiceCardIcon({ service }: { service: ServiceCard }) {
  const Icon = service.icon!;
  return (
    <div className="group bg-card border border-border rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 p-6 h-full flex flex-col">
      <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-5 flex-shrink-0 group-hover:bg-orange transition-colors duration-300">
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <h3 className="font-display font-bold text-navy text-[0.95rem] mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm font-body leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="services-heading"
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
            What We Do
          </span>
          <h2
            id="services-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy mb-5 leading-[1.05]"
          >
            Our Services
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
            From full kitchen remodels to precision trim work — we handle it all
            with the same dedication to quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="h-full"
            >
              {service.image ? (
                <ServiceCardImage service={service} />
              ) : (
                <ServiceCardIcon service={service} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
