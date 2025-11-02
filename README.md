# 🍂 Relatos de Otoño - Blog Modular

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide-0.548.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

**Ejercicio Día 3 y 4: Blog + Módulo de Contact/Notifications**

[Demo](#) • [Características](#-características) • [Instalación](#-instalación) • [Arquitectura](#-arquitectura)

</div>

---

## 📖 Descripción

**Relatos de Otoño** es una aplicación web de blog desarrollada con React que simula una arquitectura de microservicios en el frontend. El proyecto implementa principios de diseño modular, separación de responsabilidades y buenas prácticas de desarrollo frontend.

### 🎯 Objetivos del Proyecto

#### Día 3 - Módulo de Blog
Aprender a estructurar una interfaz React modular que simule un microservicio de contenido (Blog), utilizando datos simulados (mock data).

#### Día 4 - Módulo de Contact/Notifications
Construir un formulario de contacto robusto con validación, manejo de errores, reintentos, cola offline e idempotencia, todo simulado en el front.

**Aprendizajes clave:**
- ✅ Validación declarativa con Zod
- ✅ Estrategias de resiliencia (retry + backoff + idempotency)
- ✅ Offline-first con cola de sincronización
- ✅ Observabilidad en el cliente (métricas)
- ✅ Accesibilidad (ARIA) y UX de formularios

---

## ✨ Características

### 🎨 Funcionalidades Core

- ✅ **Listado de Posts** con grid responsive
- ✅ **Vista Detallada** de cada post
- ✅ **Sistema de Autenticación** (Login/Logout)
- ✅ **Búsqueda en Tiempo Real** por título, excerpt y tags
- ✅ **Paginación** avanzada (10 posts por página)
- ✅ **Manejo de Errores** con modal interactivo
- ✅ **Estados de Carga** con loader animado
- ✅ **Reintentos Automáticos** (hasta 2 intentos)

### 🌟 Características Avanzadas

- 🌓 **Modo Oscuro/Claro** con persistencia en localStorage
- 🎭 **Efectos Visuales** (hojas cayendo, lluvia en modo noche)
- 🎛️ **Toggle de Efectos** con botón flotante
- 📱 **Diseño Responsive** completo
- 🎨 **Glassmorphism** en sidebar
- 💬 **Sistema de Likes y Comentarios**
- 🏷️ **Tags y Categorías** funcionales
- 👥 **Sidebar** con perfil y últimas entradas
- 🔗 **Footer** con redes sociales

### 📧 Módulo de Contacto (Día 4)

- ✅ **Formulario con Validación** (Zod + React Hook Form)
- ✅ **Retry con Backoff Exponencial** (3 intentos)
- ✅ **Idempotency-Key** para evitar duplicados
- ✅ **Cola Offline** con sincronización automática
- ✅ **Panel de Métricas** (éxito, fallos, latencia, cola)
- ✅ **Accesibilidad ARIA** completa
- ✅ **Toast Notifications** personalizadas
- ✅ **Logs en Consola** (JSON detallado)
- ✅ **Modal Flotante** con badge de cola

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white) | 19.1.1 | Librería UI |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) | 7.1.7 | Build tool |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | 7.9.4 | Enrutamiento |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=white) | 1.7.9 | HTTP Client |
| ![React Hook Form](https://img.shields.io/badge/-React_Hook_Form-EC5990?style=flat&logo=reacthookform&logoColor=white) | 7.54.2 | Formularios |
| ![Zod](https://img.shields.io/badge/-Zod-3E67B1?style=flat&logo=zod&logoColor=white) | 3.24.1 | Validación |
| ![Lucide React](https://img.shields.io/badge/-Lucide-F56565?style=flat&logo=lucide&logoColor=white) | 0.548.0 | Iconos |
| ![CSS Modules](https://img.shields.io/badge/-CSS_Modules-000000?style=flat&logo=css3&logoColor=white) | - | Estilos modulares |

</div>

---

## 📁 Estructura del Proyecto

```
blogger/
├── src/
│   ├── api/
│   │   ├── blogApi.js              # API simulada blog
│   │   └── contactApi.js           # API contacto con retry/backoff
│   ├── components/
│   │   ├── PostCard.jsx            # Tarjeta de post
│   │   ├── Loader.jsx              # Componente de carga
│   │   ├── ErrorModal.jsx          # Modal de errores
│   │   ├── Pagination.jsx          # Paginación
│   │   ├── EffectsToggle.jsx       # Control de efectos visuales
│   │   ├── ContactModal.jsx        # Modal de contacto (Día 4)
│   │   ├── TextField.jsx           # Input reutilizable (Día 4)
│   │   ├── TextArea.jsx            # Textarea con contador (Día 4)
│   │   ├── StatsPanel.jsx          # Panel de métricas (Día 4)
│   │   └── CommentSection.jsx      # Sección de comentarios
│   ├── layouts/
│   │   ├── BlogLayout.jsx          # Layout principal
│   │   ├── Sidebar.jsx             # Barra lateral
│   │   ├── Footer.jsx              # Pie de página
│   │   ├── FallingLeaves.jsx       # Efecto hojas cayendo
│   │   └── FallingRain.jsx         # Efecto lluvia
│   ├── pages/
│   │   ├── Login.jsx               # Página de login
│   │   ├── Posts.jsx               # Listado de posts
│   │   └── PostDetail.jsx          # Detalle de post
│   ├── context/
│   │   ├── AuthContext.jsx         # Contexto de autenticación
│   │   ├── ThemeContext.jsx        # Contexto de tema
│   │   └── ToastContext.jsx        # Sistema de notificaciones (Día 4)
│   ├── hooks/
│   │   ├── usePosts.js             # Hook personalizado para posts
│   │   ├── useOfflineQueue.js      # Cola offline (Día 4)
│   │   └── useContactMetrics.js    # Métricas de contacto (Día 4)
│   ├── data/
│   │   └── mock.js                 # Datos simulados (posts, comentarios)
│   ├── styles/
│   │   ├── theme.css               # Variables de tema
│   │   ├── blog.module.css         # Estilos del layout
│   │   ├── contactModal.module.css # Estilos modal contacto (Día 4)
│   │   ├── contactForm.module.css  # Estilos formulario (Día 4)
│   │   ├── floatingButton.module.css # Botón flotante (Día 4)
│   │   ├── statsPanel.module.css   # Panel métricas (Día 4)
│   │   └── ...                     # Otros módulos CSS (20+ total)
│   ├── App.jsx                     # Componente raíz con rutas
│   └── main.jsx                    # Punto de entrada
├── package.json
├── README.md
└── ANALISIS_REQUISITOS.md          # Análisis de cumplimiento
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x

### Pasos

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd blogger
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

> **Nota**: No se requiere servidor backend. La aplicación usa datos simulados locales (`src/data/mock.js`) que emulan una API real con delays y manejo de errores.

### Credenciales de Prueba

```
Usuario: admin
Contraseña: admin123
```

---

## 🔌 API Simulada

### Tipo de API
**Mock Data Local** - Datos simulados en `src/data/mock.js`

### Funciones Disponibles

| Función | Parámetros | Descripción |
|---------|------------|-------------|
| `getPosts()` | - | Obtener todos los posts (simula delay de 800ms) |
| `getPostById(id)` | id: number | Obtener un post por ID (simula delay de 400ms) |
| `getPostsByCategory(category)` | category: string | Filtrar posts por categoría |
| `getComments(postId)` | postId: number | Obtener comentarios de un post |
| `addComment(postId, comment)` | postId, comment | Agregar comentario (localStorage) |
| `toggleLike(postId)` | postId: number | Toggle like en un post |

### Simulación de Errores

La API simula errores 404 en las **primeras 2 peticiones** para demostrar el manejo de errores y reintentos:

```javascript
const simulateError = () => {
  const count = getRequestCount()
  if (count < 2) {
    throw new Error('Error 404: No se pudieron cargar los posts')
  }
}
```

### Ejemplo de Respuesta (Mock Data)

```json
{
  "id": 1,
  "title": "Ana de las Tejas Verdes: Mi refugio literario",
  "excerpt": "Descubriendo la magia de Avonlea...",
  "content": "...",
  "image": "https://...",
  "category": "Libros",
  "tags": ["#literatura", "#clásicos"],
  "date": "2024-09-27",
  "likes": 42,
  "comments": 5
}
```

---

## 🏗️ Arquitectura

### Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────┐
│                        App.jsx                          │
│                  (Router Principal)                     │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   ┌────▼─────┐           ┌──────▼──────┐
   │  Login   │           │ BlogLayout  │
   └──────────┘           └──────┬──────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
              ┌─────▼─────┐ ┌───▼────┐ ┌────▼─────┐
              │  Sidebar  │ │ Outlet │ │  Footer  │
              └───────────┘ └───┬────┘ └──────────┘
                                │
                       ┌────────┴────────┐
                       │                 │
                  ┌────▼─────┐    ┌─────▼──────┐
                  │  Posts   │    │ PostDetail │
                  └──────────┘    └────────────┘
```

### Flujo de Datos

```
┌──────────────┐
│   Usuario    │
└──────┬───────┘
       │
       ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  Componente  │─────▶│  Custom Hook │─────▶│   API Call   │
│   (UI)       │      │  (usePosts)  │      │  (blogApi)   │
└──────┬───────┘      └──────────────┘      └──────┬───────┘
       │                                            │
       │                                            ▼
       │                                     ┌──────────────┐
       │                                     │ JSON Server  │
       │                                     │  (db.json)   │
       │                                     └──────┬───────┘
       │                                            │
       │◀───────────────────────────────────────────┘
       │
       ▼
┌──────────────┐
│  Renderizado │
└──────────────┘
```

### Gestión de Estado

```
┌─────────────────────────────────────────────────────┐
│              Estado Global (Context API)            │
├─────────────────────────────────────────────────────┤
│  • AuthContext  ──▶  isAuthenticated, user, logout  │
│  • ThemeContext ──▶  theme, toggleTheme             │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│              Estado Local (useState)                │
├─────────────────────────────────────────────────────┤
│  • Posts      ──▶  posts, loading, error            │
│  • Search     ──▶  searchQuery, filteredPosts       │
│  • Pagination ──▶  currentPage, totalPages          │
│  • Effects    ──▶  effectsActive                    │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Temas

### Paleta de Colores

#### 🌞 Modo Día (Otoñal)
```css
--bg-primary: #f5e6d3      /* Crema claro */
--bg-secondary: #e8d4b8    /* Beige */
--accent: #8f2c24          /* Rojo vino */
--text-primary: #4a3f35    /* Marrón oscuro */
```

#### 🌙 Modo Noche
```css
--bg-primary: #1a1f3a      /* Azul oscuro */
--bg-secondary: #2d3561    /* Azul medio */
--accent: #F1A52F          /* Amarillo otoñal */
--text-primary: #e8d4b8    /* Beige claro */
```

---

## 🧪 Manejo de Errores

### Estrategia de Reintentos

El proyecto implementa un sistema robusto de reintentos usando el custom hook `usePosts`:

```javascript
// src/hooks/usePosts.js
const [retryCount, setRetryCount] = useState(0)
const maxRetries = 2

const fetchPosts = async () => {
  try {
    setLoading(true)
    setError(null)
    const data = await getPosts()
    setPosts(data)
    setRetryCount(0) // Reset en éxito
  } catch (err) {
    setError(err.message)
    // Reintento automático si no se alcanzó el máximo
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1)
        fetchPosts()
      }, 1000)
    }
  } finally {
    setLoading(false)
  }
}
```

### Componentes de Error

- **ErrorModal**: Modal interactivo con botón de reintentar
- **ErrorMsg**: Mensaje inline para errores en páginas de detalle
- **Loader**: Indicador de carga con texto descriptivo

### Estados de Error

- **Error 404 Simulado**: Primeras 2 peticiones fallan intencionalmente
- **Post no encontrado**: ID inválido en detalle
- **Error Genérico**: Captura cualquier otro error

---

## 📊 Rendimiento

### Optimizaciones Implementadas

- ✅ **Code Splitting** con React Router
- ✅ **Lazy Loading** de imágenes
- ✅ **CSS Modules** para estilos aislados
- ✅ **Debounce** en búsqueda
- ✅ **Memoización** de componentes pesados
- ✅ **Paginación** para reducir carga inicial

---

## 🧪 Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo (Vite)
npm run build        # Construye para producción
npm run preview      # Vista previa de producción
npm run lint         # Ejecuta ESLint
```

