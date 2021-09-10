// Cria a classe Spaceship definindo seu construtor que terá como parâmetro dois argumentos sendo eles o nome da nave e a quantidade de tripulantes da mesma.
class SpaceShip {
    constructor(spaceshipName, crewQuant) {
        this.spaceshipName = spaceshipName;
        this.crewQuant = crewQuant;
        this.isHitch = false;
        this.doors = false;
    }

    // Define o método "hitch" da classe Spaceship. Esse método será chamado quando uma nave for engajada na estação espacial.
    hitch() {
        this.isHitch = true; // Quando o método é chamado a nave está engajada, portanto a variável recebe um boolean true.
        this.doors = true; // A mesma situação da variável isHitch, porém agora em relação as portas da nave quando estão abertas após a nave estar engajada.
    }
}

/* 
 * Aqui temos o primeiro método sendo ele um dos mais importantes que o programa irá utilizar. Esse menos, como o próprio nome já entrega, imprime um menu de opções para o usuário,
 * e nas opções do menu o usuário irá escolher se deseja engajar a nave, informas as naves que já estão engajadas na estação espacial, ou simplesmente sair do menu.
 */
const showMenu = () => {
    let chosenOption;
    chosenOption = Number(window.prompt("Seja bem vindo ao menu. O que deseja fazer?\n1. Engajar\n2. Informar as naves engajadas.\n3. Sair do menu."));
    return chosenOption;
}

/* 
 * Esse método será chamado quando o usuário escolher a opção de engajar a nave. O método irá criar uma nova nave no sistema atrás do "new SpaceShip", ou seja, uma nova classe,
 * informando nos parâmetros do construtor da classe o nome da nave e o número de tripulantes da mesma.
 */
const createSpaceship = () => {
    let spaceshipName = window.prompt("Informe o nome da nave.");
    let crewQuant = Number(window.prompt("Informe a quantidade de tripulantes na nave."));
    let spaceship = new SpaceShip(spaceshipName, crewQuant);
    return spaceship;
}

/*
 * Esse método será chamado quando o usuário escolher a opção de informar as naves que já estão engajadas na estação espacial. O método recebe como parâmetro um array que contém
 * classes "new SpaceShip" criadas pelo usuário e através de um forEach, ele percorre o array inserindo novas strings com as informações da nova classe criada. Depois, através de um
 * window.alert, ele informa ao usuário o nome das naves e a quantidade de tripulantes de cada uma
 */
const showHitchedSpaceships = (spaceship = []) => {
    let spaceshipList = "";
    spaceship.forEach((spaceship, index) => {
        spaceshipList += `${index + 1} - ${spaceship.spaceshipName} ${(spaceship.crewQuant)} tripulantes\n`
    });
    window.alert(spaceshipList);
}

let hitchedSpaceship = [];
let chosenOption;
do {
    chosenOption = showMenu();
    switch (chosenOption) {
        case 1:
            let newSpaceship = createSpaceship();
            newSpaceship.hitch();
            hitchedSpaceship.push(newSpaceship);
            break;
        case 2:
            showHitchedSpaceships(hitchedSpaceship);
            break;
        case 3:
            break;
        default:
            window.alert("Opção inválida, tente novamente.");
    }
} while (chosenOption != 3);
window.alert("Você saiu do menu.");