import React from 'react';
import { Heart, Home, Bed, Ruler, ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  id: string;
  onClose: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ id, onClose }) => {
  const project = {
    title: 'Проект дома «Никольское 7»',
    image: 'https://postroimdom.kz/wp-content/uploads/2024/12/a-154.jpg',
    plans: [
      'https://postroimdom.kz/wp-content/uploads/2024/12/a-150.jpg',
      'https://postroimdom.kz/wp-content/uploads/2024/12/l-161.jpg',
      'https://postroimdom.kz/wp-content/uploads/2024/12/a-165.jpg'
    ],
    specs: {
      area: '144 м²',
      floors: '1 этаж',
      size: '12 x 12 м',
      bedrooms: '3 шт.'
    },
    prices: {
      economy: '3 435 000 руб.',
      standard: '3 888 000 руб.',
      kit: '1 966 000 руб.'
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Heart className="w-5 h-5 mr-2" />
            Добавить в избранное
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.plans.map((plan, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={plan}
                    alt={`План ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Технические характеристики</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Home className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Площадь</p>
                    <p className="font-medium">{project.specs.area}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Этажность</p>
                    <p className="font-medium">{project.specs.floors}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Габариты</p>
                    <p className="font-medium">{project.specs.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bed className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Количество спален</p>
                    <p className="font-medium">{project.specs.bedrooms}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Комплектация «Эконом»</p>
                <p className="text-2xl font-bold text-primary">{project.prices.economy}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Комплектация «Гарант»</p>
                <p className="text-2xl font-bold text-secondary">{project.prices.standard}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Цена домокомплекта</p>
                <p className="text-2xl font-bold">{project.prices.kit}</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors">
                Отправить заявку
              </button>
              <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
                Заявка на кредит
              </button>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-medium hover:border-gray-300 transition-colors">
                Купить домокомплект
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;