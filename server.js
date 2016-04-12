var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var obj = require('./car2.json');
var template = require('./template.js');
var mustache = require('mustache');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/templates/" + "index.html" );
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
   //console.log(response[model.toString()]);
   
   //Returns this car model's data
   var html = mustache.to_html(template["index.html"], 
    {Model: model.toString(), Rank: response[model.toString()]["2015 rank"],
     Plant_1_location: response[model.toString()]["Plant_1_location"],
     Plant_1_latlong: response[model.toString()]["Plant_1_latlong"]});
   res.send(html);
   //console.log(response[model.toString()]["2015 rank"]);
   //res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
