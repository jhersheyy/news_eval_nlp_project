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
        //console.log("back from the server side: ", post_res);
        return post_res
    })
    //handle promise error 
    .catch((error) => {
        console.log("error:: ", error);
    });

    //check results:
    /*weather api:
    console.log("DATUR: ", response);
    console.log("DATA.MAIN: ",response.main);
    console.log("DATA MAIN TEMP: ", response.main.temp);
    document.getElementById('results').innerHTML = response.main.temp;  
    */
   /* unnecessary logs
   console.log("DATUR: ", response);
   console.log("DATA.MODEL: ",response.model);
   console.log("DATA SCORE TAG: ", response.score_tag);
   console.log("DATA.AGREEMENT: ",response.agreement);
   console.log("DATA.SUBJECTIVITY: ",response.subjectivity);
   console.log("DATA.CONFIDENCE: ",response.confidence);
   console.log("DATA.IRONY: ",response.irony);
   */
   document.getElementById('score').innerHTML = "Polarity: " + polarityCheck(response.score_tag);
   document.getElementById('agreement').innerHTML = "Overall Sentiments: " + response.agreement.toLowerCase();
   document.getElementById('subjectivity').innerHTML = "Subjectivity: " + response.subjectivity.toLowerCase();
   document.getElementById('irony').innerHTML = "Irony: " + response.irony.toLowerCase();
   document.getElementById('confidence').innerHTML = "Analysis Confidence: " + response.confidence+"%";   
}

function polarityCheck(score){
    let output;
    switch (score){
        case "P+":
            output = "strong positive";
            break;
        case "P":
            output = "positive";
            break;
        case "NEU":
            output = "neutral";
            break; 
        case "N":
            output = "negative";
            break; 
        case "N+":
            output = "strong negative";
            break;
        case "NONE":
            output = "no sentiment";
    }
    return output;
}

export { handleSubmit }
