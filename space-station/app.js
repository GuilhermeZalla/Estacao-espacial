/*
 * A classe App é a classe que faz tudo funcionar. Ela possui um constructor que não possui nenhum parâmetro e também possui um método chamado "start". Esse método será sempre chamado
 * quando o usuário quiser entrar no sistema da estação espacial e cadastrar uma nova nave sendo ela de transporte ou de batalha.
 *  
 */

class App {
    constructor() {}

    start() {
        let chosenOption;
        let acceleration;
        let spaceshipType;

        spaceshipType = window.prompt("Informe o tipo da nave\nTransporte - para nave de transporte\nBatalha - para nave de batalha");

        let spaceship = showRegisterMenu(spaceshipType);

        do {
            chosenOption = Number(window.prompt("Seja bem vindo ao menu de controle. O que deseja fazer?\n1. Acelerar a nave\n2. Trocar a nave\n3. Imprimir e sair."));
            switch (chosenOption) {
                case 1:
                    acceleration = Number(window.prompt("Informe o quanto deseja acelerar."));
                    spaceship.speedUp(acceleration);
                    window.alert(`Você acelerou ${(spaceship.currentVelocity).toFixed(2)} km/s`);
                    break;
                case 2:
                    spaceshipType = window.prompt("Informe o tipo da nave\nTransporte - para nave de transporte\nBatalha - para nave de batalha");
                    spaceship = showRegisterMenu(spaceshipType);
                    break;
                case 3:
                    if (spaceshipType === "Transporte") {
                        window.alert(`Nome: ${spaceship.spaceshipName}\nQuantidade de tripulantes: ${spaceship.sitsQuantity}\nTipo de nave: Transporte\nVelocidade atual: ${(spaceship.currentVelocity).toFixed(2)} km/s`);
                    } else if (spaceshipType === "Batalha") {
                        window.alert(`Nome: ${spaceship.spaceshipName}\nQuantidade de armas: ${spaceship.weaponsQuantity}\nTipo de nave: Batalha\nVelocidade atual: ${(spaceship.currentVelocity).toFixed(2)} km/s`);
                    }
                    break;
                default:
                    window.alert("Opção inválida, tente novamente.");
            }
        } while (chosenOption != 3) {
            window.alert("Saindo do menu...");
        }
    }
}

// A função "showRegisterMenu" irá ser chamada sempre que o usuário entrar no menu da estação espacial. Essa função é chamada após o usuário informar o tipo da nave e é ela que irá 
// trabalhar com os dados da nave fornecido pelo usuário.

function showRegisterMenu(shipType) {
    let spaceship; // Uma das variáveis mais importante da função, é ela que irá receber a instancia da classe "BattleSpaceship" || "TransportSpaceship" e criar uma nave no sistema
    let spaceshipName;
    let crewQuantity;
    let spaceshipType = shipType;
    let createSpaceship;
    let maxVelocity;
    let createBattleSpaceship;
    let createTransportSpaceship;
    let weaponsQuantity;
    let sitsQuantity;

    window.alert("Seja bem vindo ao sistema da nave.");
    window.alert("Por favor, cadastre a sua nave.");
    spaceshipName = window.prompt("Informe o nome da sua nave.");
    crewQuantity = Number(window.prompt("Informe a quantidade de tripulantes na sua nave."));
    createSpaceship = new Spaceship(spaceshipName, crewQuantity); // Instancia a classe "Spaceship" criando uma nave qualquer genérica

    if (spaceshipType === "Batalha") {
        weaponsQuantity = Number(window.prompt("Informe o número de armas da nave."));
        maxVelocity = Number(window.prompt("Informe a velocidade máxima da nave de batalha"));
        createBattleSpaceship = new BattleSpaceship(spaceshipName, crewQuantity, maxVelocity, weaponsQuantity); // Instancia a classe "BattleSpaceship" criando uma nave do tipo de batalha
        spaceship = createBattleSpaceship;
    } else if (spaceshipType === "Transporte") {
        sitsQuantity = Number(window.prompt("Informe o número de lugares dentro da nave."));
        maxVelocity = Number(window.prompt("Informe a velocidade máxima da nave de transporte"));
        createTransportSpaceship = new TransportSpaceship(spaceshipName, crewQuantity, maxVelocity, sitsQuantity); // Instancia a classe "TransportSpaceship" criando uma nave do tipo de transporte
        spaceship = createTransportSpaceship;
    }
    return spaceship; // Por fim, a função retorna a varíavel "spaceship" com uma nave de batalha ou de transporte já criada e pronta para o usuário conseguir interagir através do menu da estação espacial
}