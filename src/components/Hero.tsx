import React from 'react';
import Slider from './Slider';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <Slider />
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 text-center backdrop-blur-sm shadow-lg shadow-primary/20"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#projects"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 text-center backdrop-blur-sm shadow-lg"
            >
              Посмотреть проекты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;