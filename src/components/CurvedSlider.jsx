import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CurvedSlider = ({
  numberOfCards = 14,
  radius = 750,
  cardSize = 145,
  rotationSpeed = 60,
  responsiveConfig = {
    mobile: { maxWidth: 640, radius: 300, cardCount: 5, cardSize: 100, spacing: .8 },
    tablet: { maxWidth: 1024, radius: 450, cardCount: 10, cardSize: 120, spacing: 1.2 },
    desktop: { maxWidth: Infinity, radius: 750, cardCount: 14, cardSize: 145, spacing: 1 },
  },
}) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP infinite rotation
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: 360,
        duration: rotationSpeed,
        ease: "none",
        repeat: -1,
      });
    }
    return () => gsap.killTweensOf(containerRef.current);
  }, [rotationSpeed]);

  // ✅ Function to get config for current screen size
  const getResponsiveConfig = (width) => {
    if (width <= responsiveConfig.mobile.maxWidth) {
      return responsiveConfig.mobile;
    } else if (width <= responsiveConfig.tablet.maxWidth) {
      return responsiveConfig.tablet;
    }
    return responsiveConfig.desktop;
  };

  const {
    radius: responsiveRadius,
    cardCount,
    cardSize: responsiveCardSize,
    spacing,
  } = getResponsiveConfig(windowSize.width);

  // Generate cards
  const generateCards = () => {
    const cards = [];
    // ✅ Add spacing factor here
    const angleStep = ((2 * Math.PI) / cardCount) * spacing;

    for (let i = 0; i < cardCount; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * responsiveRadius;
      const y = Math.sin(angle) * responsiveRadius;

      cards.push({
        id: i + 1,
        x,
        y,
        angle: angle * (180 / Math.PI),
        image: `/contact${(i % 3) + 1}.png`,
      });
    }
    return cards;
  };

  const cards = generateCards();

  return (
    <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="
          relative scale-[1.5]
          mt-[190vw] sm:mt-[200vw] md:mt-[145vw]
          lg:mt-[180vw] xl:mt-[150vw] 2xl:mt-[120vw]
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="absolute rounded-lg overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-none"
            style={{
              width: responsiveCardSize * 1.8,
              height: responsiveCardSize,
              left: card.x - (responsiveCardSize * 1.8) / 2,
              top: card.y - responsiveCardSize / 2,
              transformOrigin: "center",
              transform: `rotate(${card.angle + 90}deg)`,
            }}
          >
            <img
              className="h-full w-full object-cover"
              src={card.image}
              alt={`Card ${card.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurvedSlider;
