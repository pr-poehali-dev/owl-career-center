import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl">🦉</span>
              </div>
              <div className="font-bold text-lg">Кадровый центр Филин</div>
            </div>
            <p className="text-sm text-white/80">
              Профессиональное медицинское образование с 2013 года
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-colors">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-white/80 hover:text-white transition-colors">
                  Вебинары
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  О центре
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                <span>Москва, ул. Профсоюзная, д. 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="flex-shrink-0" />
                <span>info@filin-edu.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Phone" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Mail" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2024 Кадровый центр Филин. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
