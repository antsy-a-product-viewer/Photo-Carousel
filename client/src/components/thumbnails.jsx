import Thumbnail from './thumbnail.jsx';
import styles from './styles.css.js';

const Thumbnails = (props) => {
  return (
    <div style={styles.thumbnailBar}>
      {props.images.map(image => {
        return <Thumbnail image={image}/>
      })}
    </div>
  );
};

export default Thumbnails;