import { Card, CardContent } from './ui/card';
import { Award, Users, Lightbulb, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Plataforma premiada",
      description: "Reconhecida pela excelência em inovação tecnológica educacional e experiência do usuário."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Impulsionado pela comunidade",
      description: "Criado com a colaboração de educadores do mundo todo para abordar desafios reais em sala de aula."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Inovação em Primeiro Lugar",
      description: "Soluções de ponta que antecipam as necessidades futuras da educação moderna"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Seguro & Confiavel",
      description: "Segurança de nível empresarial com 99,9% de tempo de atividade para proteger seus dados educacionais."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Transformando educação através da tecnologia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acreditamos que todo educador merece ferramentas que facilitem seu trabalho e que todo aluno
            merece uma experiência de aprendizagem envolvente, eficiente e certas vezes personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl">Nossa missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desde 2018, nos dedicamos a preencher a lacuna entre a educação tradicional
              e a inovação digital. Nossa equipe de educadores, desenvolvedores e designers trabalha em conjunto
              para criar soluções que realmente compreendam o ambiente da sala de aula.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Da simples gestão da rotina diária a plataformas abrangentes de aprendizagem social,
              nosso conjunto de ferramentas ajuda instituições educacionais a se adaptarem ao mundo moderno,
              mantendo a conexão humana que torna o aprendizado significativo.
            </p>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1670852714979-f73d21652a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdXNpbmclMjB0YWJsZXQlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU3OTk3MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Teacher using technology in classroom"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h4 className="text-lg">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}