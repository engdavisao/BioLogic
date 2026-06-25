//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level4 extends BaseScene {
    //Super construtor exportar Level4
    constructor() {
        super('Level4');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 160, 120, 80, 80, "4", "70px", () => Helper.showFeedbackImage(this, 'correct', 'EXATAMENTE! A DIVISÃO CELULAR POR MEIO DA MITOSE  POSSUI 4 FASES, SENDO ELAS RESPECTIVAMENTE: PRÓFASE, METÁFASE, ANÁFASE E TELÓFASE. ', 'Level5'));
        new Button(this, 720, 120, 950, 80, "QUANTAS FASES TEM A MITOSE?", "55px", () => Helper.showFeedbackImage(this, 'wrong', 'A PERGUNTA QUER SABER QUANTAS FASES TEM A DIVISÃO CELULAR POR MEIO DA MITOSE'));
        new Button(this, 470, 280, 440, 190, "5", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'A DIVISÃO CELULAR POR MEIO DA MITOSE POSSUI MENOS (-) DO QUE 5 FASES'));
        new Button(this, 975, 280, 430, 190, "6", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'A DIVISÃO CELULAR POR MEIO DA MITOSE POSSUI MENOS (-) DO QUE 6 FASES'));
        new Button(this, 470, 510, 440, 190, "3", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'A DIVISÃO CELULAR POR MEIO DA MITOSE POSSUI MAIS (+) DO QUE 3 FASES'));
        new Button(this, 975, 510, 430, 190, "8", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'A DIVISÃO CELULAR POR MEIO DA MITOSE POSSUI MENOS (-) DO QUE 8 FASES'));
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
