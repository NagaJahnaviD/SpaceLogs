import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GridMotion = ({ items = [], gradientColor = '#0f0f0f' }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const imageItems = items.filter(
    (item) => typeof item === 'string' && item.startsWith('http')
  );

  // 3 bands × 7 columns = 21 items
  const repeatedItems = Array.from({ length: 21 }, (_, i) => imageItems[i % imageItems.length]);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-150 w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-[1]" />

        {/* 3 bands only */}
        <div className="gap-1 flex-none relative w-[160vw] h-[100vh] grid grid-cols-1 grid-rows-3 rotate-[-15deg] origin-center z-[2]">
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-2 grid-cols-7"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, colIndex) => {
                const imgUrl = repeatedItems[rowIndex * 7 + colIndex];
                return (
                  <div key={colIndex} className="relative group transform transition duration-300 hover:scale-105">
                    <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg bg-[#111] shadow-lg">
                      <div
                        className="absolute inset-0 bg-cover bg-center "
                        style={{ backgroundImage: `url(${imgUrl})` }}
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-[3]" />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
