import styles from './styles.css.js';

const Modal = props => {
  if (!props.modalActive) {
    return null;
  } else {
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <span style={styles.modalBtn} onClick={props.closeModal}>&times;</span>
          <img src={props.image}></img>
        </div>
      </div>
    );
  }
};

export default Modal;
