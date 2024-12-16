import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Начали внешнюю отделку',
    location: 'Дом 115 м², д. Никитское, Московская обл.',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-164.jpg'
  },
  {
    title: 'Внутренняя отделка завершена',
    location: 'Дом 68 м², с. Кузьминское, Московская обл.',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/k-77.jpg'
  },
  {
    title: 'Завершили сборку домокомплекта',
    location: 'Дом 77 м², д. Ленино, Смоленская обл.',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-154.jpg'
  },
  {
    title: 'Начинаем сборку домокомплекта',
    location: 'Баня 31 м², г. Краснозаводск, Московская обл.',
    image: 'https://hotwell.kz/wp-content/uploads/2024/03/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%A1-30.jpg'
  }
];

const NewProjects: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Новые объекты</h2>
            <p className="text-gray-600 max-w-2xl">
              Следите за ходом строительства объектов в режиме реального времени на нашем сайте. 
              В подписях к фотографиям Вы увидите способы решения интересных задач, возникающих в процессе строительства.
            </p>
          </div>
          <a
            href="#"
            className="whitespace-nowrap px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Все объекты на карте
          </a>
        </div>

        <div className="relative">
          <div className="flex gap-4 md:gap-6 animate-scroll">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="flex-none w-[280px] md:w-[400px] group transform transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{project.location}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-primary hover:text-primary-dark transition-colors"
                >
                  Подробнее →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;