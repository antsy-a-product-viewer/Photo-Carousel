//**************************** SERVER *****************************
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3010;

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

//********************** SERVE CLIENT **********************
const serveClient = () => {
  server.use('/product/:productID/images', express.static(path.join(__dirname, '../client/dist')));
};

const serveClientImageData = () => {
  server.get('/product/:productID/images/retrieve', (req, res) => {
    let productID = req.params.productID;
    queryDatabase(productID)
      .then(document => {
        if (document === null) {
          res.status(404).end();
        } else {
          res.status(200).send(document).end();
        }
      })
      .catch(err => {
        res.status(500).end();
        throw err;
      });
  });
};

//********************** START SERVER **********************
(initialize => {
  serveClient();
  serveClientImageData();
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})();