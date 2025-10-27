export const mockData = {
  users: [
    { id: 1, username: 'usuario', password: '123456', name: 'Usuario' },
    { id: 2, username: 'demo', password: 'demo', name: 'Demo User' }
  ],
  
  followers: [
    { id: 1, name: 'Ana García', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Carlos Ruiz', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Laura Mendoza', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Pedro Silva', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Sofia Torres', avatar: 'https://i.pravatar.cc/150?img=5' }
  ],
  
  posts: [
    {
      id: 1,
      title: 'Ana de las Tejas Verdes: Mi refugio literario',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop',
      excerpt: 'Descubriendo la magia de Avonlea y el mundo de Anne Shirley, una historia que nunca envejece.',
      content: `Anne Shirley llegó a mi vida en un momento perfecto. Esta huérfana pelirroja con una imaginación desbordante me enseñó que los sueños y la creatividad pueden transformar la realidad más gris.

Lucy Maud Montgomery creó un universo donde la amistad, el crecimiento personal y la belleza de la naturaleza se entrelazan magistralmente. Avonlea no es solo un lugar, es un refugio para el alma.

La evolución de Anne, desde una niña parlanchina hasta una joven maestra, refleja nuestro propio viaje de autodescubrimiento. Sus errores, sus triunfos y su inquebrantable optimismo la convierten en una de las heroínas más entrañables de la literatura.

Recomiendo esta saga a todos los que buscan una lectura que reconforta, inspira y nos recuerda la importancia de mantener viva la chispa de la imaginación.`,
      date: '2024-10-20',
      tags: ['literatura', 'clásicos', 'reseña'],
      likes: 42,
      commentCount: 5
    },
    {
      id: 2,
      title: 'Narnia: Un mundo más allá del armario',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=400&fit=crop',
      excerpt: 'C.S. Lewis y su universo mágico que trasciende generaciones y nos invita a creer en lo imposible.',
      content: `Las Crónicas de Narnia son más que libros de fantasía infantil. Representan una puerta hacia un mundo donde el bien y el mal están claramente definidos, pero el camino entre ellos está lleno de matices.

Aslan, el gran león, es uno de los personajes más poderosos de la literatura fantástica. Su sacrificio y resurrección en "El León, la Bruja y el Armario" continúan emocionándome cada vez que los leo.

Lo que más admiro de Lewis es su habilidad para tejer lecciones profundas sobre valentía, lealtad y redención en historias aparentemente simples. Cada visita a Narnia revela nuevas capas de significado.

Para quienes buscan escapar a un mundo de aventuras épicas con un corazón genuino, Narnia siempre será un hogar al que regresar.`,
      date: '2024-10-18',
      tags: ['fantasía', 'reseña', 'aventura'],
      likes: 38,
      commentCount: 4
    },
    {
      id: 3,
      title: 'El Señor de los Anillos: Un viaje épico',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      excerpt: 'Tolkien y la Tierra Media: una obra maestra que redefinió la fantasía épica para siempre.',
      content: `Sumergirse en El Señor de los Anillos es emprender un viaje que cambia al lector. Tolkien no solo creó una historia, construyó un mundo completo con idiomas, historia y mitología propios.

La Comunidad del Anillo nos enseña sobre amistad verdadera, sacrificio y el poder de los pequeños actos. Frodo y Sam demuestran que no necesitas ser poderoso para ser un héroe.

Lo que distingue esta obra es su profundidad moral. La lucha contra el poder corruptor del Anillo Único refleja nuestras propias batallas internas contra la tentación y la oscuridad.

Cada relectura revela nuevos detalles, nuevas conexiones. Esta es una saga que merece ser experimentada lentamente, saboreando cada palabra del profesor Tolkien.`,
      date: '2024-10-15',
      tags: ['épica', 'aventura', 'fantasía'],
      likes: 56,
      commentCount: 7
    },
    {
      id: 4,
      title: 'Harry Potter: La magia que nos unió',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=400&fit=crop',
      excerpt: 'J.K. Rowling creó una generación de lectores que crecimos junto a Harry en Hogwarts.',
      content: `Harry Potter fue más que una serie de libros, fue un fenómeno cultural que definió mi adolescencia. Crecer junto a Harry, Ron y Hermione fue una experiencia que marcó a toda una generación.

Lo brillante de Rowling es cómo la serie madura con sus lectores. Los primeros libros son aventuras mágicas ligeras, pero gradualmente exploran temas más oscuros: muerte, sacrificio, corrupción del poder.

Hogwarts se convirtió en un segundo hogar para millones de lectores. La idea de encontrar tu lugar, de pertenecer a algo más grande que tú mismo, resonó profundamente en quienes nos sentíamos diferentes.

Más allá de la magia y los hechizos, Harry Potter nos enseñó sobre el valor de la amistad, la importancia de elegir entre lo correcto y lo fácil, y que el amor es la magia más poderosa de todas.`,
      date: '2024-10-13',
      tags: ['fantasía', 'juvenil', 'magia'],
      likes: 67,
      commentCount: 9
    },
    {
      id: 5,
      title: 'Orgullo y Prejuicio: Romance atemporal',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=400&fit=crop',
      excerpt: 'Jane Austen y su crítica social disfrazada de romance en la Inglaterra del siglo XIX.',
      content: `Elizabeth Bennet es uno de los personajes femeninos más icónicos de la literatura. Su inteligencia, ingenio y negativa a conformarse con lo que la sociedad esperaba de ella la convierten en una heroína adelantada a su tiempo.

Austen no solo escribió una historia de amor, creó una sátira brillante de la sociedad de su época. Bajo el romance entre Elizabeth y Darcy, hay una crítica aguda a las restricciones sociales y la importancia del matrimonio por conveniencia.

La evolución de ambos personajes es magistral. Darcy aprende humildad y empatía, Elizabeth supera sus propios prejuicios. Es una historia sobre el crecimiento personal y la capacidad de cambiar nuestras primeras impresiones.

Más de 200 años después, esta novela sigue siendo relevante porque los temas que toca son universales: el orgullo, los malentendidos, la presión social y el poder transformador del amor verdadero.`,
      date: '2024-10-11',
      tags: ['clásico', 'romance', 'crítica social'],
      likes: 45,
      commentCount: 6
    },
    {
      id: 6,
      title: 'Cien Años de Soledad: Realismo mágico',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=400&fit=crop',
      excerpt: 'García Márquez y la saga familiar que definió un género literario completo.',
      content: `Cien Años de Soledad no es solo una novela, es una experiencia que desafía la forma en que entendemos la narrativa. García Márquez mezcla lo cotidiano con lo fantástico de manera tan natural que cuestionas dónde termina la realidad y comienza la magia.

La historia de los Buendía es circular, como el tiempo en Macondo. Los nombres se repiten, los destinos se entrelazan, la historia parece condenada a repetirse. Esta estructura refleja la naturaleza cíclica de la historia latinoamericana.

Lo que hace brillante esta obra es cómo usa el realismo mágico no como un truco narrativo, sino como una forma de expresar verdades más profundas sobre la condición humana, la soledad, el amor y la muerte.

Leer Cien Años de Soledad requiere entrega total. No es una lectura fácil, pero la recompensa es inmensa. Es una de esas obras que te cambia, que expande tu comprensión de lo que la literatura puede lograr.`,
      date: '2024-10-09',
      tags: ['realismo mágico', 'latinoamérica', 'clásico'],
      likes: 51,
      commentCount: 8
    },
    {
      id: 7,
      title: '1984: La distopía que se volvió profética',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1495741545814-2d7f4d75ea09?w=800&h=400&fit=crop',
      excerpt: 'George Orwell advirtió sobre el totalitarismo y la manipulación de la verdad.',
      content: `1984 es inquietante no por lo que imagina, sino por lo cercano que parece estar de nuestra realidad. Orwell escribió una advertencia que cada generación debe leer y recordar.

El concepto de "doblepensar", la neolengua, y la vigilancia constante son más relevantes hoy que nunca. Vivimos en una era donde la privacidad es un lujo y la información es manipulada constantemente.

Winston Smith es un héroe trágico. Su rebeldía, su búsqueda de verdad y humanidad en un mundo deshumanizado, y su eventual derrota, nos recuerdan lo frágil que es la libertad individual.

Esta novela no es solo ficción distópica, es un manual de resistencia. Nos enseña a cuestionar la autoridad, a defender la verdad, y a nunca renunciar a nuestra humanidad, sin importar cuán opresivo sea el sistema.`,
      date: '2024-10-07',
      tags: ['distopía', 'política', 'clásico'],
      likes: 62,
      commentCount: 10
    },
    {
      id: 8,
      title: 'El Principito: Sabiduría disfrazada de cuento',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&h=400&fit=crop',
      excerpt: 'Saint-Exupéry nos recuerda que lo esencial es invisible a los ojos.',
      content: `El Principito es un libro que se lee de niño y se relee toda la vida. Cada etapa de nuestra existencia revela nuevas capas de significado en esta aparente historia infantil.

La lección del zorro sobre domesticar, sobre crear lazos, sobre la responsabilidad hacia lo que amamos, es una de las reflexiones más hermosas sobre las relaciones humanas jamás escrita.

Saint-Exupéry critica sutilmente el mundo adulto: los vanidosos, los ambiciosos, los que han olvidado lo importante. A través de los ojos del principito, vemos lo absurdo de nuestras prioridades.

Este libro nos invita a recuperar nuestra capacidad de asombro, a ver con el corazón, a no olvidar que una vez fuimos niños. Es un recordatorio de que crecer no debería significar olvidar lo esencial.`,
      date: '2024-10-05',
      tags: ['filosofía', 'infantil', 'clásico'],
      likes: 73,
      commentCount: 11
    },
    {
      id: 9,
      title: 'Drácula: El origen del terror gótico moderno',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop',
      excerpt: 'Bram Stoker creó un mito que sigue aterrorizando y fascinando más de un siglo después.',
      content: `Drácula no fue el primer vampiro de la literatura, pero sí el más influyente. Stoker creó un arquetipo que ha sido reinterpretado infinitas veces sin perder su esencia aterradora.

La estructura epistolar de la novela, contada a través de cartas y diarios, crea una sensación de autenticidad inquietante. Sentimos que estamos leyendo documentos reales de eventos sobrenaturales.

El conde Drácula representa nuestros miedos más primitivos: la muerte, la pérdida de control, la seducción del mal. Es un villano carismático que nos atrae tanto como nos repele.

Más allá del horror, Drácula es una exploración de la sexualidad reprimida, el choque entre tradición y modernidad, y el miedo a lo desconocido. Es una obra que funciona en múltiples niveles de lectura.`,
      date: '2024-10-03',
      tags: ['terror', 'gótico', 'clásico'],
      likes: 48,
      commentCount: 7
    },
    {
      id: 10,
      title: 'Fahrenheit 451: Cuando los libros arden',
      category: 'libros',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop',
      excerpt: 'Ray Bradbury imaginó un futuro donde la literatura es considerada peligrosa.',
      content: `Fahrenheit 451 es la temperatura a la que el papel de los libros se enciende. Bradbury creó una distopía donde los bomberos queman libros en lugar de apagar incendios.

Lo aterrador no es solo la quema de libros, sino cómo la sociedad voluntariamente renunció al pensamiento crítico a cambio de entretenimiento vacío. Es una advertencia sobre la complacencia intelectual.

Guy Montag, el protagonista, experimenta un despertar que todos deberíamos tener. Descubre que los libros no son peligrosos por lo que dicen, sino porque nos hacen pensar, cuestionar, sentir.

En la era de las redes sociales y la información instantánea, esta novela es más relevante que nunca. Nos recuerda que debemos defender activamente nuestra capacidad de pensar profundamente y cuestionar todo.`,
      date: '2024-10-01',
      tags: ['distopía', 'censura', 'ciencia ficción'],
      likes: 55,
      commentCount: 9
    },
    {
      id: 11,
      title: 'Mi experiencia con React y microservicios',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      excerpt: 'Aprendiendo arquitectura moderna: cómo estructurar aplicaciones escalables y mantenibles.',
      content: `Trabajar con React y microservicios ha transformado mi forma de pensar sobre el desarrollo frontend. La modularidad no es solo una palabra de moda, es una necesidad.

Separar responsabilidades, crear componentes reutilizables y mantener un acoplamiento débil son principios que aplico tanto en el código como en la arquitectura general de las aplicaciones.

Los microservicios frontend permiten que equipos trabajen independientemente, desplegando características sin afectar toda la aplicación. Es liberador y desafiante a partes iguales.

Mi consejo para quienes comienzan: enfócate en entender los fundamentos antes de saltar a frameworks complejos. React es poderoso, pero su verdadero valor está en cómo organizas tu código.`,
      date: '2024-09-28',
      tags: ['react', 'desarrollo', 'arquitectura'],
      likes: 34,
      commentCount: 5
    },
    {
      id: 12,
      title: 'CSS Modules vs Tailwind: Mi perspectiva',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=400&fit=crop',
      excerpt: '¿Cuál elegir para tu proyecto? Una comparación honesta desde la trinchera del desarrollo.',
      content: `He trabajado extensivamente con ambos y la respuesta honesta es: depende del proyecto.

CSS Modules brillan cuando necesitas animaciones complejas, control total sobre el styling y quieres mantener CSS tradicional. Son perfectos para proyectos donde el diseño es único y específico.

Tailwind acelera el desarrollo con utilidades predefinidas. Es ideal para prototipos rápidos y cuando trabajas en equipo con un sistema de diseño consistente.

En este blog, elegí CSS Modules porque las animaciones de hojas cayendo y el efecto glassmorphism requieren keyframes y efectos específicos que son más naturales en CSS puro.`,
      date: '2024-09-25',
      tags: ['css', 'frontend', 'herramientas'],
      likes: 29,
      commentCount: 4
    },
    {
      id: 13,
      title: 'JavaScript moderno: Lo que debes saber en 2024',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop',
      excerpt: 'ES6+, async/await, destructuring y más características que todo desarrollador debe dominar.',
      content: `JavaScript ha evolucionado dramáticamente en los últimos años. Las características de ES6 y posteriores han transformado cómo escribimos código.

Arrow functions, destructuring, spread operator, template literals... estas no son solo comodidades sintácticas, cambian fundamentalmente cómo estructuramos soluciones.

Async/await revolucionó el manejo de operaciones asíncronas. Adiós al callback hell, hola a código que se lee de forma secuencial y es mucho más fácil de depurar.

Mi recomendación es dominar los fundamentos antes de saltar a frameworks. Entiende closures, el event loop, prototypes. Un desarrollador que entiende JavaScript profundamente puede aprender cualquier framework rápidamente.`,
      date: '2024-09-22',
      tags: ['javascript', 'ES6', 'fundamentos'],
      likes: 41,
      commentCount: 6
    },
    {
      id: 14,
      title: 'Git: Más allá de commit y push',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop',
      excerpt: 'Dominando el control de versiones: branches, rebase, cherry-pick y workflows profesionales.',
      content: `Git es mucho más que git add, git commit, git push. Dominar esta herramienta te convierte en un desarrollador mucho más eficiente y colaborativo.

Los branches no son opcionales, son esenciales. Aprender a trabajar con feature branches, hotfix branches y siguiendo un flujo como Git Flow transforma tu forma de trabajar.

Rebase vs merge es un debate eterno, pero entender ambos te da flexibilidad. Rebase para mantener un historial limpio, merge para preservar el contexto completo de los cambios.

Comandos como cherry-pick, bisect, reflog pueden salvarte en situaciones complicadas. La diferencia entre un desarrollador junior y senior a menudo está en qué tan cómodo está navegando el historial de Git.`,
      date: '2024-09-19',
      tags: ['git', 'control de versiones', 'workflow'],
      likes: 37,
      commentCount: 5
    },
    {
      id: 15,
      title: 'Testing en React: Jest y Testing Library',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      excerpt: 'Cómo escribir tests efectivos que realmente agreguen valor a tu código.',
      content: `Los tests no son una pérdida de tiempo, son una inversión. Un buen suite de tests te permite refactorizar con confianza y detectar bugs antes de que lleguen a producción.

React Testing Library cambió mi perspectiva sobre testing. En lugar de probar detalles de implementación, pruebas cómo el usuario interactúa con tu aplicación.

Mi regla de oro: si dudarías en hacer un cambio porque no estás seguro qué podría romperse, necesitas más tests. Los tests son documentación ejecutable de cómo debería comportarse tu aplicación.

Empezar es lo más difícil. Comienza con los componentes más críticos, aprende los patrones, y gradualmente expande tu cobertura. No busques 100% de cobertura, busca tests que agreguen valor real.`,
      date: '2024-09-16',
      tags: ['testing', 'react', 'calidad'],
      likes: 33,
      commentCount: 4
    },
    {
      id: 16,
      title: 'TypeScript: Por qué lo adopté y no vuelvo',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop',
      excerpt: 'Los beneficios del tipado estático en JavaScript y cómo TypeScript mejora la calidad del código.',
      content: `TypeScript parecía innecesario al principio. "JavaScript funciona bien", pensaba. Pero después de trabajar en proyectos grandes, entendí su valor.

Los tipos no son solo documentación, son contrato. Cuando cambias una interfaz, TypeScript te dice exactamente qué código debes actualizar. Es como tener un compañero que revisa constantemente tu trabajo.

El autocompletado en el IDE mejora dramáticamente. No necesitas recordar qué propiedades tiene cada objeto, el editor te lo muestra. La productividad aumenta notablemente.

La curva de aprendizaje existe, pero es gradual. Puedes empezar con tipos básicos y progresivamente adoptar características avanzadas como generics y tipos condicionales. Vale totalmente la pena.`,
      date: '2024-09-13',
      tags: ['typescript', 'javascript', 'tipado'],
      likes: 44,
      commentCount: 7
    },
    {
      id: 17,
      title: 'Performance web: Optimización práctica',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      excerpt: 'Técnicas concretas para hacer que tus aplicaciones web carguen más rápido.',
      content: `La performance no es un feature que agregas al final, debe ser considerada desde el diseño inicial. Cada milisegundo cuenta en la experiencia del usuario.

Code splitting y lazy loading son tus aliados. No obligues a los usuarios a descargar todo el JavaScript upfront. Carga solo lo necesario para la vista actual.

Las imágenes suelen ser el mayor cuello de botella. Usa formatos modernos como WebP, implementa lazy loading, y considera usar CDNs para servir contenido optimizado.

Herramientas como Lighthouse te dan métricas concretas. Core Web Vitals no son solo números, afectan directamente el SEO y la experiencia del usuario. Toma en serio estas métricas.`,
      date: '2024-09-10',
      tags: ['performance', 'optimización', 'web'],
      likes: 39,
      commentCount: 6
    },
    {
      id: 18,
      title: 'Arquitectura de componentes en React',
      category: 'programacion',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      excerpt: 'Patrones y mejores prácticas para estructurar componentes escalables y mantenibles.',
      content: `La forma en que estructuras tus componentes determina qué tan fácil será mantener y escalar tu aplicación. No existe una única forma correcta, pero hay principios fundamentales.

Componentes pequeños y enfocados son más fáciles de entender, testear y reutilizar. Si un componente tiene más de 200 líneas, probablemente debería dividirse.

La composición sobre herencia es el mantra de React. Usa children, render props o custom hooks para compartir lógica entre componentes en lugar de crear jerarquías complejas.

El estado debe vivir lo más cerca posible de donde se usa. No todo necesita estar en un estado global. Context API es poderoso, pero úsalo con moderación.`,
      date: '2024-09-07',
      tags: ['react', 'arquitectura', 'componentes'],
      likes: 36,
      commentCount: 5
    },
    {
      id: 19,
      title: 'Otoño: La estación de la introspección',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      excerpt: 'Entre hojas caídas y nuevos comienzos, reflexiones sobre el cambio y la renovación.',
      content: `Hay algo mágico en el otoño. Las hojas cambian de color antes de caer, recordándonos que la belleza puede existir en la transición y el final.

Esta estación me invita a la introspección. Así como los árboles dejan ir sus hojas, nosotros también necesitamos soltar lo que ya no nos sirve para hacer espacio a lo nuevo.

El otoño es una metáfora perfecta para el ciclo del crecimiento personal. Después de la expansión del verano viene la cosecha, luego la preparación para el invierno interior donde germinan nuevas ideas.

Me encanta cómo esta temporada combina melancolía con calidez. Las tardes frescas, el té caliente, los libros acumulados esperando ser leídos. Es un tiempo para volver a nosotros mismos.`,
      date: '2024-09-04',
      tags: ['otoño', 'personal', 'reflexiones'],
      likes: 58,
      commentCount: 8
    },
    {
      id: 20,
      title: 'Equilibrio entre código y creatividad',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop',
      excerpt: 'Ser desarrolladora y soñadora: encontrando armonía entre la lógica y la imaginación.',
      content: `Muchos piensan que programación y creatividad son opuestos. Mi experiencia dice lo contrario.

Escribir código es un acto creativo. Cada problema tiene infinitas soluciones posibles, y elegir la más elegante requiere tanto lógica como intuición artística.

La lectura alimenta mi capacidad de resolver problemas. Las historias enseñan sobre estructura, desarrollo de personajes y resolución de conflictos, habilidades transferibles al desarrollo de software.

He aprendido a no compartimentar mi vida. Soy desarrolladora de software Y amante de la literatura. Soy lógica Y soñadora. Estas facetas se complementan y me hacen mejor en ambas.`,
      date: '2024-09-01',
      tags: ['vida', 'desarrollo', 'creatividad'],
      likes: 52,
      commentCount: 7
    },
    {
      id: 21,
      title: 'El poder de la lectura en tiempos digitales',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=400&fit=crop',
      excerpt: 'Por qué seguir leyendo libros físicos en la era de las pantallas y la información instantánea.',
      content: `En un mundo de tweets y reels, leer un libro completo se ha convertido casi en un acto de rebeldía. Requiere tiempo, concentración y paciencia, cualidades escasas en nuestra era.

Hay algo especial en sostener un libro físico. El peso, la textura del papel, el olor de las páginas. Es una experiencia sensorial que ninguna tablet puede replicar completamente.

Leer profundamente nos entrena para pensar profundamente. Seguir un argumento complejo a través de cientos de páginas fortalece nuestra capacidad de concentración en un mundo diseñado para distraernos.

No reniego de la tecnología, la abrazo. Pero mantengo el ritual de la lectura física como un ancla, un recordatorio de que algunas cosas valen la pena hacerlas despacio.`,
      date: '2024-08-29',
      tags: ['lectura', 'libros', 'reflexiones'],
      likes: 47,
      commentCount: 9
    },
    {
      id: 22,
      title: 'Aprender a desaprender: La clave del crecimiento',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
      excerpt: 'Por qué soltar viejas creencias es tan importante como adquirir nuevos conocimientos.',
      content: `Una de las lecciones más duras que he aprendido es que a veces el conocimiento se convierte en un obstáculo. Lo que funcionó ayer puede ser contraproducente hoy.

En programación esto es evidente. Técnicas que eran mejores prácticas hace cinco años ahora son consideradas antipatrones. Si te aferras a lo que sabes, te quedas atrás.

Pero esto va más allá del código. Desaprender aplica a creencias, hábitos, formas de pensar. Cuestionar lo que damos por sentado es incómodo, pero esencial para crecer.

El ego es el mayor enemigo del aprendizaje. Admitir "estaba equivocado" o "hay una mejor forma" requiere humildad. Pero esa humildad es lo que separa a quienes se estancan de quienes siguen evolucionando.`,
      date: '2024-08-26',
      tags: ['aprendizaje', 'crecimiento', 'mentalidad'],
      likes: 43,
      commentCount: 6
    },
    {
      id: 23,
      title: 'La soledad productiva del desarrollador',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
      excerpt: 'Encontrando el balance entre el trabajo en equipo y el tiempo de concentración profunda.',
      content: `Programar requiere largos períodos de concentración ininterrumpida. No es antisocial, es una necesidad del oficio. Entrar en "el flujo" toma tiempo y es frágil.

He aprendido a defender mi tiempo de concentración. Bloques de 2-3 horas sin interrupciones donde puedo sumergirme completamente en un problema son cuando hago mi mejor trabajo.

Pero también he aprendido que demasiada soledad es peligrosa. Compartir ideas, recibir feedback, pair programming... la colaboración te expone a formas diferentes de pensar.

El balance es personal. Algunos necesitan más interacción, otros más soledad. Lo importante es reconocer qué necesitas en cada momento y comunicarlo claramente a tu equipo.`,
      date: '2024-08-23',
      tags: ['desarrollo', 'productividad', 'trabajo'],
      likes: 35,
      commentCount: 5
    },
    {
      id: 24,
      title: 'Síndrome del impostor: Mi batalla continua',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=400&fit=crop',
      excerpt: 'Enfrentando la sensación de no ser lo suficientemente buena en un campo que cambia constantemente.',
      content: `Hay días donde siento que no sé nada. Veo a otros desarrolladores y pienso "ellos sí saben, yo solo estoy fingiendo". Es agotador y más común de lo que admitimos.

El síndrome del impostor es particularmente cruel en tecnología. El campo cambia tan rápido que siempre hay algo nuevo que no sabes. Es imposible saberlo todo, pero eso no detiene la ansiedad.

He aprendido que este sentimiento no desaparece con experiencia, cambia de forma. Ahora no dudo de mis habilidades técnicas básicas, pero sí de mis decisiones arquitectónicas o de liderazgo.

Lo que me ha ayudado es reconocer que todos luchamos con esto. Hablar abiertamente sobre nuestras inseguridades las desmitifica. No estás sola en esto.`,
      date: '2024-08-20',
      tags: ['desarrollo personal', 'síndrome impostor', 'tech'],
      likes: 61,
      commentCount: 12
    },
    {
      id: 25,
      title: 'El arte de hacer buenas preguntas',
      category: 'reflexiones',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=400&fit=crop',
      excerpt: 'Por qué la habilidad más importante no es tener respuestas, sino formular las preguntas correctas.',
      content: `Al principio de mi carrera, temía hacer preguntas. Pensaba que revelarían mi ignorancia. Ahora entiendo que las preguntas inteligentes son señal de pensamiento crítico.

Google puede darte respuestas, pero formular la pregunta correcta requiere entender el problema profundamente. A menudo, el proceso de articular una pregunta te lleva a la solución.

En código, esto se traduce en "rubber duck debugging". Explicar el problema en voz alta, aunque sea a un pato de goma, te fuerza a estructurar tu pensamiento.

Las mejores preguntas no buscan respuestas simples, buscan entendimiento. "¿Por qué?" es más poderoso que "¿Cómo?". El cómo te da una solución, el por qué te da principios que puedes aplicar en múltiples contextos.`,
      date: '2024-08-17',
      tags: ['aprendizaje', 'pensamiento crítico', 'desarrollo'],
      likes: 49,
      commentCount: 8
    }
  ],

  comments: {
    1: [
      {
        id: 1,
        author: 'Ana García',
        avatar: 'https://i.pravatar.cc/40?img=10',
        text: '¡Excelente reseña! Ana de las Tejas Verdes también es uno de mis libros favoritos. La forma en que describes a Anne es perfecta.',
        date: '2024-10-21',
        isLocal: false
      },
      {
        id: 2,
        author: 'Carlos Mendoza',
        avatar: 'https://i.pravatar.cc/40?img=11',
        text: 'Nunca lo he leído pero después de esto definitivamente lo haré. Gracias por la recomendación.',
        date: '2024-10-21',
        isLocal: false
      },
      {
        id: 3,
        author: 'Laura Torres',
        avatar: 'https://i.pravatar.cc/40?img=12',
        text: 'Montgomery creó un personaje atemporal. Cada vez que lo releo encuentro algo nuevo.',
        date: '2024-10-22',
        isLocal: false
      },
      {
        id: 4,
        author: 'Pedro Silva',
        avatar: 'https://i.pravatar.cc/40?img=13',
        text: '¿Recomiendas empezar por el primero o se pueden leer en cualquier orden?',
        date: '2024-10-22',
        isLocal: false
      },
      {
        id: 5,
        author: 'Sofia Ramirez',
        avatar: 'https://i.pravatar.cc/40?img=14',
        text: 'El primer libro es imprescindible. La evolución de Anne es lo mejor de la saga.',
        date: '2024-10-23',
        isLocal: false
      }
    ],
    2: [
      {
        id: 6,
        author: 'Miguel Ángel',
        avatar: 'https://i.pravatar.cc/40?img=15',
        text: 'Narnia marcó mi infancia. Aslan sigue siendo uno de los personajes más poderosos que he encontrado.',
        date: '2024-10-19',
        isLocal: false
      },
      {
        id: 7,
        author: 'Valentina Cruz',
        avatar: 'https://i.pravatar.cc/40?img=16',
        text: '¿Has leído los libros en orden cronológico o de publicación? Hay debate sobre cuál es mejor.',
        date: '2024-10-19',
        isLocal: false
      },
      {
        id: 8,
        author: 'Daniel Rojas',
        avatar: 'https://i.pravatar.cc/40?img=17',
        text: 'El simbolismo religioso es fascinante incluso para quienes no somos religiosos.',
        date: '2024-10-20',
        isLocal: false
      },
      {
        id: 9,
        author: 'Isabella Moreno',
        avatar: 'https://i.pravatar.cc/40?img=18',
        text: 'Las películas no le hacen justicia a los libros. Hay tantos detalles perdidos.',
        date: '2024-10-20',
        isLocal: false
      }
    ],
    3: [
      {
        id: 10,
        author: 'Sebastián Vargas',
        avatar: 'https://i.pravatar.cc/40?img=19',
        text: 'LOTR es la obra definitiva de fantasía. Todo lo demás es una variación de lo que Tolkien creó.',
        date: '2024-10-16',
        isLocal: false
      },
      {
        id: 11,
        author: 'Camila Herrera',
        avatar: 'https://i.pravatar.cc/40?img=20',
        text: '¿Recomiendas leer El Silmarillion? Lo he intentado pero es denso.',
        date: '2024-10-16',
        isLocal: false
      },
      {
        id: 12,
        author: 'Andrés López',
        avatar: 'https://i.pravatar.cc/40?img=21',
        text: 'La amistad entre Frodo y Sam me emociona cada vez. Verdadera lealtad.',
        date: '2024-10-17',
        isLocal: false
      },
      {
        id: 13,
        author: 'Gabriela Díaz',
        avatar: 'https://i.pravatar.cc/40?img=22',
        text: 'Los idiomas que creó Tolkien son increíbles. Era un lingüista brillante.',
        date: '2024-10-17',
        isLocal: false
      },
      {
        id: 14,
        author: 'Roberto Sánchez',
        avatar: 'https://i.pravatar.cc/40?img=23',
        text: 'Cada relectura es como volver a casa. Nunca me canso de la Tierra Media.',
        date: '2024-10-18',
        isLocal: false
      },
      {
        id: 15,
        author: 'Natalia Flores',
        avatar: 'https://i.pravatar.cc/40?img=24',
        text: 'La descripción de la naturaleza en los libros es poesía pura.',
        date: '2024-10-18',
        isLocal: false
      },
      {
        id: 16,
        author: 'Fernando Castro',
        avatar: 'https://i.pravatar.cc/40?img=25',
        text: '¿Edición recomendada? Quiero comprar una buena versión física.',
        date: '2024-10-19',
        isLocal: false
      }
    ],
    4: [
      {
        id: 17,
        author: 'Martín Reyes',
        avatar: 'https://i.pravatar.cc/40?img=26',
        text: 'Harry Potter fue mi puerta de entrada a la lectura. Le debo tanto a estos libros.',
        date: '2024-10-14',
        isLocal: false
      },
      {
        id: 18,
        author: 'Lucía Jiménez',
        avatar: 'https://i.pravatar.cc/40?img=27',
        text: 'Crecí con Harry. Cada libro llegó en el momento perfecto de mi vida.',
        date: '2024-10-14',
        isLocal: false
      },
      {
        id: 19,
        author: 'Diego Morales',
        avatar: 'https://i.pravatar.cc/40?img=28',
        text: '¿Qué casa eres? Yo soy Ravenclaw de corazón.',
        date: '2024-10-15',
        isLocal: false
      },
      {
        id: 20,
        author: 'Patricia Vega',
        avatar: 'https://i.pravatar.cc/40?img=29',
        text: 'La evolución de Snape sigue siendo uno de los mejores giros de la literatura.',
        date: '2024-10-15',
        isLocal: false
      },
      {
        id: 21,
        author: 'Alejandro Ramos',
        avatar: 'https://i.pravatar.cc/40?img=30',
        text: 'Los temas oscuros de los últimos libros los hacen más interesantes para adultos.',
        date: '2024-10-16',
        isLocal: false
      },
      {
        id: 22,
        author: 'Carolina Medina',
        avatar: 'https://i.pravatar.cc/40?img=31',
        text: 'Hermione fue un modelo a seguir para toda una generación de niñas.',
        date: '2024-10-16',
        isLocal: false
      },
      {
        id: 23,
        author: 'Javier Ortiz',
        avatar: 'https://i.pravatar.cc/40?img=32',
        text: '¿Alguien más relee la saga completa cada año? Es mi tradición.',
        date: '2024-10-17',
        isLocal: false
      },
      {
        id: 24,
        author: 'María José',
        avatar: 'https://i.pravatar.cc/40?img=33',
        text: 'El mundo que Rowling creó es tan rico. Hay tantos detalles escondidos.',
        date: '2024-10-17',
        isLocal: false
      },
      {
        id: 25,
        author: 'Ricardo Guzmán',
        avatar: 'https://i.pravatar.cc/40?img=34',
        text: 'Nunca olvidaré la emoción de esperar cada nuevo libro. Esos fueron tiempos mágicos.',
        date: '2024-10-18',
        isLocal: false
      }
    ],
    11: [
      {
        id: 26,
        author: 'Juan Pablo Dev',
        avatar: 'https://i.pravatar.cc/40?img=35',
        text: 'Excelente artículo. La arquitectura de microservicios cambió mi forma de pensar.',
        date: '2024-09-29',
        isLocal: false
      },
      {
        id: 27,
        author: 'Elena Programmer',
        avatar: 'https://i.pravatar.cc/40?img=36',
        text: '¿Recomiendas algún recurso específico para aprender más sobre este tema?',
        date: '2024-09-29',
        isLocal: false
      },
      {
        id: 28,
        author: 'Tomás Frontend',
        avatar: 'https://i.pravatar.cc/40?img=37',
        text: 'La modularidad es clave. Gran post.',
        date: '2024-09-30',
        isLocal: false
      },
      {
        id: 29,
        author: 'Andrea Tech',
        avatar: 'https://i.pravatar.cc/40?img=38',
        text: 'Estoy empezando con React. Este post me motivó mucho.',
        date: '2024-09-30',
        isLocal: false
      },
      {
        id: 30,
        author: 'Luis Developer',
        avatar: 'https://i.pravatar.cc/40?img=39',
        text: 'Los principios SOLID aplican también en frontend. Totalmente de acuerdo.',
        date: '2024-10-01',
        isLocal: false
      }
    ]
  },

  socialLinks: {
    github: 'https://github.com',
    facebook: 'https://facebook.com',
    mail: 'mailto:kassandra@example.com',
    linkedin: 'https://linkedin.com'
  }
}