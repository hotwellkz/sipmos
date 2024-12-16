import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const teamPhotos = [
  'https://postroimdom.kz/wp-content/uploads/2024/12/v-157.jpg',
  'https://postroimdom.kz/wp-content/uploads/2024/12/v-161.jpg',
  'https://postroimdom.kz/wp-content/uploads/2024/12/v-162.jpg'
];

const features = [
  {
    text: 'Лучшие сотрудники компании готовы в любое время, в независимости времени года, выехать на монтаж дома практически в любую точку страны и мира.'
  },
  {
    text: 'Мы строили дома в Ямало-Ненецком округе, Крыму, Сочи, Белоруссии, Казахстане, Грузии.'
  },
  {
    text: 'Дом 150 кв.м. построим всего за 2 недели.'
  },
  {
    text: 'Для проживания бригады на объекте возводится быстросборная бытовка, которую можно впоследствии использовать как хозпомещение.'
  }
];

const MobileTeam: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = React.useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % teamPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Мобильная бригада по россии и зарубежью
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={teamPhotos[currentPhoto]}
                alt="Мобильная бригада"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg">{feature.text}</p>
              </div>
            ))}
            
            <a
              href="#contact"
              className="inline-block btn-primary mt-8"
            >
              ПОДРОБНЕЕ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTeam;