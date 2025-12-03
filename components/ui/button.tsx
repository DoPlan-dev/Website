import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500":
              variant === "default",
            "border border-dark-300 bg-transparent hover:bg-light-50 focus-visible:ring-dark-500":
              variant === "outline",
            "hover:bg-light-100 focus-visible:ring-dark-500": variant === "ghost",
            "h-9 px-4 py-2 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-11 px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref as any}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

