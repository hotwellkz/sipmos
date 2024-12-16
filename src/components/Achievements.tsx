import React from 'react';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'Реализовано СИП-панелей:',
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

const AnimatedCounter: React.FC<{ endValue: string }> = ({ endValue }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = React.useState(0);
  const numericValue = parseInt(endValue.replace(/\D/g, ''));

  React.useEffect(() => {
    if (inView) {
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
  }, [inView, numericValue]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}
    </span>
  );
};

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
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
  );
};

export default Achievements;