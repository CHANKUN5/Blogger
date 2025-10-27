import { useEffect, useRef } from 'react'
import styles from '../styles/falling-leaves.module.css'

export default function FallingLeaves() {
  const containerRef = useRef(null)

  useEffect(() => {
    const leafImages = [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCVI1Ax5zl8JGQbLj_8PKUSQtRyhk3s86QnykHrA3ACXneKJ7rb_RAFgwQBty5WXYPmcqFrjXSQQsmEEasbisa4Dde7dxacRS6dVM8DjmXwUW6C41SX4pFcjSjyLJKfp3GTzOiFjg5Prc/s100/hoja1.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9d42IZ_PQNwvwk5eICgdXBtSsfzrwQsegvaC1ZA2q1MjZN0SYzTHdD9ONGQBmK0Wj37UGPTuJrMBtmwc8OpQ17T7HnFb1XV8dlnoFKn8RpFq-hHxNlqD2MW8oY_uoyG0mISFiIouRaek/s100/hoja2.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW7bS0LxqADo0cyAMUlL2TlHp4_PkyA3dQDfaRYnAdm8zNNuTH_rjy3Q1sn3H6XTbFYgYiA-5u_j9W5V0s2iXv05JyKBjbvvsRybVALnfW6asUxAWCl3u0eiqBXNJlwjZSM0g2iZcRSn8/s100/hoja3.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnV2te8WCQyvIGOT77hHZY6axSWIWwA8TBOtlr9jhiuf6TjidO2peTCFDXdGncTFT_LZbotBMrBMsvn_x6DsNAp9WeBMuTMVnRATWd6MMAXsjBvupd4rdEwHuOCqYJ5x1buW7Z07YgGIg/s100/hoja4.png'
    ]

    const createLeaf = () => {
      const leaf = document.createElement('img')
      leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)]
      leaf.className = styles.leaf
      leaf.style.left = `${Math.random() * 100}%`
      leaf.style.animationDuration = `${12 + Math.random() * 6}s`
      
      if (containerRef.current) {
        containerRef.current.appendChild(leaf)
      }

      setTimeout(() => {
        if (leaf.parentNode) {
          leaf.remove()
        }
      }, 18000)
    }

    const interval = setInterval(() => {
      createLeaf()
    }, 1200)

    for (let i = 0; i < 15; i++) {
      setTimeout(() => createLeaf(), i * 300)
    }

    return () => {
      clearInterval(interval)
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.leavesContainer}></div>
}