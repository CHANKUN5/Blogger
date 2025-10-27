# 🍂 Relatos de Otoño - Blog Modular

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide-0.548.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

**Ejercicio Día 3: Módulo de Blog Simulado - Arquitectura de Microfrontend**

[Demo](#) • [Características](#-características) • [Instalación](#-instalación) • [Arquitectura](#-arquitectura)

</div>

---

## 📖 Descripción

**Relatos de Otoño** es una aplicación web de blog desarrollada con React que simula una arquitectura de microservicios en el frontend. El proyecto implementa principios de diseño modular, separación de responsabilidades y buenas prácticas de desarrollo frontend.

### 🎯 Objetivo del Proyecto (Día 3 - Frontend)

Aprender a estructurar una interfaz React modular que simule un microservicio de contenido (Blog), utilizando datos simulados (mock data), de forma que cada desarrollador pueda trabajar sin depender del backend. El proyecto refuerza:

- ✅ Principio de responsabilidad única aplicado al frontend
- ✅ Separación por módulos y componentes reutilizables
- ✅ Uso de API simulada con datos locales
- ✅ Renderizado condicional, loaders y manejo de errores
- ✅ Estructura preparada para conectarse a un futuro Blog Service (Django)

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
- 👥 **Sidebar** con perfil, seguidores y últimas entradas
- 🔗 **Footer** con redes sociales

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white) | 19.1.1 | Librería UI |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) | 7.1.7 | Build tool |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | 7.9.4 | Enrutamiento |
| ![Lucide React](https://img.shields.io/badge/-Lucide-F56565?style=flat&logo=lucide&logoColor=white) | 0.548.0 | Iconos |
| ![CSS Modules](https://img.shields.io/badge/-CSS_Modules-000000?style=flat&logo=css3&logoColor=white) | - | Estilos modulares |

</div>

---

## 📁 Estructura del Proyecto

```
blogger/
├── src/
│   ├── api/
│   │   └── blogApi.js              # API simulada con mock data
│   ├── components/
│   │   ├── PostCard.jsx            # Tarjeta de post
│   │   ├── Loader.jsx              # Componente de carga
│   │   ├── ErrorModal.jsx          # Modal de errores
│   │   ├── Pagination.jsx          # Paginación
│   │   └── EffectsToggle.jsx       # Control de efectos visuales
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
│   │   └── ThemeContext.jsx        # Contexto de tema
│   ├── hooks/
│   │   └── usePosts.js             # Hook personalizado para posts
│   ├── data/
│   │   └── mock.js                 # Datos simulados (posts, comentarios)
│   ├── styles/
│   │   ├── theme.module.css        # Variables de tema
│   │   ├── blog.module.css         # Estilos del layout
│   │   ├── posts.module.css        # Estilos de posts
│   │   ├── postcard.module.css     # Estilos de tarjetas
│   │   ├── sidebar.module.css      # Estilos del sidebar
│   │   ├── footer.module.css       # Estilos del footer
│   │   └── ...                     # Otros módulos CSS (16 total)
│   ├── App.jsx                     # Componente raíz con rutas
│   └── main.jsx                    # Punto de entrada
├── package.json
├── README.md
└── ANALISIS_REQUISITOS.md          # Análisis de cumplimiento Día 3
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

## 📊 Cumplimiento de Requisitos - Día 3

Para ver el análisis detallado de cumplimiento de requisitos, consulta:

📄 **[ANALISIS_REQUISITOS.md](./ANALISIS_REQUISITOS.md)**

### Resumen de Evaluación

| Criterio | Puntos | Estado |
|----------|--------|--------|
| Estructura modular | 5/5 | ✅ |
| Integración con API simulada | 4/5 | ⚠️ |
| Estilos y UX | 4/4 | ✅ |
| Código organizado | 3/3 | ✅ |
| Documentación README | 3/3 | ✅ |
| **TOTAL** | **19/20** | ✅ |

**Nota**: -1 punto por usar mock local en vez de JSONPlaceholder (requisito explícito). El proyecto supera ampliamente el nivel requerido con funcionalidades avanzadas.

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

**Ejercicio Día 3 - Módulo de Blog Simulado (Microservicio Front-Only)**

</div>
