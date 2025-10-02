"use client";

import { NAV_ITEMS } from "@/data/navigation";
import Tooltip from "@/components/common/Tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavbarProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

const Navbar = ({ variant = "mobile", className }: NavbarProps) => {
  const pathname = usePathname();

  if (variant === "desktop") {
    return (
      <div className="m-auto">
        {/* Desktop Navbar (top) */}
        <nav
          className={clsx(
            "hidden lg:flex gap-1 p-2 rounded-2xl text-content bg-muted",
            className
          )}
        >
          {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={clsx(
                  "rounded-xl px-0.5 py-1 transition hover:scale-110",
                  isActive
                    ? "bg-white text-black dark:text-black scale-110"
                    : "hover:bg-surface"
                )}
              >
                <Tooltip label={label}>
                  <Icon
                    className={clsx(
                      "text-xl",
                      isActive ? "text-black" : "text-[--color-content]"
                    )}
                  />
                </Tooltip>
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Navbar (bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden justify-around border-t border-border py-2 pb-[env(safe-area-inset-bottom)] bg-muted/80 backdrop-blur-md">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center justify-center flex-1"
            >
              <span
                className={clsx(
                  isActive
                    ? "bg-white px-1.5 rounded-xl"
                    : "text-[--color-content]"
                )}
              >
                <Icon
                  className={clsx(
                    "text-2xl mb-0.5",
                    isActive ? "text-black" : "text-[--color-content]"
                  )}
                />
                <span
                  className={clsx(
                    "text-xs",
                    isActive
                      ? "text-black font-medium"
                      : "text-[--color-content]"
                  )}
                >
                  {label}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
