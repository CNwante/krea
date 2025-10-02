"use client";

import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-tag-new text-button-text text-xs font-medium px-2 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
}
