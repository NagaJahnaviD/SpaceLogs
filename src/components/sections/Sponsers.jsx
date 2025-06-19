import React, { useState, useEffect } from 'react';
import logo1 from '../../assets/logos/icons8-logo.svg';
import logo2 from '../../assets/logos/icons8-logo (1).svg';
import logo3 from '../../assets/logos/icons8-logo (2).svg';
import logo4 from '../../assets/logos/icons8-logo (3).svg';
import logo5 from '../../assets/logos/icons8-logo (4).svg';
import logo6 from '../../assets/logos/icons8-pandora-app.svg';
import logo7 from '../../assets/logos/icons8-windows-10.svg';
import logo8 from '../../assets/logos/icons8-logo (5).svg';

const sponsorSets = [
  [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8],
  [logo3, logo2, logo6, logo8, logo1, logo7, logo4, logo5],
];

export default function Sponsors() {
  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % sponsorSets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center justify-center text-white bg-[#0F0F0F]">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Meet Our Sponsers
        </h2>
      <div
        key={activeSet}
        className="grid grid-cols-4 grid-rows-2 gap-15 animate-fade-in"
      >
        {sponsorSets[activeSet].map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-24 h-24 animate-blink"
            style={{ animationDuration: '2s' }}
          >
            <img
              src={logo}
              alt={`Sponsor ${idx}`}
              className="h-full w-auto max-w-[80%] object-contain filter  brightness-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
