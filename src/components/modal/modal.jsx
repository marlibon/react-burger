import clsx from 'clsx';
import styles from './modal.module.css';
import ModalOverlay from './overlay/overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const elementHtmlToModal = document.getElementById('modal');

const Modal = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleDownKeyEsc = (event) => {
      event.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleDownKeyEsc);
    return () => {
      document.removeEventListener('keydown', handleDownKeyEsc);
    };
  }, [onClose]);

  const modalWindowContent = (
    <ModalOverlay onClose={onClose}>
      <div
        className={clsx(styles.content, styles.isOpen)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
  return ReactDOM.createPortal(modalWindowContent, elementHtmlToModal);
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
