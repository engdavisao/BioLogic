//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level10 extends BaseScene {
    //Super construtor exportar Level10
    constructor() {
        super('Level10');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();

        //Carrega todas as imagens necessarias
        this.load.image('resp1', './assets/images/imagens-questao-10/1.webp');
        this.load.image('resp2', './assets/images/imagens-questao-10/2.webp');
        this.load.image('resp3', './assets/images/imagens-questao-10/3.webp');
        this.load.image('resp4', './assets/images/imagens-questao-10/4.webp');
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
        this.events.once('shutdown', () => {
            ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
        });

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 200, 80, 110, 110, "10", "60px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DO ENUNCIADO NÃO É A RESPOSTA CORRETA! IDENTIFIQUE A FIGURA QUE REPRESENTA UMA EVIDÊNCIA DA EVOLUÇÃO!'));
        new Button(this, 770, 80, 1000, 110, "QUAL DESTES NÃO REPRESENTA UMA EVIDÊNCIA DA EVOLUÇÃO?", "37px", () => Helper.showFeedbackImage(this, 'wrong', 'O OBJETIVO DESSA QUESTÃO É IDENTIFICAR QUAL FIGURA É UMA EVIDÊNCIA DA EVOLUÇÃO!'));
        new Button(this, 495, 280, 450, 220, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! OS FÓSSEIS SÃO UMA DAS PRINCIPAIS EVIDÊNCIAS DA EVOLUÇÃO, POIS MOSTRAM ORGANISMOS DO PASSADO E SUAS MUDANÇAS AO LONGO DO TEMPO.'), 'resp1', 0.5);
        new Button(this, 1040, 280, 450, 220, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A SEMELHANÇA ENTRE EMBRIÕES DE DIFERENTES ESPÉCIES É UMA EVIDÊNCIA DA EVOLUÇÃO, INDICANDO ORIGEM COMUM.'), 'resp2', 0.3);
        new Button(this, 495, 540, 450, 220, "", "45px", () => Helper.showFeedbackImage(this, 'correct', 'CORRETO! AS ASAS MOSTRADAS SÃO UM EXEMPLO DE ESTRUTURAS ANÁLOGAS, QUE NÃO INDICAM ANCESTRALIDADE COMUM. POR ISSO, NÃO SÃO UMA EVIDÊNCIA DIRETA DA EVOLUÇÃO.', 'Level11'), 'resp3', 0.5);
        new Button(this, 1040, 540, 450, 220, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! O DNA É UMA DAS MAIS FORTES EVIDÊNCIAS DA EVOLUÇÃO, POIS PERMITE COMPARAR OS SERES VIVOS E IDENTIFICAR RELAÇÕES DE PARENTESCO.'), 'resp4', 0.5);
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
