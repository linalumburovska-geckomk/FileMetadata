
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const formidable = require('formidable')
var mongoose = require('mongoose');
var cors = require('cors');
const fileUpload = require('./models/fileUpload')
app.use(bodyParser.json());
app.use(cors({optionSuccessStatus: 200})); 


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls');

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.post('/api/fileanalyse', function (req,res){
  var data;
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
      console.log(file);
      data = new fileUpload({
        "name": file.name,
        "type": file.type,
        "size": file.size+"B"
      })
      data.save();
      return res.json(data);
  })
})

app.listen(3000, function () {
  console.log('Your app is listening on port 3000');
});