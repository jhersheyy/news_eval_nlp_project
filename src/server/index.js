const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
var bodyParser = require('body-parser'); // to use url encoded values
var cors = require('cors'); // to use json
const fetch = require('node-fetch');

let input_url = [];
//const mockAPIResponse = require('./mockAPI.js')
const app = express();

//weather api: NOT WORKING: const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=';
const baseURL='https://api.meaningcloud.com/sentiment-2.1?key=';
const querySettings = '&lang=en&url=';
//weather api: const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key = process.env.API_KEY;
//weather api key: const key= process.env.APP_ID;
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log("dirname hereeee: ",__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('JH NLP Web Tool: listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

//app.get('/testget', function (req, res) {
    //res.send(mockAPIResponse)
  //  const info =  fetch(baseURL+input_url+process.env.APP_ID)

    //res.send(info)
//})

// Post Route
app.post('/testpost', addPost);
async function addPost(req,res){
    //get and set url:
    newEntry = req.body
    //console.log("REQ BODY IS DIS: ",req.body)
    input_url = req.body.url;
    console.log("input_url now set to: ", input_url)
    
    //get weather data from input:
    const info = await fetch(baseURL+key+querySettings+input_url)
    //weather api: const info = await fetch(baseURL+input_url+key)
    //translate response obj to json:
    .then( (info) => info.json())
    //return json obj to client thru res.send():
    .then( data => { 
        //console.log("TADATA!!!: ",data);
        res.send(data)})
    //handle error:
    .catch((error) => {
        console.log("error:: ", error);
    });
};



//endpoint: 'api.meaningcloud.com/sentiment-2.1?key='+process.env.API_KEY+'&lang=en&url='+input_url
/*idk what this was
var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}
console.log(JSON.stringify(mockAPIResponse))

*/