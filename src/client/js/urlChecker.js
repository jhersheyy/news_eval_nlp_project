function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
    /*
    let names = [
        "90011",
        "92612",
        "90210",
        "92503",
        "Kirk",
        "https://in.mashable.com/entertainment/15977/star-trek-discovery-adil-hussain-teases-guest-appearance-in-season-3-fans-are-loving-it"
    ]
    if(names.includes(inputText)) {
        alert("URL is valid! Please wait for analysis :)");
        return 1;
    }
    */
   var regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
   
    if(regex == null){
        return 0;
    } else{
    return 1;
    }
}

export { checkURL }
