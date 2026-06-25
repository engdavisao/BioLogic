//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level11 extends BaseScene {
    //Super construtor exportar Level11
    constructor() {
        super('Level11');
    }


    preload() {
        //Puxa preload de BaseScene
        super.preload();
        
        //Carrega todas as imagens necessarias
        this.load.image('bacteriofago', './assets/images/imagens-questao-11/bacteriofago.webp');
    }


    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 220, 100, 130, 130, "11", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DESSA PERGUNTA NÃO É A RESPOSTA DESSA VEZ'));
        new Button(this, 480, 390, 420, 170, "BACTÉRIA", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'A IMAGEM MOSTRA UM VÍRUS QUE ATACA BACTÉRIAS!'));
        new Button(this, 960, 390, 420, 170, "BACTÉRIO", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'BACTÉRIO NÃO É UM TERMO CIENTÍFICO! A IMAGEM MOSTRA UM VÍRUS QUE ATACA BACTÉRIAS!'));
        new Button(this, 480, 600, 420, 170, "BACTERIÓFAGO", "45px", () => Helper.showFeedbackImage(this, 'correct', 'PARABÉNS! O BACTERIÓFAGO É UM VÍRUS QUE ATACA BACTÉRIAS, POSSUINDO UMA ESTRUTURA PRÓPRIA.', 'Level12'));
        new Button(this, 960, 600, 420, 170, "BATERIA", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'PEGADINHA! BATERIA É UM OBJETO QUE ARMAZENA ENERGIA ELÉTRICA. A IMAGEM MOSTRA UM VÍRUS QUE ATACA BACTÉRIAS!'));
        new Button(this, 730, 150, 230, 280, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ESSA QUESTÃO QUER A INTERPRETAÇÃO DO SER REPRESENTADO NA IMAGEM, PROCURE A ALTERNATIVA COM O NOME DESSE SER'), 'bacteriofago', 0.4);
    }


    update() {
        //Puxa update de BaseScene
        super.update();
    }
}
