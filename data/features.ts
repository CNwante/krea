export type Feature = {
  title: string;
  description: string;
  icon: string;
  isNew?: boolean;
};

export const FEATURES: Feature[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: "/images/image.webp",
    isNew: true,
  },
  {
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: "/images/video.webp",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: "/images/realtime.webp",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 2K.",
    icon: "/images/enhancer.webp",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: "/images/edit.webp",
    isNew: true,
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: "/images/lipsync.webp",
    isNew: true,
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: "/images/motion.webp",
    isNew: true,
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: "/images/train.webp",
  },
];
