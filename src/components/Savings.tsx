import React from 'react';
import { Paintbrush2, Thermometer, Building2, Truck } from 'lucide-react';

const savings = [
  {
    icon: Paintbrush2,
    title: 'Экономия на обработке внутренних / внешних поверхностей, т.к.',
    description: 'не требуют дополнительного выравнивания'
  },
  {
    icon: Thermometer,
    title: 'На отоплении - в 7-8 раз меньше чем в кирпичном доме, т.к.',
    description: 'обладают высоким показателем теплоудержания.'
  },
  {
    icon: Building2,
    title: 'Экономия на фундаменте –',
    description: 'легкость конструкции позволяет использовать простой фундамент'
  },
  {
    icon: Truck,
    title: 'Экономия на грузоподъемной технике',
    description: 'при строительстве. Нет необходимости её аренды'
  }
];

const Savings: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Экономия СИП технологий
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {savings.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-8">
                <div className="relative mb-6 w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                  <div className="relative">
                    <item.icon className="w-16 h-16 text-primary transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Savings;