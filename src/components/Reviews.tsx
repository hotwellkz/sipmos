import React from 'react';
import { Star } from 'lucide-react';
import FeedbackForm from './FeedbackForm';

const reviews = [
  {
    name: 'Александр Петров',
    project: 'Проект "Лесной"',
    date: '15 марта 2024',
    text: 'Выражаю искреннюю благодарность команде СИП-СТРОЙ за качественную работу и профессиональный подход. Дом построили точно в срок, все работы выполнены на высшем уровне.',
    rating: 5
  },
  {
    name: 'Елена Соколова',
    project: 'Проект "Уютный"',
    date: '02 марта 2024',
    text: 'Очень довольны результатом! Особенно порадовала скорость строительства и внимание к деталям. Отдельное спасибо прорабу за постоянную обратную связь.',
    rating: 5
  },
  {
    name: 'Дмитрий Иванов',
    project: 'Проект "Комфорт"',
    date: '25 февраля 2024',
    text: 'Строили дом для постоянного проживания. Качество материалов и сборки на высоте. Уже живем несколько месяцев - очень тепло и комфортно.',
    rating: 5
  },
  {
    name: 'Мария Козлова',
    project: 'Проект "Премиум"',
    date: '10 февраля 2024',
    text: 'Благодарим команду за профессионализм и ответственный подход к работе. Все этапы строительства были выполнены четко по графику.',
    rating: 5
  }
];

const Reviews: React.FC = () => {
  const [isReviewFormOpen, setIsReviewFormOpen] = React.useState(false);
  const [isDirectorFormOpen, setIsDirectorFormOpen] = React.useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Отзывы</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsReviewFormOpen(true)}
              className="px-6 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Оставить отзыв
            </button>
            <button
              onClick={() => setIsDirectorFormOpen(true)}
              className="px-6 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
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
      <FeedbackForm
        isOpen={isReviewFormOpen}
        onClose={() => setIsReviewFormOpen(false)}
        type="review"
      />
      <FeedbackForm
        isOpen={isDirectorFormOpen}
        onClose={() => setIsDirectorFormOpen(false)}
        type="director"
      />
    </section>
  );
};

export default Reviews;