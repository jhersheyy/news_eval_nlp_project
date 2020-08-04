const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
var bodyParser = require('body-parser'); // to use url encoded values
var cors = require('cors'); // to use json
const fetch = require('node-fetch');

let input_url = [];
const app = express();
const baseURL='https://api.meaningcloud.com/sentiment-2.1?key=';
const querySettings = '&lang=en&url=';
const key = process.env.API_KEY;
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended: true}))
app.use(bodyParser.json());
app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('JH NLP Web Tool: listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Post Route
app.post('/testpost', addPost);
async function addPost(req,res){
    //get and set url:
    newEntry = req.body
    input_url = req.body.url;
    console.log("input_url now set to: ", input_url)
    
    //get data from input:
    const info = await fetch(baseURL+key+querySettings+input_url)
    //translate response obj to json:
    .then( (info) => info.json())
    //return json obj to client thru res.send():
    .then( data => { 
        res.send(data)})
    //handle error:
    .catch((error) => {
        console.log("error in promise (server side): ", error);
    });
};