"use client";

import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      {/* Dark logo (shown in light mode) */}
      <Image
        src={"/images/black-logo.webp"}
        alt="Krea dark logo"
        width={22}
        height={29}
        className="block dark:hidden w-full"
        priority
      />
      {/* Light logo (shown in dark mode) */}
      <Image
        src={"/images/white-logo.webp"}
        alt="Krea light logo"
        width={22}
        height={29}
        className="hidden dark:block"
        priority
      />
    </div>
  );
};
