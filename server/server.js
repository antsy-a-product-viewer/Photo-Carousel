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
            queryDatabase(productID).then((document) => {
                console.log(document);
                //res.send(document, () => {
                // for sending to the client later.
                // we dont need to do this yet.
                // res.end();
                //}
            });
        })
    }
};


//*********** DATABASE CONNECTION ***********
const mongoose = require('mongoose');
const DATABASE_LINK = process.env.DATABASE_LINK || require('../config.js').DATABASE_LINK;
const DB_SCHEMA = require('../database-seed/mongo-loader.js').DB_SCHEMA;

const queryDatabase = (productID) => {
    mongoose.connection(DATABASE_LINK, { useNewUrlParser: true, useCreateIndex: true });
    let Product = mongoose.model('ProductImage', DB_SCHEMA);
    return new Promise((resolve, reject) => {
        Product.findOne({productID: productId}, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}



initialize();