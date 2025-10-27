import { useNavigate } from 'react-router-dom'
import { Heart, MessageCircle, Calendar } from 'lucide-react'
import { isPostLiked } from '../api/blogApi'
import { useState, useEffect } from 'react'
import styles from '../styles/postcard.module.css'

export default function PostCard({ post }) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(isPostLiked(post.id))
  }, [post.id])

  const handleClick = () => {
    navigate(`/blog/${post.id}`)
  }

  return (
    <article className={styles.card} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={post.image} alt={post.title} className={styles.image} />
        <span className={styles.category}>{post.category}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        
        <div className={styles.meta}>
          <div className={styles.date}>
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          <div className={styles.stats}>
            <span className={`${styles.stat} ${liked ? styles.liked : ''}`}>
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
              {post.likes}
            </span>
            <span className={styles.stat}>
              <MessageCircle size={16} />
              {post.commentCount}
            </span>
          </div>
        </div>
        
        <div className={styles.tags}>
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}