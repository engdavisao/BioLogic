//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level3 extends BaseScene {
    //Super construtor exportar Level3
    constructor() {
        super('Level3');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();

        //Imagens adicionais necessárias
        this.load.image('resp1', './assets/images/imagens-questao-3/1.webp');
        this.load.image('resp2', './assets/images/imagens-questao-3/2.webp');
        this.load.image('resp3', './assets/images/imagens-questao-3/3.webp');
        this.load.image('resp4', './assets/images/imagens-questao-3/4.webp');
        
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        // Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
        this.events.once('shutdown', () => {
            ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
        });

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 220, 60, 80, 80, "3", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O OBJETIVO DESSA QUESTÃO É SABER QUAL POTE REPRESENTA A TEORIA DA ABIOGÊNESE.'));
        new Button(this, 800, 60, 990, 80, "QUAL REPRESENTA A TEORIA DA ABIOGÊNESE?", "39px", () => Helper.showFeedbackImage(this, 'wrong', 'A RESPOSTA NÃO ESTÁ NA PERGUNTA! O OBJETIVO DELA É SABER QUAL POTE REPRESENTA A TEORIA DA ABIOGÊNESE!'));
        new Button(this, 540, 260, 450, 300, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO! O POTE ESTÁ ABERTO, ENTÃO OS MICRORGANISMOS PODEM TER VINDO DO AR. ISSO NÃO PROVA A GERAÇÃO ESPONTÂNEA.'), 'resp1', 0.5);
        new Button(this, 1070, 260, 440, 300, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO! O POTE ESTÁ FECHADO, MAS NÃO HÁ MICRORGANISMOS. NA ABIOGÊNESE, ELES DEVERIAM SURGIR ESPONTANEAMENTE.'), 'resp2', 0.5);
        new Button(this, 540, 570, 450, 300, "", "45px", () => Helper.showFeedbackImage(this, 'correct', 'PARABÉNS! A TEORIA DA ABIOGÊNESE DIZ QUE SERES VIVOS PODEM SURGIR ESPONTANEAMENTE, COMO NO ITEM C).', 'Level4'), 'resp3', 0.5);
        new Button(this, 1070, 570, 440, 300, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO! POTE ABERTO E SEM MICRORGANISMOS. ISSO NÃO REPRESENTA NENHUMA TEORIA DO SURGIMENTO DA VIDA.'), 'resp4', 0.5);
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }
}
