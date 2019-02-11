import styles from './styles.css.js';

const Scaled = (props) => {
  return (
    <div><img src={props.image} style={styles.scaledImage}></img></div>
  );
};

export default Scaled;