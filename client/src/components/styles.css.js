export default {
  thumbnailImage: {
    width: '40px',
    height: '40px',
    margin: '5px',
    objectFit: 'contain'
  },
  scaledImage: {
    width: '578px',
    height: '678px',
    objectFit: 'contain',
    cursor: 'zoom-in' //this isnt the same as etsy (custom cursor?)
  },
  thumbnailBar: {
    display: 'flex',
    'flexDirection': 'row',
    'justifyContent': 'center'
  },
  container: {
    width: '580px',
    height: '680px'
  },
  heartButton: {
    transform: 'translate(510px, -700px)',
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
    lineHeight: '11px',
    display: 'inline-block',
    padding: '6px'

  },
  heart: {
    height: '24px',
    width: '24px',
    position: 'relative'
  },
  loveHeart: {
    height: '24px',
    width: '24px',
    position: 'relative',
    fill: 'rgb(193, 60, 39)'
  },
  leftCarousel: {
    transform: 'translate(-67px, -380px)',
    display: 'inline',
    opacity: '0.5',
    height: '80px',
    width: '40px',
    fontFamily: 'Verdana, sans-serif',
    fontSize: 40,
    backgroundColor: 'rgb(117, 117, 117)',
    color: 'white'
  },
  rightCarousel: {
    transform: 'translate(433px, -380px)',
    display: 'inline',
    opacity: '0.5',
    height: '80px',
    width: '40px',
    fontFamily: 'Verdana, sans-serif',
    fontSize: 40,
    backgroundColor: 'rgb(117, 117, 117)',
    color: 'white'
  },
  modal: { //the popup modal
    position:'fixed',
    background: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '20px',
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
    position: 'absolute',
    right: '2px',
    top: '5px',
    width: '20px',
    height: '20px',
    textalign: 'center',
    cursor: 'pointer',
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
};
