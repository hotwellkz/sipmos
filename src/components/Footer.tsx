import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">СИП-СТРОЙ</h3>
            <p className="mb-4">
              Строительство современных домов из СИП панелей в Москве и Московской области
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  СИП дома
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="/frame-houses" className="hover:text-white transition-colors">
                  Каркасные дома
                </a>
              </li>
              <li>
                <a href="/modular-houses" className="hover:text-white transition-colors">
                  Модульные дома
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li>Москва и Московская область</li>
              <li>
                <a href="tel:+79195825668" className="hover:text-white transition-colors">
                  +7 (919) 582-56-68
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} СИП-СТРОЙ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;