"use client";

import { useRef, useState } from "react";
import { useFormik } from "formik";
import { contactValidationSchema as validationSchema } from "@/app/lib/contact-validation";
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

const initialValues = {
  firstName: "", lastName: "", email: "", phone: "",
  serviceType: "", company: "", message: "",
};



export default function ContactSection() {
  const attachmentRef = useRef<HTMLInputElement>(null);
  const submissionRef = useRef(false);
  const [attachmentName, setAttachmentName] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      if (submissionRef.current) return;
      submissionRef.current = true;
      setStatus(null);
      try {
        const payload = new FormData();
        const validatedValues = validationSchema.cast(values);
        Object.entries(validatedValues).forEach(([key, value]) => payload.append(key, value ?? ""));
        const attachment = attachmentRef.current?.files?.[0];
        if (attachment) payload.append("attachment", attachment);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload,
          signal: AbortSignal.timeout(45000),
        });
        const result: unknown = await response.json();
        if (!response.ok || typeof result !== "object" || result === null || !("success" in result) || result.success !== true) {
          throw new Error("We could not confirm receipt of your enquiry. Please email hello@fransunisoft.com for help.");
        }
        helpers.resetForm();
        if (attachmentRef.current) attachmentRef.current.value = "";
        setAttachmentName("");
        setStatus({ type: "success", message: "message" in result && typeof result.message === "string" ? result.message : "Thanks for reaching out. The Fransunisoft team will get back to you shortly." });
      } catch {
        setStatus({ type: "error", message: "We could not confirm receipt of your enquiry. Please email hello@fransunisoft.com for help." });
      } finally {
        submissionRef.current = false;
        helpers.setSubmitting(false);
      }
    },
  });

  const fieldProps = (name: keyof typeof initialValues) => ({
    ...formik.getFieldProps(name),
    "aria-invalid": Boolean(formik.touched[name] && formik.errors[name]),
    "aria-describedby": formik.touched[name] && formik.errors[name] ? `contact-${name}-error` : undefined,
    disabled: formik.isSubmitting,
  });
  const fieldError = (name: keyof typeof initialValues) => formik.touched[name] && formik.errors[name] ? (
    <span id={`contact-${name}-error`} className="mt-1 block text-sm text-red-600">{formik.errors[name]}</span>
  ) : null;

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
          <div className="absolute -right-3 bottom-2 h-[82%] w-[92%] rounded-card bg-secondary-700 lg:-right-4 lg:bottom-35" />
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            aria-busy={formik.isSubmitting}
            className="relative grid gap-4 rounded-card bg-white p-5 shadow-sm md:p-8 lg:gap-5"
            aria-label="Contact Fransunisoft"
          >
            <p className="mx-auto -mt-9 w-fit rounded-full bg-primary-700 px-4 py-2 text-xs font-bold text-white shadow-sm lg:-mt-11 lg:px-5 lg:text-sm">
              We reply within 24hrs
            </p>

            <label>
              <span className="sr-only">First Name</span>
              <input className={inputClass} {...fieldProps("firstName")} autoComplete="given-name" placeholder="First Name" />
              {fieldError("firstName")}
            </label>

            <label>
              <span className="sr-only">Last Name</span>
              <input className={inputClass} {...fieldProps("lastName")} autoComplete="family-name" placeholder="Last Name" />
              {fieldError("lastName")}
            </label>

            <label>
              <span className="sr-only">Email Address</span>
              <input
                className={inputClass}
                {...fieldProps("email")}
                autoComplete="email"
                type="email"
                placeholder="Email Address"
              />
              {fieldError("email")}
            </label>

            <label>
              <span className="sr-only">Phone</span>
              <input
                className={inputClass}
                {...fieldProps("phone")}
                autoComplete="tel"
                type="tel"
                placeholder="+234 1234567890"
              />
              {fieldError("phone")}
            </label>

            <label>
              <span className="sr-only">Service Type</span>
              <select className={inputClass} {...fieldProps("serviceType")}>
                <option value="" disabled>
                  Service Type
                </option>
                {serviceTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldError("serviceType")}
            </label>

            <label>
              <span className="sr-only">Company</span>
              <input className={inputClass} {...fieldProps("company")} autoComplete="organization" placeholder="Company (optional)" />
              {fieldError("company")}
            </label>

            <div className="relative">
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                className="min-h-36 w-full resize-y rounded-lg border border-neutral-border bg-white px-4 py-4 pr-24 text-sm text-neutral-primary outline-none transition placeholder:text-neutral-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-200 lg:px-5 lg:py-5 lg:pr-36 lg:text-base"
                id="contact-message"
                {...fieldProps("message")}
                placeholder="How can we be of help?"
              />
              <label className="absolute right-4 top-4 inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-neutral-secondary lg:right-5 lg:top-5 lg:gap-2 lg:text-sm">
                <Paperclip size={16} aria-hidden="true" />
                Attach a file
                <input ref={attachmentRef} type="file" name="attachment" className="sr-only" disabled={formik.isSubmitting} onChange={(event) => setAttachmentName(event.currentTarget.files?.[0]?.name ?? "")} />
              </label>
              {fieldError("message")}
              {attachmentName && <p className="mt-1 break-all text-sm text-neutral-secondary">Attached: {attachmentName}</p>}
            </div>

            <Button type="submit" disabled={formik.isSubmitting} size="lg" className="w-full rounded-lg">
              {formik.isSubmitting ? "Sending..." : "Contact Us"}
            </Button>
            {status && <p role={status.type === "error" ? "alert" : "status"} className={`text-sm ${status.type === "error" ? "text-red-600" : "text-green-700"}`}>{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
