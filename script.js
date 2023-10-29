//creates array with choices for computer
//defines win loss and tie variables for the score
const choices = ['Rock','Paper','Scissors'];
let isWin = document.getElementById('win');
let isLoss = document.getElementById('loss');
let isTie = document.getElementById('tie');
win = 0;
loss = 0;
tie = 0;

//Function that runs when RPS buttons are clicked
function letsPlay(value){
    //Defines the result display and computer choice variables that will appear on the webpage
    //random choice randomly picks one option from the array choices
    let display = document.getElementById('display')
    let computer = document.getElementById('computer')
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    // If statments that run depending on which option the computer randomly selects
    //Inside each if statement is a switch statement that will update the page depending on user input
    if(randomChoice === "Rock"){
        switch (value){
            case 'Paper':
                display.innerHTML = "Result: You Win"
                computer.innerHTML = "Computer choice: "+ randomChoice
                console.log("You Win!")
                win++
                isWin.innerHTML = win
                break;
            case 'Rock':
                console.log("Tie!")
                display.innerHTML = "Result: You Tied"
                computer.innerHTML = "Computer choice: "+ randomChoice
                tie++
                isTie.innerHTML = tie
                break;
            case 'Scissors': 
                console.log("Computer Wins!") 
                display.innerHTML = "Result: Computer Wins!"
                computer.innerHTML = "Computer choice: "+ randomChoice
                loss++
                isLoss.innerHTML = loss
        }
    }
    if(randomChoice ==="Paper"){
        switch (value){
            case 'Scissors':
                console.log("You Win!") 
                display.innerHTML = "Result: You Win"
                computer.innerHTML = "Computer choice: "+ randomChoice
                win++
                isWin.innerHTML = win
                break;
            case 'Paper':
                console.log("Tie!")
                display.innerHTML = "Result: You Tied"
                computer.innerHTML = "Computer choice: "+ randomChoice
                tie++
                isTie.innerHTML = tie
                break;
            case 'Rock': 
                console.log("You Lose") 
                display.innerHTML = "Result: Computer Wins!"
                computer.innerHTML = "Computer choice: "+ randomChoice
                loss++
                isLoss.innerHTML = loss
        }
    }
    if(randomChoice ==="Scissors"){
        switch (value){
            case 'Rock':
                console.log("You Win!") 
                display.innerHTML = "Result: You Win"
                computer.innerHTML = "Computer choice: "+ randomChoice
                win++
                isWin.innerHTML = win
                break;
            case 'Scissors':
                console.log("Tie!")
                display.innerHTML = "Result: You Tied"
                computer.innerHTML = "Computer choice: "+ randomChoice
                tie++
                isTie.innerHTML = tie
                break;
            case 'Paper': 
                console.log("You Lose") 
                display.innerHTML = "Result: Computer Wins!"
                computer.innerHTML = "Computer choice: "+ randomChoice
                loss++
                isLoss.innerHTML = loss
        }
    }
}
// Function that sets value of score variables to 0 and displays updated score on page
function resetScore() {
    loss = 0;
    isLoss.innerHTML = loss
    win = 0;
    isWin.innerHTML = win
    tie = 0;
    isTie.innerHTML = tie
  }