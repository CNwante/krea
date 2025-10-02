"use client";

import { FaCreditCard } from "react-icons/fa";
import { BsFillUsbMiniFill } from "react-icons/bs";
import clsx from "clsx";

export const Gallery = () => {
  const buttonClasses = clsx(
    "flex items-center justify-between gap-2 px-3 py-1 rounded-lg bg-muted hover:scale-110 transition"
  );

  return (
    <section className="px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-content">Gallery</h2>
        <div className="flex items-center gap-3">
          <button className={buttonClasses}>
            <BsFillUsbMiniFill /> Legal
          </button>
          <button className={buttonClasses}>
            <FaCreditCard /> Pricing
          </button>
        </div>
      </div>
    </section>
  );
};
