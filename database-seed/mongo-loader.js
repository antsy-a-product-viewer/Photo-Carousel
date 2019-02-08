const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const DATABASE_LINK = process.env.DATABASE_LINK || require('../config.js').DATABASE_LINK;

mongoose.connect(DATABASE_LINK);

const productImageScheme = mongoose.Schema({
    productID: {
        type: Number,
        unique: true
    },
    images: [{
        url: String,
        sort: Number
    }]
})

let Product = mongoose.model('ProductImage', productImageScheme);

const seedDatabase = () => {
    let documents = JSON.parse(retrieveData());
    documents.forEach((document) => {
        Product.update({'productID':document.productID}, document, {upsert: true}, (err) => {
            if (err) throw err;
        })
    });
}

const retrieveData = () => {
    let source = path.join(__dirname,'dummydata.js');
    return fs.readFileSync(source,'utf-8');
}

//seedDatabase();