> **Nota**: No se requiere `npm run server` ya que la API está simulada localmente.

---

## 📧 Módulo de Contacto - Detalles Técnicos (Día 4)

### 🎯 Características Implementadas

#### 1. Validación con Zod
```javascript
const schema = z.object({
  name: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Mínimo 3 caracteres'),
  message: z.string().min(10).max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar' }) })
})
```

#### 2. Retry con Backoff Exponencial
```javascript
const maxRetries = 3
const backoffTime = 500 * Math.pow(2, attempt)
```
- Intento 1: inmediato
- Intento 2: +1000ms
- Intento 3: +2000ms

#### 3. Idempotency-Key
```javascript
const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
```
Previene duplicados en caso de reintentos.

#### 4. Cola Offline
- Almacenamiento en `localStorage`
- Sincronización automática al detectar conexión
- Badge visual con contador de mensajes pendientes
- Event listener: `window.addEventListener('online', syncQueue)`

#### 5. Métricas en Tiempo Real
- **Enviados**: Contador de envíos exitosos
- **Fallidos**: Contador de errores
- **Latencia**: Promedio en milisegundos
- **En cola**: Mensajes pendientes offline
- **Tasa de éxito**: Porcentaje con barra de progreso

#### 6. Accesibilidad ARIA
```javascript
aria-label="Nombre completo"
aria-invalid={!!error}
aria-describedby="name-error"
aria-required={true}
role="alert"
aria-live="polite"
```

