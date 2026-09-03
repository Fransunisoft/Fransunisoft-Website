import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "transparent";
  trailingArrow?: boolean;
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
      <div className="grid items-center gap-5 py-3 lg:grid-cols-[0.82fr_1fr] lg:gap-16 lg:py-10">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <h1 className="text-balance text-[26px] font-semibold leading-[1.08] text-neutral-primary sm:text-4xl lg:text-[64px] lg:leading-[1.02]">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-primary lg:mx-0 lg:mt-7 lg:text-lg lg:leading-8 lg:text-neutral-secondary">
            {description}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-8">
            <Link
              href={primaryAction.href}
              className={cn(
                buttonVariants({
                  variant: primaryAction.variant ?? "primary",
                  size: "lg",
                }),
                "h-10 w-full rounded-full px-7 text-sm font-bold sm:w-auto lg:h-12"
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
                  "h-10 w-full rounded-full px-7 text-sm font-bold sm:w-auto lg:h-12"
                )}
              >
                {secondaryAction.label}
                {secondaryAction.trailingArrow && (
                  <span aria-hidden="true">{"->"}</span>
                )}
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
            className="w-full"
          />

        </div>
      </div>
    </section>
  );
}
