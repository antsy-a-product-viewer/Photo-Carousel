const fs = require('fs');
const path = require('path');
const axios = require('axios');

const uri = 'https://loremflickr.com/';
const productTypes = ['jewellery','dress','hat','cargopants','craftproduct','kitten','necklace','purse','shoes','chair','socks','computer','toys','collectible'];
const resolutions = [[800,600],[600,600],[1200,800],[800,1200],[300,400],[200,150]];

const generateImages = (num) => {

    for (let i = 0; i < num; i++) {
        let prodID = `${i}`;
        let destination = path.join(__dirname, `/images/${prodID}/`);
        let filename = `${prodID}.jpg`;
        let resolution = randResolution();
        let type = randType();
        let url = uri+resolution+type;

        try {
            fs.statSync(destination).isDirectory();
        } catch (error) {
            if (error.code === 'ENOENT') {
                fs.mkdirSync(destination);
            } else {
                throw error;
            }
        }

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
              console.log(`${url} failed`);
          });
    }

}

const randType = () => {
    let index = Math.floor(Math.random() * Math.floor(productTypes.length));
    return productTypes[index];
}
const randResolution = () => {
    let index = Math.floor(Math.random() * Math.floor(resolutions.length));
    return `${resolutions[index][0]}/${resolutions[index][1]}/`;
}

generateImages(5);

