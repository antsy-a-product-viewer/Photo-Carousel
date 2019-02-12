import styles from './styles.css.js';

const Scaled = (props) => {
  return (
    <div>
      <img src={props.image} style={styles.scaledImage}></img>
      <button style={styles.heartButton} onClick={() => props.favorite()}>heart</button>
      <button style={styles.leftCarousel} onClick={() => props.leftHandle()}>left</button>
      <button style={styles.rightCarousel} onClick ={() => props.rightHandle()}>right</button>
    </div>
  );
};

export default Scaled;
