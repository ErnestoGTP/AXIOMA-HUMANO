import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono / WhatsApp',
      value: '+52 1 662 651 6705',
      link: 'tel:+5216626516705',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@axiomahumano.com',
      link: 'mailto:info@axiomahumano.com',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Hermosillo, Sonora, México',
      link: 'https://maps.google.com/?q=Hermosillo,Sonora',
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Youtube, label: 'YouTube', link: '#' },
    { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/5216626516705' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <MessageCircle className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-gray-300">Contacto</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Empecemos tu{' '}
            <span className="text-gradient-cyan">
              Transformación
            </span>
          </h2>
          <p className="reveal opacity-0 text-lg text-gray-400 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            ¿Tienes preguntas? Contáctanos y descubre cómo la PNL puede cambiar tu vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Netlify Forms */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              
              {/* Netlify Form */}
              <form 
                name="contacto-axioma"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot para evitar spam */}
                <input type="hidden" name="form-name" value="contacto-axioma" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    placeholder="+52 (662) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tus objetivos y desafíos..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-[#0A0E27] py-6 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="reveal opacity-0 space-y-8" style={{ animationDelay: '0.4s' }}>
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="flex items-center p-6 glass rounded-xl hover:border-[#00D4FF]/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mr-4 group-hover:bg-[#00D4FF]/30 transition-colors">
                    <item.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">{item.title}</h4>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5216626516705?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20PNL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 glass rounded-xl hover:border-[#25D366]/50 transition-all duration-300 group bg-gradient-to-r from-[#25D366]/10 to-transparent"
            >
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center mr-4 group-hover:bg-[#25D366]/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm text-gray-400">Escríbenos por WhatsApp</h4>
                <p className="text-lg font-semibold text-white">+52 1 662 651 6705</p>
                <p className="text-sm text-[#25D366]">Respuesta inmediata</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00D4FF]/20 hover:scale-110 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-[#00D4FF]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Horario de Atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Lunes - Viernes</span>
                  <span className="text-white">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sábados</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Domingos</span>
                  <span className="text-white">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="bg-[#0A0E27] border border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              ¡Mensaje Enviado!
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              Gracias por contactarnos
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#00D4FF]" />
            </div>
            <p className="text-gray-300">
              Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="w-full gradient-primary text-[#0A0E27] py-6 font-semibold"
            >
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
