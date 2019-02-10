//**************************** SERVER *****************************
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3010;

const initialize = () => {
  serveClientWithImages();
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

const serveClientWithImages = () => {
  server.use(express.static(path.join(__dirname, '../client/dist')));
  server.get('/product/:productID/images', (req, res) => {

    //first get the data from the database:
    let productID = req.params.productID;
    queryDatabase(productID)
      .then(document => {
        if (document === null) {
          res.status(404).end();
        } else {
          saveDocument(document)
            .then(() => {
              let index = path.join(__dirname, '../client/index.html');
              res.sendFile(index, (err) => {
                if (err) {
                  res.status(500).end();
                  throw err;
                }
                res.status(200).sendFile(index).end();
              });
            })
            .catch(err => {
              res.status(500).end();
              throw err;
            });
        }
      })
      .catch(err => {
        res.status(500).end();
        throw err;
      });
  });
};


//********************** DATABASE CONNECTION **********************
const mongoose = require('mongoose');
const DATABASE_LINK = process.env.DATABASE_LINK || require('../config.js').DATABASE_LINK;
const DB_SCHEMA = require('../database-seed/database-schema.js').DB_SCHEMA;

const queryDatabase = (productID) => {
  mongoose.connect(DATABASE_LINK, { useNewUrlParser: true, useCreateIndex: true });
  let Product = mongoose.model('ProductImage', DB_SCHEMA);
  return new Promise((resolve, reject) => {
    Product.findOne({productID: productID}, (err, result) => {
      mongoose.connection.close();
      if (err) reject(err);
      resolve(result);
    });
  });
};

//********************** WRITE CONNECTION **********************
const saveDocument = (document) => {
  return new Promise((resolve, reject) => {
    let destination = path.join(__dirname, '../client/dist/images.js');
    fs.writeFile(destination, JSON.stringify(document), (err) => {
      if(err) reject(err);
      resolve()
    });
  });
}


//********************** START SERVER **********************
initialize();