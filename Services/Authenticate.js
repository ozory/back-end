var mongoose = require('mongoose');
var schemas = require('../Models/User');
var jwt = require("jsonwebtoken");

var UserSchema;

exports.Login = function(login, password)
{
    return new Promise(function (resolve, reject) 
    {
        var retorno = false;
        var connection = mongoose.connection;

        if (!connection || !connection._hasOpened) {
            mongoose.connect("mongodb://localhost:27017/data/db/users");
            mongoose.Promise = global.Promise;

            var db = mongoose.connection;
            db.once('open', function () {
              
              UserSchema = schemas.GetUserSchema();
              var query = UserSchema.findOne({ 'login': login, 'password': password });

              query.exec(function (err, user) 
              {
                    if (err) return handleError(err);

                    db.close();
                    if(user != undefined && user != null)
                    {
                        user.token = jwt.sign(user.login, 'chave-back-end');
                        user.save(function(err, user1) 
                        {
                            return resolve(user.token);
                        });
                    }
                    else
                    {
                        return resolve(undefined);
                    }
                });
            });
        }
    });
}

exports.IsValidToken = function(req, res, next)
{
    var bearerToken;
     return new Promise(function (resolve, reject) 
    {
        var bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            req.token = bearerToken;
             next()
        } else {
           res.sendStatus(403);
        }
    });
}