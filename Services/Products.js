var mongoose = require('mongoose');
var schemas = require('../Models/Products');

var ProductSchema;

exports.GetProducts = function()
{
    return new Promise(function (resolve, reject) 
    {
        var retorno = false;

        mongoose.connect("mongodb://localhost:27017/data/db/products");
            mongoose.Promise = global.Promise;

        var db = mongoose.connection;
            db.once('open', function () {
              
              ProductSchema = schemas.GetProductSchema();
              var query = ProductSchema.find();

              query.exec(function (err, products) 
              {
                    if (err) return handleError(err);

                    db.close();
                    return resolve(products);
                });
            });
    });
}