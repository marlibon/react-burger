import clsx from 'clsx';
import styles from './overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClose, children }) => {
  return (
    <div className={clsx(styles.overlay, styles.is_open)} onClick={onClose}>
      {children}
    </div>
  );
};
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default ModalOverlay;
