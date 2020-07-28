function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('zip').value
    Client.checkForName(formText)
    
    let baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip='
    //+formText
    let medQuery = '&units=imperial&appid=';

    console.log("::: Form Submitted :::")

    const response = fetch('http://localhost:8081/testpost', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: formText}), 
      })//send url to server side
    .then(res => {
        let post_res = res.text();
        //console.log("back from the server side: ", post_res);
        return post_res
        //const testget = fetch('http://localhost:8081/testget', {
          //  method: 'GET',
            //mode: 'same-origin',
            //headers: {
            //    'Content-Type': 'application/json',
            //},
            //body: JSON.stringify(data),
    })
    .then(function(data) { //data is {url: "zip"}
        console.log("DATUR: ", data)
        console.log(data, "vs", data.main, "vs", data.main.temp)
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export { handleSubmit }
