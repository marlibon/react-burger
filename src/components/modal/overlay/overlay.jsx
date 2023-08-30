import clsx from 'clsx'
import styles from './overlay.module.css'
import PropTypes from 'prop-types'

const ModalOverlay = ({onClose, isOpen, children}) => {
  return (
    <div
      className={clsx(styles.overlay, isOpen && styles.is_open)}
      onClick={onClose}
    >
      {children}
    </div>
  )
}
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default ModalOverlay
