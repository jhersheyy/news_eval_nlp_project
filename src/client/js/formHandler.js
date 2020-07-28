function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('zip').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data, "vs", data.main, "vs", data.main.temp)
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export { handleSubmit }
