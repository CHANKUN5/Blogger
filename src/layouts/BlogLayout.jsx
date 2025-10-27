import { Outlet } from 'react-router-dom'
import { Menu, X, LogOut, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import FallingLeaves from './FallingLeaves'
import FallingRain from './FallingRain'
import Footer from './Footer'
import EffectsToggle from '../components/EffectsToggle'
import styles from '../styles/blog.module.css'

export default function BlogLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasContent, setHasContent] = useState(true)
  const [effectsActive, setEffectsActive] = useState(false)
  const { logout } = useAuth()
  const { theme } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className={styles.blogContainer}>
      {effectsActive && <FallingLeaves />}
      {effectsActive && theme === 'dark' && <FallingRain />}
      
      <EffectsToggle onToggle={setEffectsActive} />
      
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <h1 className={styles.blogTitle}>Relatos de Otoño</h1>
          
          <div className={styles.headerActions}>
            <div className={styles.searchBar}>
              <Search size={18} />
              <input
                type="text"
                placeholder="Buscar publicaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            
            <button 
              className={styles.menuBtn}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <button onClick={handleLogout} className={styles.logoutBtn}>
              <LogOut size={20} />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.sidebarWrapper} ${sidebarOpen ? styles.open : ''} ${hasContent ? styles.sidebarStatic : styles.sidebarFixed}`}>
        <Sidebar />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <main className={styles.content}>
            <Outlet context={{ searchQuery, setHasContent }} />
          </main>
        </div>
      </div>

      <Footer />
      
      {sidebarOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}