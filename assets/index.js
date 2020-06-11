let inputField = document.getElementById("url-Input");
let inputButton = document.querySelector('.covert-button');

inputButton.addEventListener("click", () =>{
        console.log(`URL : ${inputField.value}`);
        var answer = prompt(`Would You Like To Download ${inputField.value}`)
        if(answer === "no"){
            alert("It's Ok To Be Scared")
        } else{
            sendURL(inputField.value);
            alert("The Video Is Currently Downloading. Thank You")
        }
})

function sendURL(URL){
    window.location.href = `http://localhost:3000/download?URL=${URL}`;
}