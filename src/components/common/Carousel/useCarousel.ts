// useCarousel.ts
import React, { useState, useEffect } from 'react';

// Define props for the Carousel component
interface CarouselProps<T> {
  slides: T[]; // Array of slides
  initialIndex?: number; // Initial index of the active slide
  autoplay?: boolean; // Autoplay feature
  autoplayDelay?: number; // Delay between slides in autoplay mode
  infinite?: boolean; // Infinite looping feature
  renderSlide: (slide: T, index: number) => React.ReactNode; // Function to render each slide
}

// Carousel hook
const useCarousel = <T>({
  slides,
  initialIndex = 0,
  autoplay = false,
  autoplayDelay = 3000,
  infinite = true
}: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoplay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, autoplayDelay]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      infinite
        ? prevIndex === slides.length - 1
          ? 0
          : prevIndex + 1
        : Math.min(prevIndex + 1, slides.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      infinite ? (prevIndex === 0 ? slides.length - 1 : prevIndex - 1) : Math.max(prevIndex - 1, 0)
    );
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide
  };
};

export default useCarousel;
