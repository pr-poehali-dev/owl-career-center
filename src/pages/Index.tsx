import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const courses = [
    {
      id: 1,
      title: 'Неотложная медицинская помощь',
      category: 'Врачи',
      duration: '72 часа',
      format: 'Онлайн',
      price: '15 000 ₽',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Сестринское дело в терапии',
      category: 'Медсестры',
      duration: '144 часа',
      format: 'Онлайн',
      price: '18 000 ₽',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Управление медицинской организацией',
      category: 'Администраторы',
      duration: '256 часов',
      format: 'Онлайн',
      price: '35 000 ₽',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Клиническая лабораторная диагностика',
      category: 'Лаборанты',
      duration: '144 часа',
      format: 'Онлайн',
      price: '20 000 ₽',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Новые стандарты медицинского образования в 2025 году',
      date: '15 января 2025',
      excerpt: 'Минздрав утвердил обновленные требования к программам профессиональной переподготовки медицинских работников.',
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Открыта запись на весенний поток курсов',
      date: '10 января 2025',
      excerpt: 'Начинается набор слушателей на программы повышения квалификации. Старт занятий — 1 марта 2025.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Успешная аттестация выпускников',
      date: '5 января 2025',
      excerpt: '98% выпускников декабрьского потока успешно прошли итоговую аттестацию и получили сертификаты.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
    },
  ];

  const webinars = [
    {
      id: 1,
      title: 'Современные методы диагностики',
      speaker: 'Профессор Иванов А.В.',
      date: '20 января 2025',
      time: '14:00 МСК',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Протоколы неотложной помощи',
      speaker: 'Доктор Петрова М.И.',
      date: '25 января 2025',
      time: '16:00 МСК',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Инфекционный контроль в ЛПУ',
      speaker: 'Эпидемиолог Сидоров П.К.',
      date: '30 января 2025',
      time: '15:00 МСК',
      status: 'upcoming',
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🦉</div>
            <div>
              <h1 className="text-xl font-bold text-primary">Кадровый центр ФИЛИН</h1>
              <p className="text-xs text-muted-foreground">Профессиональное медицинское образование</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('main')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </button>
            <button onClick={() => scrollToSection('news')} className="text-sm font-medium hover:text-primary transition-colors">
              Новости
            </button>
            <button onClick={() => scrollToSection('webinars')} className="text-sm font-medium hover:text-primary transition-colors">
              Вебинары
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О центре
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
            <Button size="sm" className="ml-4">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section id="main" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Лицензированный образовательный центр</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональное развитие для медицинских специалистов
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Курсы повышения квалификации, профессиональная переподготовка и вебинары для врачей, медсестёр и администраторов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('courses')} className="text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-lg">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть вебинары
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle>Лицензия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Государственная лицензия на образовательную деятельность</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>15 000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Специалистов прошли обучение в нашем центре</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="FileCheck" size={24} className="text-primary" />
                </div>
                <CardTitle>Документы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Сертификаты и дипломы установленного образца</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Monitor" size={24} className="text-primary" />
                </div>
                <CardTitle>Онлайн</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Учитесь в удобное время из любой точки России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Актуальные программы</Badge>
            <h2 className="text-4xl font-bold mb-4">Каталог курсов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Программы повышения квалификации для разных медицинских специальностей
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="doctors">Врачи</TabsTrigger>
              <TabsTrigger value="nurses">Медсестры</TabsTrigger>
              <TabsTrigger value="admins">Администраторы</TabsTrigger>
              <TabsTrigger value="lab">Лаборанты</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <Badge className="w-fit mb-2">{course.category}</Badge>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.duration} • {course.format}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Будьте в курсе</Badge>
            <h2 className="text-4xl font-bold mb-4">Новости центра</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Актуальные события и важные объявления
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="webinars" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Бесплатные мероприятия</Badge>
            <h2 className="text-4xl font-bold mb-4">Предстоящие вебинары</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к онлайн-встречам с ведущими экспертами
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={16} />
                          <span>{webinar.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          <span>{webinar.date} в {webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      <Icon name="Video" size={16} className="mr-2" />
                      Зарегистрироваться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О Кадровом центре "Филин"</h2>
              <p className="text-xl text-muted-foreground">
                Мы специализируемся на профессиональном развитии медицинских работников
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Icon name="Target" size={32} className="text-primary mb-4" />
                  <CardTitle>Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Обеспечить доступное и качественное дополнительное профессиональное образование для медицинских специалистов, способствуя повышению уровня здравоохранения в России.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Lightbulb" size={32} className="text-primary mb-4" />
                  <CardTitle>Наши ценности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Качество образования, профессионализм преподавателей, современные методики обучения и индивидуальный подход к каждому слушателю.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-white/90">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Icon name="Phone" size={32} className="mb-4" />
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>+7 (495) 123-45-67</p>
                  <p className="text-sm text-white/70 mt-2">Пн-Пт: 9:00 - 18:00</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Icon name="Mail" size={32} className="mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>info@filin-center.ru</p>
                  <p className="text-sm text-white/70 mt-2">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <Icon name="MapPin" size={32} className="mb-4" />
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>г. Москва, ул. Медицинская, д. 15</p>
                  <p className="text-sm text-white/70 mt-2">Офис 301</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🦉</div>
              <div>
                <p className="font-semibold">Кадровый центр ФИЛИН</p>
                <p className="text-sm text-white/70">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
