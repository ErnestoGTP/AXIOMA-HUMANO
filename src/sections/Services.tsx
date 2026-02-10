import { useEffect, useRef } from 'react';
import { Users, Video, Calendar, MessageSquare, Brain, Lightbulb, Target, Presentation, GraduationCap, UsersRound } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const mainServices = [
    {
      icon: Users,
      title: 'Coaching Presencial',
      description: 'Sesiones one-on-one en un espacio diseñado para tu transformación. Trabajo profundo con técnicas de PNL y neuro-semántica en tiempo real.',
      features: ['Ambiente privado y seguro', 'Técnicas experienciales', 'Seguimiento presencial', 'Material de apoyo'],
      color: 'from-[#00D4FF] to-[#A855F7]',
      price: 'Desde $80/sesión',
    },
    {
      icon: Video,
      title: 'Coaching Virtual',
      description: 'Transformación desde cualquier lugar del mundo. Sesiones en vivo vía video llamada con la misma profundidad y efectividad.',
      features: ['Sesiones en vivo HD', 'Flexibilidad horaria', 'Desde cualquier lugar', 'Grabaciones disponibles'],
      color: 'from-[#A855F7] to-[#EC4899]',
      price: 'Desde $60/sesión',
    },
    {
      icon: Presentation,
      title: 'Talleres Presenciales',
      description: 'Experiencias grupales intensivas para acelerar tu transformación. Aprende y practica técnicas de PNL en un ambiente dinámico.',
      features: ['Grupos reducidos', 'Material incluido', 'Práctica en vivo', 'Certificación'],
      color: 'from-[#EC4899] to-[#00D4FF]',
      price: 'Desde $150/taller',
    },
    {
      icon: GraduationCap,
      title: 'Talleres Virtuales',
      description: 'Capacitación online en vivo desde la comodidad de tu hogar. Accede a nuestros talleres desde cualquier parte del mundo.',
      features: ['Plataforma interactiva', 'Grabaciones disponibles', 'Foro de consultas', 'Material descargable'],
      color: 'from-[#00D4FF] to-[#10B981]',
      price: 'Desde $100/taller',
    },
  ];

  const additionalServices = [
    {
      icon: Lightbulb,
      title: 'Reprogramación de Creencias',
      description: 'Elimina creencias limitantes que te impiden alcanzar tu potencial.',
    },
    {
      icon: Target,
      title: 'Definición de Objetivos',
      description: 'Establece metas claras y alcanzables con técnicas de PNL.',
    },
    {
      icon: MessageSquare,
      title: 'Soporte 24/7',
      description: 'Acompañamiento constante entre sesiones para tu progreso.',
    },
    {
      icon: Calendar,
      title: 'Plan de Acción Personalizado',
      description: 'Estrategias específicas adaptadas a tus necesidades únicas.',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Brain className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-gray-300">Nuestros Servicios</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Coaching y{' '}
            <span className="text-gradient-cyan">
              Talleres
            </span>
          </h2>
          <p className="reveal opacity-0 text-lg text-gray-400 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Ofrecemos sesiones de PNL y talleres transformadores, ya sea que prefieras 
            la experiencia presencial o la comodidad del coaching online.
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className={`reveal opacity-0 group relative`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative glass rounded-2xl p-6 h-full border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gradient-cyan">{service.price}</span>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#booking');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-[#00D4FF] hover:text-[#0A0E27] transition-colors duration-300 text-sm font-medium"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="reveal opacity-0" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Servicios <span className="text-gradient-purple">Adicionales</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="glass rounded-xl p-6 text-center hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 mt-16 text-center" style={{ animationDelay: '0.5s' }}>
          <div className="glass rounded-2xl p-8 md:p-12 inline-block max-w-3xl">
            <UsersRound className="w-12 h-12 text-[#EC4899] mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tienes un grupo o empresa?
            </h3>
            <p className="text-gray-400 mb-6">
              Ofrecemos talleres corporativos personalizados. Contáctanos para diseñar 
              una experiencia transformadora para tu equipo.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg gradient-primary text-[#0A0E27] font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
