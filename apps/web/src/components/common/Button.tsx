import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, ChevronUp, Plus, Upload, Share, Eye } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Primary variants
        primary: "bg-prussian-blue text-white shadow hover:bg-prussian-blue/90",
        "primary-light": "bg-air-blue text-white shadow hover:bg-blue-500",

        // Secondary variants
        secondary: "bg-white text-prussian-blue shadow hover:bg-blue-200",
        outline:
          "border-2 border-white bg-prussian-blue text-white shadow-xs hover:bg-prussian-blue/60",

        // Ghost/Text variants
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-prussian-blue underline-offset-4 hover:underline",
        "text-link": "text-prussian-blue hover:text-prussian-blue/80 underline",
        "text-link-gray": "text-gray-600 hover:text-gray-800",

        // Special variants
        destructive: "bg-red-600 text-white shadow hover:bg-red-700",
        "form-submit":
          "bg-prussian-blue text-white shadow hover:bg-prussian-blue/90",

        // Action variants
        "multi-action":
          "bg-prussian-blue text-white shadow hover:bg-prussian-blue/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs",
        lg: "h-12 rounded-md px-6 text-base",
        xl: "h-14 rounded-md px-8 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: "plus" | "upload" | "share" | "eye" | "chevron-down" | "chevron-up";
  iconPosition?: "left" | "right";
  loading?: boolean;
  dropdownOpen?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      icon,
      iconPosition = "left",
      loading = false,
      dropdownOpen = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const getIcon = () => {
      if (loading) {
        return (
          <div className="size-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
        );
      }

      switch (icon) {
        case "plus":
          return <Plus className="size-4" />;
        case "upload":
          return <Upload className="size-4" />;
        case "share":
          return <Share className="size-4" />;
        case "eye":
          return <Eye className="size-4" />;
        case "chevron-down":
          return <ChevronDown className="size-4" />;
        case "chevron-up":
          return <ChevronUp className="size-4" />;
        default:
          return null;
      }
    };

    const iconElement = getIcon();
    const showChevron =
      variant === "multi-action" &&
      (icon === "chevron-down" || icon === "chevron-up");

    if (asChild) {
      // When using asChild, we need to clone the child element and add our props
      // Filter out button-specific props that shouldn't be passed to Slot
      const { type, ...slotProps } = props;
      
      return (
        <Slot
          {...slotProps}
          ref={ref}
          className={cn(
            buttonVariants({ variant, size, fullWidth, className })
          )}
          data-disabled={disabled || loading}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(
          "cursor-pointer",
          buttonVariants({ variant, size, fullWidth, className })
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {iconElement && iconPosition === "left" && !showChevron && iconElement}
        {children}
        {iconElement &&
          (iconPosition === "right" || showChevron) &&
          iconElement}
        {variant === "multi-action" && !icon && (
          <ChevronDown
            className={cn(
              "size-4 transition-transform",
              dropdownOpen && "rotate-180"
            )}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
