import { CheckCircle2, XCircle, Clock, Wifi } from 'lucide-react'
import { useContactMetrics } from '../hooks/useContactMetrics'
import styles from '../styles/statsPanel.module.css'

export default function StatsPanel() {
  const { metrics } = useContactMetrics()

  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Métricas de Contacto</h3>
      
      <div className={styles.stats}>
        <div className={styles.stat}>
          <CheckCircle2 size={18} className={styles.iconSuccess} />
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Enviados</span>
            <span className={styles.statValue}>{metrics.success}</span>
          </div>
        </div>

        <div className={styles.stat}>
          <XCircle size={18} className={styles.iconError} />
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Fallidos</span>
            <span className={styles.statValue}>{metrics.failed}</span>
          </div>
        </div>

        <div className={styles.stat}>
          <Clock size={18} className={styles.iconNeutral} />
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Latencia</span>
            <span className={styles.statValue}>{metrics.avgLatency}ms</span>
          </div>
        </div>

        <div className={styles.stat}>
          <Wifi size={18} className={styles.iconNeutral} />
          <div className={styles.statContent}>
            <span className={styles.statLabel}>En cola</span>
            <span className={styles.statValue}>{metrics.queue}</span>
          </div>
        </div>
      </div>

      {metrics.success + metrics.failed > 0 && (
        <div className={styles.successRate}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${metrics.successRate}%` }}
            />
          </div>
          <span className={styles.rateLabel}>
            Éxito: {metrics.successRate}%
          </span>
        </div>
      )}
    </div>
  )
}
