var wins = 0
var losses = 0 
var ties = 0
var userInput = window.prompt("Enter Rock, Paper, Or Scissors")
var gameOptions =["R" , "P" , "s"]
//0 = Rock
//1 = Paper
//2 = Scissors
//Funstion that decides who wins
function rockPaperScissors() {
    autoOpponent = math.floor(Math.random()* gameoptions.lenght);
    if(autoOpponent ==0) {
        autoOpponent = "R"
    }
    if (autoOpponent == 1) {
        autoOpponent = "P"
    }
    if (autoOpponent == 2) {
        autoOpponent = "S"
    }
    console.log(autoOpponent, useraInput)
    if (userInput == autoOpponent) {
        console.log("Its a tie")
    }else if(userInput == "R" && autoOpponent == "S", userInput == "P" && autoOpponent == "R" , userInput == "S" , && autoOpponent == "P")
    

    }
        
rockPaperScissors();
