"use client";

import React, { forwardRef, isValidElement } from "react";
import { cloneElement } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/classNameUtils";

/**
 * Slot component for polymorphic prop forwarding.
 */
type SlotProps = {
  children: React.ReactNode; // Allow any valid ReactNode (string, ReactElement, etc.)
} & React.HTMLAttributes<HTMLElement>;

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  if (!isValidElement(children)) {
    return null;
  }

  // Ensure children.props is always an object before spreading
  const childProps = children.props && typeof children.props === "object" ? children.props : {};

  return cloneElement(children, {
    ...props,
    ...childProps, // Spread props and ensure children.props is valid
    ref: (childRef: HTMLElement | null) => {
      if (typeof ref === "function") {
        ref(childRef);
      } else if (ref && childRef) {
        (ref as React.RefObject<HTMLElement>).current = childRef;
      }

      // Handle the child's original ref separately
      const { ref: childOriginalRef } = children as React.ReactElement & {
        ref?: React.Ref<HTMLElement>;
      };
      if (typeof childOriginalRef === "function") {
        childOriginalRef(childRef);
      } else if (childOriginalRef && childRef) {
        (childOriginalRef as React.RefObject<HTMLElement>).current = childRef;
      }
    },
  } as any); // Use `as any` to bypass TypeScript's type checking for `ref`
});

/**
 * Button component with multiple variants and sizes.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap shrink-0",
    "text-xs font-bold leading-none tracking-[0.75px]",
    "outline-none border uppercase",
    "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "transition-all active:translate-y-0.25",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary border-primary text-primary-foreground",
          "hover:bg-primary/85 hover:text-primary-foreground",
          "focus-visible:ring-foreground/20",
        ].join(" "),
        light: [
          "bg-secondary border-secondary text-secondary-foreground",
          "hover:bg-secondary-foreground hover:border-secondary-foreground hover:text-background",
          "focus-visible:ring-secondary-foreground/10",
        ].join(" "),
        dark: [
          "bg-secondary-foreground border-secondary-foreground text-background",
          "hover:bg-primary hover:border-primary hover:text-primary-foreground",
          "focus-visible:ring-background-foreground/10",
        ].join(" "),
        outline: [
          "bg-background border-primary text-primary",
          "hover:bg-primary hover:border-primary hover:text-primary-foreground",
        ].join(" "),
        link: ["border-transparent", "text-primary underline-offset-4 !p-0", "hover:underline"].join(" "),
      },
      size: {
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-3.5",
        md: "h-10 px-6 py-2 has-[>svg]:px-5",
        lg: "h-12 px-8 has-[>svg]:px-7",
        icon: "size-10 p-1 active:translate-y-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/**
 * Button component with various styles and sizes.
 */
type ButtonProps = {
  className?: string;
  variant?: "primary" | "outline" | "light" | "link" | "dark";
  size?: "md" | "sm" | "lg" | "icon";
  asChild?: boolean;
  children: React.ReactNode; // Allow any valid ReactNode (string, ReactElement, etc.)
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Ensure props is an object before spreading
    const validProps = props && typeof props === "object" ? props : {};

    return (
      <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...validProps} ref={ref}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button"; // Set the display name for the Button component

export { Button, buttonVariants };
