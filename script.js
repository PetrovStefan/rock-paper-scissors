let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const result_div = document.querySelector(".result");
const scoreboard_div = document.getElementById(".scoreboard");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function compCh(){
    let randomRoll = Math.floor(Math.random()*3);
    return randomRoll;
}


function game(userChoice){
    let computerChoice = compCh();
    console.log(computerChoice);
}

function main(){
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();