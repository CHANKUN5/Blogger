import { X, AlertTriangle } from 'lucide-react'
import styles from '../styles/modal.module.css'

export default function ErrorModal({ message, onRetry, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className={styles.content}>
          <AlertTriangle className={styles.icon} size={64} />
          <h2 className={styles.title}>Error al cargar contenido</h2>
          <p className={styles.message}>{message}</p>
          
          <div className={styles.actions}>
            <button onClick={onRetry} className={styles.primaryBtn}>
              Reintentar
            </button>
            <button onClick={onClose} className={styles.secondaryBtn}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}