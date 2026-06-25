//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level5 extends BaseScene {
    //Super construtor exportar Level5
    constructor() {
        super('Level5');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();

        //Imagens adicionais necessárias
        this.load.image('resp1', './assets/images/imagens-questao-5/1.webp');
        this.load.image('resp2', './assets/images/imagens-questao-5/2.webp');
        this.load.image('resp3', './assets/images/imagens-questao-5/3.webp');
        this.load.image('resp4', './assets/images/imagens-questao-5/4.webp');
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
        this.events.once('shutdown', () => {
            ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
        });

        //Troca o fundo para amarelo
        this.cameras.main.setBackgroundColor('#ffff00'); 

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 220, 50, 90, 90, "5", "70px", () => Helper.showFeedbackImage(this, 'wrong','ERRADA! O NÚMERO DA PERGUNTA NÃO TEM RELAÇÃO COM A RESPOSTA NESSA QUESTÃO. PENSE NA LEI DA HERANÇA DOS CARCTERES ADQUIRIDOS.'), null, 1, 'inverted');
        new Button(this, 780, 55, 930, 90, "   QUAL IMAGEM REPRESENTA A LEI DA HERANÇA DOS CARACTÉRES ADQUIRIDOS?", "37px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! NESTA QUESTÃO, A PERGUNTA NÃO É A RESPOSTA. OBSERVE AS IMAGENS E IDENTIFIQUE A HERANÇA DOS CARACTERES ADQUIRIDOS.'), null, 1, 'inverted');
        new Button(this, 530, 260, 420, 300, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! NESTA IMAGEM, MÃE E FILHA TÊM PESCOÇO CURTO, SEM MOSTRAR UMA CARACTERÍSTICA POSITIVA ADQUIRIDA SENDO HERDADA.' ), 'resp1', 0.5, 'inverted');
        new Button(this, 1030, 260, 420, 300, "", "68px", () => Helper.showFeedbackImage(this, 'correct', 'ISSO MESMO! NESTA IMAGEM, A FILHA TAMBÉM APRESENTA O PESCOÇO LONGO DA MÃE, REPRESENTANDO A HERANÇA DOS CARACTERES ADQUIRIDOS.', 'Level6'), 'resp2', 0.5, 'inverted');
        new Button(this, 530, 570, 420, 300, "", "45px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! NESTA IMAGEM, A MÃE TEM PESCOÇO CURTO E A FILHA TEM PESCOÇO LONGO, O QUE NÃO REPRESENTA UMA CARACTERÍSTICA HERDADA DA MÃE.'), 'resp3', 0.5, 'inverted');
        new Button(this, 1030, 570, 420, 300, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADA! NESTA IMAGEM, A MÃE TEM PESCOÇO LONGO E A FILHA TEM PESCOÇO CURTO, O QUE NÃO REPRESENTA UMA CARACTERÍSTICA HERDADA DA MÃE.'), 'resp4', 0.5, 'inverted');
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
