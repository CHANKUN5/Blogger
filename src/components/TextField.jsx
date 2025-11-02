import styles from '../styles/contactForm.module.css'

export default function TextField({ 
  label, 
  name, 
  type = 'text', 
  register, 
  error, 
  required = false,
  placeholder 
}) {
  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={name} id={`${name}-label`} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={name}
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        placeholder={placeholder}
        aria-labelledby={`${name}-label`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-required={required}
        {...register}
      />
      {error && (
        <span id={`${name}-error`} className={styles.errorMsg} role="alert">
          {error.message}
        </span>
      )}
    </div>
  )
}
