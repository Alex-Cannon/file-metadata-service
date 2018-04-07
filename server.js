// server.js
// where your node app starts

// init project
const express = require('express');
const multer = require('multer');

var app = express();
var upload = multer({ dest: './uploads/'});

// Use public assets
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/get-file-size', upload.single('upload'), (req, res) => {
  
  if(req.file && req.file.size) {
    res.status(200).json({size: req.file.size});
  } else {
    res.status(400).json({error: "Unsupported file type or invalid file."});
  }

});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
});
