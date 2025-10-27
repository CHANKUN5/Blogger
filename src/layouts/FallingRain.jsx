import { useEffect } from 'react'
import styles from '../styles/rain.module.css'

export default function FallingRain() {
  useEffect(() => {
    const container = document.querySelector(`.${styles.rainContainer}`)
    if (!container) return

    const createDrop = () => {
      const drop = document.createElement('i')
      const x = Math.random() * window.innerWidth
      const duration = Math.random() * 1

      drop.className = styles.drop
      drop.style.animationDuration = duration <= 0.4 ? `${duration + 0.4}s` : `${duration}s`
      drop.style.left = `${x}px`

      container.appendChild(drop)

      setTimeout(() => {
        if (drop.parentNode) {
          drop.remove()
        }
      }, (duration <= 0.4 ? duration + 0.4 : duration) * 1000)
    }

    const interval = setInterval(() => {
      createDrop()
    }, 50)

    for (let i = 0; i < 80; i++) {
      setTimeout(() => createDrop(), i * 20)
    }

    return () => {
      clearInterval(interval)
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <>
      <div className={styles.rainContainer}></div>
      <div className={styles.vapour}></div>
    </>
  )
}
