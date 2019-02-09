//generate an array of product documents to the schema
//print it to file for re-use
const fs = require('fs');
const path = require('path');

const rand = () => {
    return Math.ceil(Math.random()*12);
}

const generateDocs = (num) => {
    let collection = [];
    for (let i = 1; i <= num; i++) {
        let newDoc = {};
        newDoc.productID = i;
        newDoc.images = createImageArray(i);
        collection.push(newDoc);
    }
    return collection;
}

const createImageArray = (prodID, n = rand()) => {
    let images = [];
    for (let i = 0; i < n; i++) {
        let image = {
            url: `/images/${prodID}/placeholder.jpg`,
            sort: i
        };
        images.push(image);
    }
    return images;
}

const writeDocs = (docs) => {
    let data = JSON.stringify(docs);
    let destination = path.join(__dirname, 'dummydata.js');
    fs.writeFile(destination, data, 'utf-8', (err) => {
        if(err) throw err;
    })
}

//uncomment to run:
writeDocs(generateDocs(99));