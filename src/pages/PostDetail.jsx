import { useState, useEffect } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { Heart, Share2, ArrowLeft, Calendar, Tag } from 'lucide-react'
import { getPostById, toggleLike, isPostLiked } from '../api/blogApi'
import CommentSection from '../components/CommentSection'
import Loader from '../components/Loader'
import ErrorMsg from '../components/ErrorMsg'
import styles from '../styles/postdetail.module.css'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setHasContent } = useOutletContext()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    setHasContent(true)
  }, [setHasContent])

  useEffect(() => {
    loadPost()
  }, [id])

  const loadPost = async () => {
    try {
      setLoading(true)
      const data = await getPostById(id)
      setPost(data)
      setLiked(isPostLiked(data.id))
      setLikeCount(data.likes)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = () => {
    const newLikedState = toggleLike(post.id)
    setLiked(newLikedState)
    setLikeCount(prev => newLikedState ? prev + 1 : prev - 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Enlace copiado al portapapeles')
    }
  }

  if (loading) return <Loader text="Cargando publicación..." />
  if (error) return <ErrorMsg message={error} onRetry={loadPost} />
  if (!post) return <ErrorMsg message="Publicación no encontrada" />

  return (
    <article className={styles.postDetail}>
      <button onClick={() => navigate('/blog')} className={styles.backBtn}>
        <ArrowLeft size={20} />
        Volver al blog
      </button>

      <div className={styles.imageContainer}>
        <img src={post.image} alt={post.title} className={styles.featuredImage} />
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.date}>
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        <div className={styles.actions}>
          <button 
            onClick={handleLike} 
            className={`${styles.actionBtn} ${liked ? styles.liked : ''}`}
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            <span>{likeCount}</span>
          </button>
          
          <button onClick={handleShare} className={styles.actionBtn}>
            <Share2 size={20} />
            <span>Compartir</span>
          </button>
        </div>
      </header>

      <div className={styles.content}>
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>

      <footer className={styles.footer}>
        <div className={styles.tags}>
          <Tag size={18} />
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </footer>

      <CommentSection postId={post.id} />
    </article>
  )
}