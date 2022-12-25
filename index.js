///variable for second function

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

///variable for first function
 let bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

 let characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

///output result///
let resultOne = document.getElementById("password-DisplayOne-el")
let resultTwo = document.getElementById("password-Display-Two-el")

///defining variable for button function///
let GenButton = document.getElementById("btn-el")
let ResetButton = document.getElementById("btn-reset-el")

///empty var for reset////
let reset = ""

////First Password function ///
///this function will output three bigletters/smallletter/numbers/characters of 12 string on first output///
GenButton.addEventListener("click", function(){
    let passwordOne     =   Math.floor(Math.random()* bigLetters.length)
    let passwordTwo     =   Math.floor(Math.random()* bigLetters.length)
    let passwordThree   =   Math.floor(Math.random()* bigLetters.length)
    
    let passwordFour    =   Math.floor(Math.random()* smallLetters.length)
    let passwordFive    =   Math.floor(Math.random()* smallLetters.length)
    let passwordSix     =   Math.floor(Math.random()* smallLetters.length)
    
    let passwordSeven   =   Math.floor(Math.random()* numbers.length)
    let passwordEight   =   Math.floor(Math.random()* numbers.length)
    let passwordNine    =   Math.floor(Math.random()* numbers.length)
    
    let passwordTen     =   Math.floor(Math.random()* characters .length)
    let passwordEleven  =   Math.floor(Math.random()* characters.length)
    let passwordTweleve =   Math.floor(Math.random()* characters.length)
    
    resultOne.textContent = bigLetters[passwordOne]+ bigLetters[passwordTwo]+bigLetters[passwordThree]+ smallLetters[passwordFour]+smallLetters[passwordFive]+smallLetters[passwordSix]+numbers[passwordSeven]+ numbers[passwordEight] + numbers[passwordNine] + characters[passwordTen] + characters[passwordEleven] + characters[passwordTweleve] 
    
  
})

////second password function
///this function will output random password of 12 string on second output//
GenButton.addEventListener("click", function(){
    let passwordOne     =   Math.floor(Math.random()* letters.length)
    let passwordTwo     =   Math.floor(Math.random()* letters.length)
    let passwordThree   =   Math.floor(Math.random()* letters.length)
    let passwordFour    =   Math.floor(Math.random()* letters.length)
    let passwordFive    =   Math.floor(Math.random()* letters.length)
    let passwordSix     =   Math.floor(Math.random()* letters.length)
    let passwordSeven   =   Math.floor(Math.random()* letters.length)
    let passwordEight   =   Math.floor(Math.random()* letters.length)
    let passwordNine    =   Math.floor(Math.random()* letters.length)
    let passwordTen     =   Math.floor(Math.random()* letters.length)
    let passwordEleven  =   Math.floor(Math.random()* letters.length)
    let passwordTweleve =   Math.floor(Math.random()* letters.length)
    
    
    resultTwo.textContent = letters[passwordOne]+ letters[passwordTwo]+letters[passwordThree]+letters[passwordFour]+letters[passwordFive]+letters[passwordSix]+letters[passwordSeven]+ letters[passwordEight]+ letters[passwordNine]+letters[passwordTen]+letters[passwordEleven]+letters[passwordTweleve]
})

////Password reset function/////
ResetButton.addEventListener("click", function(){
    resultOne.textContent= reset
    resultTwo.textContent = reset
})