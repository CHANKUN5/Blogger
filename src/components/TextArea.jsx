import { useState } from 'react'
import styles from '../styles/contactForm.module.css'

export default function TextArea({ 
  label, 
  name, 
  register, 
  error, 
  required = false,
  placeholder,
  maxLength = 2000,
  minLength = 10
}) {
  const [charCount, setCharCount] = useState(0)

  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={name} id={`${name}-label`} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <textarea
        id={name}
        className={`${styles.textarea} ${error ? styles.inputError : ''}`}
        placeholder={placeholder}
        rows={4}
        maxLength={maxLength}
        aria-labelledby={`${name}-label`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : `${name}-help`}
        aria-required={required}
        {...register}
        onChange={(e) => {
          register.onChange(e)
          setCharCount(e.target.value.length)
        }}
      />
      <div className={styles.textareaFooter}>
        {error && (
          <span id={`${name}-error`} className={styles.errorMsg} role="alert">
            {error.message}
          </span>
        )}
        <span 
          id={`${name}-help`} 
          className={styles.charCount}
          aria-live="polite"
        >
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  )
}
