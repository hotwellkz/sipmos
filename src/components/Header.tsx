import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ phone }) => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">СИП-СТРОЙ</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
            Преимущества
          </a>
          <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">
            Проекты
          </a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden md:inline">{phone}</span>
          </a>
          <a
            href={`https://wa.me/${phone.replace(/\D/g, '')}`}
            className="btn-primary flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;