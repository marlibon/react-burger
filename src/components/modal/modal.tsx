import clsx from 'clsx';
import styles from './modal.module.css';
import ModalOverlay from './overlay/overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const elementHtmlToModal = document.getElementById('modal');

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleDownKeyEsc = (event: KeyboardEvent): void => {
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
        data-cy="modal"
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title && title}</h3>
          <div className={styles.close} onClick={onClose} data-cy="close-modal">
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
  return (
    elementHtmlToModal &&
    ReactDOM.createPortal(modalWindowContent, elementHtmlToModal)
  );
};

export default Modal;
