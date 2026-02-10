import { useEffect, useRef, useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Video, Brain, Sparkles, ExternalLink, Clock, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<'coaching' | 'taller'>('coaching');
  const [selectedType, setSelectedType] = useState<'presencial' | 'virtual'>('presencial');

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

  // URL de Calendly del usuario
  const calendlyUrl = 'https://calendly.com/ramitaptraining/coaching-pnl-virtual';

  const services = [
    {
      id: 'coaching' as const,
      icon: Brain,
      title: 'Coaching PNL',
      description: 'Sesión personalizada one-on-one',
      options: [
        { type: 'presencial' as const, label: 'Presencial', location: 'Hermosillo, Sonora', price: 'Desde $80' },
        { type: 'virtual' as const, label: 'Virtual', location: 'Vía Zoom/Meet', price: 'Desde $60' },
      ],
    },
    {
      id: 'taller' as const,
      icon: Sparkles,
      title: 'Talleres',
      description: 'Experiencias grupales transformadoras',
      options: [
        { type: 'presencial' as const, label: 'Presencial', location: 'Hermosillo, Sonora', price: 'Desde $150' },
        { type: 'virtual' as const, label: 'Virtual', location: 'Plataforma online', price: 'Desde $100' },
      ],
    },
  ];

  const currentService = services.find(s => s.id === selectedService);
  const currentOption = currentService?.options.find(o => o.type === selectedType);

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#0F1535]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <CalendarIcon className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-gray-300">Agenda tu Cita</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Reserva tu{' '}
            <span className="text-gradient-cyan">
              Sesión
            </span>
          </h2>
          <p className="reveal opacity-0 text-lg text-gray-400 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Primera sesión exploratoria <span className="text-[#00D4FF] font-semibold">GRATIS</span>. 
            Selecciona el servicio que necesitas y agenda directamente en mi calendario.
          </p>
        </div>

        {/* Service Selection */}
        <div className="reveal opacity-0 glass rounded-2xl p-6 md:p-8 mb-8" style={{ animationDelay: '0.3s' }}>
          {/* Step 1: Select Service */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-[#0A0E27] text-sm font-bold mr-3">1</span>
              ¿Qué servicio necesitas?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service.id);
                    setSelectedType('presencial');
                  }}
                  className={`flex items-center p-5 rounded-xl border-2 transition-all text-left ${
                    selectedService === service.id
                      ? 'border-[#00D4FF] bg-[#00D4FF]/10'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                    selectedService === service.id ? 'gradient-primary' : 'bg-white/10'
                  }`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Modality */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-[#0A0E27] text-sm font-bold mr-3">2</span>
              Selecciona la modalidad
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {currentService?.options.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setSelectedType(option.type)}
                  className={`flex items-center p-5 rounded-xl border-2 transition-all text-left ${
                    selectedType === option.type
                      ? 'border-[#00D4FF] bg-[#00D4FF]/10'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    selectedType === option.type ? 'gradient-primary' : 'bg-white/10'
                  }`}>
                    {option.type === 'presencial' ? (
                      <MapPin className="w-6 h-6 text-white" />
                    ) : (
                      <Video className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">{option.label}</h4>
                      <span className="text-[#00D4FF] font-bold">{option.price}</span>
                    </div>
                    <p className="text-sm text-gray-400">{option.location}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Book */}
          <div className="text-center pt-6 border-t border-white/10">
            <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block">
              <p className="text-gray-400 text-sm mb-1">Has seleccionado:</p>
              <p className="text-white font-semibold">
                {currentService?.title} {currentOption?.label} - {currentOption?.location}
              </p>
            </div>
            <div>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="px-12 py-6 text-lg font-semibold gradient-primary text-[#0A0E27] hover:opacity-90"
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Ver Disponibilidad y Agendar
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Serás redirigido a Calendly para seleccionar fecha y hora
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="reveal opacity-0 grid sm:grid-cols-3 gap-6" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Clock, title: 'Horario Flexible', desc: 'Lunes a Sábado' },
            { icon: Phone, title: 'WhatsApp Directo', desc: '+52 1 662 651 6705' },
            { icon: Mail, title: 'Confirmación Email', desc: 'Recibe todos los detalles' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[#00D4FF]" />
              </div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Alternative Contact */}
        <div className="reveal opacity-0 mt-12 text-center" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400 mb-4">¿Prefieres agendar por WhatsApp?</p>
          <a
            href="https://wa.me/5216626516705?text=Hola,%20quiero%20agendar%20una%20sesión%20de%20PNL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
