import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const spaceMissions = [
    {
      title: "Project Andromeda",
      description: "A multi-decade mission aimed at deep mapping the Andromeda Galaxy using next-gen AI telescopes and gravitational wave sensors. Designed to detect early signs of planetary systems and possible life signatures.",
      tech: ["Quantum Sensors", "AI Optics", "X-Ray Mapping"],
      link: "#"
    },
    {
      title: "Alien Echoes Initiative",
      description: "A listening post in orbit around Jupiter scanning the void for faint alien communications. Features a neural network trained on anomalous radio waves and potential linguistic structures.",
      tech: ["Deep Learning", "SETI", "Radio Astronomy"],
      link: "#"
    },
    {
      title: "Dark Matter Drift",
      description: "An experimental spacecraft that uses gravitational lensing to map dark matter filaments across the cosmos. The mission provides real-time interactive simulations of unseen mass.",
      tech: ["Lensing Tech", "Dark Matter", "Zero-Point Engines"],
      link: "#"
    },
    {
      title: "Milky Way Pulse Network",
      description: "A distributed sensor array stretched across solar orbits to track cosmic ray bursts and galactic magnetic activity. This project supports space weather forecasting for future colonies.",
      tech: ["Plasma Physics", "Pulsar Timing", "IoT in Space"],
      link: "#"
    },
    {
      title: "The Event Horizon Report",
      description: "An observatory anchored in deep space sending back high-resolution imagery of black hole event horizons. Data contributes to understanding spacetime behavior at extreme conditions.",
      tech: ["Infrared Imaging", "Hawking Radiation", "Black Hole Thermo"],
      link: "#"
    },
    {
      title: "Terraform Alpha",
      description: "A simulation-driven project to model terraforming of Mars and exoplanets using synthetic biology and robotic deployment of ecosystems.",
      tech: ["Geoengineering", "CRISPR", "Swarm Bots"],
      link: "#"
    },
    {
      title: "CryoVault 9",
      description: "Secure archival of human knowledge in deep space via cryo-stable nanocrystals. Designed to last billions of years in low-orbit asteroid belts.",
      tech: ["Cryogenics", "Nano Storage", "Asteroid Engineering"],
      link: "#"
    },
    {
      title: "Aurora Sentinel",
      description: "A polar satellite network dedicated to tracking and visualizing aurora patterns from Earth and icy moons, offering insights into magnetic field variations.",
      tech: ["Magnetosphere Tracking", "Ionospheric Cameras"],
      link: "#"
    }
  ];

  const visibleMissions = showAll ? spaceMissions : spaceMissions.slice(0, 4);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Galactic Missions & Discoveries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleMissions.map((mission, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-blue-500/5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                <p className="text-gray-400 mb-4">{mission.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mission.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={mission.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              {showAll ? "Show Less" : "View More Missions"}
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
