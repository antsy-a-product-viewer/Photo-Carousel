import Thumbnail from './thumbnail.jsx';
import styles from './styles.css.js';
import React from 'react';

const Thumbnails = (props) => {
  return (
    <div style={styles.thumbnailBar}>
      {props.images.map((image, index) => {
        return <Thumbnail
          image={image}
          key={index}
          index={index}
          change={props.change}/>;
      })}
    </div>
  );
};

export default Thumbnails;
