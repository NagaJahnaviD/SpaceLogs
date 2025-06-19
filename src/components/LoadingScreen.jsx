import { useEffect, useState } from "react";
import Particles from "./sections/Particles"; // make sure this is correct path

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Welcome to CosmicScope />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden">

      {/* TOP PARTICLES */}
      <div className="absolute top-0 left-0 w-full h-[50%] pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#00ffff", "#8888ff"]}
          particleCount={100}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* CENTER TEXT */}
      <div className="z-10 flex flex-col items-center justify-center relative">
        <div className="mb-4 text-4xl font-mono font-bold text-center">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>

      {/* BOTTOM PARTICLES */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#00ffff", "#8888ff"]}
          particleCount={100}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
};
