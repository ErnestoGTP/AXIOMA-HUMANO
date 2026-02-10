import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Trophy, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'María González',
      role: 'Superó la ansiedad social',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'La PNL me cambió la vida. Pasé de no poder hablar en público a dar presentaciones con total confianza. Las técnicas son increíblemente efectivas.',
      program: 'Programa Transformación',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Logró sus metas profesionales',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Eliminé creencias limitantes que me impedían avanzar en mi carrera. En 3 meses conseguí el ascenso que venía postergando por años.',
      program: 'Programa Maestría',
    },
    {
      name: 'Ana Martínez',
      role: 'Transformó su relación personal',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Aprendí a comunicarme de manera efectiva y a entender mis propias emociones. Mi relación de pareja mejoró drásticamente.',
      program: 'Programa Transformación',
    },
    {
      name: 'Luis Hernández',
      role: 'Superó el miedo al fracaso',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Finalmente empecé mi propio negocio después de años de procrastinar por miedo. La reprogramación mental fue clave.',
      program: 'Programa Descubrimiento',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const results = [
    { icon: Trophy, value: '500+', label: 'Transformaciones' },
    { icon: TrendingUp, value: '95%', label: 'Alcanzan sus Metas' },
    { icon: Users, value: '98%', label: 'Clientes Satisfechos' },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Quote className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-gray-300">Testimonios</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Transformaciones{' '}
            <span className="text-gradient-purple">
              Reales
            </span>
          </h2>
          <p className="reveal opacity-0 text-lg text-gray-400 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Historias de personas que reprogramaron sus mentes y transformaron sus vidas con PNL.
          </p>
        </div>

        {/* Results Stats */}
        <div className="reveal opacity-0 grid grid-cols-3 gap-6 mb-16" style={{ animationDelay: '0.2s' }}>
          {results.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[#0A0E27]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gradient-cyan">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal opacity-0 relative" style={{ animationDelay: '0.3s' }}>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#00D4FF]"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[#0A0E27]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00D4FF] fill-[#00D4FF]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#00D4FF]">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].program}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center md:justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#00D4FF]' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="reveal opacity-0 mt-16" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Casos de <span className="text-gradient-cyan">Éxito</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Superación de Fobias', time: '6 sesiones', result: '100% Libre' },
              { name: 'Mejora de Relaciones', time: '3 meses', result: 'Vida transformada' },
              { name: 'Éxito Profesional', time: '4 meses', result: 'Promovido' },
            ].map((item) => (
              <div key={item.name} className="glass rounded-xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-[#0F1535] to-[#1A1F3D] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#A855F7]/20" />
                  <Trophy className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-400">{item.time}</span>
                    <span className="text-[#00D4FF] font-bold">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
