//write your code here
const game = ["rock", "paper", "scissors", "lizard", "spock"];

function random() {

    const index = Math.floor(Math.random() * game.length)
    return game[index]

}


function checkGame(userguest) {

    const resultadoComputadora = random();

    console.log(`EL usuario eligio ${userguest}`);
    console.log(`La computadora eligio ${resultadoComputadora}`);


    if (userguest === resultadoComputadora) {
        console.log("It's a draw!")
        return;

    }
    switch (userguest) {
        case "rock":
            switch (resultadoComputadora) {
                case "scissors":
                case "lizard":
                    console.log("ganaste, pura suerte");
                    break;
                case "paper":
                case "spock":
                    console.log("perdiste");
                    break;
            }
            break;

        case "paper":
            switch (resultadoComputadora) {
                case "rock":
                case "spock":
                    console.log("ganaste, pura suerte");
                    break;
                case "scissors":
                case "lizard":
                    console.log("perdiste");
                    break;
            }
            break;

        case "scissors":
            switch (resultadoComputadora) {
                case "paper":
                case "lizard":
                    console.log("ganaste, pura suerte");
                    break;
                case "rock":
                case "spock":
                    console.log("perdiste");
                    break;
            }
            break;

        case "lizard":
            switch (resultadoComputadora) {
                case "spock":
                case "paper":
                    console.log("ganaste, pura suerte");
                    break;
                case "rock":
                case "scissors":
                    console.log("perdiste");
                    break;
            }
            break;

        case "spock":
            switch (resultadoComputadora) {
                case "scissors":
                case "rock":
                    console.log("ganaste, pura suerte");
                    break;
                case "paper":
                case "lizard":
                    console.log("perdiste");
                    break;
            }
            break;

        default:
            console.log("eso es trampa");
            break;
    }
}

const usuario = prompt("elije entre rock, paper, scissors, lizard, spock").toLocaleLowerCase()
checkGame(usuario)
