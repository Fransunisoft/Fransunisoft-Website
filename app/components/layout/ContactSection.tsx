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
  "h-12 w-full rounded-lg border border-neutral-border bg-white px-4 text-sm text-neutral-primary outline-none transition placeholder:text-neutral-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-200 lg:h-14 lg:px-5 lg:text-base";

export default function ContactSection() {
  return (
    <section id="contact" className="section-layout bg-background">
      <div className="grid gap-10 py-8 lg:grid-cols-[0.78fr_1fr] lg:gap-20 lg:py-20">
        <aside className="relative overflow-hidden rounded-card bg-primary-900 p-6 text-white lg:p-10">
          <div className="absolute -bottom-20 -right-24 h-56 w-56 rounded-full bg-secondary-500/35 blur-2xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-400 lg:text-sm">
              Get in touch
            </p>
            <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white lg:mt-6 lg:text-4xl">
              Let&apos;s build a transformative AI solutions
            </h2>
            <p className="mt-4 text-xs leading-5 text-white/75 lg:mt-6 lg:text-base lg:leading-7">
              Whether you are looking to adopt AI, transform your workforce,
              build a new product, or explore a partnership with Fransunisoft,
              we want to hear from you.
            </p>

            <div className="mt-7 space-y-6 lg:mt-9 lg:space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4 lg:gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500 text-white lg:h-12 lg:w-12">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white lg:text-lg">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/70 lg:text-sm lg:leading-6">
                        {item.description}
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-white lg:text-sm lg:leading-6">
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
          <div className="absolute -right-3 bottom-2 h-[92%] w-[92%] rounded-card bg-secondary-700 lg:-right-4 lg:bottom-15" />
          <form
            className="relative grid gap-4 rounded-card bg-white p-5 shadow-sm md:p-8 lg:gap-5"
            aria-label="Contact Fransunisoft"
          >
            <p className="mx-auto -mt-9 w-fit rounded-full bg-primary-700 px-4 py-2 text-xs font-bold text-white shadow-sm lg:-mt-11 lg:px-5 lg:text-sm">
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
                className="min-h-36 w-full resize-y rounded-lg border border-neutral-border bg-white px-4 py-4 pr-24 text-sm text-neutral-primary outline-none transition placeholder:text-neutral-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-200 lg:px-5 lg:py-5 lg:pr-36 lg:text-base"
                name="message"
                placeholder="How can we be of help?"
              />
              <label className="absolute right-4 top-4 inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-neutral-secondary lg:right-5 lg:top-5 lg:gap-2 lg:text-sm">
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
