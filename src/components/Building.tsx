import React from 'react';
import { Camera, Shield, MapPin } from 'lucide-react';

const buildingImages = [
  'https://postroimdom.kz/wp-content/uploads/2024/12/a-347.jpg',
  'https://postroimdom.kz/wp-content/uploads/2024/12/a-179.jpg',
  'https://postroimdom.kz/wp-content/uploads/2024/12/a-172.jpg',
  'https://postroimdom.kz/wp-content/uploads/2024/12/a-165.jpg'
];

const features = [
  {
    icon: Camera,
    title: 'Контроль on-line',
    description: 'Ведем фоторепортажи с каждой стройки в режиме реального времени. Публикацию нового объекта начинаем после передачи проектной документации на производство.'
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'В нашем коллективе только профессиональные строители СИП технологий. Каждый специалист имеет многолетний опыт работы с СИП панелями.'
  },
  {
    icon: MapPin,
    title: 'География строительства',
    description: 'Собственный транспортный парк позволяет оптимизировать расходы на доставку домокомплектов по всей территории России.'
  }
];

const Building: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Строим</h2>
                <p className="text-gray-600">
                  В реальном проекте дома площадью 150 м² насчитывается более 2000 деталей! 
                  Сборка такого домокомплекта требует профессионального подхода и опыта.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Игорь Смирнов</p>
                    <p className="text-sm text-gray-600">руководитель строительства</p>
                  </div>
                </div>
                
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md shadow-primary/20"
                >
                  Портфолио объектов
                </a>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-4 mb-6">
              {buildingImages.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden aspect-[4/3] group"
                >
                  <img
                    src={image}
                    alt={`Проект ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
                </div>

              <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Building;