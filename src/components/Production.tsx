import React from 'react';
import { Factory, Ruler, Boxes, Scissors, Cog } from 'lucide-react';

const productionSteps = [
  {
    title: 'Деревообработка',
    description: 'Используем высококачественную древесину с влажностью до 12%. Строгий контроль качества гарантирует долговечность конструкций.'
  },
  {
    title: 'Изготовление СИП панелей',
    description: 'Применяем ОСП-3 плиты повышенной экологичности и пенополистирол ПСБ-С25Ф, соответствующий ГОСТ 15588-86.'
  },
  {
    title: 'Раскрой домокомплекта',
    description: 'Производим точный раскрой на современном оборудовании с ЧПУ. Каждый элемент соответствует проектной документации.'
  }
];

const Production: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Производим</h2>
              <p className="text-gray-600 text-lg">
                Собственное производство СИП панелей позволяет нам контролировать качество на каждом этапе и предоставлять клиентам материалы высшего класса по оптимальной цене.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cog className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Дмитрий Васильев</h3>
                  <p className="text-gray-600">директор производства</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Наше производство оснащено современным оборудованием, что позволяет обеспечивать стабильно высокое качество продукции. Каждая панель проходит многоступенчатый контроль качества."
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              Узнать больше
            </a>
          </div>

          <div className="space-y-6">
            {productionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;