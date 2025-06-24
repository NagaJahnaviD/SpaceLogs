import "./index.css";
import { useState } from "react";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Sponsors from "./components/sections/Sponsers";
import HeroOverlay from "./components/sections/HeroOverlay";
import GridGallery from "./components/sections/GridGallery";
import Particles from "./components/sections/Particles"; // ✅ Make sure the path is correct
import MassiveObjectsChart from "./components/sections/MassiveObjectsChart";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroOverlay />

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <Home /> */}
        <About />

        <div className="animate-fade-in pt-50">
          <GridGallery />
        </div>

        {/* Start Particle Background Here */}
        <div className="relative z-0">
          <div className="absolute inset-0 -z-10">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Content Over Particle Background */}
          <Projects />
          <MassiveObjectsChart/>
          <Contact />
          <Sponsors />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