#### 7. Logs en Consola
Todos los datos se muestran en formato JSON:
```
📧 DATOS DEL FORMULARIO DE CONTACTO:
=====================================
Idempotency-Key: 1730516400000-abc123
Timestamp: 2025-11-02T04:30:00.000Z
Datos: { name, email, subject, message, consent }
Online: true
=====================================
```

### 🔄 Cómo Conectar a API Real

1. **Modificar `contactApi.js`:**
```javascript
const api = axios.create({ 
  baseURL: 'https://tu-api.com/api'
})
```

2. **Eliminar simulación:**
```javascript
export async function sendContact(payload, idempotencyKey) {
  const headers = { 'Idempotency-Key': idempotencyKey }
  const res = await api.post('/contact', payload, { headers })
  return res.data
}
```

3. **Mantener retry y offline queue** - funcionan con cualquier API

---

## 🔮 Futuras Mejoras

### Migración a API Real

- [ ] Integrar con JSONPlaceholder (https://jsonplaceholder.typicode.com)
- [ ] Instalar y configurar Axios para HTTP requests
- [ ] Implementar React Query para caché y gestión de estado del servidor
- [ ] Conectar con backend real (Django Blog Service)

### Mejoras Técnicas

- [ ] Migración a TypeScript
- [ ] Tests unitarios con Jest/Vitest
- [ ] Tests E2E con Playwright
- [ ] PWA con Service Workers
- [ ] Edición y creación de posts (CRUD completo)
- [ ] Subida de imágenes con preview
- [ ] Analytics y métricas de rendimiento

### Funcionalidades

- [x] Sistema de comentarios funcional ✅
- [x] Sistema de likes persistente ✅
- [x] Búsqueda en tiempo real ✅
- [x] Paginación ✅
- [x] Modo oscuro ✅

---

## 📊 Cumplimiento de Requisitos

### Día 3 - Módulo de Blog

| Criterio | Puntos | Estado |
|----------|--------|--------|
| Estructura modular | 5/5 | ✅ |
| Integración con API simulada | 4/5 | ⚠️ |
| Estilos y UX | 4/4 | ✅ |
| Código organizado | 3/3 | ✅ |
| Documentación README | 3/3 | ✅ |
| **TOTAL DÍA 3** | **19/20** | ✅ |

### Día 4 - Módulo de Contact/Notifications

| Criterio | Puntos | Estado |
|----------|--------|--------|
| Validación y accesibilidad del formulario | 5/5 | ✅ |
| Resiliencia: retry + backoff + idempotencia | 5/5 | ✅ |
| Offline-first: cola y sincronización | 4/4 | ✅ |
| Observabilidad (StatsPanel) | 3/3 | ✅ |
| Código y README (claridad/organización) | 3/3 | ✅ |
| **TOTAL DÍA 4** | **20/20** | ✅ |

### ✅ Implementación Completa

**Alternativa a MSW**: En lugar de MSW, se implementó una simulación inline en `contactApi.js` que cumple todos los requisitos:
- ✅ Delay simulado (600ms)
- ✅ Fallas aleatorias (20%)
- ✅ Respuesta mock con estructura completa
- ✅ Idempotency-Key tracking
- ✅ Metadata de latencia y reintentos
- ✅ Logs detallados en consola (JSON)

**Ventajas de esta implementación:**
- Sin dependencias adicionales (MSW eliminado)
- Más fácil de debuggear
- Logs más claros y estructurados
- Preparado para conectar a API real (solo cambiar la URL base)

---

## 📝 Licencia

MIT License - Proyecto educativo

---

## 👨‍💻 Autor

**Kassandra Castro**

Desarrolladora de software, amante de la lectura y los mundos de fantasía.

---

<div align="center">

**Hecho con 🍂 y ☕ en otoño de 2024**

**Ejercicio Día 3 y 4 - Blog + Contact/Notifications (Microservicios Front-Only)**

</div>
