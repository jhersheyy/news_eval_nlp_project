async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field:
    let formText = document.getElementById('url').value
    if( Client.checkURL(formText)){
        //only continue IF valid url
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
            console.log("error with promise: ", error);
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
       console.log(response);
        if (response.status.code !== '0'){
            alert("UNABLE TO ANALYZE CONTENT AT URL: Please enter a valid url.")
        } else{
            alert("Analysis complete!!");
            updateUI(response);
        }
    } else {
        alert("INVALID URL: Please enter a valid url. (did not pass url checker)");
    }
}
function updateUI(data){
    document.getElementById('score').innerHTML = "Polarity: " + polarityCheck(data.score_tag);
    document.getElementById('agreement').innerHTML = "Overall Sentiments: " + data.agreement.toLowerCase();
    document.getElementById('subjectivity').innerHTML = "Subjectivity: " + data.subjectivity.toLowerCase();
    document.getElementById('irony').innerHTML = "Irony: " + data.irony.toLowerCase();
    document.getElementById('confidence').innerHTML = "Analysis Confidence: " + data.confidence+"%";  
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
export {polarityCheck}
