//**************************** SERVER *****************************
const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3010;

const initialize = () => {
  router.serveClient();
  router.allowImageRetrieval();
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

const router = {

  serveClient: () => {
    server.use(express.static('../client/dist'));
    server.get('/', (req, res) => {
      let index = path.join(__dirname, '../client/index.html');
      res.sendFile(index, (err) => {
        if (err) {
          res.status(500).end();
          throw err;
        }
      }).end();
    });
  },

  allowImageRetrieval: () => {
    server.get('/product/:productID/images', (req, res) => {
      let productID = req.params.productID;
      queryDatabase(productID)
        .then(document => {
          if (document === null) res.status(404).end();
          res.status(200).send(document).end();
        })
        .catch(err => {
          res.status(500).end();
          throw err;
        });
    });
  }
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


//********************** START SERVER **********************
initialize();