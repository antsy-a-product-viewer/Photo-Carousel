import styles from './styles.css.js';

const Thumbnail = (props) => {
  return (
    <div><img src={props.image.url} style={styles.thumbnailImage}></img></div>
  );
}

export default Thumbnail;