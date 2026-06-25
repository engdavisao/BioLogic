//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level14 extends BaseScene {
    //Super construtor exportar Level14
    constructor() {
        super('Level14');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 200, 80, 100, 100, "14", "48px", () => Helper.showFeedbackImage(this, 'wrong', 'ESSA QUESTÃO NÃO CONTÉM PEGADINHAS NO ENUNCIADO! FIQUE ATENTO ÀS ALTERNATIVAS CONVENCIONAIS.'));
        new Button(this, 770, 80, 1000, 100, "UMA CÉLULA ESTÁ EM UMA SOLUÇÃO HIPERTÔNICA. O QUE ACONTECERÁ COM ELA?", "30px", () => Helper.showFeedbackImage(this, 'wrong', 'O ENUNCIADO DESSA QUESTÃO NÃO CONTÉM A RESPOSTA! FIQUE ATENTO ÀS ALTERNATIVAS CONVENCIONAIS!'));
        new Button(this, 495, 300, 450, 210, "A CÉLULA INCHA", "48px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A CÉLULA INCHA EM SOLUÇÃO HIPOTÔNICA. ISSO OCORRE POR CAUSA DA OSMOSE, QUE OCORRE PARA EQUILIBRAR AS CONCENTRAÇÕES DE UM SOLUTO.'));
        new Button(this, 1040, 300, 450, 210, "A CÉLULA MURCHA", "48px", () => Helper.showFeedbackImage(this, 'correct', 'CORRETO! EM UMA SOLUÇÃO HIPERTÔNICA, HÁ MAIOR CONCENTRAÇÃO DE SOLUTOS FORA DA CÉLULA. A ÁGUA SAI DA  CÉLULA POR OSMOSE, FAZENDO COM QUE ELA MURCHE.', 'Level15'));
        new Button(this, 495, 560, 450, 210, "NADA ACONTECE", "48px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! EM SOLUÇÃO HIPERTÔNICA, A ÁGUA NÃO PODE APENAS PERMANECER NA CÉLULA, POR CAUSA DO PROCESSO DE OSMOSE,QUE EQUILIBRA AS CONCENTRAÇÕES EM UM SOLUTO. '));
        new Button(this, 1040, 560, 450, 210, "A CÉLULA ABSORVE SAIS", "48px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! O PROCESSO ENVOLVIDO É A OSMOSE, QUE É O MOVIMENTO DE ÁGUA, NÃO DE SAIS.'));
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }
}