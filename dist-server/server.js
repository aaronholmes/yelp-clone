var express = require('express');
var path = require('path');
var compression = require('compression');

var port = process.env.port || 3000;
var app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/vars.js', function(req, res){
  res.send("var TEST='"+process.env.TEST+"'");
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
    console.log(`BAHHHHHH: ${process.env.TEST}`);
  }
});
