import Thumbnail from './thumbnail.jsx';
import styles from './styles.css.js';

const Thumbnails = (props) => {
  return (
    <div style={styles.thumbnailBar}>
      {props.images.map((image,index) => {
        return <Thumbnail image={image} index={index} change={props.change}/>
      })}
    </div>
  );
};

export default Thumbnails;
