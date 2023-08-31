import styles from './header-button.module.css'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const HeaderButton = ({children, text, otherStyles}) => {
  return (
    <button
      className={clsx(styles.button, 'mr-2')}
      type='button'
      style={otherStyles}
    >
      {children}
      <span className={'text text_type_main-default'}>{text}</span>
    </button>
  )
}
HeaderButton.propTypes = {
  otherStyles: PropTypes.object,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default HeaderButton
