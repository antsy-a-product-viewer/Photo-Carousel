const fs = require('fs');
const path = require('path');
const axios = require('axios');

const uri = 'https://loremflickr.com/';
const productTypes = ['jewellery','hat','cargopants','craftproduct','kitten','necklace','shoes','chair','socks','computer','toys','collectible'];
const resolutions = [[800,600],[600,800],[640,480],[480,640],[578,578]];

const generateImages = (num) => {
  for (let i = 1; i <= num; i++) {
    let prodID = `${i}`;
    let destination = path.join(__dirname, `/images/${prodID}/`);
    let type = randType();

    try {
      fs.statSync(destination).isDirectory();
    } catch (error) {
      if (error.code === 'ENOENT') {
        fs.mkdirSync(destination);
      } else {
        throw error;
      }
    }
    let count = imageCount();
    for (let i = 0; i < count; i++) {
      let filename = `placeholder${i}.jpg`;
      let resolution = randResolution();
      let url = uri + resolution + type;

      axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
      })
        .then((res) => {
          res.data.pipe(fs.createWriteStream(destination+filename));
        }).catch((err) => {
          console.error(err);
          console.log(`${url} failed`);
        });
    }
  }

};

const randType = () => {
  let index = Math.floor(Math.random() * productTypes.length);
  return productTypes[index];
};

const randResolution = () => {
  let index = Math.floor(Math.random() * resolutions.length);
  return `${resolutions[index][0]}/${resolutions[index][1]}/`;
};

const imageCount = () => {
  return Math.ceil(Math.random() * 8); //1 to 8 images
};

//DO NOT RUN WITHOUT UNDERSTANDING THIS APPLICATION:
//generateImages(99);
