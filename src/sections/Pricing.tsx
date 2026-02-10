import { useEffect, useRef, useState } from 'react';
import { Check, X, Sparkles, Crown, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const plans = [
    {
      name: 'Descubrimiento',
      icon: Star,
      description: 'Perfecto para comenzar tu viaje de transformación',
      price: { monthly: 199, quarterly: 499 },
      popular: false,
      features: [
        { text: '4 sesiones al mes', included: true },
        { text: 'Evaluación inicial', included: true },
        { text: 'Material de apoyo básico', included: true },
        { text: 'Soporte por WhatsApp', included: true },
        { text: 'Técnicas de PNL básicas', included: true },
        { text: 'Coaching 24/7', included: false },
        { text: 'Técnicas avanzadas', included: false },
      ],
      color: 'border-gray-600',
      buttonColor: 'bg-gray-700 hover:bg-gray-600',
    },
    {
      name: 'Transformación',
      icon: Zap,
      description: 'El más elegido por nuestros clientes',
      price: { monthly: 399, quarterly: 999 },
      popular: true,
      features: [
        { text: '8 sesiones al mes', included: true },
        { text: 'Evaluación profunda', included: true },
        { text: 'Material completo', included: true },
        { text: 'Soporte prioritario', included: true },
        { text: 'Técnicas de PNL avanzadas', included: true },
        { text: 'Coaching 24/7', included: true },
        { text: 'Neuro-semántica integral', included: true },
      ],
      color: 'border-[#00D4FF]',
      buttonColor: 'gradient-primary hover:opacity-90',
    },
    {
      name: 'Maestría',
      icon: Crown,
      description: 'Transformación profunda y completa',
      price: { monthly: 699, quarterly: 1799 },
      popular: false,
      features: [
        { text: '12 sesiones al mes', included: true },
        { text: 'Evaluación integral', included: true },
        { text: 'Material premium', included: true },
        { text: 'Soporte VIP prioritario', included: true },
        { text: 'Todas las técnicas PNL', included: true },
        { text: 'Coaching 24/7 VIP', included: true },
        { text: 'Sesiones de emergencia', included: true },
      ],
      color: 'border-[#EC4899]',
      buttonColor: 'bg-[#EC4899] hover:bg-[#d63d87]',
    },
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsDialogOpen(true);
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#0F1535]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-gray-300">Programas y Precios</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Invierte en tu{' '}
            <span className="text-gradient-cyan">
              Transformación
            </span>
          </h2>
          <p className="reveal opacity-0 text-lg text-gray-400 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Elige el programa que mejor se adapte a tus objetivos. Todos incluyen garantía de satisfacción.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal opacity-0 relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gradient-primary text-[#0A0E27] text-sm font-semibold px-4 py-1 rounded-full">
                    Más Popular
                  </div>
                </div>
              )}

              <div className={`glass rounded-2xl p-8 h-full border-2 ${plan.color} ${plan.popular ? 'shadow-2xl shadow-[#00D4FF]/20' : ''}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${plan.popular ? 'gradient-primary' : 'bg-white/10'} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">${plan.price.monthly}</span>
                    <span className="text-gray-400 ml-2">/mes</span>
                  </div>
                  <p className="text-sm text-[#00D4FF] mt-2">
                    ${plan.price.quarterly} por trimestre (ahorra 15%)
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-[#00D4FF] mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-6 text-lg font-semibold text-white ${plan.buttonColor} transition-all duration-300`}
                >
                  Elegir {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="reveal opacity-0 mt-16 text-center" style={{ animationDelay: '0.5s' }}>
          <div className="glass rounded-2xl p-6 inline-flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-[#00D4FF]" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Garantía de Satisfacción</h4>
              <p className="text-gray-400">30 días de garantía. Si no ves cambios, te devolvemos tu dinero.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0A0E27] border border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Programa {selectedPlan}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              Completa tus datos para comenzar tu transformación
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-sm text-gray-400 mb-2">Has seleccionado:</p>
              <p className="text-xl font-bold text-gradient-cyan">Programa {selectedPlan}</p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none"
              />
            </div>
            <Button
              onClick={() => {
                setIsDialogOpen(false);
                alert('¡Gracias! Te contactaremos pronto para agendar tu primera sesión.');
              }}
              className="w-full gradient-primary text-[#0A0E27] py-6 font-semibold"
            >
              Continuar
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Al continuar, aceptas nuestros términos y condiciones
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Pricing;
