"use client";

import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "gray";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center font-medium transition-colors",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" &&
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
        variant === "gray" &&
          "px-4 py-1.5 rounded-full text-sm text-gray-900 dark:text-gray-100  bg-gray-bg hover:bg-gray-100 dark:hover:bg-muted/70",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-base",
        className
      )}
      {...props}
    />
  );
}
