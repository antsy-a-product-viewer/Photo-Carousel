//generate an array of product documents to the schema
//print it to file for re-use
const fs = require('fs');
const path = require('path');

const generateDocs = (num) => {
  let collection = [];
  for (let i = 1; i <= num; i++) {
    collection.push(makeDoc(i));
  }
  return collection;
};

const makeDoc = (prodID) => {
  return new Promise((resolve, reject) => {
    let newDoc = {};
    newDoc.productID = prodID;
    createImageArray(prodID)
      .then((images)=>{
        newDoc.images = images;
        resolve(newDoc);
      }).catch(err => {reject(err)});
  });
};

const readDirectory = (source) => {
  return new Promise((resolve, reject) => {
    fs.readdir(source, (err, files) => {
      if (err) reject(err);
      resolve(files.length);
    });
  });
};

const createImageArray = (prodID) => {
  return new Promise((resolve, reject) => {
    let images = [];
    let source = path.join(__dirname,`/images/${prodID}`);
    readDirectory(source).then((length) => {
      for (let i = 0; i < length; i++) {
        let image = {
          url: `https://s3-us-west-1.amazonaws.com/beyond-antsy/images/${prodID}/placeholder${i}.jpg`,
          sort: i
        };
        images.push(image);
      }
      resolve(images);
    });
  });
};


const writeDocs = (docs) => {
  let data = JSON.stringify(docs);
  let destination = path.join(__dirname, 'dummydata.js');
  fs.writeFile(destination, data, 'utf-8', (err) => {
    if (err) throw err;
  });
};

//uncomment to run:
Promise.all(generateDocs(100)).then((docs) => {
  writeDocs(docs);
});
