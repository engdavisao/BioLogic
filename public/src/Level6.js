//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level6 extends BaseScene {
    //Super construtor exportar Level6
    constructor() {
        super('Level6');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();

        //Carrega todas as imagens necessarias
        this.load.image('bacteria', './assets/images/bacteria.webp');
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        // Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
        this.events.once('shutdown', () => {
            ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
        });


        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this,  160, 120, 80, 80, "6", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DA PERGUNTA NÃO TEM RELAÇÃO COM A RESPOSTA NESSA PERGUNTA'));
        new Button(this, 510, 330, 420, 170, "BACTÉRIA", "68px", () => Helper.showFeedbackImage(this, 'correct', 'ISSO MESMO! ESSA IMAGEM REPRESENTA UMA BACTÉRIA, UM SER PROCARIONTE E UNICELULAR', 'Level7'));
        new Button(this, 1020, 330, 420, 170, "NÚCLEO", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO. ESSA IMAGEM NÃO REPRESENTA UM NÚCLEO DE UMA CÉCULA, A IMAGEM É DE UM SER UNICELULAR QUE  NÃO POSSUI NÚCLEO.'));
        new Button(this, 510, 560, 420, 170, "VÍRUS", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO. ESSA IMAGEM NÃO REPRESENTA UM VÍRUS, PROCURE A RESPOSTA QUE REPRESENTA O SER UNICELULAR PROCARIONTE REPRESENTADO'));
        new Button(this, 1020, 560, 420, 170, "CÉLULA", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO: CÉLULAS POSSUEM NÚCLEO, A IMAGEM NÃO REPRESENTA UMA CÉLULA. PROCURE A RESPOSTA QUE DEFINE UM SER QUE NÃO POSSUI NÚCLEO'));
        
        //Adiciona a imagem da bactéria e deixa interativo segundo função na classe Helper
        const bacteria = this.add.image(720, 130, 'bacteria').setScale(0.6);             
        Helper.makeInteractive(this, bacteria, () => Helper.showFeedbackImage(this, 'wrong', 'ESSA PERGUNTA ESTÁ QUERENDO SABER O QUE ESSA IMAGEM REPRESENTA, PROCURE A ALTERNATIVA QUE DEFINE ESSE SER UNICELULAR'), 0.6, 0.7);
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
