import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Brain, Sparkles, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D4FF]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm text-gray-300">Programación Neurolingüística</span>
            </div>

            {/* Main Heading */}
            <h1 className="reveal opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ animationDelay: '0.1s' }}>
              Reprograma tu{' '}
              <span className="text-gradient-cyan">
                Mente
              </span>{' '}
              Transforma tu{' '}
              <span className="text-gradient-purple">
                Vida
              </span>
            </h1>

            {/* Subtitle */}
            <p className="reveal opacity-0 text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
              Descubre el poder de la PNL y la Neuro-semántica Integral. 
              Sesiones personalizadas presenciales y virtuales para liberar 
              tu potencial y alcanzar la excelencia personal.
            </p>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('#booking')}
                className="gradient-primary text-[#0A0E27] border-0 hover:opacity-90 text-lg px-8 py-6 animate-pulse-glow group font-semibold"
              >
                Sesión Exploratoria Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#services')}
                className="border-[#00D4FF]/30 text-white hover:bg-[#00D4FF]/10 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                Conoce Más
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 grid grid-cols-3 gap-6" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyan">500+</div>
                <div className="text-sm text-gray-400">Vidas Transformadas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient-purple">10+</div>
                <div className="text-sm text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#EC4899]">98%</div>
                <div className="text-sm text-gray-400">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="reveal opacity-0 space-y-4" style={{ animationDelay: '0.2s' }}>
              <div className="glass rounded-2xl p-6 animate-float">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-[#0A0E27]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Reprogramación Mental</h3>
                <p className="text-sm text-gray-400">Elimina creencias limitantes y patrones negativos que te impiden avanzar.</p>
              </div>
              <div className="glass rounded-2xl p-6 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-[#A855F7] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Alcance de Objetivos</h3>
                <p className="text-sm text-gray-400">Define y alcanza metas claras con técnicas probadas de PNL avanzada.</p>
              </div>
            </div>
            <div className="reveal opacity-0 space-y-4 pt-8" style={{ animationDelay: '0.4s' }}>
              <div className="glass rounded-2xl p-6 animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-xl bg-[#0F1535] border border-[#00D4FF]/30 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Claridad Mental</h3>
                <p className="text-sm text-gray-400">Desarrolla pensamiento estratégico y toma de decisiones consciente.</p>
              </div>
              <div className="glass rounded-2xl p-6 animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Bienestar Integral</h3>
                <p className="text-sm text-gray-400">Equilibra mente, emociones y comportamiento para una vida plena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent" />
    </section>
  );
};

export default Hero;
