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

const seedDatabase = () => {
    let documents = JSON.parse(retrieveData());
    console.log(documents);
    documents.forEach((document) => {
        //TODO:
    })

}

const retrieveData = () => {
    let source = path.join(__dirname,'dummydata.js');
    return fs.readFileSync(source,'utf-8');
}

seedDatabase();