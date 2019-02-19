import styles from './styles.css.js';
import React from 'react';


const Thumbnail = (props) => {
  return (
    <div><img
      src={props.image.url}
      style={styles.thumbnailImage}
      onClick={() => { props.change(props.index); }}>
    </img></div>
  );
};

export default Thumbnail;
