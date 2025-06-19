import React from 'react';

export default function HeroOverlay() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden" id='hero'>
      {/* Background image is fixed so it stays during text scroll */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(https://gallery.yopriceville.com/downloadfullsize/send/2590)`,
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Text content flows normally with scroll */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg backdrop-blur-sm bg-black/30 px-6 py-3 rounded-lg">
          Welcome to SpaceLogs
        </h1>
        <h2 className="mt-4 text-white text-2xl md:text-4xl font-semibold drop-shadow-md backdrop-blur-sm bg-black/20 px-4 py-2 rounded">
          A galactic blog journey
        </h2>
      </div>
    </section>
  );
}
