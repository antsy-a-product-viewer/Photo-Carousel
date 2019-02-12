import Thumbnails from './thumbnails.jsx';
import Scaled from './scaled.jsx';
import axios from 'axios';
import styles from './styles.css.js';

const dummy = [ //local drive loading for development only
  {url: './placeholder.jpg', sort: 0},
  {url: './placeholder.jpg', sort: 1},
  {url: './placeholder.jpg', sort: 2},
  {url: './placeholder.jpg', sort: 3},
  {url: './placeholder.jpg', sort: 4},
  {url: './placeholder.jpg', sort: 5},
  {url: './placeholder.jpg', sort: 6}
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dummy,
      scaled: 0,
      isFavorite: false //there is no way to keep track of users right now.
    };
    this.retrieveImageDocument = this.retrieveImageDocument.bind(this);
    this.changeFavorite = this.changeFavorite.bind(this);
  }

  changeFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
    //TODO: need to visually show the change, for now just log
    console.log(`Is this product favorited? ${this.state.isFavorite ? 'yes' : 'no'}`);
  }

  handleThumbnailClick(event) {
    console.log(event.target);
    this.setState({
      scaled: 0
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

  retrieveImageDocument() {
    let endpoint = window.location.pathname + 'retrieve';
    axios({
      method: 'GET',
      url: endpoint
    })
      .then((document) => {
        this.setState({
          images: document.data.images,
          scaled: 0 //set to default photo
        });
      })
      .catch((err) => {
        console.log('Error retrieving images');
        throw err;
      });
  }

  render() {
    let i = this.state.scaled;
    return (
      <div style={styles.container}>
        <Scaled image={this.state.images[i].url}/>
        <br></br>
        <Thumbnails images={this.state.images}/>
      </div>
    );
  }

  componentDidMount() {
    //this.retrieveImageDocument(); //uncomment to query S3 (warning: bandwidth)
  }
}

export default Carousel;