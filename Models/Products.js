var mongoose = require('mongoose');

exports.GetProductSchema = function(){

    var Schema = mongoose.Schema(
    {
        name: String,
        size: String,
        value: String
    });

    var productSchema = mongoose.model('products', Schema);
    return productSchema;
}