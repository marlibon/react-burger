import clsx from 'clsx';
import styles from './drag-drop-container.module.css';
import PropTypes from 'prop-types';

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
DragAndDropContainer.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.func.isRequired,
  onHover: PropTypes.bool.isRequired
};

export default DragAndDropContainer;
