var express= require("express");
var bodyParser = require("body-parser");
var auth = require("./Services/Authenticate");
var prods = require("./Services/Products");
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


app.post('/login', function(req, res) {
    auth.Login(req.body.login, req.body.password).then(function(result)
    {
        if(result != undefined)
        {
            res.json({
                    success: true,
                    data: result,
                });
        }
        else    
        {
            res.json({
                    success: false,
                    data: result
                });
        }
    });
});

app.get('/products', auth.IsValidToken, function(req, res) {
   prods.GetProducts().then(function(products)
   {
        res.json(
        {
           products:products
        });
   })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});