import { useState, useEffect, useCallback } from 'react'
import { sendContact, updateQueueCount } from '../api/contactApi'

const QUEUE_KEY = 'contactQueue'

export function useOfflineQueue(toast) {
  const [queue, setQueue] = useState([])
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(QUEUE_KEY)
    if (stored) {
      setQueue(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    updateQueueCount(queue.length)
  }, [queue.length])

  const addToQueue = (payload, idempotencyKey) => {
    const item = {
      payload,
      idempotencyKey,
      timestamp: Date.now()
    }
    const newQueue = [...queue, item]
    setQueue(newQueue)
    localStorage.setItem(QUEUE_KEY, JSON.stringify(newQueue))
  }

  const syncQueue = useCallback(async () => {
    if (queue.length === 0 || isSyncing) return

    setIsSyncing(true)
    console.log(`🔄 SINCRONIZACIÓN DE COLA OFFLINE`)
    console.log(`📊 Mensajes en cola: ${queue.length}`)
    
    if (toast) {
      toast.info(`Sincronizando ${queue.length} mensaje(s) pendiente(s)...`)
    }
    
    const results = []

    for (const item of queue) {
      console.log(`📤 Enviando mensaje de cola (timestamp: ${new Date(item.timestamp).toLocaleString()})`)
      try {
        await sendContact(item.payload, item.idempotencyKey)
        results.push({ success: true, item })
      } catch (err) {
        console.error('❌ Error al sincronizar mensaje:', err)
        results.push({ success: false, item })
      }
    }

    const successCount = results.filter(r => r.success).length
    const failedItems = results.filter(r => !r.success).map(r => r.item)
    
    console.log(`✅ Sincronización completada: ${successCount} exitosos, ${failedItems.length} fallidos`)
    
    setQueue(failedItems)
    localStorage.setItem(QUEUE_KEY, JSON.stringify(failedItems))
    setIsSyncing(false)

    if (toast && successCount > 0) {
      toast.success(`${successCount} mensaje(s) enviado(s) correctamente`)
    }

    return results
  }, [queue, isSyncing, toast])

  useEffect(() => {
    const handleOnline = () => {
      if (queue.length > 0) {
        syncQueue()
      }
    }

    window.addEventListener('online', handleOnline)
    return () => window.removeEventListener('online', handleOnline)
  }, [queue, syncQueue])

  return {
    queue,
    queueCount: queue.length,
    addToQueue,
    syncQueue,
    isSyncing
  }
}
