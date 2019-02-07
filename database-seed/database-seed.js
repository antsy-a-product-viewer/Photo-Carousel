const fs = require('fs');
const path = require('path');
const axios = require('axios');

let uri = 'https://loremflickr.com/';
let resolution = '320/240';
let type = '/kitten';
let url = uri+resolution+type;
let destination = path.join(__dirname, '/images/seed-test');
let filename = '0001.jpg'

axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
})
  .then((res) => {
      console.log('Image Retrieved, processing stream to file');
      res.data.pipe(fs.createWriteStream(destination+filename));
  }).catch((err) => {
      console.error(err);
  });
