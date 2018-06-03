
//Diamaonds random number
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var diamondNumber = Math.floor(Math.random()* numbers.length);
console.log(diamondNumber);

//This x will be the random variable attached to each diamond (ex. diamondColor[x])
var x = Math.floor(Math.random()*diamondNumber);

console.log(x);


//Random Generated number for the user to guess
var guessNumber = [];
for (var i=10, t=55; i<=t; i++) {
    guessNumber.push(Math.round(Math.random() * t))
};
console.log(guessNumber);
var randomNumber = Math.floor(Math.random()* guessNumber.length);

$("#random").html(randomNumber);




//Giving the Diamonds a random value each time the game restarts
// window.onload = function () {
//     //  Click events are done for us:
//     $("#blueDiamond").click();
//     $("#greenDiamond").click();
//     $("#pinkDiamond").click();
//     $("#whiteDiamond").click();
//    };



