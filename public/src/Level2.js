//Importa classe botão
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level2 extends BaseScene {
    //Super construtor exportar Level2
    constructor() {
        super('Level2');
    }

    preload() {
        //Puxa preload de BaseScene  
        super.preload();
        
        //Imagens adicionais necessárias
        this.load.image('bacteria', './assets/images/bacteria.webp');
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 160, 120, 80, 80, "2", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'BOA TENTATIVA, MAS ESSA NÃO É A RESPOSTA CORRETA'));
        new Button(this, 720, 120, 950, 80, "QUAL DOS SERES É PROCARIONTE?", "50px", () => Helper.showFeedbackImage(this, 'wrong', 'PASSOU RASPANDO, TENTE NOVAMENTE.'));
        new Button(this, 460, 280, 420, 170, "FUNGO", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'FUNGOS TÊM NÚCLEO CELULAR. POR ISSO SÃO EUCARIONTES, NÃO PROCARIONTES.'));
        new Button(this, 970, 280, 420, 170, "PLANTA", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'PENSE NA ESTRUTURA DA CÉLULA: PROCARIONTES NÃO POSSUEM NÚCLEO.'));
        new Button(this, 460, 510, 420, 170, "PROTOZOÁRIO", "45px", () => Helper.showFeedbackImage(this, 'wrong', 'PROTOZOÁRIOS TÊM NÚCLEO CELULAR. PORTANTO SÃO EUCARIONTES.'));
        new Button(this, 970, 510, 420, 170, "ANIMAL", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ANIMAIS POSSUEM CÉLULAS COM NÚCLEO. LOGO, NÃO SÃO PROCARIONTES.'));

        //Adiciona a imagem da bactéria e deixa interativo segundo função na classe Helper
        const bacteria = this.add.image(1350, 130, 'bacteria').setScale(0.5);             
        Helper.makeInteractive(this, bacteria, () => Helper.showFeedbackImage(this, 'correct', 'MUITO BEM! RESPOSTA CORRETA! ESSES ORGANISMOS POSSUEM CÉLULAS MAIS SIMPLES E NÃO APRESENTAM NÚCLEO CELULAR', 'Level3'), 0.6, 0.7);

    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }
}
