import React from 'react';
import { Shield, Leaf, Zap, Timer, ChevronDown, Factory, Ruler, Boxes, Scissors, Cog, Star } from 'lucide-react';
import Projects from './Projects';
import { useInView } from 'react-intersection-observer';

const advantages = [
  {
    icon: Timer,
    title: 'Быстрое строительство',
    description: 'Возведение каркасного дома занимает от 2 до 4 месяцев'
  },
  {
    icon: Shield,
    title: 'Надёжность',
    description: 'Срок службы каркасного дома при правильной эксплуатации более 100 лет'
  },
  {
    icon: Leaf,
    title: 'Экологичность',
    description: 'Используем только сертифицированные экологически чистые материалы'
  },
  {
    icon: Zap,
    title: 'Энергоэффективность',
    description: 'Экономия на отоплении до 40% благодаря современным утеплителям'
  }
];

const faqItems = [
  {
    question: 'Сколько времени занимает строительство каркасного дома?',
    answer: 'Строительство каркасного дома занимает от 2 до 4 месяцев в зависимости от сложности проекта и площади дома.'
  },
  {
    question: 'Какой срок службы каркасного дома?',
    answer: 'При правильной эксплуатации и регулярном обслуживании срок службы каркасного дома составляет более 100 лет.'
  },
  {
    question: 'Насколько теплым будет каркасный дом?',
    answer: 'Благодаря современным утеплителям и технологиям строительства, каркасные дома обладают отличной теплоизоляцией. Расходы на отопление на 40% ниже, чем в кирпичных домах.'
  },
  {
    question: 'Можно ли строить каркасный дом зимой?',
    answer: 'Да, строительство каркасных домов возможно в любое время года. Технология позволяет вести работы при температуре до -15°C.'
  },
  {
    question: 'Какие материалы используются при строительстве?',
    answer: 'Мы используем только сертифицированные материалы: высококачественный брус, OSB-плиты, современные утеплители и паро-гидроизоляционные материалы.'
  },
  {
    question: 'Нужен ли фундамент для каркасного дома?',
    answer: 'Да, фундамент необходим. Благодаря легкости конструкции можно использовать экономичные варианты: ленточный или свайно-винтовой фундамент.'
  },
  {
    question: 'Какие виды отделки возможны?',
    answer: 'Каркасные дома допускают любые виды внешней и внутренней отделки: сайдинг, штукатурка, камень, плитка, обои, панели и др.'
  },
  {
    question: 'Предоставляете ли вы гарантию?',
    answer: 'Да, мы предоставляем гарантию 5 лет на все строительные работы и конструктивные элементы дома.'
  },
  {
    question: 'Можно ли изменить типовой проект?',
    answer: 'Да, мы можем адаптировать любой типовой проект под ваши потребности или разработать индивидуальный проект.'
  },
  {
    question: 'Как происходит оплата строительства?',
    answer: 'Оплата производится поэтапно: предоплата 30%, промежуточные платежи по завершении определенных этапов работ, окончательный расчет после сдачи объекта.'
  }
];

const achievements = [
  {
    title: 'Реализовано каркасных домов:',
    value: '452 444'
  },
  {
    title: 'Построено с 2008г.:',
    value: '8 339'
  },
  {
    title: 'Объектов в 2024г.:',
    value: '6 811'
  },
  {
    title: 'Строим сегодня:',
    value: '2 013'
  }
];

const reviews = [
  {
    name: 'Александр Петров',
    project: 'Каркасный дом "Лесной"',
    date: '15 марта 2024',
    text: 'Выражаю благодарность команде за профессиональный подход к строительству нашего каркасного дома. Все работы выполнены качественно и в срок.',
    rating: 5
  },
  {
    name: 'Елена Соколова',
    project: 'Каркасный дом "Уютный"',
    date: '02 марта 2024',
    text: 'Очень довольны результатом! Дом получился теплый и комфортный. Отдельное спасибо за внимание к деталям.',
    rating: 5
  },
  {
    name: 'Дмитрий Иванов',
    project: 'Каркасный дом "Комфорт"',
    date: '25 февраля 2024',
    text: 'Построили дом для постоянного проживания. Качество материалов и сборки на высоте. Очень тепло и уютно.',
    rating: 5
  }
];

