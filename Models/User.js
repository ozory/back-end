var mongoose = require('mongoose');

exports.GetUserSchema = function(){

    var Schema = mongoose.Schema(
    {
        login: String,
        password: String,
        token: String
    });

    var userSchema = mongoose.model('users', Schema);
    return userSchema;
}