"use client";

import Image from "next/image";
import blackLogo from "@/assets/images/black-logo.webp";
import whiteLogo from "@/assets/images/white-logo.webp";

export const Logo = () => {
  return (
    <div>
      {/* Dark logo (shown in light mode) */}
      <Image
        src={blackLogo}
        alt="Krea dark logo"
        width={22}
        height={29}
        className="block dark:hidden w-full"
        priority
      />
      {/* Light logo (shown in dark mode) */}
      <Image
        src={whiteLogo}
        alt="Krea light logo"
        width={22}
        height={29}
        className="hidden dark:block"
        priority
      />
    </div>
  );
};
