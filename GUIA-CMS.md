# 🎛️ Guía del CMS - Panel de Administración

## ¿Qué es el CMS?

**CMS = Content Management System** (Sistema de Gestión de Contenidos)

Es un panel donde puedes editar tu sitio web **sin saber programación**. Solo llenas formularios y los cambios se publican automáticamente.

---

## 🚀 Cómo acceder

### Paso 1: Activar Identity en Netlify

1. Ve a [netlify.com](https://netlify.com) y entra a tu sitio
2. Ve a la pestaña **"Identity"**
3. Click en **"Enable Identity"**
4. En **"Registration"** selecciona **"Invite only"** (solo tú puedes acceder)
5. En **"External providers"** activa **GitHub**

### Paso 2: Activar Git Gateway

1. En la misma página de Identity
2. Ve a **"Services"** → **"Git Gateway"**
3. Click en **"Enable Git Gateway"**

### Paso 3: Invitarte a ti mismo

1. En Identity, ve a la pestaña **"Users"**
2. Click en **"Invite users"**
3. Escribe tu email
4. Click **"Send"**

### Paso 4: Acceder al CMS

1. Ve a: `https://tu-sitio.netlify.app/admin`
2. Click en **"Login with GitHub"**
3. ¡Listo! Ya estás en el panel de administración

---

## 📋 Secciones del CMS

### ⚙️ Configuración General
**Para qué sirve:** Cambiar datos de contacto

**Qué puedes editar:**
- Teléfono / WhatsApp
- Email
- Ubicación
- URL de Calendly
- Horarios de atención

**Ejemplo práctico:**
```
Si cambias de número de teléfono:
1. Ve a "⚙️ Configuración General"
2. Cambia el campo "Teléfono"
3. Click "Publish"
4. ¡El nuevo número aparece en todo el sitio!
```

---

### 🏠 Hero (Página Principal)
**Para qué sirve:** Cambiar el texto principal de tu página

**Qué puedes editar:**
- Título principal (ej: "Reprograma tu Mente")
- Subtítulo
- Texto de los botones

**Ejemplo práctico:**
```
Quieres cambiar el mensaje principal:
1. Ve a "🏠 Hero"
2. Cambia "Título Principal (línea 1)"
3. Cambia "Título Destacado (línea 1)"
4. Click "Publish"
```

---

### 📊 Estadísticas
**Para qué sirve:** Actualizar los números que aparecen

**Qué puedes editar:**
- Número de vidas transformadas
- Años de experiencia
- Porcentaje de clientes satisfechos

**Ejemplo práctico:**
```
Cuando llegues a 600 clientes:
1. Ve a "📊 Estadísticas"
2. Cambia "stat1_numero" de "500+" a "600+"
3. Click "Publish"
```

---

### 🎯 Servicios
**Para qué sirve:** Agregar, editar o eliminar servicios

**Qué puedes editar:**
- Nombre del servicio
- Descripción
- Precio
- Modalidad (presencial/virtual)
- Características incluidas

**Para agregar un nuevo servicio:**
1. Ve a "🎯 Servicios"
2. Click en **"New Servicio"** (arriba a la derecha)
3. Llena todos los campos
4. Click "Publish"

**Para editar un servicio existente:**
1. Ve a "🎯 Servicios"
2. Click en el servicio que quieres editar
3. Cambia lo que necesites
4. Click "Publish"

---

### 💎 Programas y Precios
**Para qué sirve:** Gestionar tus planes de coaching

**Qué puedes editar:**
- Nombre del programa
- Descripción
- Precio mensual
- Precio trimestral
- ¿Es el más popular?
- Características incluidas

**Ejemplo práctico:**
```
Subir el precio del programa Transformación:
1. Ve a "💎 Programas y Precios"
2. Click en "transformacion"
3. Cambia "Precio Mensual" de 399 a 449
4. Cambia "Precio Trimestral" de 999 a 1099
5. Click "Publish"
```

---

### 💬 Testimonios
**Para qué sirve:** Agregar testimonios de clientes

**Qué puedes editar:**
- Nombre del cliente
- Resultado/logro
- Foto (opcional)
- Texto del testimonio
- Programa que tomó
- Calificación (1-5 estrellas)

**Para agregar un nuevo testimonio:**
1. Ve a "💬 Testimonios"
2. Click en **"New Testimonio"**
3. Llena todos los campos
4. Click "Publish"

---

### 📋 Footer
**Para qué sirve:** Cambiar el pie de página

**Qué puedes editar:**
- Texto de descripción
- Texto del newsletter

---

### 🔍 SEO (Google)
**Para qué sirve:** Mejorar cómo apareces en Google

**Qué puedes editar:**
- Título del sitio (aparece en la pestaña del navegador)
- Descripción para Google
- Palabras clave

---

## 🔄 Flujo de Trabajo

### Workflow Editorial (Cambios con revisión)

El CMS usa un sistema de "editorial workflow" que significa:

1. **Draft** (Borrador) - Haces cambios pero no se publican
2. **In Review** (En revisión) - Cambios listos para revisar
3. **Ready** (Listo) - Cambios aprobados
4. **Published** (Publicado) - Cambios en vivo

### Cómo funciona:

```
1. Entras al CMS
2. Haces cambios en algo
3. Click "Save" (Guarda como borrador)
4. Click "Set status" → "In Review"
5. Click "Publish" (¡Va a tu sitio web!)
```

---

## ⚡ Tips Rápidos

### Cambiar algo rápido:
1. Entra al CMS
2. Encuentra lo que quieres cambiar
3. Edita
4. Click **"Publish"**
5. ¡Listo en segundos!

### Ver cambios antes de publicar:
- Los cambios en "Draft" no se ven en el sitio
- Solo se ven cuando haces "Publish"

### Deshacer un cambio:
1. Ve al CMS
2. Encuentra el cambio que hiciste
3. Edita de nuevo o restaura la versión anterior
4. Click "Publish"

---

## 🆘 Solución de Problemas

### "No puedo entrar al CMS"
- Verifica que Identity esté activado en Netlify
- Verifica que Git Gateway esté activado
- Asegúrate de que tu usuario esté invitado

### "Los cambios no aparecen en el sitio"
- ¿Hiciste click en "Publish"?
- Espera 1-2 minutos (a veces tarda)
- Refresca la página (Ctrl + F5)

### "Error al guardar"
- Verifica que todos los campos obligatorios estén llenos
- Revisa que no haya caracteres especiales raros

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas con el CMS:
1. Revisa esta guía
2. Ve a la documentación oficial: [netlifycms.org](https://www.netlifycms.org)
3. Contacta soporte de Netlify

---

**¡Listo! Ahora puedes administrar tu sitio sin programar.** 🎉
