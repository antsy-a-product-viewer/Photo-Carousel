const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const DATABASE_LINK = process.env.DATABASE_LINK || require('../config.js').DATABASE_LINK;

mongoose.connect(DATABASE_LINK, { useNewUrlParser: true, useCreateIndex: true });

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
    dropDatabase()
    .then(() => {
        let documents = JSON.parse(retrieveData());
        let updates = [];
        documents.forEach((document) => {
            updates.push(update(document));
        });
        Promise.all(updates).then(() => {
            console.log('Database seeded');
            process.exit();
        })
    });
}

const update = (document) => {
    return new Promise((resolve, reject) => {
        Product.updateOne({'productID':document.productID}, document, {upsert: true}, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
}

const dropDatabase = () => {
    return new Promise((resolve, reject) => {
        Product.deleteMany({}, (err) => {
            if (err) reject(err);
            console.log('Database dropped');
            resolve();
        })
    })
}

const retrieveData = () => {
    let source = path.join(__dirname,'dummydata.js');
    return fs.readFileSync(source,'utf-8');
}

seedDatabase();

module.exports = {
    DB_SCHEMA: productImageScheme
};