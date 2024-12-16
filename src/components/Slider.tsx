import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-154.jpg',
    title: 'Строительство домов из СИП панелей в Москве',
    subtitle: 'Построим ваш теплый и энергоэффективный дом за 45 дней с гарантией качества'
  },
  {
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-153.jpg',
    title: 'Современные технологии строительства',
    subtitle: 'Экономия на отоплении до 40% благодаря высокой энергоэффективности'
  },
  {
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/l-167.jpg',
    title: 'Дома из СИП панелей под ключ',
    subtitle: 'Полный цикл работ от проектирования до сдачи объекта'
  }
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-500 transform">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;