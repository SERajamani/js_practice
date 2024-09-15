
var prompt=require("prompt-sync")()
// if else basic
// 1.Question

var rain=false

if(rain){
    console.log("Take an Umbrella")
}
else {
    console.log("Enjoy the Sunshine")
}

// 2.Question
var homework=true

if(homework){
    console.log("Great job")
}
else {
    console.log("Finish your homework before playing")
}

// 3.Question
var cookiesLeft=false
if(cookiesLeft){
    console.log("Would you like a cookie");
}
else{
    console.log("Time to bake more cookies");
}

// 4.Question

var brushYourTeeth=true

if(brushYourTeeth){
    console.log("Your teeth are clean")

}

else{
    console.log("Go brush your teeth now")
}

// 5.Question

var yourBirthdayToday =false

if(yourBirthdayToday){
console.log("Happy Birthday!")
}
else {
    console.log("Have a great day!")
}

// If-else next levl 

var color="green"

if(color=="red"){
    console.log("Stop")
}
else if(color=="yellow"){
    console.log("Get ready")
}

else{
    console.log("Go")
}

// 2 question 

var seasonOfTheYear="autumn"

if(seasonOfTheYear=="spring"){
    console.log("Enjoy the blooming flowers")
}

else if (seasonOfTheYear=="summer"){
    console.log("Have fun in the summer")
}

else if(seasonOfTheYear=="autumn"){
    console.log("Admire the colorful leaves")
}

else {
    console.log("Bundle up and stay warm")
}

// 3 Question

var scoreInAGame=50

if(scoreInAGame<50){
    console.log("You need to improve")
}

else if (scoreInAGame>=50 && scoreInAGame<=70){
    console.log("Good Job")
}

else {
    console.log("Excellent")
}

// 4.Question

var number=6

if(number%2==0){
    console.log("The number is even")
}

else {
    console.log("The number is odd")
}


// 5.Question 

var character="b"

if(character=="a"){
    console.log("its's a vowel")
}


else if(character=="e"){
    console.log("its's a vowel")
}


else if(character=="i"){
    console.log("its's a vowel")
}


else if(character=="o"){
    console.log("its's a vowel")
}


else if(character=="u"){
    console.log("its's a vowel")
}

else {
    console.log ("it's a consonant")
}

// Function

const a=10
const b=30

function add(){
    console.log(a+b)
}

add()

// 2.Question

var fActor="Suriya"
var fplayer="Dhoni"
var fMovie="Vaaranam aayiram"

function favourite(){
    console.log("Favourite Actor: "+fActor)
    console.log("Favourite Player: "+fplayer)
    console.log("Favourite Movie: "+fMovie)
}

favourite()


// parameter 

function area(length,breadth){
    console.log("Area is: "+length*breadth)
}

area(2,5)

// return 

function add(a,b){
    return a+b
}

var result=add(3,5)
console.log(result)

// combine all 

function findEvenOrAdd(num){

    if(num==0){
        console.log("it's just zero")
    }
    else if(num%2==0){
        console.log("it's a even number")
    }
    else {
        console.log("it's odd number")
    }
}

findEvenOrAdd(5)

// CharAt

function SuperHero (name){
var firstLetter=name.charAt(0)
if(firstLetter=="S"){
    console.log("Yes it's a super hero")
}
else {
    console.log("No,it's not a superhero")
}
}

SuperHero("Suriya")

// Small random game

// function guess(guessedNumber){
// var randomNumber=Math.floor(Math.random()*10)+1
// if (randomNumber==guessedNumber){
//     console.log("Your guessed right")
// }
// else {
//     console.log("Your guess is wrong,generated random number is:"+randomNumber )
// }
// }

// var guessedNumber=prompt()
// guess(guessedNumber) 

// Task o to 5 random number


function guess(guessedNumber){
    var randomNumber=Math.floor(Math.random()*6)+1
    if (randomNumber==guessedNumber){
        console.log("Your guessed right")
    }
    else {
        console.log("Your guess is wrong,generated random number is:"+randomNumber )
    }
    }
    
    var guessedNumber=prompt()
    guess(guessedNumber) 


    // For loop

    for(count=1;count<=5;count=count+1){
        console.log("STAR")
    }