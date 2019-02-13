export default {
  thumbnailImage: {
    width: '40px',
    height: '40px',
    margin: '5px'
  },
  scaledImage: {
    width: '578px',
    height: '578px',
    cursor: 'zoom-in' //this isnt the same as etsy (custom cursor?)
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
    height: '580px'
  },
  heartButton: {
    transform: 'translate(510px, -600px)',
    width: '66px',
    opacity: '1',
    height: '66px',
    padding: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0)'
  },
  heartContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    'borderBottomLeftRadius': '50%',
    'borderBottomRightRadius': '50%',
    'borderTopLeftRadius': '50%',
    'borderTopRightRadius': '50%',
    color: 'rgb(89, 89, 89)'
  },
  heart: {
    height: '24px',
    width: '24px',
    position: 'relative'
  },
  leftCarousel: {
    transform: 'translate(-67px, -300px)',
    display: 'inline',
    opacity: '0.5',
    height: '80px',
    width: '40px',
    fontFamily: 'Verdana, sans-serif',
    fontSize: 40
  },
  rightCarousel: {
    transform: 'translate(433px, -300px)',
    display: 'inline',
    opacity: '0.5',
    height: '80px',
    width: '40px',
    fontFamily: 'Verdana, sans-serif',
    fontSize: 40
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
