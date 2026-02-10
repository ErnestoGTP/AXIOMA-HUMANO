# Axioma Humano 🧠

**Programación Neurolingüística y Neuro-semántica Integral**

Sitio web profesional para coaching y talleres de PNL. Ofrece servicios presenciales en Hermosillo, Sonora y virtuales para todo el mundo.

![Axioma Humano](src/assets/images/logo.png)

## 🌐 Sitio en Vivo

**URL:** [https://axioma-humano.netlify.app](https://axioma-humano.netlify.app)

## ✨ Características

- 🎯 **Coaching PNL** - Sesiones personalizadas one-on-one
- 🏫 **Talleres** - Experiencias grupales transformadoras
- 💻 **Modalidad Virtual** - Vía Zoom/Meet desde cualquier lugar
- 📍 **Presencial** - Hermosillo, Sonora, México
- 📅 **Calendly Integrado** - Agendamiento automático
- 💬 **WhatsApp** - Botón flotante para contacto directo
- 📧 **Formularios** - Netlify Forms para recibir mensajes
- 🎛️ **CMS Integrado** - Panel de administración para editar contenido sin código

## 🛠️ Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Netlify (Hosting)
- Netlify CMS (Panel de administración)
- Calendly (Agendamiento)

## 🚀 Deploy en Netlify

### Opción 1: GitHub + Netlify (Recomendado)

1. **Crea un repositorio en GitHub**
   - Ve a [github.com](https://github.com)
   - Click "New repository"
   - Nombre: `axioma-humano`
   - Público o Privado

2. **Sube este código**
   ```bash
   git init
   git add .
   git commit -m "Primer commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/axioma-humano.git
   git push -u origin main
   ```

3. **Conecta a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Selecciona GitHub → Tu repositorio
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

### Opción 2: Drag & Drop

1. Descarga esta carpeta como ZIP
2. Ve a [netlify.com](https://netlify.com)
3. Arrastra la carpeta `dist/` al dashboard

## 📁 Estructura del Proyecto

```
axioma-humano/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── sections/       # Secciones de la página
│   ├── assets/         # Imágenes y recursos
│   └── App.tsx         # Componente principal
├── dist/               # Archivos compilados (para deploy)
├── public/             # Archivos públicos
├── index.html          # HTML principal
└── package.json        # Dependencias
```

## 📝 Configuración Personal

### Cambiar Teléfono
Edita estos archivos:
- `src/sections/Contact.tsx`
- `src/sections/Footer.tsx`
- `src/components/ui/custom/WhatsAppButton.tsx`

### Cambiar Calendly
Edita:
- `src/sections/Booking.tsx`
- Busca `calendlyUrl` y cambia la URL

### Cambiar Precios
Edita:
- `src/sections/Pricing.tsx`
- `src/sections/Services.tsx`

## 🎨 Personalización de Estilos

Los colores principales están en `src/index.css`:

```css
--ax-cyan: #00D4FF;      /* Color principal */
--ax-purple: #A855F7;    /* Color secundario */
--ax-magenta: #EC4899;   /* Color de acento */
```

## 📧 Formularios (Netlify)

Los formularios funcionan automáticamente con Netlify Forms:
- 100 envíos/mes gratis
- Notificaciones por email
- Protección anti-spam

## 🎛️ CMS - Panel de Administración

Edita tu sitio sin tocar código:

### Acceder al CMS

1. Ve a: `https://tu-sitio.netlify.app/admin`
2. Inicia sesión con GitHub
3. ¡Edita contenido en tiempo real!

### Qué puedes editar:

| Sección | Qué cambiar |
|---------|-------------|
| ⚙️ **Configuración General** | Teléfono, email, ubicación, horarios |
| 🏠 **Hero** | Título principal, subtítulo, botones |
| 📊 **Estadísticas** | Números (500+, 10+, 98%) |
| 🎯 **Servicios** | Coaching, talleres, precios |
| 💎 **Programas** | Planes y precios (Descubrimiento, Transformación, Maestría) |
| 💬 **Testimonios** | Agregar, editar o eliminar testimonios |
| 📋 **Footer** | Descripción, newsletter |
| 🔍 **SEO** | Título y descripción para Google |

### Ejemplo: Cambiar precios

1. Entra al CMS: `/admin`
2. Ve a **"💎 Programas y Precios"**
3. Click en el programa que quieres editar
4. Cambia el número en "Precio Mensual"
5. Click **"Publish"** (Publicar)
6. ¡Listo! El cambio aparece automáticamente

## 📱 WhatsApp

El botón flotante usa tu número:
- **Número:** +52 1 662 651 6705
- **Mensaje:** Predefinido para agendar sesiones

## 🔧 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## 📞 Contacto

- **Email:** info@axiomahumano.com
- **Teléfono:** +52 1 662 651 6705
- **Ubicación:** Hermosillo, Sonora, México
- **WhatsApp:** [Enviar mensaje](https://wa.me/5216626516705)

## 📄 Licencia

Este proyecto es propiedad de Axioma Humano.

---

**Hecho con ❤️ para transformar mentes**
