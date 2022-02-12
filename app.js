window.onload = function(){

    cscore = 0;
    pscore = 0;
    for (let i = 0;i <5; i++){

        let outcome = playRound(playerSelection(),computerPlay());

        console.log(i);
        if(outcome == true){

            pscore+=1;
        }

        else if (outcome == false){

            cscore +=1;

        }

    }

    if (pscore > cscore){

        alert("YOU WON");

    }

    else{

        alert("YOU LOST");
    }




}

function playerSelection(){

    let move = prompt('Enter Your Move');
    return(move.toUpperCase());
}

function computerPlay(){


    let moves = ['Rock','Paper','Scissors'];

    let rmoves = Math.floor(Math.random() * moves.length);
    return(moves[rmoves].toUpperCase());



}

function playRound(playerSelection,computerPlay){


    if (playerSelection == computerPlay){    

        return;

    }

    else if (playerSelection == 'ROCK' && computerPlay == 'SCISSORS' ||
    playerSelection == "PAPER" && computerPlay == "ROCK" ||
    playerSelection == "SCISSORS" && computerPlay =="PAPER"){

        return true

    }

    else{

        return false
    }
    

}