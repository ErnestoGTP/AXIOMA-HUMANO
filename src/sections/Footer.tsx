import { Heart, Instagram, Facebook, Youtube, MessageCircle, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    servicios: [
      { name: 'Coaching Presencial', href: '#services' },
      { name: 'Coaching Virtual', href: '#services' },
      { name: 'Talleres Presenciales', href: '#services' },
      { name: 'Talleres Virtuales', href: '#services' },
    ],
    programas: [
      { name: 'Descubrimiento', href: '#pricing' },
      { name: 'Transformación', href: '#pricing' },
      { name: 'Maestría', href: '#pricing' },
      { name: 'Sesión Gratis', href: '#booking' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#hero' },
      { name: 'Testimonios', href: '#testimonials' },
      { name: 'Agendar', href: '#booking' },
      { name: 'Contacto', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Youtube, label: 'YouTube', link: '#' },
    { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/5216626516705' },
  ];

  return (
    <footer className="bg-[#050817] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Axioma Humano Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-2xl font-bold text-white block">
                  Axioma <span className="text-gradient-cyan">Humano</span>
                </span>
                <span className="text-xs text-[#A855F7]">NEURO-SEMÁNTICA INTEGRAL</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transformando vidas a través de la Programación Neurolingüística 
              y Neuro-semántica Integral. Libera tu potencial y alcanza 
              la excelencia personal.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+5216626516705" className="flex items-center text-gray-400 hover:text-[#00D4FF] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>+52 1 662 651 6705</span>
              </a>
              <a href="mailto:info@axiomahumano.com" className="flex items-center text-gray-400 hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@axiomahumano.com</span>
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Hermosillo, Sonora, México</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4FF]/20 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-[#00D4FF]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programas</h4>
            <ul className="space-y-3">
              {footerLinks.programas.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Suscríbete a nuestro newsletter</h4>
              <p className="text-gray-400">Recibe tips de PNL, desarrollo personal y ofertas exclusivas.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg bg-white/5 border border-white/10 border-r-0 text-white placeholder-gray-500 focus:border-[#00D4FF] focus:outline-none"
              />
              <button className="px-6 py-3 gradient-primary text-[#0A0E27] font-semibold rounded-r-lg hover:opacity-90 transition-opacity">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Axioma Humano. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-[#0A0E27]" />
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 text-[#EC4899] mx-1 fill-[#EC4899]" /> para transformar mentes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
