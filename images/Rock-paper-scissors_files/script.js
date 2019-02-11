let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const result_div = document.querySelector(".result > p");
const scoreboard_div = document.getElementById(".scoreboard");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function compCh(){
    const choices=["r", "p", "s"];
    let randomRoll = Math.floor(Math.random()*3);
    return choices[randomRoll];
}

function wordConvert(choice){
    if (choice == "r")
    return "Rock";
    if (choice == "s")
    return "Scissors";
    else
    return "Paper";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML = "You Won. Your " + wordConvert(userChoice) + 
    " beat the computer's " + wordConvert(computerChoice);
    document.getElementById(userChoice).classList.add('win-glow');
    document.getElementById(computerChoice).classList.add('lose-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('win-glow')}, 1000);
    setTimeout(function(){document.getElementById(computerChoice).classList.remove('lose-glow')}, 1000);
}

function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML = "You Lost. Your " + wordConvert(userChoice) + 
    " lost to the computer's " + wordConvert(computerChoice);
    document.getElementById(userChoice).classList.add('lose-glow');
    document.getElementById(computerChoice).classList.add('win-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('lose-glow')}, 1000);
    setTimeout(function(){document.getElementById(computerChoice).classList.remove('win-glow')}, 1000);
}

function draw(userChoice){
    result_div.innerHTML = "It's a draw. You both picked " + wordConvert(userChoice);
    document.getElementById(userChoice).classList.add('draw-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('draw-glow')}, 1000);
}

function game(userChoice){
    let computerChoice = compCh();
    
        switch (userChoice + computerChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                win(userChoice, computerChoice);
                break;
            case 'rp':
            case 'ps':
            case 'sr':
                lose(userChoice, computerChoice);
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                draw(userChoice);
        }
    
    if (compScore + userScore == 5) {
        setTimeout(function(){var newgame = confirm("Would you like a new game?")}, 1000);
        if (newgame == 1){
        userScore=0;
        compScore=0;
        }
    }
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