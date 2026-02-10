# 📘 Guía: Subir a GitHub + Netlify

## PASO 1: Crear cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Click en **"Sign up"** (Registrarse)
3. Completa con tu email, contraseña y nombre de usuario
4. Verifica tu email

---

## PASO 2: Crear Repositorio

1. En GitHub, click en el botón **verde "New"** (o "+")
2. Escribe el nombre: `axioma-humano`
3. Selecciona **"Public"** (público)
4. **NO** marques "Add a README"
5. Click en **"Create repository"**

---

## PASO 3: Subir los Archivos

### Opción A: Por Web (Más fácil)

1. En tu nuevo repositorio, click en **"uploading an existing file"**
2. Arrastra TODOS los archivos de esta carpeta:
   - src/
   - public/
   - dist/
   - index.html
   - package.json
   - netlify.toml
   - README.md
   - Y todos los demás archivos
3. Escribe en "Commit changes": `Primer commit`
4. Click en **"Commit changes"**

### Opción B: Por Comandos (Git)

1. Abre terminal en esta carpeta
2. Ejecuta:
```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/axioma-humano.git
git push -u origin main
```

---

## PASO 4: Conectar a Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Crea cuenta (puedes usar "Sign up with GitHub")
3. En el dashboard, click **"Add new site"**
4. Selecciona **"Import an existing project"**
5. Click en **GitHub**
6. Autoriza Netlify si te lo pide
7. Busca y selecciona tu repositorio: `axioma-humano`
8. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
9. Click **"Deploy site"**

---

## PASO 5: Configurar Dominio (Opcional)

1. En Netlify, ve a tu sitio
2. Click en **"Domain settings"**
3. Click **"Add custom domain"**
4. Escribe tu dominio: `tu-dominio.com`
5. Sigue las instrucciones de DNS

---

## ✅ Verificar

Tu sitio estará en:
- **Netlify URL:** `https://axioma-humano-123456.netlify.app`
- **Tu dominio:** `https://tu-dominio.com` (si lo configuraste)

---

## 🔄 Hacer Cambios en el Futuro

1. Edita los archivos en tu computadora
2. Sube los cambios a GitHub
3. Netlify se actualiza automáticamente

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

---

## 🆘 ¿Problemas?

Si algo no funciona, revisa:
1. ¿Los archivos están en GitHub? (Ve a tu repo y verifica)
2. ¿Netlify muestra algún error en el deploy?
3. ¿La URL de Netlify es la correcta?

---

**¡Listo! Tu sitio está online.** 🎉
