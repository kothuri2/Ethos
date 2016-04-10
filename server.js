var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var obj = require('./car2.json');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   //console.log(obj);
   var model = req.body.model;
   //var all_models = key[obj];
   response = {};
   for(var key in obj)
   {
      //console.log(obj[key]);
      if(obj[key].hasOwnProperty(model.toString()))
      {
         response = obj[key];
      }
   }
   //console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
