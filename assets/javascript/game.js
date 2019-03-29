var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var far = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
var farText = document.getElementById("guesses-so-far");
// var computerText = document.getElementById("computer")

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]



document.onkeyup = function(event) {
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var userGuess = event.key


    if (choices.indexOf(userGuess) > 0) {
       

    if (userGuess === computerGuess) {
        wins++
        guesses = 9
        far = []
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }  else {
        guesses--
        far.push(userGuess)
    }
    if (guesses === 0) {
        guesses = 9
        losses ++
        far = []
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

    }
    


    

//    computerText.textContent = "computer =" + computerGuess
    winsText.textContent = "wins: " + wins
    lossesText.textContent = "losses: " + losses
    guessesText.textContent = "guesses left: " + guesses
    farText.textContent = "guesses so far: " +  far.join(", ")
} else {
    losses++
    chances = 9
}
    







}

