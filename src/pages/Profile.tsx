import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const userCourses = [
    {
      id: 1,
      title: 'Современные методы диагностики в терапии',
      progress: 75,
      status: 'В процессе',
      deadline: '20 января 2025'
    },
    {
      id: 2,
      title: 'ЭКГ: от основ до мастерства',
      progress: 100,
      status: 'Завершен',
      completedDate: '15 ноября 2024',
      certificate: true
    }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'Актуальные вопросы кардиологии 2025',
      date: '15 декабря 2024',
      time: '14:00'
    },
    {
      id: 2,
      title: 'Современная диагностика неврологических патологий',
      date: '18 декабря 2024',
      time: '16:00'
    }
  ];

  const certificates = [
    {
      id: 1,
      course: 'ЭКГ: от основ до мастерства',
      date: '15 ноября 2024',
      hours: '30 часов',
      number: 'ФЛ-2024-001234'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                ИИ
              </div>
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">Иван Иванов</h1>
                <p className="text-muted-foreground">Врач-терапевт</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-8">
                <TabsTrigger value="courses">Мои курсы</TabsTrigger>
                <TabsTrigger value="webinars">Вебинары</TabsTrigger>
                <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-4">
                <h2 className="text-2xl font-bold text-primary mb-4">Текущие курсы</h2>
                {userCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                          <Badge variant={course.status === 'Завершен' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                        </div>
                        {course.certificate && (
                          <Button variant="outline" size="sm">
                            <Icon name="Download" size={16} className="mr-2" />
                            Сертификат
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {course.status === 'В процессе' ? (
                        <>
                          <div className="mb-2">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Прогресс</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            Завершить до: {course.deadline}
                          </p>
                          <Button className="mt-4">Продолжить обучение</Button>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Завершено: {course.completedDate}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="webinars" className="space-y-4">
                <h2 className="text-2xl font-bold text-primary mb-4">Мои регистрации</h2>
                {upcomingWebinars.map((webinar) => (
                  <Card key={webinar.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-3">{webinar.title}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Calendar" size={16} />
                              <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Clock" size={16} />
                              <span>{webinar.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button>
                          <Icon name="Video" size={16} className="mr-2" />
                          Присоединиться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="certificates" className="space-y-4">
                <h2 className="text-2xl font-bold text-primary mb-4">Мои сертификаты</h2>
                {certificates.map((cert) => (
                  <Card key={cert.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">{cert.course}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Дата выдачи: {cert.date}</p>
                            <p>Объем: {cert.hours}</p>
                            <p>Номер: {cert.number}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Просмотр
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Личная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Фамилия</label>
                        <p className="text-muted-foreground">Иванов</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Имя</label>
                        <p className="text-muted-foreground">Иван</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-muted-foreground">ivan@example.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Телефон</label>
                        <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Специальность</label>
                        <p className="text-muted-foreground">Врач-терапевт</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Регион</label>
                        <p className="text-muted-foreground">Москва</p>
                      </div>
                    </div>
                    <Button>Редактировать профиль</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
