import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-black">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 z-10 text-gray-100">
          <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-widest animate-pulse">
            ✨ About SpaceLogs
          </h2>

          <p className="text-center mb-12 text-sm text-gray-400 italic">
             decoding the universe, one log at a time...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">🌌 What is SpaceLogs?</h3>
              <p className="text-gray-300 leading-relaxed">
                A galactic logbook of the universe — from supernovas to satellite pings. We turn space data into interactive visuals and bring you closer to the cosmos than ever before. Whether you're a science geek or just starry-eyed, you're in the right orbit 🚀.
              </p>
            </div>

            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4 text-pink-400">🪐 Why Space?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Because black holes are cooler than black coffee.</li>
                <li>Stars write better stories than any human author.</li>
                <li>The cosmos is infinite... and so is our curiosity.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4 text-violet-400">🔭 What's Inside?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Dynamic grid of galaxy visuals</li>
                <li>Mouse-reactive particles floating across your screen</li>
                <li>Fun facts and cosmic logs from real missions</li>
                <li>Animations that move with you</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">🧑‍🚀 Who's It For?</h3>
              <p className="text-gray-300">
                Curious explorers, educators, late-night thinkers, space club members, and stargazers — SpaceLogs is your launchpad into the unknown.
              </p>
            </div>
          </div>
        </div>

        {/* Optional floating emoji */}
        <div className="absolute bottom-6 right-6 text-4xl animate-bounce select-none opacity-50">
          🧑‍🚀
        </div>
      </RevealOnScroll>
    </section>
  );
};
