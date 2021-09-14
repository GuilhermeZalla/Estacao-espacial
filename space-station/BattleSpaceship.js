/*
 * A classe BattleSpaceship é instanciada para criar uma nave do tipo "battle", ou seja, uma nave de batalha. Essa clase extende a classe pai "Spaceship" e herda seu 
 * constructor e possui um parâmetro a mais chamado "weaponsQuantity". Esse parâmetro, exclusivo da classe BattleSpaceship, é utilizado para receber a informação de 
 * quantas armas a nave de batalha possui. Essa classe também possui um método sobrescrito "speedUp" que recebe como parâmetro a aceleração informada pelo usuário.
 * Com valor da velocidade máxima informada pelo usuário, o método irá verificar se a aceleração está acima da velocidade máxima e, caso esteja, a velocidade atual
 *  recebe a velocidade máxima.
 */

class BattleSpaceship extends Spaceship {
    constructor(spaceshipName, crewQuant, maxVelocity, weaponsQuantity) {
        super(spaceshipName, crewQuant, maxVelocity);
        this.weaponsQuantity = weaponsQuantity;
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - 0.17);
        if (this.currentVelocity > this.maxVelocity) {
            window.alert(`A velocidade está acima da média, a nave será estabilizada em ${this.maxVelocity} km/s`);
            this.currentVelocity = this.maxVelocity;
            window.alert(`Nave estabilizada em ${this.currentVelocity} km/s`);
        }
    }

}