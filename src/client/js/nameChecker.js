function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "90011",
        "92612",
        "90210",
        "92503",
        "Kirk"
    ]

    if(names.includes(inputText)) {
        alert("YUP, issa zip!")
    }
}

export { checkForName }
