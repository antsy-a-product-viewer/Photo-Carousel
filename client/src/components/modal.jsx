import styles from './styles.css.js';
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
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
            <span
              id='closemodal'
              style={styles.modalBtn}
              onClick={this.props.closeModal}>&otimes;</span>
            <img src={this.props.image}></img>
          </div>
        </div>
      );
    }
  }
}

export default Modal;
