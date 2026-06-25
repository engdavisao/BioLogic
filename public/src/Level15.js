//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level15 extends BaseScene {
    //Super construtor exportar Level15
    constructor() {
        super('Level15');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload(); 
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 200, 80, 110, 110, "15", "50px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DA PERGUNTA NÃO TEM RELAÇÃO COM A RESPOSTA AQUI.'));
        new Button(this, 770, 80, 1000, 110, "QUAL É O PRIMEIRO NÍVEL DE ORGANIZAÇÃO DA VIDA?", "37px", () => Helper.showFeedbackImage(this, 'wrong', 'PROCURE O NOME DE UM NÍVEL DE ORGANIZAÇÃO DA VIDA PARA RESPONDER A PERGUNTA.'));
        new Button(this, 498, 280, 450, 210, "ÁTOMO", "68px", () => Helper.showFeedbackImage(this, 'correct', 'PARABÉNS! O ÁTOMO É A MENOR PARTÍCULA DA MATÉRIA, SENDO CLASSIFICADA COMO O PRIMEIRO NÍVEL DE ORGANIZACÃO DA VIDA.', 'Encerramento'));
        new Button(this, 1040, 280, 450, 210, "CÉLULA", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'A CÉLULA É CLASSIFICADA COMO O QUARTO NÍVEL DE ORGANIZACÃO DA VIDA.'));
        new Button(this, 498, 540, 450, 210, "TECIDO", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'O TECIDO É CLASSIFICADO COMO O QUINTO NÍVEL DE ORGANIZACÃO DA VIDA.'));
        new Button(this, 1040, 540, 450, 210, "MOLÉCULA", "60px", () => Helper.showFeedbackImage(this, 'wrong', 'A MOLÉCULA É CLASSIFICADA COMO O SEGUNDO NÍVEL DE ORGANIZACÃO DA VIDA.'));
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}