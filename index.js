const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")


function randompassword() {
    let randomNumber = Math.floor( Math.random() * characters.length )
    return characters[randomNumber]
}

function generate() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < slider.value; i++) {
        passwordOne += randompassword()
        passwordTwo += randompassword()
    }
passOne.textContent = passwordOne
passTwo.textContent = passwordTwo
}

var slider = document.getElementById("myRange");
var output = document.getElementById("slidervalue");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.innerHTML = this.value;
}