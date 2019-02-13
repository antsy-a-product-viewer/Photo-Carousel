import styles from './styles.css.js';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  handleOutsideClick(event) {
    if (this.props.modalActive) {
      let modalParent = document.getElementById('modal');
      if (!modalParent.contains(event.target)) {
        this.props.closeModal();
      }
    }
  }

  render() {
    if (!this.props.modalActive) {
      return null;
    } else {
      return (
        <div style={styles.modal} id='modal'>
          <div style={styles.modalContent}>
            <span style={styles.modalBtn} onClick={this.props.closeModal}>&times;</span>
            <img src={this.props.image}></img>
          </div>
        </div>
      );
    }
  }
}

export default Modal;



// closeModalExternal(e) { //watch for a click outside of the modal div

//   if (this.state.modalActive) {
//     let modalParent = document.getElementById('modal');
//     console.log(modalParent.contains(e.target));
//     this.setState({
//       modalActive: false
//     });
//   }
// }