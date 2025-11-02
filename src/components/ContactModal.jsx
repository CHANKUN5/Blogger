import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, Mail, Send, Loader2, WifiOff } from 'lucide-react'
import { useToast } from '../context/ToastContext'
import { sendContact } from '../api/contactApi'
import { useOfflineQueue } from '../hooks/useOfflineQueue'
import TextField from './TextField'
import TextArea from './TextArea'
import styles from '../styles/contactModal.module.css'
import formStyles from '../styles/contactForm.module.css'
import floatingStyles from '../styles/floatingButton.module.css'

const schema = z.object({
  name: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Mínimo 3 caracteres'),
  message: z.string()
    .min(10, 'Mínimo 10 caracteres')
    .max(2000, 'Máximo 2000 caracteres'),
  phone: z.string()
    .regex(/^[0-9]*$/, 'Solo números')
    .min(9, 'Mínimo 9 dígitos')
    .optional()
    .or(z.literal('')),
  consent: z.literal(true, { 
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) 
  })
})

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const { addToQueue, queueCount } = useOfflineQueue(toast)
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
    
    console.log('📧 DATOS DEL FORMULARIO DE CONTACTO:')
    console.log('=====================================')
    console.log('Idempotency-Key:', idempotencyKey)
    console.log('Timestamp:', new Date().toISOString())
    console.log('Datos:', JSON.stringify(data, null, 2))
    console.log('Online:', navigator.onLine)
    console.log('=====================================')
    
    try {
      if (!navigator.onLine) {
        addToQueue(data, idempotencyKey)
        console.log('⚠️ Sin conexión - Mensaje agregado a cola offline')
        toast.success('Mensaje guardado en cola. Se enviará cuando vuelva la conexión.')
        reset()
        setIsOpen(false)
        return
      }

      const response = await sendContact(data, idempotencyKey)
      console.log('✅ RESPUESTA DEL SERVIDOR:')
      console.log(JSON.stringify(response, null, 2))
      
      toast.success('Mensaje enviado correctamente')
      reset()
      setIsOpen(false)
    } catch (err) {
      console.error('❌ ERROR AL ENVIAR:', err)
      
      if (err.code === 'ECONNABORTED' || !navigator.onLine) {
        addToQueue(data, idempotencyKey)
        console.log('⚠️ Timeout/Offline - Mensaje agregado a cola')
        toast.info('Sin conexión. Mensaje guardado en cola.')
        reset()
        setIsOpen(false)
      } else {
        toast.error(err.message || 'Error al enviar el mensaje. Intenta nuevamente.')
      }
    }
  }

  return (
    <>
      <button 
        className={`${floatingStyles.floatingButton} ${queueCount > 0 ? floatingStyles.active : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir formulario de contacto"
      >
        <Mail size={24} />
        {queueCount > 0 && (
          <span className={floatingStyles.badge}>{queueCount}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} size={36} />
              </div>
              <h2 className={styles.title}>Contáctanos</h2>
              <p className={styles.message}>
                Envíanos tu mensaje
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
                <div className={formStyles.formRow}>
                  <TextField
                    label="Nombre"
                    name="name"
                    register={register('name')}
                    error={errors.name}
                    required
                    placeholder="Tu nombre"
                  />

                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    register={register('email')}
                    error={errors.email}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className={formStyles.formRow}>
                  <TextField
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    register={register('phone')}
                    error={errors.phone}
                    placeholder="987654321"
                  />

                  <TextField
                    label="Asunto"
                    name="subject"
                    register={register('subject')}
                    error={errors.subject}
                    required
                    placeholder="Motivo"
                  />
                </div>

                <TextArea
                  label="Mensaje"
                  name="message"
                  register={register('message')}
                  error={errors.message}
                  required
                  placeholder="Escribe tu mensaje..."
                  maxLength={2000}
                  minLength={10}
                />

                <div className={formStyles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="consent"
                    className={formStyles.checkbox}
                    {...register('consent')}
                  />
                  <label htmlFor="consent" className={formStyles.checkboxLabel}>
                    Acepto la política de privacidad
                  </label>
                </div>
                {errors.consent && (
                  <span className={formStyles.errorMsg} role="alert">
                    {errors.consent.message}
                  </span>
                )}

                {!navigator.onLine && (
                  <div className={formStyles.offlineWarning}>
                    <WifiOff size={16} />
                    <span>Sin conexión. Se enviará al reconectar.</span>
                  </div>
                )}

                <div className={styles.actions}>
                  <button 
                    type="submit" 
                    className={styles.primaryBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className={formStyles.spinner} />
                        Enviando
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar
                      </>
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsOpen(false)} 
                    className={styles.secondaryBtn}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
