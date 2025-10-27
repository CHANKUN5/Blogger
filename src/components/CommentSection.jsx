import { useState, useEffect } from 'react'
import { Send } from 'lucide-react'
import { getComments, addComment } from '../api/blogApi'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/comments.module.css'

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    loadComments()
  }, [postId])

  const loadComments = async () => {
    try {
      const data = await getComments(postId)
      setComments(data)
    } catch (error) {
      console.error('Error loading comments:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setLoading(true)
    try {
      const comment = {
        id: `temp_${Date.now()}`,
        author: user.name,
        avatar: '/logo.png',
        text: newComment,
        date: new Date().toISOString(),
        isLocal: true
      }

      await addComment(postId, comment)
      setComments([...comments, comment])
      setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.commentSection}>
      <h3 className={styles.title}>Comentarios ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <img src="/logo.png" alt={user.name} className={styles.userAvatar} />
        <div className={styles.inputGroup}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe un comentario..."
            className={styles.textarea}
            rows={3}
          />
          <button 
            type="submit" 
            disabled={loading || !newComment.trim()}
            className={styles.submitBtn}
          >
            <Send size={18} />
            Comentar
          </button>
        </div>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <img src={comment.avatar} alt={comment.author} className={styles.avatar} />
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <span className={styles.author}>{comment.author}</span>
                {comment.isLocal && <span className={styles.badge}>Tú</span>}
                <span className={styles.date}>
                  {new Date(comment.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className={styles.text}>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}