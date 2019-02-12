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
  },
  modal: { //the popup modal
    position:'fixed',
    background: 'white',
    width: '80%',
    height: 'auto',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    backgroundcolor: 'gray'
  },
  modalContent: { //the image
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundcolor: 'white',
    padding: '1rem 1.5rem',
    width: '24rem',
    borderradius: '0.5rem'
  },
  modalBtn: { //the button
    float: 'right',
    width: '1.5rem',
    lineheight: '1.5rem',
    textalign: 'center',
    cursor: 'pointer',
    borderradius: '0.25rem',
    backgroundcolor: 'lightgray'
  }
};
