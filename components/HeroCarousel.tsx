"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

import { SLIDES } from "@/data/slides";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full text-white my-8 pt-4 px-6">
      {/* Embla container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] sm:flex-[0_0_70%] min-w-0 h-[60vh] sm:h-[70vh] flex items-center justify-center mr-0 sm:mr-8"
            >
              {/* Slide image */}
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                priority
              />

              {/* Overlay content */}
              <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6">
                  {slide.subtitle}
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary/90 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-2 sm:px-6 mt-4">
        {/* Spacer */}
        <div className="flex-1" />

        {/* Dots center */}
        <div className="flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary scale-110"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Arrows right */}
        <div className="flex gap-2 sm:gap-3 flex-1 justify-end">
          <button
            onClick={scrollPrev}
            className="p-2 sm:p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
          >
            <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 sm:p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
          >
            <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
