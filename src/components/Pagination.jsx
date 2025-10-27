import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '../styles/pagination.module.css'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.navBtn}
      >
        <ChevronLeft size={20} />
        Anterior
      </button>
      
      <div className={styles.pages}>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.navBtn}
      >
        Siguiente
        <ChevronRight size={20} />
      </button>
    </div>
  )
}