"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = ["06.jpg", "05.jpg", "04.jpg", "03.jpg", "02.jpg", "01.jpg"];

export function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <>
      <div
        className="absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {slides.map((slide, index) => (
          <Image
            key={slide}
            src={`/images/${slide}`}
            alt=""
            fill
            sizes="100vw"
            preload={index === 0}
            className={`object-cover object-center transition-opacity duration-500 motion-reduce:transition-none ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {!reducedMotion && (
        <button
          className="absolute right-5 bottom-5 grid size-10 cursor-pointer place-items-center rounded border border-white bg-brand-blue p-[9px] text-white [&_svg]:size-5 [&_svg]:fill-current"
          type="button"
          aria-label={paused ? "Retomar apresentação" : "Pausar apresentação"}
          onClick={() => setPaused((current) => !current)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {paused ? (
              <path d="m8 5 11 7-11 7Z" />
            ) : (
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            )}
          </svg>
        </button>
      )}
    </>
  );
}
