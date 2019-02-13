const mongoose = require('mongoose');

const productImageSchema = mongoose.Schema({
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
  DB_SCHEMA: productImageSchema
};