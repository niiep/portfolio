# Copilot Instructions - Portfolio Web

## Descripción del Proyecto

Este es un portfolio web personal premium desarrollado con **Next.js 16** (App Router), **Tailwind CSS 4** y **Framer Motion**. El proyecto presenta una interfaz moderna oscura con animaciones fluidas y componentes interactivos de clase mundial.

## Estructura de Componentes

### Componentes Principales

1. **AnimatedBackground.tsx**
   - Sistema de partículas interactivo con canvas
   - Reacción al movimiento del ratón
   - Líneas conectivas dinámicas
   - Optimizado para 60fps

2. **Navbar.tsx**
   - Barra sticky con glassmorphism
   - Logo animado `<PM />`
   - Navegación responsiva con menú hamburguesa en móviles
   - Enlaces con scroll suave

3. **HeroSection.tsx**
   - Sección principal con contenido de bienvenida
   - Badge de disponibilidad
   - Título con efecto de revelado de caracteres
   - Subtítulo con cambio dinámico de palabras
   - Botones CTA con efectos magnéticos
   - Indicador de scroll animado

## Configuración de Estilo

### Colores Personalizados (tailwind.config.ts)
- **Background**: #0B0F19 (gris oscuro profundo)
- **Accent Violet**: #a78bfa (violeta principal)
- **Accent Blue**: #60a5fa (azul eléctrico)
- **Glassmorphism**: backdrop-blur-md + bg-white/5

### Tipografía
- Font Principal: Geist Sans
- Font Mono: Geist Mono

## Convenciones de Código

### TypeScript
- Usar tipos explícitos en componentes
- Interfaces para props de componentes
- Evitar `any` - siempre especificar tipos

### Componentes React
- Todos los componentes con animaciones deben ser `'use client'`
- Usar Framer Motion para animaciones complejas
- Mantener componentes pequeños y reutilizables

### Tailwind CSS
- Usar clases de Tailwind en lugar de CSS puro
- Aprovechar extensiones personalizadas en tailwind.config.ts
- Nombres de clases semánticos

### Framer Motion
- Usar variantes para animaciones complejas
- Implementar transiciones suaves (duration >= 0.5s)
- Optimizar para rendimiento con `will-change`

## Guías de Desarrollo

### Agregar Nueva Sección
1. Crear archivo en `components/[SectionName].tsx`
2. Importar en `app/page.tsx`
3. Usar ID único en la sección (ej: `id="projects"`)
4. Agregar enlace en navbar `navItems`

### Agregar Animación
1. Usar Framer Motion `motion.div` o similar
2. Definir variantes al inicio del archivo
3. Mantener delays cortos (< 2s) para no ralentizar
4. Testar en navegadores antiguos

### Modificar Colores
1. Actualizar `tailwind.config.ts` en la sección `colors`
2. Usar variables CSS en `globals.css` para consistencia
3. Recompilar: `npm run build`

## Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Iniciar servidor compilado
npm run lint     # Ejecutar ESLint
```

## Consideraciones de Performance

- Las animaciones usan hardware acceleration
- Canvas renderizado optimizado con requestAnimationFrame
- Partículas limitadas a 50 para performance
- Framer Motion con lazy rendering automático

## Notas Importantes para Futuro Desarrollo

### Secciones Planeadas
- Sección "Sobre mí" (About)
- Galería de Proyectos (Projects)
- Sección de Certificaciones (Certifications)
- Formulario de Contacto (Contact)
- Footer con links sociales

### Best Practices a Mantener
- Mantener modo oscuro como default
- Preservar interactividad del fondo
- Usar transiciones suaves en todas las animaciones
- Garantizar accesibilidad (a11y)
- Optimizar para móviles primero

### Testing
- Probar en Chrome, Firefox, Safari, Edge
- Verificar en dispositivos móviles reales
- Testear performance con DevTools

## Tecnologías Principales

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS
- **Framer Motion 12**: Animaciones React
- **Lucide React**: Iconos
- **Canvas API**: Fondo interactivo

## Información del Autor

- **Nombre**: Pedro José Mesa
- **Rol**: Junior AI Developer @ Caleida
- **Especialidad**: Agentes de IA & Soluciones SaaS
- **Plataforma**: Web

---

**Última actualización**: 2026-06-13
