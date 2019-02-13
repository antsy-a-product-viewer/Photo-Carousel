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
    'justifyContent': 'center',
    'flexWrap': 'wrap',
    'flexBasis': '21%'
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
    width: 'auto',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '15px',
    margin: '10px',
    zindex: '1000' //ensures this is always on the very top.
  },
  modalContent: { //the image
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'backgroundColor': 'rgba(0, 0, 0, 0.5)',
    padding: '1rem 1.5rem',
    // width: '24rem',
    borderradius: '0.5rem',
    margin: '20px',
    'borderBottomLeftRadius': '8px',
    'borderBottomRightRadius': '8px',
    'borderTopLeftRadius': '8px',
    'borderTopRightRadius': '8px',
    'backgroundAttachment': 'scroll'
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
