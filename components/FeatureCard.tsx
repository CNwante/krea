"use client";

import Image from "next/image";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Feature } from "@/data/features";

type FeatureCardProps = Feature & {
  onOpen?: () => void;
};

const FeatureCard = ({
  title,
  description,
  icon,
  isNew,
  onOpen,
}: FeatureCardProps) => {
  return (
    <div className="flex items-center justify-between w-full p-4 gap-3 bg-unmuted rounded-2xl shadow-sm ">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0">
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="w-12 h-12 object-contain rounded-xl"
          />
        </div>

        {/* Texts */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {isNew && <Badge> New </Badge>}
          </div>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <Button onClick={onOpen} variant="gray" className="hidden sm:inline-flex">
        Open
      </Button>
    </div>
  );
};

export default FeatureCard;
