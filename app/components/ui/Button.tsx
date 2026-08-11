import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-secondary text-white hover:opacity-90",
        accent: "bg-accent text-white hover:opacity-90",
        transparent:
          "bg-transparent border border-neutral-light text-neutral-light hover:bg-primary/10",
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: ReactNode;
  };

export default function Button({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}