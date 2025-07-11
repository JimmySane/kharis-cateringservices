// src/components/HeroCarousel.tsx
import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  interval?: number; // Time in milliseconds to change images (default: 4000ms)
  // Removed overlayColor1 and overlayColor2 props as they are no longer needed
  transitionDuration?: number; // Duration of the fade transition in milliseconds (default: 1000ms)
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  interval = 4000,
  // Removed overlayColor1 and overlayColor2 from destructuring
  transitionDuration = 1000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(-1); // To hold the image that's fading out

  const images = [
    "/images/corporatecatering.jpg",
    "/images/maincourse.jpg",
    "/images/lunchpack3.jpg",
    "/images/vegan-min.jpg",
    "/images/dessert.jpg",
    "/images/buffet3-min.jpg", // Make sure this image path is correct, it was missing a '-min' in previous context
  ];

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setPreviousImageIndex(currentImageIndex); // Store the current image as previous
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, currentImageIndex, interval]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background container for the current (fading in) image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity ease-in-out"
        style={{
          // Removed linear-gradient from backgroundImage
          backgroundImage: `url('${images[currentImageIndex]}')`,
          opacity: 1, // Always visible when it's the current image
          transitionDuration: `${transitionDuration}ms`, // Apply transition duration
        }}
      />

      {/* Background container for the previous (fading out) image */}
      {previousImageIndex !== -1 && ( // Only render if there's a previous image
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity ease-in-out"
          style={{
            // Removed linear-gradient from backgroundImage
            backgroundImage: `url('${images[previousImageIndex]}')`,
            opacity: 0, // This div will fade out
            transitionDuration: `${transitionDuration}ms`, // Apply transition duration
          }}
        />
      )}
    </div>
  );
};

export default HeroCarousel;