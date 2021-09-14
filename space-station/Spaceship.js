/*
 *  Criada a classe Spaceship que possui um constructor que possui como parâmetro "spaceshipName", "crewQuantity", "maxVelocity". Então a classe receberá 
 *  como parâmetro  o nome da nave, a quantidade de tripulantes e a velocidade máxima que a nave poderá atingir. A classe Spaceship também possui um método "speedUp"
 *  para quando o usuário optar por acelerar a nave.
 */

class Spaceship {
    constructor(spaceshipName, crewQuantity, maxVelocity) {
        this.spaceshipName = spaceshipName;
        this.crewQuant = crewQuantity;
        this.maxVelocity = maxVelocity;
        this.currentVelocity = 0;
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - 0.17);
    }
}