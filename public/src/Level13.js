//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level13 extends BaseScene {
    //Super construtor exportar Level13
    constructor() {
        super('Level13');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload(); 
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 200, 80, 100, 100, "13", "40px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! O NÚMERO DESSA QUESTÃO NÃO É UMA OPÇÃO DE RESPOSTA.'));
        new Button(this, 770, 80, 1000, 130, "QUAL DESSES PROCESSOS NÃO É UMA CARACTERÍSTICA UNIVERSAL DE TODOS OS SERES VIVOS?", "35px", () => Helper.showFeedbackImage(this, 'wrong', "ERRADA! PARA ESSA QUESTÃO A PERGUNTA NÃO A RESPOSTA CORRETA."));
        new Button(this, 495, 300, 450, 210, "METABOLISMO", "45px", () => Helper.showFeedbackImage(this, 'wrong','ERRADA! OBRIGATORIAMENTE, TODOS OS SERES VIVOS UTILIZAM E PRODUZEM ENERGIA.'));
        new Button(this, 1040, 300, 450, 210, "IRRITABILIDADE", "46px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! TODO SER VIVO REAGE A ESTÍMULOS DO AMBIENTE.'));   
        new Button(this, 495, 560, 450, 210, "HEREDITARIEDADE", "37px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! TODOS OS SERES VIVOS TRANSMITEM DNA AOS SEUS DESCENDENTES.'));
        new Button(this, 1040, 560, 450, 210, "OXIGENAÇÃO", "47px", () => Helper.showFeedbackImage(this, 'correct', 'MUITO BEM! ALGUNS ORGANISMOS APRESENTAM A CARACTERÍSTICA DE ANAEROBIOSE, QUE É A CAPACIDADE DE OBTER ENERGIA SEM UTILIZAR OXIGÊNIO.', 'Level14'));
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
