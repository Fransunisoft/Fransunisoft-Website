import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

export const buttonVariants = cva(
  "inline-flex flex-wrap cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-accent-600",
        secondary: "bg-secondary text-white hover:bg-secondary-500",
        accent: "bg-accent text-white hover:bg-secondary-700",
        outline:
          "border  bg-transparent text-primary hover:bg-primary hover:text-white ",
        outlineLight:
          "border border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white",
        transparent:
          "bg-transparent border border-neutral-light text-neutral-light hover:bg-primary hover:border-none",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonCommonProps = VariantProps<typeof buttonVariants> & {
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = ButtonCommonProps &
  (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never } |
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string });

type ButtonElementProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonLinkProps = ButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export default function Button(props: ButtonProps) {
  const className = cn(buttonVariants({ variant: props.variant, size: props.size }), props.className);
  const content = <>{props.icon && <span className="inline-flex shrink-0" aria-hidden="true">{props.icon}</span>}{props.children}</>;

  if ("href" in props && typeof props.href === "string") {
    const linkProps = props as ButtonLinkProps;
    const { href, variant, size, icon, className: _className, children, ...anchorProps } = linkProps;
    void variant;
    void size;
    void icon;
    void _className;
    void children;
    return <Link href={href} className={className} {...anchorProps}>{content}</Link>;
  }

  const buttonElementProps = props as ButtonElementProps;
  const { href: _href, variant, size, icon, className: _className, children, ...buttonProps } = buttonElementProps;
  void _href;
  void variant;
  void size;
  void icon;
  void _className;
  void children;
  return <button className={className} {...buttonProps}>{content}</button>;
}
