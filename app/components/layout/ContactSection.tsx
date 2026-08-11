import { Mail, MapPin, Paperclip, Phone } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { serviceTypeOptions } from "@/app/components/fsx-consulting/consulting-data";

const contactItems = [
  {
    label: "Email",
    description: "Contact us by email, and we'll respond shortly",
    value: "hello@fransunisoft.com",
    icon: Mail,
  },
  {
    label: "Phone",
    description: "Call us on weekdays from 9AM - 5PM",
    value: "+2348130706942",
    icon: Phone,
  },
  {
    label: "Location",
    description: "Where we're located",
    value: "Lagos, Nigeria",
    icon: MapPin,
  },
];

const inputClass =
  "h-14 w-full rounded-lg border border-neutral-border bg-white px-5 text-base text-neutral-primary outline-none transition placeholder:text-neutral-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-200";

export default function ContactSection() {
  return (
    <section id="contact" className="section-layout bg-background">
      <div className="grid gap-12 py-12 lg:grid-cols-[0.78fr_1fr] lg:gap-20 lg:py-20">
        <aside className="relative overflow-hidden rounded-card bg-primary-900 p-8 text-white lg:p-10">
          <div className="absolute -bottom-20 -right-24 h-56 w-56 rounded-full bg-secondary-500/35 blur-2xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Get in touch
            </p>
            <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight text-white">
              Let&apos;s build a transformative AI solutions
            </h2>
            <p className="mt-6 text-base leading-7 text-white/75">
              Whether you are looking to adopt AI, transform your workforce,
              build a new product, or explore a partnership with Fransunisoft,
              we want to hear from you.
            </p>

            <div className="mt-9 space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-500 text-white">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="relative">
          <div className="absolute -right-4 bottom-3.5 lg:bottom-15 h-[92%] w-[92%] rounded-card bg-secondary-700" />
          <form
            className="relative grid gap-5 rounded-card bg-white p-6 shadow-sm md:p-8"
            aria-label="Contact Fransunisoft"
          >
            <p className="mx-auto -mt-11 w-fit rounded-full bg-primary-700 px-5 py-2 text-sm font-bold text-white shadow-sm">
              We reply within 24hrs
            </p>

            <label>
              <span className="sr-only">First Name</span>
              <input className={inputClass} name="firstName" placeholder="First Name" />
            </label>

            <label>
              <span className="sr-only">Last Name</span>
              <input className={inputClass} name="lastName" placeholder="Last Name" />
            </label>

            <label>
              <span className="sr-only">Email Address</span>
              <input
                className={inputClass}
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </label>

            <label>
              <span className="sr-only">Phone</span>
              <input
                className={inputClass}
                name="phone"
                type="tel"
                placeholder="+234 1234567890"
              />
            </label>

            <label>
              <span className="sr-only">Service Type</span>
              <select className={inputClass} name="serviceType" defaultValue="">
                <option value="" disabled>
                  Service Type
                </option>
                {serviceTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="sr-only">Company</span>
              <input className={inputClass} name="company" placeholder="Company" />
            </label>

            <label className="relative">
              <span className="sr-only">Message</span>
              <textarea
                className="min-h-36 w-full resize-y rounded-lg border border-neutral-border bg-white px-5 py-5 pr-36 text-base text-neutral-primary outline-none transition placeholder:text-neutral-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-200"
                name="message"
                placeholder="How can we be of help?"
              />
              <label className="absolute right-5 top-5 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-neutral-secondary">
                <Paperclip size={16} aria-hidden="true" />
                Attach a file
                <input type="file" name="attachment" className="sr-only" />
              </label>
            </label>

            <Button type="button" size="lg" className="w-full rounded-lg">
              Contact Us
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
