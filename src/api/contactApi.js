import axios from 'axios'

const api = axios.create({ 
  baseURL: '/api',
  validateStatus: () => true
})

const saveMetric = (metric) => {
  const metrics = JSON.parse(localStorage.getItem('contactMetrics') || '{"success": 0, "failed": 0, "latencies": [], "queue": 0}')
  
  if (metric.success) {
    metrics.success++
    if (metric.latency) {
      metrics.latencies.push(metric.latency)
      if (metrics.latencies.length > 50) {
        metrics.latencies.shift()
      }
    }
  } else {
    metrics.failed++
  }
  
  localStorage.setItem('contactMetrics', JSON.stringify(metrics))
}

export async function sendContact(payload, idempotencyKey) {
  const maxRetries = 3
  let attempt = 0

  console.log(`🔄 Iniciando envío (Idempotency-Key: ${idempotencyKey})`)

  while (attempt < maxRetries) {
    try {
      const t0 = performance.now()
      
      console.log(`⏳ Intento ${attempt + 1}/${maxRetries} - Simulando latencia de red...`)
      await new Promise(resolve => setTimeout(resolve, 600))
      
      if (Math.random() < 0.2) {
        throw new Error('Temporary failure')
      }
      
      const latency = performance.now() - t0
      
      const mockResponse = {
        status: 'queued',
        id: crypto.randomUUID(),
        message: 'Mensaje recibido correctamente',
        timestamp: new Date().toISOString(),
        idempotencyKey,
        data: payload,
        metadata: {
          latency: Math.round(latency),
          attempt: attempt + 1,
          retries: attempt
        }
      }
      
      console.log(`✅ Envío exitoso en ${Math.round(latency)}ms`)
      console.log('📦 Respuesta simulada:', mockResponse)
      
      saveMetric({ success: true, latency })
      return mockResponse
      
    } catch (err) {
      attempt++
      console.warn(`⚠️ Intento ${attempt} falló:`, err.message)
      
      if (attempt >= maxRetries) {
        console.error(`❌ Todos los intentos fallaron (${maxRetries} intentos)`)
        saveMetric({ success: false })
        throw err
      }
      
      const backoffTime = 500 * Math.pow(2, attempt)
      console.log(`⏱️ Esperando ${backoffTime}ms antes del siguiente intento (backoff exponencial)`)
      await new Promise(r => setTimeout(r, backoffTime))
    }
  }
}

export function getMetrics() {
  const metrics = JSON.parse(localStorage.getItem('contactMetrics') || '{"success": 0, "failed": 0, "latencies": [], "queue": 0}')
  
  const avgLatency = metrics.latencies.length > 0
    ? Math.round(metrics.latencies.reduce((a, b) => a + b, 0) / metrics.latencies.length)
    : 0
  
  const total = metrics.success + metrics.failed
  const successRate = total > 0 ? Math.round((metrics.success / total) * 100) : 0
  
  return {
    success: metrics.success,
    failed: metrics.failed,
    avgLatency,
    successRate,
    queue: metrics.queue
  }
}

export function updateQueueCount(count) {
  const metrics = JSON.parse(localStorage.getItem('contactMetrics') || '{"success": 0, "failed": 0, "latencies": [], "queue": 0}')
  metrics.queue = count
  localStorage.setItem('contactMetrics', JSON.stringify(metrics))
}
