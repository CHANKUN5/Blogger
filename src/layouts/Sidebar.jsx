import { Github, Facebook, Mail, Linkedin, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { mockData } from '../data/mock'
import StatsPanel from '../components/StatsPanel'
import styles from '../styles/sidebar.module.css'

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  
  const categories = {
    libros: mockData.posts.filter(p => p.category === 'libros').length,
    programacion: mockData.posts.filter(p => p.category === 'programacion').length,
    reflexiones: mockData.posts.filter(p => p.category === 'reflexiones').length
  }

  const allComments = Object.values(mockData.comments)
    .flat()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <div className={styles.profile}>
          <img src="/logo.png" alt="Kassandra Castro" className={styles.avatar} />
          <h3 className={styles.name}>Kassandra Castro</h3>
          <p className={styles.bio}>
            Desarrolladora de software, amante de la lectura y los mundos de fantasía. 
            Entre líneas de código y páginas de libros.
          </p>
        </div>
        
        <div className={styles.social}>
          <a href={mockData.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href={mockData.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href={mockData.socialLinks.mail}>
            <Mail size={20} />
          </a>
          <a href={mockData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Modo de Vista</h4>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          <div className={styles.toggleTrack}>
            <div className={`${styles.toggleThumb} ${theme === 'dark' ? styles.dark : ''}`}>
              {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
            </div>
          </div>
          <span className={styles.themeLabel}>
            {theme === 'light' ? 'Día Otoñal' : 'Noche Otoñal'}
          </span>
        </button>
      </div>

      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Categorías</h4>
        <ul className={styles.categoryList}>
          <li>
            <span>Libros</span>
            <span className={styles.count}>{categories.libros}</span>
          </li>
          <li>
            <span>Programación</span>
            <span className={styles.count}>{categories.programacion}</span>
          </li>
          <li>
            <span>Reflexiones</span>
            <span className={styles.count}>{categories.reflexiones}</span>
          </li>
        </ul>
      </div>

      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Últimos Comentarios</h4>
        <ul className={styles.latestComments}>
          {allComments.map((comment) => (
            <li key={comment.id}>
              <div className={styles.commentAuthor}>
                <img src={comment.avatar} alt={comment.author} className={styles.commentAvatar} />
                <span>{comment.author}</span>
              </div>
              <p className={styles.commentText}>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <StatsPanel />
    </aside>
  )
}