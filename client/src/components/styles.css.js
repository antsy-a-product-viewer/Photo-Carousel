export default {
  thumbnailImage: {
    width: '40px',
    height: '40px',
    margin: '5px'
  },
  scaledImage: {
    width: '578px',
    height: '578px',
    cursor: 'zoom-in' //this isnt the same as etsy (custom?)
  },
  thumbnailBar: {
    display: 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center'
  },
  container: {
    width: '580px',
    height: '640px'
  },
  heartButton: {
    // position: 'absolute',
    // top: '10%',
    // left: '90%',
    transform: 'translate(500px, -550px)', //modern browsers
    //mstransform: 'translate(-90%,-10%', //for IE lol
    display: 'inline'
  },
  leftCarousel: {
    transform: 'translate(-50px, -225px)',
    display: 'inline'
  },
  rightCarousel: {
    transform: 'translate(450px, -225px)',
    display: 'inline'
  }
};

//  transform: translate(-50%, -50%);
//-ms-transform: translate(-50%, -50%);
