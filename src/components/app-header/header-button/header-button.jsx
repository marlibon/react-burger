import styles from './header-button.module.css'

const HeaderButton = ({children, text, active, otherStyles}) => {
  const classNameActive = (basic, active) => {
    const staticClassname = Array.isArray(basic) ? basic.join(' ') : basic

    return `${staticClassname} ${
      active ? styles['active'] : styles['inactive']
    }`
  }
  return (
    <button
      className={classNameActive([styles.button, 'mr-2'], active)}
      type='button'
      style={otherStyles}
    >
      {children}
      <span className={classNameActive('text text_type_main-default', active)}>
        {text}
      </span>
    </button>
  )
}
export default HeaderButton
