const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
//var meaningcloud = require("aylien_textapi");//fix?
const mockAPIResponse = require('./mockAPI.js')
const app = express()

//var textapi = new meaningcloud({
//    application_key: process.env.API_KEY
//  });

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
//endpoint: 'api.meaningcloud.com/sentiment-2.1?key='+process.env.API_KEY+'&lang=en&url='+input_url