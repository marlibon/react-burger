import clsx from 'clsx';
import styles from './drag-drop-container.module.css';

const DragAndDropContainer = ({ text, target, onHover }) => {
  return (
    <section className={styles.container}>
      <div
        className={
          onHover ? clsx(styles.wrapper, styles.borderColor) : styles.wrapper
        }
        ref={target}
      >
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
};
export default DragAndDropContainer;
