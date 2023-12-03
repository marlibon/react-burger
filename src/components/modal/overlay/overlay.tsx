import clsx from 'clsx';
import styles from './overlay.module.css';

interface ModalOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}
const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose, children }) => {
  return (
    <div className={clsx(styles.overlay, styles.is_open)} onClick={onClose}>
      {children}
    </div>
  );
};
export default ModalOverlay;
