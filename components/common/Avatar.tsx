"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import user1 from "@/assets/users/user1.jpg";

interface AvatarProps {
  src?: StaticImageData;
  size?: "sm" | "md";
  className?: string;
}

export const Avatar = ({
  src = user1,
  size = "md",
  className,
}: AvatarProps) => {
  const sizeMap = {
    sm: 28,
    md: 36,
  };

  return (
    <Image
      src={src}
      width={sizeMap[size]}
      height={sizeMap[size]}
      alt="User avatar"
      className={clsx("rounded-full object-cover", className)}
    />
  );
};
