import React from 'react';
import { Shield, Leaf, Zap, Timer, Home, ChevronDown, Ruler, Banknote, Clock, Package } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Projects from './Projects';
import Achievements from './Achievements';
import Design from './Design';
import Production from './Production';
import Building from './Building';
import NewProjects from './NewProjects';
import Reviews from './Reviews';
import Contact from './Contact';

const advantages = [
  {
    icon: Timer,
    title: 'Быстрое строительство',
    description: 'Сборка модульного дома занимает всего 2-3 недели'
  },
  {
    icon: Shield,
    title: 'Надёжность',
    description: 'Заводское качество и контроль на всех этапах производства'
  },
  {
    icon: Leaf,
    title: 'Экологичность',
    description: 'Используем только сертифицированные экологичные материалы'
  },
  {
    icon: Zap,
    title: 'Мобильность',
    description: 'Возможность перемещения дома на новое место'
  }
];

const modularAdvantages = [
  {
    icon: Package,
    title: 'Готовые модули',
    description: 'Модули производятся в заводских условиях и поставляются на участок полностью готовыми к монтажу'
  },
  {
    icon: Clock,
    title: 'Скорость монтажа',
    description: 'Установка модульного дома занимает всего 2-3 недели благодаря высокой заводской готовности'
  },
  {
    icon: Ruler,
    title: 'Точность размеров',
    description: 'Производство на современном оборудовании гарантирует идеальную геометрию всех элементов'
  },
  {
    icon: Banknote,
    title: 'Экономичность',
    description: 'Модульное строительство позволяет существенно сократить затраты на строительство и отделку'
  }
];

const faqItems = [
  {
    question: 'Что такое модульный дом?',
    answer: 'Модульный дом - это современное строение, состоящее из готовых блоков-модулей, произведенных в заводских условиях. Модули полностью готовы к эксплуатации и включают все необходимые коммуникации.'
  },
  {
    question: 'Сколько времени занимает строительство?',
    answer: 'Сборка модульного дома на участке занимает 2-3 недели. Производство модулей на заводе - 4-6 недель.'
  },
  {
    question: 'Можно ли жить в модульном доме зимой?',
    answer: 'Да, модульные дома отлично подходят для круглогодичного проживания. Они имеют высокий уровень теплоизоляции и энергоэффективности.'
  },
  {
    question: 'Какой срок службы модульного дома?',
    answer: 'При правильной эксплуатации срок службы модульного дома составляет более 50 лет.'
  },
  {
    question: 'Нужен ли фундамент?',
    answer: 'Да, модульному дому требуется фундамент. Чаще всего используется свайный или ленточный фундамент.'
  },
  {
    question: 'Можно ли перевезти модульный дом?',
    answer: 'Да, это одно из главных преимуществ модульных домов. При необходимости дом можно разобрать и перевезти на новое место.'
  },
  {
    question: 'Какие материалы используются?',
    answer: 'В производстве используются современные сертифицированные материалы: металлический каркас, качественный утеплитель, влагостойкие панели и экологичная отделка.'
  },
  {
    question: 'Есть ли гарантия?',
    answer: 'Мы предоставляем гарантию 5 лет на конструкцию дома и 1 год на инженерные системы.'
  },
  {
    question: 'Можно ли изменить планировку?',
    answer: 'Да, мы можем адаптировать типовой проект под ваши потребности или разработать индивидуальный проект.'
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Оплата производится поэтапно: предоплата 30%, оплата после производства модулей, окончательный расчет после монтажа.'
  }
];

const ModularHouses: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://postroimdom.kz/wp-content/uploads/2024/11/Modulnye-doma.jpg"
            alt="Модульный дом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Модульные дома в Москве
            </h1>
            <p className="text-xl mb-8">
              Современные модульные дома под ключ с заводской гарантией качества.
              Строительство за 2-3 недели.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#projects"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Наши проекты
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <Achievements />
      
      {/* Design */}
      <Design />
      
      {/* Production */}
      <Production />
      
      {/* Building */}
      <Building />

      {/* Modular Advantages */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Особенности модульного строительства
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modularAdvantages.map((item, index) => (
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

      {/* Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Преимущества модульных домов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects */}
      <Projects onProjectSelect={setSelectedProject} />
      
      {/* New Projects */}
      <NewProjects />
      
      {/* Reviews */}
      <Reviews />
      
      {/* Contact */}
      <Contact phone="+79195825668" whatsapp="+79195825668" />
      
      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Топ-10 вопросов о модульных домах
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    openFaq === index ? 'py-4' : 'py-0 h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularHouses;