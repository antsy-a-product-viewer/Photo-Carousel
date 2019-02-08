const mongoose = require('mongoose');

const productImageScheme = mongoose.Schema({
    productID: {
        type: Number,
        unique: true
    },
    images: [{
        url: String,
        sort: Number
    }]
});

module.exports = {
    DB_SCHEMA: productImageScheme
}