import React from 'react';
import { ArrowRight, Home, Ruler, LayoutGrid } from 'lucide-react';

const projects = [
  {
    title: 'Проект "Спутник"',
    area: '144.7 м²',
    type: 'Одноэтажный',
    size: '7.5x10.5',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-154.jpg',
    prices: {
      economy: 'от 1 696 643 р.',
      turnkey: 'от 2 494 028 р.'
    }
  },
  {
    title: 'Проект "Южные озера"',
    area: '127.2 м²',
    type: '2-х этажный',
    size: '7.5x9.4',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/v-162.jpg',
    prices: {
      economy: 'от 1 667 367 р.',
      turnkey: 'от 2 450 993 р.'
    }
  },
  {
    title: 'Проект "Профи"',
    area: '145.2 м²',
    type: 'С мансардой',
    size: '12.1x12',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-165.jpg',
    prices: {
      economy: 'от 1 885 437 р.',
      turnkey: 'от 2 876 513 р.'
    }
  }
];

interface ProjectsProps {
  onProjectSelect?: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Популярные проекты домов</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
                  <LayoutGrid className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center mb-6">
                  {project.title}
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Home className="w-4 h-4 text-primary" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Ruler className="w-4 h-4 text-primary" />
                    <span>{project.type}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <LayoutGrid className="w-4 h-4 text-primary" />
                    <span>{project.size}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Эконом</span>
                    <span className="text-primary font-medium">{project.prices.economy}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Под ключ</span>
                    <span className="text-secondary font-medium">{project.prices.turnkey}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center px-3 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300"
                  >
                    КРЕДИТ
                  </a>
                  <button
                    onClick={() => onProjectSelect?.(project.title)}
                    className="flex items-center justify-center px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    ПОДРОБНЕЕ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;