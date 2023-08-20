// Library imports
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Style variants
const buttonVariants = cva(
  "flex items-center justify-center gap-2 leading-none p-2 rounded-sm",
  {
    variants: {
      intent: {
        primary: "bg-zinc-900 hover:bg-zinc-500 text-zinc-100",
        secondary:
          "ring-1 ring-zinc-900 hover:bg-zinc-500 hover:ring-0 hover:text-zinc-100",
        ghost: "hover:ring-1 ring-zinc-900",
      },
      size: {
        sm: "h-fit w-fit",
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
  href?: string;
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
  href,
  ...props
}: ButtonProps) => {
  // If href is passed, render as <a>
  if (href) {
    return (
      <a
        href={href}
        className={twMerge(buttonVariants({ intent, size }), className)}
        role="link"
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel || undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // If href is not passed, render as <button>
  return (
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
};

export default Button;
