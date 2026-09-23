console.log("wowzerz");

let num;
calculateAnswer();


//debug
//num = 2;

let guess;
let guesses = document.querySelector("#guesses");
let wins = 0;
let gamesPlayed = 0;
let tries = 6;
let winMsg = "you win!";
let lossMsg = "you lose :(";
let answer = "---> the answer was: "
let highMsg = "too high";
let lowMsg = "too low";
let badMsg = "guess must be between 1 and 99!!!!"
let state = false;
let winRate = "Wins of Total Plays:"
let guessMsg = document.querySelector("#guessMsg");
let winRateMsg = document.querySelector("#winLosses");
let answerMsg = document.querySelector("#answer");



function calculateAnswer() {
    num = Math.random()*100;
    num = Math.floor(num);
    if (num == 100) {
        num = 99;
    } else if (num == 0) {
        num = 100;
    }
    console.log(num);
}


let resetButton = document.querySelector("#resetButton");
let guessButton = document.querySelector("#guessButton");

//guessButton.addEventListner("click", showWin);
//shorthand
guessButton.addEventListener("click", function (){
    console.log(tries);
    guess = document.querySelector("#guessInput");
    guess = guess.value;
    console.log(guess);

    if (state == true) {
        guesses.textContent = "";
        tries = 6;
        state = false;
    }
    if (guess == "") {
        console.log("bad");
        return;
    } else if (tries == 0 && guess != num) {
        guessMsg.textContent = lossMsg;
        answerMsg.textContent = answer + num + " <---";
        answerMsg.style.color = "red";
        guessMsg.style.color = "red";
        //guesses.textContent = "";
        calculateAnswer();
        guessButton.style.opacity = "25%";
        resetButton.style.opacity = "100%";
        gamesPlayed +=1;
        winRateMsg.textContent = winRate + wins + "/" + gamesPlayed;
        tries = 6;
        }   else {
            if (+guess > 99 || +guess < 1) {
                guessMsg.textContent = badMsg;
                guessMsg.style.color= "red";
            } else if (guess == num) {
                guessMsg.style.color= "green";
                guessMsg.textContent = winMsg;
                guesses.textContent = guesses.textContent + guess + " ";
                guessButton.style.opacity = "25%";
                resetButton.style.opacity = "100%";
                gamesPlayed +=1;
                wins +=1;
                winRateMsg.textContent = winRate + wins + "/" + gamesPlayed;
                calculateAnswer();
                state = true;
            } else if (guess < num){
                guessMsg.style.color= "orange";
                guessMsg.textContent = lowMsg;
                guesses.textContent = guesses.textContent + guess + " ";
                tries -= 1;

            } else if (guess > num) {
                guessMsg.style.color = "orange";
                guessMsg.textContent= highMsg;
                guesses.textContent = guesses.textContent + guess + " ";
                tries -= 1;

            }
     }

 });

 resetButton.addEventListener("click", function () {
        guessButton.style.opacity = "100%";
        resetButton.style.opacity = "25%";
        guesses.textContent = "";
        guessMsg.textContent = "Make a guess above!";
        guessMsg.style.color = "black";
 })



