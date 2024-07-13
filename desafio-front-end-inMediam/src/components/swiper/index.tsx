import React, { useState, useEffect, useRef } from "react";
import { SwiperProps } from "../../utils/interfaces/swipe-props";

const SwiperComponent = ({
  children,
  quantItemMobile = 2,
  quantItems = 5,
}: SwiperProps) => {

  const [slideAtual, setSlideAtual] = useState<number>(0);
  const [itensPorPagina, setItensPorPagina] = useState<number>(5);
  const slideRef = useRef(null);
  const posicaoInicialX = useRef<number | null>(null);

  useEffect(() => {
    const updateItensPorPagina = () => {
      setItensPorPagina(window.innerWidth < 640 ? quantItemMobile : quantItems);
    };

    window.addEventListener("resize", updateItensPorPagina);
    updateItensPorPagina();

    return () => window.removeEventListener("resize", updateItensPorPagina);
  }, []);

  const handlerSlideInicial = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      posicaoInicialX.current = e.touches[0].clientX;
    }
  };

  const handlerMoverSlide = (e: React.TouchEvent) => {
    if (posicaoInicialX.current !== null && e.touches.length === 1) {
      const slider = posicaoInicialX.current - e.touches[0].clientX;
      const limiteSlider = 50;

      if (Math.abs(slider) > limiteSlider) {
        slider > 0 ? proximoSlide() : slideAnterior();
        posicaoInicialX.current = null;
      }
    }
  };

  const proximoSlide = () => {
    if (slideAtual + itensPorPagina < children.length) {
      setSlideAtual((prev) => prev + itensPorPagina);
    }
  };

  const slideAnterior = () => {
    if (slideAtual > 0) {
      setSlideAtual((prev) => prev - itensPorPagina);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handlerSlideInicial}
      onTouchMove={handlerMoverSlide}
      onTouchEnd={() => (posicaoInicialX.current = null)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(slideAtual / itensPorPagina) * 100}%)`,
          marginLeft: `-${(slideAtual / itensPorPagina) * 20}px`,
        }}
        ref={slideRef}
      >
        {children.map((child, index) => (
          <div
            className="w-1/5 flex-shrink-0"
            key={index}
            style={{ width: `${100 / itensPorPagina}%`, margin: "0 1.5px" }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 ${
          slideAtual === 0 ? "opacity-50" : ""
        }`}
        onClick={slideAnterior}
        disabled={slideAtual === 0}
      >
        ❮
      </button>
      <button
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 ${
          slideAtual + itensPorPagina >= children.length ? "opacity-50" : ""
        }`}
        onClick={proximoSlide}
        disabled={slideAtual + itensPorPagina >= children.length}
      >
        ❯
      </button>
    </div>
  );
};

export default SwiperComponent;
