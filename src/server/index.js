const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser') // to use url encoded values
var cors = require('cors') // to use json
let input_url = [];
//const mockAPIResponse = require('./mockAPI.js')
const app = express()

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=';
const key= process.env.APP_ID;
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

app.get('/testget', function (req, res) {
    //res.send(mockAPIResponse)
    const info =  fetch(baseURL+input_url+process.env.APP_ID)

    res.send(info)
})
const getWeather = async (baseURL, input_url, key)=>{
    const res = await fetch(baseURL+input_url+key)
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
// Post Route
app.post('/testpost', addPost);
//let input_url = [];
function addPost(req,res){
    newEntry = req.body
    console.log("REQ IS DIS: ",req.body)
    input_url = req.body.url;
    console.log("input_url now set to: ", input_url)
//  projectData = newEntry;
    const info =  getWeather(baseURL, input_url, key);//fetch(baseURL+input_url+process.env.APP_ID)

    res.send(info);
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