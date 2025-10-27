import { AlertCircle } from 'lucide-react'
import styles from '../styles/error.module.css'

export default function ErrorMsg({ message, onRetry }) {
  return (
    <div className={styles.errorContainer}>
      <AlertCircle className={styles.icon} size={48} />
      <h3 className={styles.title}>¡Ups! Algo salió mal</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryBtn}>
          Reintentar
        </button>
      )}
    </div>
  )
}