//***************** SERVER ******************
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
}

const router = {
    serveClient: () => {
        server.use(express.static('../client/dist'));
        server.get('/', (req, res) => {
            let index = path.join(__dirname, '../client/index.html');
            res.sendFile(index, (err) => {
                if (err) throw err;
                res.end();
            });
        });
    },
    allowImageRetrieval: () => {
        server.get('/index/:productID/', (req, res) => {
            let productID = req.params.productID;
            //retrieve first (as a promise), .then send result
            //for now, lets just console log a database retrieval
        })
    }
};



//*********** DATABASE CONNECTION ***********
const mongoose = require('mongoose');
const DATABASE_LINK = process.env.DATABASE_LINK || require('../config.js').DATABASE_LINK;
const DB_SCHEMA = require('../database-seed/mongo-loader.js').DB_SCHEMA;

const DB_QUERY = (productID) => {
    mongoose.connection(DATABASE_LINK, { useNewUrlParser: true, useCreateIndex: true });
    let Product = mongoose.model('ProductImage', DB_SCHEMA);
    //query for productID, and return the result
    //return a promise :)
}



initialize();