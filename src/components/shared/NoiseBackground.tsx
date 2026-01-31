import React from "react";

const NoiseBackground = React.memo(function NoiseBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
            type="fractalNoise"
          />
        </filter>
        <rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
      </svg>
    </div>
  );
});

export default NoiseBackground;
