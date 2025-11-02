import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import styles from '../styles/effectsToggle.module.css'

export default function EffectsToggle({ onToggle }) {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    const newState = !isActive
    setIsActive(newState)
    onToggle(newState)
  }

  return (
    <button 
      className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}
      onClick={handleToggle}
      aria-label="Activar efectos de animación"
      title="Efectos de animación"
    >
      <Sparkles size={20} />
    </button>
  )
}
