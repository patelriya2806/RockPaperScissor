let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreId = document.querySelector("#score-user");
const compScoreId = document.querySelector("#score-comp");

//generate computer choice
const genCompChoice = () => {
    let options = ["rock","paper","scissor"];
    const rndmIdx = Math.floor(Math.random()*3);
    return options[rndmIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //game draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice ,compChoice);
    }
}

choices.forEach ((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//game draw
const drawGame = () => {
    console.log("game was draw!");
    msg.innerText = "Game was draw! play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScoreId.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreId.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}