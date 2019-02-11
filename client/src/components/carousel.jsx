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
      scaled: dummy[0]
    };
    this.retrieveImageDocument = this.retrieveImageDocument.bind(this);
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
          scaled: document.data.images[0]
        });
      })
      .catch((err) => {
        console.log('Error retrieving images');
        throw err;
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <Scaled image={this.state.scaled.url}/>
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