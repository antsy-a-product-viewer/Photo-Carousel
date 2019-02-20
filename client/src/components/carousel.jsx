import Thumbnails from './thumbnails.jsx';
import Scaled from './scaled.jsx';
import axios from 'axios';
import styles from './styles.css.js';
import Modal from './modal.jsx';
import React from 'react';

const dummy = [ //local drive loading for development only
  {url: './placeholder.jpg', sort: 0},
  {url: './placeholder1.jpg', sort: 1},
  {url: './placeholder2.jpg', sort: 2},
  {url: './placeholder3.jpg', sort: 3},
  {url: './placeholder4.jpg', sort: 4},
  {url: './placeholder5.jpg', sort: 5},
  {url: './placeholder6.jpg', sort: 6},
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dummy,
      scaled: 0,
      isFavorite: false, //there is no way to keep track of users right now.
      modalActive: false
    };

    this.retrieveImageDocument = this.retrieveImageDocument.bind(this);
    this.changeFavorite = this.changeFavorite.bind(this);
    this.cycleForward = this.cycleForward.bind(this);
    this.cycleBack = this.cycleBack.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  //******************** EVENT HANDLERS ********************
  changeFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  openModal() { //it will probably be best to have a separate function for hide and show
    this.setState({
      modalActive: true
    });
  }

  closeModal() {
    this.setState({
      modalActive: false
    });
  }



  handleThumbnailClick(newIndex) {
    this.setState({
      scaled: newIndex
    });
  }

  cycleForward() {
    if (this.state.scaled < this.state.images.length - 1) {
      this.setState({
        scaled: this.state.scaled + 1
      });
    } else {
      this.setState({
        scaled: 0
      });
    }
  }

  cycleBack() {
    if (this.state.scaled > 0) {
      this.setState({
        scaled: this.state.scaled - 1
      });
    } else {
      this.setState({
        scaled: this.state.images.length - 1
      });
    }
  }

  //******************** STATE ********************

  retrieveImageDocument() {
    //let endpoint = window.location.pathname + 'retrieve';
    //for proxy usage (WILL NEED TO BE UPDATED FOR AWS DEPLOYMENT?)
    let endpoint = 'http://127.0.0.1:3010' + window.location.pathname + 'images/retrieve';
    axios({
      method: 'GET',
      url: endpoint
    })
      .then((document) => {
        this.setState({
          images: document.data.images,
          scaled: 0
        });
      })
      .catch((err) => {
        console.log('Error retrieving images');
        throw err;
      });
  }

  //******************** VIEW HANDLERS ********************

  render() {
    let i = this.state.scaled;
    return (
      <div style={styles.container}>
        <Scaled
          image={this.state.images[i].url}
          favorite={this.changeFavorite}
          isFavorite={this.state.isFavorite}
          leftHandle={this.cycleBack}
          rightHandle={this.cycleForward}
          openModal={this.openModal}/>
        <br></br>
        <Thumbnails
          images={this.state.images}
          change={this.handleThumbnailClick}/>
        <br></br>
        <Modal closeModal={this.closeModal} modalActive={this.state.modalActive} image={this.state.images[i].url}/>
      </div>
    );
  }

  componentDidMount() {
    //this.retrieveImageDocument(); //uncomment to query S3 (warning: bandwidth)
  }
}

export default Carousel;
