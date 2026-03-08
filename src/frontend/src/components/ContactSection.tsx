import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Globe, Loader2, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const serviceOptions = [
  "Bathroom Remodeling",
  "Kitchen Remodeling",
  "Carpentry & Trim Work",
  "Baseboard & Crown Molding",
  "Deck Construction & Repair",
  "Interior & Exterior Painting",
  "Drywall Repair",
  "Exterior Rotten Wood Replacement",
  "Door & Window Installation",
  "Flooring Installation – Natural Stone",
  "Flooring Installation – Marble",
  "Flooring Installation – Granite",
  "Flooring Installation – Ceramic Tile",
  "Flooring Installation – Hardwood",
  "Flooring Installation – Laminate",
  "Flooring Installation – LVP",
  "Other / General Inquiry",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const mutation = useSubmitContactForm();

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    if (!form.serviceType) newErrors.serviceType = "Please select a service.";
    if (!form.message.trim())
      newErrors.message = "Please describe your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await mutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
        serviceType: form.serviceType,
      });
      setSubmitted(true);
      setForm(emptyForm);
      toast.success("Request sent! We'll be in touch shortly.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="contact-heading"
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
            Contact
          </span>
          <h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy mb-5 leading-[1.05]"
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
            Ready to start your project? Call us today or fill out the form
            below and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 max-w-6xl mx-auto">
          {/* Left sidebar – contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Phone CTA block */}
            <div className="bg-navy rounded-3xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-2 leading-tight">
                Call Us Directly
              </h3>
              <p className="text-white/60 text-sm font-body mb-6 leading-relaxed">
                Have questions? We're happy to talk through your project over
                the phone.
              </p>
              <a href="tel:5550000000" className="block w-full">
                <Button
                  size="lg"
                  className="w-full bg-orange hover:bg-orange-hover text-white font-display font-bold text-base gap-2.5 shadow-cta hover:shadow-cta-hover transition-all rounded-xl"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  (555) 000-0000
                </Button>
              </a>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-card">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-sm mb-1">
                    Website
                  </p>
                  <a
                    href="https://avchandymanservices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline font-body text-sm font-semibold"
                  >
                    avchandymanservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-card">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-sm mb-1">
                    Service Area
                  </p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    Serving local homeowners in the greater area
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-3xl shadow-card p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mb-5">
                    <CheckCircle2
                      className="w-8 h-8 text-green-600"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-3">
                    Request Sent!
                  </h3>
                  <p className="text-muted-foreground font-body text-base max-w-sm mb-7 leading-relaxed">
                    Thank you for reaching out. We'll review your project
                    details and get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-navy/20 text-navy hover:bg-navy hover:text-white font-semibold rounded-xl"
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-navy text-xl mb-1.5 leading-tight">
                      Request a Free Estimate
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      Fill out the form and we'll get back to you with a free,
                      no-obligation estimate.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-body font-semibold text-navy text-sm"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`font-body rounded-xl ${errors.name ? "border-destructive" : ""}`}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-destructive text-xs font-body"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-body font-semibold text-navy text-sm"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`font-body rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-destructive text-xs font-body"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body font-semibold text-navy text-sm"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`font-body rounded-xl ${errors.email ? "border-destructive" : ""}`}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-destructive text-xs font-body"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="service-type"
                      className="font-body font-semibold text-navy text-sm"
                    >
                      Service Interested In{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.serviceType}
                      onValueChange={(val) => handleChange("serviceType", val)}
                    >
                      <SelectTrigger
                        id="service-type"
                        className={`font-body rounded-xl ${errors.serviceType ? "border-destructive" : ""}`}
                        aria-describedby={
                          errors.serviceType ? "service-error" : undefined
                        }
                      >
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((svc) => (
                          <SelectItem
                            key={svc}
                            value={svc}
                            className="font-body"
                          >
                            {svc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p
                        id="service-error"
                        className="text-destructive text-xs font-body"
                      >
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body font-semibold text-navy text-sm"
                    >
                      Message / Project Details{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`font-body resize-none rounded-xl ${errors.message ? "border-destructive" : ""}`}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-destructive text-xs font-body"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="w-full bg-orange hover:bg-orange-hover text-white font-display font-bold text-base shadow-cta hover:shadow-cta-hover transition-all disabled:opacity-70 rounded-xl"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send My Request"
                    )}
                  </Button>

                  <p className="text-muted-foreground text-xs font-body text-center pt-1">
                    Serious inquiries only. We'll respond within 24 hours on
                    business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
