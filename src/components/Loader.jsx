import styles from '../styles/loader.module.css'

export default function Loader({ text = 'Cargando...' }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}