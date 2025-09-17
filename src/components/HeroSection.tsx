import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl leading-tight">
                Revolucionando a educação com
                <span className="text-blue-600 block">tecnologia inteligente</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empoderando e capacitando professores e instituições com soluções digitais inovadoras
                que melhoram as experiências de aprendizagem e simplificam a gestão educacional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('solutions')}
                className="group"
              >
                Explore nossas soluções
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('about')}
                className="group"
              >
                <Play className="mr-2 h-4 w-4" />
                Veja uma demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Escolas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Professores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Estudantes</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753613648191-4771cf76f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzk5NzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern classroom with technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
              <div className="text-sm font-medium text-primary">98% Satisfação</div>
              <div className="text-xs text-muted-foreground">Avaliado pelos professores</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
              <div className="text-sm font-medium text-primary">24/7 Support</div>
              <div className="text-xs text-muted-foreground">Sempre disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}