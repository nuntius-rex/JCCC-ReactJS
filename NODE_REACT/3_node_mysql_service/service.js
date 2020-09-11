var http=require('http');
var mysql=require('mysql');
var port="8080"; //http://localhost:8080

var app=http.createServer(function(request, response){
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Content-Type","application/json");

  var connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1lex2admit",
    database: "classicmodels"
  });

  connection.connect(function(error){
      if(error){
        console.log("Unable to connect");
      }else{
        console.log("Connected to database");
      }

      var sql="SELECT * FROM `customers`";
      connection.query(sql, function(error, result, fields){
        if(error){
          console.log("Unable to get results");
        }else{
          response.end( JSON.stringify(result), null, 3 );
        }
      });
  });

});
app.listen(port);
console.log("Now running on localhost:"+port);
