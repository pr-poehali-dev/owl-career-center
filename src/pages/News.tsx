import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Новые стандарты непрерывного медицинского образования в 2025 году',
      date: '5 декабря 2024',
      category: 'Образование',
      excerpt: 'Минздрав утвердил обновленные требования к программам НМО для медицинских работников',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Открыта регистрация на зимнюю сессию повышения квалификации',
      date: '1 декабря 2024',
      category: 'Анонсы',
      excerpt: 'Доступны 15 новых программ по актуальным направлениям медицины',
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Успешное завершение курса по интервенционной кардиологии',
      date: '28 ноября 2024',
      category: 'События',
      excerpt: '45 специалистов получили сертификаты о прохождении углубленного курса',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Партнерство с ведущими клиниками России',
      date: '20 ноября 2024',
      category: 'Партнерство',
      excerpt: 'Кадровый центр Филин заключил соглашения с 12 федеральными медицинскими центрами',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Запуск онлайн-платформы для дистанционного обучения',
      date: '15 ноября 2024',
      category: 'Технологии',
      excerpt: 'Новая система позволяет проходить курсы в удобное время с любого устройства',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Конференция "Медицинское образование: вызовы и перспективы"',
      date: '10 ноября 2024',
      category: 'События',
      excerpt: 'В мероприятии приняли участие более 200 специалистов из 45 регионов России',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Новости</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Актуальные события и обновления образовательного центра
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
