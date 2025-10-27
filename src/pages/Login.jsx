import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (login(username, password)) {
      navigate('/blog')
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      
      if (newAttempts === 2) {
        setError('Usuario o contraseña incorrectos')
      } else if (newAttempts >= 3) {
        navigate('/blog')
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.leaves}>
        <div className={styles.set}>
          <div><img src="/leaf_01.png" alt="" /></div>
          <div><img src="/leaf_02.png" alt="" /></div>
          <div><img src="/leaf_03.png" alt="" /></div>
          <div><img src="/leaf_04.png" alt="" /></div>
          <div><img src="/leaf_01.png" alt="" /></div>
          <div><img src="/leaf_02.png" alt="" /></div>
          <div><img src="/leaf_03.png" alt="" /></div>
          <div><img src="/leaf_04.png" alt="" /></div>
        </div>
      </div>
      
      <img src="/bg.jpg" className={styles.bg} alt="" />
      <img src="/girl.png" className={styles.girl} alt="" />
      <img src="/trees.png" className={styles.trees} alt="" />
      
      <div className={styles.login}>
        <h2>Iniciar Sesión</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.inputBox}>
            <input type="submit" value="Entrar" />
          </div>
        </form>
        
        <div className={styles.credentials}>
          <p>Prueba con: usuario / 123456</p>
        </div>
      </div>
    </section>
  )
}