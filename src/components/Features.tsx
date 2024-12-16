import React from 'react';
import { CheckCircle, Clock, Package, Banknote } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 45 дней благодаря современной технологии СИП панелей'
  },
  {
    icon: Package,
    title: 'Энергоэффективность',
    description: 'Экономия на отоплении до 40% по сравнению с традиционными домами'
  },
  {
    icon: Banknote,
    title: 'Доступная цена',
    description: 'Оптимальное соотношение цены и качества при строительстве'
  },
  {
    icon: CheckCircle,
    title: 'Качество и гарантия',
    description: 'Гарантия на конструкцию дома 25 лет, использование сертифицированных материалов'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Преимущества СИП домов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform -rotate-6"></div>
                <feature.icon className="w-12 h-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;