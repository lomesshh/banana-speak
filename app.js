var btntranslator = document.querySelector("#btn-translate")
var inputDiv = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function callServer(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler(){
    var inputValue = inputDiv.value

    fetch(callServer(inputValue))
    .then(response => response.json())
    // .then(json => console.log(json.contents.translated))
    .then(json => { 
        var translatedText = json.contents.translated
        outputDiv.innerHTML = translatedText})
    .catch(error => {
        alert("currently we are facing some issues please try again later")
        console.log(error)})
}

btntranslator.addEventListener("click", clickHandler)