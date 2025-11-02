import { createContext, useContext, useState } from 'react'
import { CheckCircle2, XCircle, Info, X } from 'lucide-react'
import styles from '../styles/toast.module.css'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 4000)
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const toast = {
    success: (message) => addToast(message, 'success'),
    error: (message) => addToast(message, 'error'),
    info: (message) => addToast(message, 'info')
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map(({ id, message, type }) => (
          <div key={id} className={`${styles.toast} ${styles[type]}`}>
            <div className={styles.toastContent}>
              {type === 'success' && <CheckCircle2 size={20} />}
              {type === 'error' && <XCircle size={20} />}
              {type === 'info' && <Info size={20} />}
              <span>{message}</span>
            </div>
            <button 
              className={styles.toastClose}
              onClick={() => removeToast(id)}
              aria-label="Cerrar notificación"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
