import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard'
import Loader from '../components/Loader'
import ErrorModal from '../components/ErrorModal'
import Pagination from '../components/Pagination'
import styles from '../styles/posts.module.css'

export default function Posts() {
  const { posts, loading, error, retry, retryCount } = usePosts()
  const { searchQuery, setHasContent } = useOutletContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const postsPerPage = 10

  useEffect(() => {
    if (error) {
      setShowErrorModal(true)
    }
  }, [error])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  useEffect(() => {
    const hasEnoughContent = filteredPosts.length >= 4 || totalPages > 1
    setHasContent(hasEnoughContent && !error)
  }, [filteredPosts.length, error, totalPages, setHasContent])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRetry = () => {
    setShowErrorModal(false)
    retry()
  }

  if (loading && !error) {
    return <Loader text={retryCount > 0 ? 'Reintentando...' : 'Cargando publicaciones...'} />
  }

  return (
    <div className={styles.postsContainer}>
      {showErrorModal && (
        <ErrorModal
          message={error}
          onRetry={handleRetry}
          onClose={() => setShowErrorModal(false)}
        />
      )}

      {searchQuery && (
        <div className={styles.searchInfo}>
          <p>
            Mostrando {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} 
            {' '}para "{searchQuery}"
          </p>
        </div>
      )}

      <div className={styles.postsGrid}>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && !loading && (
        <div className={styles.noResults}>
          <p>No se encontraron publicaciones</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}