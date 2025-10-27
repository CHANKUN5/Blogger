import { Github, Facebook, Mail, Linkedin, Heart } from 'lucide-react'
import { mockData } from '../data/mock'
import styles from '../styles/footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          <p>© {currentYear} Relatos de Otoño. Todos los derechos reservados.</p>
          <p className={styles.madeWith}>
            Hecho con <Heart size={16} className={styles.heart} /> por Kassandra Castro
          </p>
        </div>

        <div className={styles.socialLinks}>
          <a href={mockData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={mockData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href={mockData.socialLinks.mail} aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={mockData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
