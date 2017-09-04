// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var sassMiddleware = require("node-sass-middleware");

app.use(sassMiddleware({
  src: __dirname + '/stylesheets',
  dest: '/tmp'
}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('/tmp'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/donate", function (request, response) {
  response.sendFile(__dirname + '/views/donate.html');
});
app.get("/event-details", function (request, response) {
  response.sendFile(__dirname + '/views/event-details.html');
});
app.get("/example-course", function (request, response) {
  response.sendFile(__dirname + '/views/example-course.html');
});
app.get("/Graham-artwork", function (request, response) {
  response.sendFile(__dirname + '/views/Graham-artwork.html');
});
app.get("/info", function (request, response) {
  response.sendFile(__dirname + '/views/info.html');
});
app.get("/Lucy-artwork", function (request, response) {
  response.sendFile(__dirname + '/views/Lucy-artwork.html');
});
app.get("/news-article", function (request, response) {
  response.sendFile(__dirname + '/views/news-article.html');
});
app.get("/news-events", function (request, response) {
  response.sendFile(__dirname + '/views/news-events.html');
});
app.get("/student-artwork", function (request, response) {
  response.sendFile(__dirname + '/views/student-artwork.html');
});
app.get("/alumni", function (request, response) {
  response.sendFile(__dirname + '/views/alumni.html');
});
app.get("/contact", function (request, response) {
  response.sendFile(__dirname + '/views/contact.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});