import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Наши контакты</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                            <Icon name="MapPin" className="text-primary" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Адрес</h3>
                          <p className="text-muted-foreground">
                            Москва, ул. Профсоюзная, д. 123, офис 456
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                            <Icon name="Phone" className="text-primary" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Телефон</h3>
                          <p className="text-muted-foreground mb-1">
                            +7 (495) 123-45-67
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Пн-Пт: 9:00 - 18:00
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                            <Icon name="Mail" className="text-primary" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Email</h3>
                          <p className="text-muted-foreground">
                            info@filin-edu.ru
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                            <Icon name="Clock" className="text-primary" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">Время работы</h3>
                          <p className="text-muted-foreground mb-1">
                            Понедельник - Пятница: 9:00 - 18:00
                          </p>
                          <p className="text-muted-foreground">
                            Суббота - Воскресенье: выходной
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Напишите нам</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Ваше имя
                        </label>
                        <Input id="name" placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="ivan@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Телефон
                        </label>
                        <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Сообщение
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Расскажите, чем мы можем вам помочь..."
                          rows={5}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Наше расположение</h2>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Icon name="MapPin" size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Карта будет добавлена позже</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
