var express = require('express');
var app = express();
var useragent = require('useragent'); 

app.get('/', function(req,res) {
  var returnObject = {};
  // Obtain IP address
  returnObject.ipaddress = req.connection.remoteAddress;
  // Obtain language
  returnObject.language = req.headers["accept-language"];
  // Obtain operating system
  returnObject.software = useragent.parse(req.headers['user-agent']).os.toString();
  res.send(returnObject)
})

app.listen(8080, console.log('Listening on port 8080'))