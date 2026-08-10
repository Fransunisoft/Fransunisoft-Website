import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent" | "transparent";
};

type HeroSectionProps = {
  title: ReactNode;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

export default function HeroSection({
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
}: HeroSectionProps) {
  return (
    <section className="section-layout bg-background">
      <div className="grid items-center gap-12 py-8 lg:grid-cols-[0.82fr_1fr] lg:gap-16 lg:py-10">
        <div className="max-w-2xl">
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] text-neutral-primary sm:text-6xl lg:text-[64px]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-secondary lg:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryAction.href}
              className={cn(
                buttonVariants({
                  variant: primaryAction.variant ?? "primary",
                  size: "lg",
                }),
                "rounded-full px-7 text-sm font-bold"
              )}
            >
              {primaryAction.label}
              <span aria-hidden="true">{"->"}</span>
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={cn(
                  buttonVariants({
                    variant: secondaryAction.variant ?? "transparent",
                    size: "lg",
                  }),
                  "rounded-full px-7 text-sm font-bold"
                )}
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px]">



          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className=""
          />

        </div>
      </div>
    </section>
  );
}
