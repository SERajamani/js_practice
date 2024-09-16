// selecting the elemnts

var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guessCount=document.getElementById("guessCount")
var noOfGuess=3

// Generate random number from 1 to 5

var randomNumber = Math.floor(Math.random()*10)+1
if(randomNumber>5){
    randomNumber=randomNumber-5
}


// Event Handler Function

function checkTheNumber(){
if(inputBox.value == randomNumber){
    alert("Got you, congratulation")
   result.textContent="You are Right!"
    
}else {
    noOfGuess=noOfGuess-1
    if(noOfGuess==0)
    {
        alert("You Lost ,Generated Random Number is:"+randomNumber)
    }

    guessCount.textContent="Available Guess:"+noOfGuess
    result.textContent="You are wrong !"
}
}