# 🍂 Relatos de Otoño - Blog Modular

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.7.9-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.1.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

**Aplicación de blog modular con arquitectura de microfrontend simulado**

[Demo](#) • [Características](#-características) • [Instalación](#-instalación) • [Arquitectura](#-arquitectura)

</div>

---

## 📖 Descripción

**Relatos de Otoño** es una aplicación web de blog desarrollada con React que simula una arquitectura de microservicios en el frontend. El proyecto implementa principios de diseño modular, separación de responsabilidades y buenas prácticas de desarrollo frontend.

### 🎯 Objetivo del Proyecto

Estructurar una interfaz React modular que simule un microservicio de contenido (Blog), utilizando una API local simulada, permitiendo el desarrollo independiente del backend.

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
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white) | 18.3.1 | Librería UI |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) | 6.0.5 | Build tool |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=white) | 1.7.9 | Cliente HTTP |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | 7.1.1 | Enrutamiento |
| ![Lucide React](https://img.shields.io/badge/-Lucide-F56565?style=flat&logo=lucide&logoColor=white) | 0.468.0 | Iconos |
| ![CSS Modules](https://img.shields.io/badge/-CSS_Modules-000000?style=flat&logo=css3&logoColor=white) | - | Estilos |

</div>

---

## 📁 Estructura del Proyecto

```
blogger/
├── src/
│   ├── api/
│   │   └── blogApi.js              # Configuración de Axios y endpoints
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
│   ├── styles/
│   │   ├── theme.module.css        # Variables de tema
│   │   ├── blog.module.css         # Estilos del layout
│   │   ├── posts.module.css        # Estilos de posts
│   │   ├── postcard.module.css     # Estilos de tarjetas
│   │   ├── sidebar.module.css      # Estilos del sidebar
│   │   ├── footer.module.css       # Estilos del footer
│   │   └── ...                     # Otros módulos CSS
│   ├── App.jsx                     # Componente raíz
│   └── main.jsx                    # Punto de entrada
├── db.json                         # Base de datos simulada (JSON Server)
├── package.json
└── README.md
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

4. **Iniciar la API simulada** (en otra terminal)

```bash
npm run server
```

5. **Abrir en el navegador**

```
http://localhost:5173
```

### Credenciales de Prueba

```
Usuario: admin
Contraseña: admin123
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3001
```

### Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/posts` | Obtener todos los posts |
| GET | `/posts/:id` | Obtener un post por ID |
| GET | `/posts?_page=1&_limit=10` | Paginación |

### Ejemplo de Respuesta

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

```javascript
const fetchPosts = async () => {
  let attempts = 0
  const maxAttempts = 3
  
  while (attempts < maxAttempts) {
    try {
      const response = await getPosts()
      return response.data
    } catch (error) {
      attempts++
      if (attempts === maxAttempts) {
        throw error
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}
```

### Estados de Error

- **Error 404**: No se encontraron posts
- **Error de Red**: Problema de conexión
- **Timeout**: Servidor no responde
- **Error Genérico**: Otros errores

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
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de producción
npm run server       # Inicia JSON Server (API simulada)
npm run lint         # Ejecuta ESLint
```

---

## 🔮 Futuras Mejoras

- [ ] Migración a TypeScript
- [ ] Tests unitarios con Jest
- [ ] Tests E2E con Playwright
- [ ] PWA con Service Workers
- [ ] Integración con backend real (Django)
- [ ] Sistema de comentarios funcional
- [ ] Edición y creación de posts
- [ ] Subida de imágenes
- [ ] Analytics y métricas

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

</div>
