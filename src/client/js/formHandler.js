async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field:
    let formText = document.getElementById('zip').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //send url to server side thru post endpt:
    const response = await fetch('http://localhost:8081/testpost', {
        method: 'POST', 
        credentials: 'same-origin',
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: formText}), 
      })
      //relay data from server side:
    .then(res => {
        let post_res = res.json();
        console.log("back from the server side: ", post_res);
        return post_res
    })
    //handle promise error 
    .catch((error) => {
        console.log("error:: ", error);
    });

    //check results:
    console.log("DATUR: ", response);
    console.log("DATA.MAIN: ",response.main);
    console.log("DATA MAIN TEMP: ", response.main.temp);
    document.getElementById('results').innerHTML = response.main.temp;  
}

export { handleSubmit }
