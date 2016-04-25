var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var obj = require('./car_template.json');
var template = require('./template.js');
var mustache = require('mustache');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/globe/globe/index.html");
   /*res.sendFile( __dirname + "/templates/" + "index.html" );
   var html = mustache.to_html(template["index.html"], 
    {Model: "", Rank: "",
    Model2: "Car Model",
     Plant_1_location: "",
     Plant_1_latlong: "" ,
     Plant_1_info: "" ,
     Plant_2_location: "",
     Plant_2_latlong: "",
     Plant_2_info: "",
     Plant_3_location: "",
     Plant_3_latlong: "",
     Plant_3_info: "",
     Plant_4_location: "",
     Plant_4_latlong: "",
     Plant_4_info: "",
     Plant_5_location: "",
     Plant_5_latlong: "",
     Plant_5_info: "",
   });
   res.send(html);*/
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
    {Model: model.toString(), Model2: model.toString(), Rank: response[model.toString()]["2015 rank"],
     Plant_1_location: response[model.toString()]["Plant_1_location"],
     Plant_1_latlong: response[model.toString()]["Plant_1_latlong"],
     Plant_1_info: response[model.toString()]["Plant_1_info"],
     Plant_2_location: response[model.toString()]["Plant_2_location"],
     Plant_2_latlong: response[model.toString()]["Plant_2_latlong"],
     Plant_2_info: response[model.toString()]["Plant_2_info"],
     Plant_3_location: response[model.toString()]["Plant_3_location"],
     Plant_3_latlong: response[model.toString()]["Plant_3_latlong"],
     Plant_3_info: response[model.toString()]["Plant_3_info"],
     Plant_4_location: response[model.toString()]["Plant_4_location"],
     Plant_4_latlong: response[model.toString()]["Plant_4_latlong"],
     Plant_4_info: response[model.toString()]["Plant_4_info"],
     Plant_5_location: response[model.toString()]["Plant_5_location"],
     Plant_5_latlong: response[model.toString()]["Plant_5_latlong"],
     Plant_5_info: response[model.toString()]["Plant_5_info"],
   });
   res.send(html);
   //console.log(response[model.toString()]["2015 rank"]);
   //res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
