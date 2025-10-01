import { GoHomeFill } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { AiFillSignature } from "react-icons/ai";
import { PiCompassTool } from "react-icons/pi";
import { RiFolderFill } from "react-icons/ri";
import { NavItem } from "@/types/common";

export const NAV_ITEMS: NavItem[] = [
  {
    icon: GoHomeFill,
    label: "Home",
    href: "/",
  },
  {
    icon: BsImage,
    label: "Image",
    href: "/gallery",
  },
  {
    icon: HiMiniVideoCamera,
    label: "Video",
    href: "/videos",
  },
  {
    icon: FaWandMagicSparkles,
    label: "Enhancer",
    href: "/enhancer",
  },
  {
    icon: AiFillSignature,
    label: "Realtime",
    href: "/realtime",
  },
  {
    icon: PiCompassTool,
    label: "Edit",
    href: "/edit",
  },
  {
    icon: RiFolderFill,
    label: "Assets",
    href: "/assets",
  },
]
