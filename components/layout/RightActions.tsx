"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TbBellFilled } from "react-icons/tb";
import { PiImageSquareFill } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "@/components/ThemeToggle";
import { Avatar } from "@/components/common/Avatar";
import { useWorkspace } from "@/context/WorkspaceContext";

const rightNavbarStyle =
  "bg-muted cursor-pointer p-1 hover:scale-110 transition";

const RightActions = () => {
  const { currentUser } = useWorkspace();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-end gap-4">
      {/* Notifications + ThemeToggle: Always visible */}
      <TbBellFilled
        size={32}
        className={clsx("shrink-0 rounded-lg", rightNavbarStyle)}
      />
      <ThemeToggle />

      {/* Desktop actions */}
      <div className="hidden xl:flex items-center gap-4">
        <Link
          href="/gallary"
          className={clsx(
            "flex items-center gap-1.5 rounded-lg",
            rightNavbarStyle
          )}
        >
          <PiImageSquareFill size={20} />
          Gallary
        </Link>
        <Link
          href="/support"
          className={clsx(
            "flex items-center gap-1.5 rounded-lg",
            rightNavbarStyle
          )}
        >
          <TfiHeadphoneAlt size={18} />
          Support
        </Link>
        <Avatar
          src={currentUser.avatarUrl}
          className={clsx("text-white", rightNavbarStyle)}
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="xl:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={clsx("p-2 rounded-lg bg-muted hover:scale-110 transition")}
          aria-label="Open menu"
        >
          {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-6 top-14 bg-surface shadow-lg rounded-lg p-4 flex flex-col gap-3 w-40 z-50"
            >
              <Link
                href="/gallary"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <PiImageSquareFill size={18} />
                Gallary
              </Link>

              <Link
                href="/support"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              >
                <TfiHeadphoneAlt size={16} />
                Support
              </Link>

              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                <Avatar src={currentUser.avatarUrl} size="sm" />
                <span className="truncate">{currentUser.name}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RightActions;
