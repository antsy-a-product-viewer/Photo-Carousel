import styles from './styles.css.js';

const Scaled = (props) => {
  return (
    <div>
      <img src={props.image} style={styles.scaledImage}></img>
      <button style={styles.heartButton}>heart</button>
      <button style={styles.leftCarousel}>left</button>
      <button style={styles.rightCarousel}>right</button>
    </div>
  );
};

export default Scaled;