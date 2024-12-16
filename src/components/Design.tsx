import React from 'react';
import { ChevronLeft, ChevronRight, Ruler, Pencil, HardHat } from 'lucide-react';

const projects = [
  {
    title: 'Проект "Альпийский"',
    area: '163 м²',
    price: 'от 2 894 000 ₽',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-150.jpg'
  },
  {
    title: 'Проект "Скандинавия"',
    area: '145 м²',
    price: 'от 2 450 000 ₽',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/l-161.jpg'
  }
];

const Design: React.FC = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Проектируем</h2>
              <p className="text-gray-600 text-lg">
                Профессиональный архитектурный отдел создаёт уникальные проекты, учитывая все пожелания заказчика.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <HardHat className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Михаил Соколов</h3>
                  <p className="text-gray-600">главный архитектор</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Каждый проект проходит тщательную проверку на всех этапах разработки - от концепции до финальных расчётов. Наша команда архитекторов и инженеров гарантирует не только эстетическую привлекательность, но и надёжность каждого элемента конструкции."
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Наш подход:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-primary" />
                  <span>Типовые проекты с возможностью модификации</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Pencil className="w-5 h-5 text-primary" />
                  <span>Индивидуальное проектирование под ваши требования</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{projects[currentProject].title}</h3>
                <div className="flex space-x-4 text-lg">
                  <span>Площадь дома {projects[currentProject].area}</span>
                  <span>Стоимость строительства {projects[currentProject].price}</span>
                </div>
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;