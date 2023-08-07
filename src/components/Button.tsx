// Importing dependencies
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Configurations and definitions
const buttonVariants = cva(
  "flex items-center justify-center gap-2 leading-none p-2 rounded-sm",
  {
    variants: {
      intent: {
        primary: "bg-black hover:bg-zinc-600 text-white",
        secondary: "ring-1 ring-black hover:bg-black hover:text-white",
        ghost: "hover:ring-1 ring-black",
      },
      size: {
        lg: "h-12 w-fit p-2",
        wide: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
);

// Interfaces and types
export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

// Component definition
const Button = ({
  children,
  onClick,
  className,
  intent,
  size,
  ariaLabel,
  type = "button",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    role="button"
    aria-label={ariaLabel || undefined}
    className={twMerge(buttonVariants({ intent, size }), className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
