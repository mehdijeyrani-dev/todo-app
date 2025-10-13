import React from "react";
import clsx from "clsx";

type VariantType = "filled" | "outline" | "ghost" | "link";
type ColorType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
type IconPlacement = "left" | "right";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  color?: ColorType;
  size?: SizeType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  iconPlacement?: IconPlacement;
  iconClassName?: string;
}

// Define static class mappings for each color + variant
const variantColorClasses: Record<VariantType, Record<ColorType, string>> = {
  filled: {
    primary:
      "bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25 dark:bg-blue-500/10 dark:hover:bg-blue-500/20",
    secondary:
      "bg-neutral-500/15 text-neutral-700 dark:text-neutral-50 hover:bg-neutral-500/20 dark:bg-neutral-500/10 dark:hover:bg-neutral-500/20",
    danger:
      "bg-rose-500/15 text-rose-700 dark:text-rose-400 hover:bg-rose-500/25 dark:bg-rose-500/10 dark:hover:bg-rose-500/20",
    success:
      "bg-green-500/15 text-green-700 dark:text-green-400 hover:bg-green-500/25 dark:bg-green-500/10 dark:hover:bg-green-500/20",
    warning:
      "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/25 dark:bg-yellow-500/10 dark:hover:bg-yellow-500/20",
    info: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-400 hover:bg-fuchsia-500/25 dark:bg-fuchsia-500/10 dark:hover:bg-fuchsia-500/20",
  },
  outline: {
    primary:
      "bg-transparent text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-950 hover:bg-blue-500/15 dark:hover:bg-blue-500/10",
    secondary:
      "bg-transparent text-neutral-800 dark:text-neutral-50 border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-500/15 dark:hover:bg-neutral-500/10",
    danger:
      "bg-transparent text-rose-700 dark:text-rose-400 border border-rose-500/20 dark:border-rose-950/50 hover:bg-rose-500/15 dark:hover:bg-rose-500/10",
    success:
      "bg-transparent text-green-700 dark:text-green-400 border border-green-500/30 dark:border-green-950 hover:bg-green-500/15 dark:hover:bg-green-500/10",
    warning:
      "bg-transparent text-yellow-700 dark:text-yellow-400 border border-yellow-700/20 dark:border-yellow-950/50 hover:bg-yellow-500/15 dark:hover:bg-yellow-500/10",
    info: "bg-transparent text-fuchsia-700 dark:text-fuchsia-400 border border-fuchsia-700/20 dark:border-fuchsia-950/60 hover:bg-fuchsia-500/15 dark:hover:bg-fuchsia-500/10",
  },
  ghost: {
    primary:
      "bg-transparent text-blue-700 dark:text-blue-400 hover:bg-blue-500/15 dark:hover:bg-blue-500/10",
    secondary:
      "bg-transparent text-neutral-800 dark:text-neutral-50 hover:bg-neutral-500/15 dark:hover:bg-neutral-500/10",
    danger:
      "bg-transparent text-rose-700 dark:text-rose-400 hover:bg-rose-500/15 dark:hover:bg-rose-500/10",
    success:
      "bg-transparent text-green-700 dark:text-green-400 hover:bg-green-500/15 dark:hover:bg-green-500/10",
    warning:
      "bg-transparent text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/15 dark:hover:bg-yellow-500/10",
    info: "bg-transparent text-fuchsia-700 dark:text-fuchsia-400 hover:bg-fuchsia-500/15 dark:hover:bg-fuchsia-500/10",
  },
  link: {
    primary:
      "bg-transparent text-blue-700 dark:text-blue-400 underline hover:text-blue-400 hover:dark:text-blue-700",
    secondary:
      "bg-transparent text-neutral-700 dark:text-neutral-50 underline hover:text-neutral-500 hover:dark:text-neutral-400",
    danger:
      "bg-transparent text-rose-700 dark:text-rose-400 underline hover:text-rose-400 dark:hover:text-rose-700",
    success:
      "bg-transparent text-green-700 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-700",
    warning:
      "bg-transparent text-yellow-700 dark:text-yellow-400 underline hover:text-yellow-500 dark:hover:text-yellow-700",
    info: "bg-transparent text-fuchsia-700 dark:text-fuchsia-400 underline hover:text-fuchsia-500 dark:hover:text-fuchsia-700",
  },
} as const;

const sizeClasses: Record<SizeType, string> = {
  xs: "px-2 py-0.5 text-xs",
  sm: "px-2.5 py-1 text-sm",
  md: "px-3 py-1.5",
  lg: "px-4 py-2",
  xl: "px-5 py-2.5",
};

const iconSizeClasses: Record<SizeType, string> = {
  xs: "h-4 w-4 grid place-content-center",
  sm: "h-5.5 w-5.5 grid place-content-center",
  md: "h-6 w-6 grid place-content-center",
  lg: "h-8 w-8 grid place-content-center",
  xl: "h-10 w-10 grid place-content-center",
};

const Button = ({
  children,
  variant = "filled",
  color = "primary",
  size = "md",
  icon,
  iconOnly = false,
  iconPlacement = "left",
  iconClassName,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const colorVariantClasses = variantColorClasses[variant][color];
  const sizeClass = sizeClasses[size];
  const iconSizeClass = iconSizeClasses[size];

  return (
    <button
      type={type}
      className={clsx(
        baseClasses,
        colorVariantClasses,
        sizeClass,
        iconOnly && "p-0",
        className
      )}
      {...props}
    >
      {icon && iconPlacement === "left" && (
        <span className={clsx(iconSizeClass, iconClassName)} aria-hidden="true">
          {icon}
        </span>
      )}
      {!iconOnly && children && <span>{children}</span>}
      {icon && iconPlacement === "right" && (
        <span className={clsx(iconSizeClass, iconClassName)} aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