const newProjects = [
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
  }
];

const FrameHouses: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const AnimatedCounter: React.FC<{ endValue: string }> = ({ endValue }) => {
    const [count, setCount] = React.useState(0);
    const [counterRef, counterInView] = useInView({ triggerOnce: true });
    const numericValue = parseInt(endValue.replace(/\D/g, ''));

    React.useEffect(() => {
      if (counterInView) {
        const duration = 2000;
        const steps = 60;
        const stepValue = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += stepValue;
          if (current >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [counterInView, numericValue]);

    return (
      <span ref={counterRef} className="inline-block">
        {count.toLocaleString()}
      </span>
    );
  };
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80"
            alt="Каркасный дом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Каркасные дома в Москве
            </h1>
            <p className="text-xl mb-8">
              Строительство современных каркасных домов под ключ. 
              Гарантия качества, доступные цены, быстрые сроки.
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Наши достижения
          </h2>
          
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div
                    className={`h-1 w-12 bg-primary mx-auto mb-8 transition-all duration-1000 ${
                      inView ? 'w-12' : 'w-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 500}ms` }}
                  />
                  <p className="text-gray-600 mb-4">{achievement.title}</p>
                  <p className="text-4xl lg:text-5xl font-bold text-primary">
                    <AnimatedCounter endValue={achievement.value} />
                  </p>
                  <div
                    className={`h-1 w-12 bg-primary mx-auto mt-8 transition-all duration-1000 ${
                      inView ? 'w-12' : 'w-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 500}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Проектируем</h2>
                <p className="text-gray-600 text-lg">
                  Наш архитектурный отдел создаёт уникальные проекты каркасных домов, учитывая все пожелания заказчика.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Ruler className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Михаил Соколов</h3>
                    <p className="text-gray-600">главный архитектор</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Каждый проект проходит тщательную проверку на всех этапах разработки. Мы гарантируем не только красоту, но и надёжность каждого элемента конструкции."
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://postroimdom.kz/wp-content/uploads/2024/12/a-150.jpg"
                alt="Проект каркасного дома"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Производим</h2>
                <p className="text-gray-600 text-lg">
                  Собственное производство позволяет нам контролировать качество на каждом этапе и предоставлять клиентам материалы высшего класса.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Дмитрий Васильев</h3>
                    <p className="text-gray-600">директор производства</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Наше производство оснащено современным оборудованием для изготовления каркасных конструкций. Каждый элемент проходит строгий контроль качества."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Деревообработка
                </h3>
                <p className="text-gray-600">
                  Используем высококачественную древесину с влажностью до 12%. Строгий контроль качества гарантирует долговечность конструкций.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Сборка каркасов
                </h3>
                <p className="text-gray-600">
                  Применяем современные технологии и материалы для создания надежных каркасных конструкций.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Контроль качества
                </h3>
                <p className="text-gray-600">
                  Каждый этап производства проходит многоступенчатый контроль качества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Section */}
      <section className="py-24 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Строим</h2>
                  <p className="text-gray-600">
                    Строительство каркасного дома требует профессионального подхода и опыта.
                    Наша команда специализируется на каркасном домостроении более 15 лет.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    'https://postroimdom.kz/wp-content/uploads/2024/12/a-347.jpg',
                    'https://postroimdom.kz/wp-content/uploads/2024/12/a-179.jpg',
                    'https://postroimdom.kz/wp-content/uploads/2024/12/a-172.jpg',
                    'https://postroimdom.kz/wp-content/uploads/2024/12/a-165.jpg'
                  ].map((image, index) => (
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Projects */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Новые объекты</h2>
              <p className="text-gray-600 max-w-2xl">
                Следите за ходом строительства объектов в режиме реального времени.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-4 md:gap-6 animate-scroll">
              {[...newProjects, ...newProjects].map((project, index) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Отзывы</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Оставить отзыв
              </button>
              <button className="px-6 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Написать директору
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-4 md:gap-6 animate-scroll">
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px] md:w-[400px] bg-white p-4 md:p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.project}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Преимущества каркасных домов
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
      
      {/* Projects Section */}
      <Projects onProjectSelect={setSelectedProject} />
      
      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Топ-10 вопросов о каркасных домах
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

export default FrameHouses;