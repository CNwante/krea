import hero1 from "@/assets/images/hero-1.jpeg";
import hero2 from "@/assets/images/hero-2.jpeg";
import { StaticImageData } from "next/image";

interface SlideItems {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export const SLIDES: SlideItems[] = [
  {
    id: 1,
    title: "Unleash Your Creativity",
    subtitle: "Generate images, videos, and more with AI.",
    image: hero1,
  },
  {
    id: 2,
    title: "Realtime AI Rendering",
    subtitle: "Experience instant feedback on your creations.",
    image: hero2,
  },
  {
    id: 3,
    title: "Train Your Own Models",
    subtitle: "Customize and fine-tune AI to match your style.",
    image: hero2,
  },
];
