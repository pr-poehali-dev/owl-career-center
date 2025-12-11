import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '12+', label: 'Лет опыта', icon: 'Award' },
    { value: '5000+', label: 'Выпускников', icon: 'Users' },
    { value: '150+', label: 'Образовательных программ', icon: 'BookOpen' },
    { value: '98%', label: 'Удовлетворенность', icon: 'ThumbsUp' }
  ];

  const values = [
    {
      title: 'Качество образования',
      description: 'Программы разработаны ведущими специалистами и соответствуют современным стандартам',
      icon: 'GraduationCap'
    },
    {
      title: 'Практическая направленность',
      description: 'Акцент на применении знаний в реальной клинической практике',
      icon: 'Stethoscope'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Гибкие форматы обучения и персональная поддержка каждого слушателя',
      icon: 'Users'
    },
    {
      title: 'Современные технологии',
      description: 'Использование передовых методов дистанционного и смешанного обучения',
      icon: 'Laptop'
    }
  ];

  const team = [
    {
      name: 'Иванов Александр Сергеевич',
      position: 'Руководитель центра',
      degree: 'Доктор медицинских наук, профессор',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Петрова Мария Владимировна',
      position: 'Научный руководитель',
      degree: 'Кандидат медицинских наук',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    {
      name: 'Смирнов Дмитрий Андреевич',
      position: 'Методист',
      degree: 'Кандидат медицинских наук',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">О центре</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Профессиональное медицинское образование с 2013 года
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Кадровый центр «Филин» — ведущая образовательная организация, специализирующаяся 
                на программах повышения квалификации и профессиональной переподготовки медицинских работников.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Мы стремимся обеспечить медицинских специалистов актуальными знаниями и практическими 
                навыками, необходимыми для эффективной работы в современной системе здравоохранения.
              </p>
              <p className="text-lg text-muted-foreground">
                Наши программы соответствуют требованиям непрерывного медицинского образования и 
                признаются профессиональным сообществом на всей территории Российской Федерации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Icon name={stat.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                          <Icon name={value.icon as any} className="text-secondary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary font-medium mb-2">{member.position}</p>
                    <p className="text-xs text-muted-foreground">{member.degree}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Лицензия и аккредитация</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Кадровый центр «Филин» имеет лицензию на осуществление образовательной деятельности 
              и аккредитован Минздравом России для реализации программ дополнительного 
              профессионального образования медицинских работников.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Лицензия № 12345 от 15.03.2013</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Аккредитация Минздрава России</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Член ассоциации медицинских образовательных организаций</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
