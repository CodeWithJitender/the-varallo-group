import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CurvedSlider = ({
  numberOfCards = 14,
  radius = 750,
  cardSize = 145,
  centerContent = "Center",
  showCenter = true,
  rotationSpeed = 60, // Duration in seconds for one complete rotation
}) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize GSAP infinite rotation
  useEffect(() => {
    if (containerRef.current) {
      // Create infinite rotation animation
      gsap.to(containerRef.current, {
        rotation: 360,
        duration: rotationSpeed,
        ease: "none", // Linear animation for smooth infinite rotation
        repeat: -1, // Infinite repeat
      });
    }

    // Cleanup function to kill animation on unmount
    return () => {
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
    };
  }, [rotationSpeed]);

  // Calculate responsive radius based on screen size
  const getResponsiveRadius = () => {
    if (windowSize.width < 640) {
      // mobile
      return Math.min(radius * 0.6, windowSize.width * 0.3);
    } else if (windowSize.width < 1024) {
      // tablet
      return Math.min(radius * 0.8, windowSize.width * 0.25);
    }
    return radius; // desktop
  };

  // Calculate responsive card size
  const getResponsiveCardSize = () => {
    if (windowSize.width < 640) {
      return cardSize * 0.7;
    } else if (windowSize.width < 1024) {
      return cardSize * 0.85;
    }
    return cardSize;
  };

  const responsiveRadius = getResponsiveRadius();
  const responsiveCardSize = getResponsiveCardSize();

  // Generate cards with calculated positions
  const generateCards = () => {
    const cards = [];
    const angleStep = (2 * Math.PI) / numberOfCards;

    for (let i = 0; i < numberOfCards; i++) {
      // Calculate angle (starting from top, going clockwise)
      const angle = i * angleStep - Math.PI / 2;

      // Calculate x and y positions using trigonometry
      const x = Math.cos(angle) * responsiveRadius;
      const y = Math.sin(angle) * responsiveRadius;

      cards.push({
        id: i + 1,
        x,
        y,
        angle: angle * (180 / Math.PI), // Convert to degrees for potential rotation
        content: `Card ${i + 1}`,
        image: `/contact${(i % 3) + 1}.png`, // Example image path
      });
    }

    return cards;
  };

  const cards = generateCards();

  return (
    <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden ">

        <div
          ref={containerRef}
          className="
    relative scale-[1.5]
    mt-[1500px]     /* base for very small screens */
    sm:mt-[1800px]  /* ≥640px */
    md:mt-[2500px]  /* ≥768px */
    lg:mt-[2200px]  /* ≥1024px */
    xl:mt-[2400px]  /* ≥1280px */
    2xl:mt-[2500px] /* ≥1536px */
  "
        >
          {/* Circular cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              className="absolute rounded-lg overflow-hidden flex items-center justify-center font-medium shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-none"
              style={{
                width: responsiveCardSize * 1.8, // Width is 1.8x height
                height: responsiveCardSize,
                left: card.x - (responsiveCardSize * 1.8) / 2, // Adjust positioning for new width
                top: card.y - responsiveCardSize / 2,
                transformOrigin: "center",
                transform: `rotate(${card.angle + 90}deg)`, // Rotate card to face outward from center
              }}
            >
              <img
                className="h-full w-full object-cover"
                src={card.image}
                alt={card.title}
              />
            </div>
          ))}

        
        </div>
    </div>
  );
};

export default CurvedSlider;