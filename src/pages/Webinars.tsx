import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'live' | 'recorded';
  participants: number;
  description: string;
}

const Webinars = () => {
  const webinars: Webinar[] = [
    {
      id: 1,
      title: 'Актуальные вопросы кардиологии 2025',
      speaker: 'Профессор Иванов А.С.',
      date: '15 декабря 2024',
      time: '14:00',
      duration: '90 минут',
      status: 'upcoming',
      participants: 156,
      description: 'Разбор клинических случаев и новейших подходов к лечению сердечно-сосудистых заболеваний'
    },
    {
      id: 2,
      title: 'Современная диагностика неврологических патологий',
      speaker: 'Доктор Петрова М.В.',
      date: '18 декабря 2024',
      time: '16:00',
      duration: '120 минут',
      status: 'upcoming',
      participants: 203,
      description: 'Инструментальные методы и дифференциальная диагностика'
    },
    {
      id: 3,
      title: 'Неотложная помощь в педиатрии',
      speaker: 'Кандидат мед. наук Смирнов Д.А.',
      date: '20 декабря 2024',
      time: '15:00',
      duration: '60 минут',
      status: 'upcoming',
      participants: 178,
      description: 'Практические алгоритмы оказания неотложной помощи детям'
    },
    {
      id: 4,
      title: 'Инфекционные заболевания: что нужно знать врачу',
      speaker: 'Профессор Волкова Е.И.',
      date: '5 декабря 2024',
      time: '14:00',
      duration: '90 минут',
      status: 'recorded',
      participants: 342,
      description: 'Эпидемиология, диагностика и профилактика инфекционных болезней'
    },
    {
      id: 5,
      title: 'Хирургические осложнения и их профилактика',
      speaker: 'Доктор Козлов В.П.',
      date: '28 ноября 2024',
      time: '16:00',
      duration: '120 минут',
      status: 'recorded',
      participants: 289,
      description: 'Разбор типичных осложнений и методы их предупреждения'
    },
    {
      id: 6,
      title: 'ЭКГ в практике терапевта',
      speaker: 'Кандидат мед. наук Соколова Н.Р.',
      date: '22 ноября 2024',
      time: '15:00',
      duration: '90 минут',
      status: 'recorded',
      participants: 421,
      description: 'Интерпретация ЭКГ и распознавание патологий'
    }
  ];

  const getStatusBadge = (status: Webinar['status']) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-red-500">В эфире</Badge>;
      case 'upcoming':
        return <Badge className="bg-accent">Скоро</Badge>;
      case 'recorded':
        return <Badge variant="secondary">Запись</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Вебинары</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Онлайн-встречи с ведущими специалистами в области медицины
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Предстоящие вебинары</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {webinars.filter(w => w.status === 'upcoming').map((webinar) => (
                  <Card key={webinar.id} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        {getStatusBadge(webinar.status)}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {webinar.participants}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="User" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.time} • {webinar.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{webinar.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Зарегистрироваться</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Записи вебинаров</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.filter(w => w.status === 'recorded').map((webinar) => (
                  <Card key={webinar.id} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        {getStatusBadge(webinar.status)}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {webinar.participants}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="User" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{webinar.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{webinar.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Icon name="Play" size={16} className="mr-2" />
                        Смотреть запись
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Webinars;
