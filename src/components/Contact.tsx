import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ContactProps {
  phone: string;
  whatsapp: string;
}

const Contact: React.FC<ContactProps> = ({ phone, whatsapp }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-5" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Бесплатная консультация
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Получите бесплатную консультацию
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center space-x-3 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/20 group"
            >
              <Phone className="w-6 h-6 transition-transform group-hover:rotate-12" />
              <span className="text-lg font-semibold tracking-wide">Позвонить</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
              className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#22c55e] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/20 group"
            >
              <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
              <span className="text-lg font-semibold tracking-wide">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;