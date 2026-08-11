import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";

export default function TransformCTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_102%_-18%,rgba(32,168,159,0.72)_0%,rgba(13,71,67,0.56)_20%,rgba(5,34,65,0)_46%),linear-gradient(90deg,var(--primary-900)_0%,var(--primary-900)_100%)] text-white h-85.75">
      <div className="section-layout grid min-h-65 items-center gap-8 py-12 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:gap-12 lg:mx-45 lg:min-h-85 lg:py-0">
        <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[64px]">
          Ready To Transform
          <br />
          <span className="text-accent-500">With AI?</span>
        </h2>

        <div className="flex flex-col items-start gap-5 md:items-center">
          <Link href="#contact">
            <Button
              variant={"accent"}
              size={"md"}
              className="rounded-full px-8 text-base font-bold"
            >
              Book a Session
            </Button>
          </Link>
          <Link href="mailto:hello@fransunisoft.com">
            <Button
              variant={"transparent"}
              size={"md"}
              className="rounded-full border-white/80 px-8 text-base font-bold text-white hover:bg-white/10"
            >
              Speak With Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
