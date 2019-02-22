import Thumbnails from './thumbnails.jsx';
import Scaled from './scaled.jsx';
import axios from 'axios';
import styles from './styles.css.js';
import Modal from './modal.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      scaled: 0,
      isFavorite: false, //there is no way to keep track of users right now.
      modalActive: false,
      isLoading: true
    };
    this.changeFavorite = this.changeFavorite.bind(this);
    this.cycleForward = this.cycleForward.bind(this);
    this.cycleBack = this.cycleBack.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

//******************** STATE ********************
  componentDidMount() {
    let endpoint = 'http://184.73.119.71' + window.location.pathname + 'images/retrieve';
    axios({
      method: 'GET',
      url: endpoint
    })
      .then((document) => {
        this.setState({
          images: document.data.images,
          scaled: 0,
          isLoading: false
        });
      })
      .catch((err) => {
        console.log('Error retrieving images from the database.  Unable to load Photo Carousel.');
      });
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

  //******************** VIEW HANDLERS ********************

  render() {
    if (!this.state.isLoading) {
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
    } else {
      return (
        <div>Loading photo carousel...</div>
      );
    }
  }
}

export default Carousel;
