# Portfolio - Pedro José Mesa 🚀

Un portfolio web personal premium, responsivo e interactivo, diseñado con **Next.js 16**, **Tailwind CSS**, y **Framer Motion**. Presenta animaciones fluidas, un diseño oscuro elegante con gradientes de IA, y una experiencia de usuario de clase mundial.

## 🎨 Características Principales

### Diseño & Estética
- **Tema Oscuro Premium**: Fondo profundo (#0B0F19) con gradientes violeta/azul eléctrico
- **Glassmorphism**: Efectos de vidrio esmerilado en la navbar y componentes
- **Glow Aurora**: Efectos de luz difuminada que reflejan un ambiente tecnológico
- **Responsive Design**: Totalmente adaptable a móviles, tablets y escritorio
- **Rendimiento Óptimo**: Animaciones a 60fps con aceleración de hardware

### Componentes Principales

#### 1. **Navbar Sticky (Barra de Navegación)**
- Fondo glassmorphic con `backdrop-blur-md` y semi-transparencia
- Logo animado: `<PM />` con gradiente dinámico
- Enlaces de navegación con efectos hover elegantes
- Menú hamburguesa responsivo en móviles con animación suave
- Scroll suave hacia secciones

#### 2. **Hero Section (Sección Principal)**
- **Fondo Animado**: Canvas interactivo con partículas que reaccionan al movimiento del ratón
- Partículas conectadas con líneas dinámicas
- **Contenido Principal**:
  - Badge de disponibilidad con ícono ✨
  - Título con efecto de revelado de caracteres: "Hola, soy Pedro José Mesa"
  - Subtítulo con efecto de cambio de palabras fluido
  - Descripción con fade-in sutil
- **Botones de Acción (CTAs)**:
  - Botón primario con gradiente brillante y efecto magnético
  - Botón secundario con borde de cristal
  - Ambos con micro-animaciones al hover
- **Indicador de Scroll**: Animación de rebote en el pie

#### 3. **Fondo Animado Interactivo**
- Sistema de partículas con física realista
- Interacción al movimiento del ratón (efecto de repulsión)
- Líneas conectivas entre partículas
- Trail effect para movimiento suave
- Totalmente responsivo y optimizado

## 🛠 Tecnologías Utilizadas

```
Frontend Framework:     Next.js 16 (App Router)
UI Framework:          Tailwind CSS 4
Animaciones:           Framer Motion 12
Iconos:                Lucide React
Lenguaje:              TypeScript
Node:                  v20+
```

## 📦 Instalación & Setup

### Requisitos Previos
- Node.js 18+ (recomendado v20)
- npm o yarn

### Pasos de Instalación

```bash
# 1. Navegar al directorio del proyecto
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# Ir a http://localhost:3000
```

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev           # Inicia servidor de desarrollo

# Producción
npm run build         # Compila el proyecto
npm run start         # Inicia servidor de producción

# Linting
npm run lint          # Ejecuta ESLint

# Desarrollo con Turbopack (más rápido)
npm run dev -- --turbo
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout raíz con Navbar y AnimatedBackground
│   ├── page.tsx            # Página principal con HeroSection
│   └── globals.css         # Estilos globales y configuración
├── components/
│   ├── Navbar.tsx          # Barra de navegación sticky
│   ├── HeroSection.tsx     # Sección principal con animaciones
│   └── AnimatedBackground.tsx  # Fondo interactivo con partículas
├── tailwind.config.ts      # Configuración personalizada de Tailwind
├── postcss.config.mjs      # Configuración de PostCSS
├── tsconfig.json           # Configuración de TypeScript
├── next.config.ts          # Configuración de Next.js
└── package.json            # Dependencias del proyecto
```

## 🎯 Características de Animación

### Navbar
- Entrada suave desde arriba al cargar
- Efecto hover en enlaces con subrayado animado
- Botón de contacto con glow effect
- Menú móvil con transición fluida

### Hero Section
- Revelado de caracteres en el título
- Entrada elástica del nombre "Pedro José Mesa"
- Cambio dinámico de palabras en el subtítulo
- Botones con efecto magnético y glow pulsante
- Indicador de scroll con animación de rebote
- Fondo Aurora que respira

### Fondo Animado
- Partículas que se mueven de forma natural
- Interacción del ratón (repulsión suave)
- Líneas conectivas que aparecen dinámicamente
- Trail effect para fluidez visual
- Optimizado para no afectar el rendimiento

## 🎨 Personalización

### Colores Personalizados

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  background: '#0B0F19',      // Fondo principal
  accent: {
    violet: '#a78bfa',         // Violeta principal
    'violet-dark': '#7c3aed',  // Violeta oscuro
    blue: '#60a5fa',           // Azul eléctrico
    'blue-dark': '#3b82f6',    // Azul oscuro
    glow: '#a78bfa',           // Glow effect
  }
}
```

### Modificar Contenido

**Navbar Links** - Editar `components/Navbar.tsx`:
```typescript
const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  // Agregar más ítems...
];
```

**Información del Hero** - Editar `components/HeroSection.tsx`:
```typescript
const words = ['Inteligencia Artificial', 'Desarrollo Web', 'Soluciones SaaS'];
```

## 📱 Responsividad

- **Mobile (< 768px)**: Menú hamburguesa, layout optimizado
- **Tablet (768px - 1024px)**: Interfaz completa adaptada
- **Desktop (> 1024px)**: Experiencia completa

## 🔧 Configuración de Build

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run start
```

### Deployment

El proyecto está listo para ser desplegado en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS, Google Cloud, Azure**, etc.

## 🚨 Solución de Problemas

### Las animaciones están lentas
- Verificar que hardware acceleration esté habilitado
- Reducir número de partículas en `AnimatedBackground.tsx`
- Usar Chrome/Edge en lugar de Firefox para mejor rendimiento

### Los estilos no se aplican
- Ejecutar `npm run build` para regenerar archivos
- Limpiar `.next/` y recompilar
- Verificar que Tailwind CSS esté correctamente configurado

### Error de "Module not found"
- Ejecutar `npm install` nuevamente
- Verificar las rutas de importación con alias `@/`

## 📝 Notas Importantes

1. **SEO**: Actualizar metadata en `app/layout.tsx` con tu información personal
2. **Favicon**: Reemplazar `public/favicon.ico` con tu logo
3. **Performance**: Las animaciones usan Framer Motion que está optimizado para producción
4. **Accesibilidad**: Todos los componentes tienen labels y son keyboard-navigable

## 🎓 Próximas Secciones a Implementar

- Sección "Sobre mí"
- Galería de Proyectos
- Sección de Certificaciones
- Formulario de Contacto
- Blog o Timeline
- Footer

## 📄 Licencia

Este proyecto es personal y de código abierto. Puedes usarlo como base para tu portfolio.

## 👨‍💻 Autor

**Pedro José Mesa**
- Junior AI Developer @ Caleida
- Multi-platform Software Engineer
- Especialista en Agentes de IA & Soluciones SaaS

---

**Construido con ❤️ usando Next.js, Tailwind CSS y Framer Motion**
