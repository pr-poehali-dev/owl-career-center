import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  price: string;
  level: string;
  description: string;
}

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Терапия', 'Хирургия', 'Педиатрия', 'Неврология', 'Кардиология'];

  const courses: Course[] = [
    {
      id: 1,
      title: 'Современные методы диагностики в терапии',
      category: 'Терапия',
      duration: '40 часов',
      price: '15 000 ₽',
      level: 'Базовый',
      description: 'Курс по современным подходам к диагностике терапевтических заболеваний'
    },
    {
      id: 2,
      title: 'Эндоскопическая хирургия',
      category: 'Хирургия',
      duration: '60 часов',
      price: '25 000 ₽',
      level: 'Продвинутый',
      description: 'Практический курс по эндоскопическим операциям'
    },
    {
      id: 3,
      title: 'Неотложная педиатрия',
      category: 'Педиатрия',
      duration: '35 часов',
      price: '18 000 ₽',
      level: 'Средний',
      description: 'Оказание неотложной помощи детям различного возраста'
    },
    {
      id: 4,
      title: 'Клиническая неврология',
      category: 'Неврология',
      duration: '50 часов',
      price: '20 000 ₽',
      level: 'Базовый',
      description: 'Основы диагностики и лечения неврологических заболеваний'
    },
    {
      id: 5,
      title: 'Интервенционная кардиология',
      category: 'Кардиология',
      duration: '55 часов',
      price: '28 000 ₽',
      level: 'Продвинутый',
      description: 'Современные методы лечения сердечно-сосудистых заболеваний'
    },
    {
      id: 6,
      title: 'ЭКГ: от основ до мастерства',
      category: 'Кардиология',
      duration: '30 часов',
      price: '12 000 ₽',
      level: 'Базовый',
      description: 'Комплексное изучение электрокардиографии'
    }
  ];

  const filteredCourses = selectedCategory === 'Все'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Каталог курсов</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Профессиональные программы повышения квалификации для медицинских специалистов
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{course.level}</span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button>Подробнее</Button>
                  </CardFooter>
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

export default Courses;
