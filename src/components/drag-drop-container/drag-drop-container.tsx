import clsx from 'clsx';
import styles from './drag-drop-container.module.css';
import { ConnectDropTarget } from 'react-dnd';

interface DnDProps {
  text: string;
  target: ConnectDropTarget;
  onHover: boolean;
}
const DragAndDropContainer: React.FC<DnDProps> = ({
  text,
  target,
  onHover
}) => {
  return (
    <section className={styles.container}>
      <div
        className={
          onHover ? clsx(styles.wrapper, styles.borderColor) : styles.wrapper
        }
        data-cy="constructor-list"
        ref={target}
      >
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
};

export default DragAndDropContainer;
