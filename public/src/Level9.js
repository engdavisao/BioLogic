//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level9 extends BaseScene {
    //Super construtor exportar Level9
    constructor() {
        super('Level9');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();

        //Carrega todas as imagens necessarias
        this.load.image('resp1', './assets/images/imagens-questao-9/1.webp');
        this.load.image('resp2', './assets/images/imagens-questao-9/2.webp');
        this.load.image('resp3', './assets/images/imagens-questao-9/3.webp');
        this.load.image('resp4', './assets/images/imagens-questao-9/4.webp');
    }

    create() {
        //Puxa create de BaseScene
        super.create();    
        // Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
        this.events.once('shutdown', () => {
            ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
        });

        //Adiciona botão com número da questão
        new Button(this, 160, 80, 100, 100, "9", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DO ENUNCIADO NÃO CONFIGURA UMA RESPOSTA PARA ESSA QUESTÃO! DESCUBRA A GERAÇÃO F1 DO CRUZAMENTO DAS ERVILHAS DO ENUNCIADO!'));

        //Desenha o fundo da caixa de pergunta manualmente (mesmo estilo do Button)
        const qBox = this.add.graphics();
        qBox.lineStyle(6, 0x000000, 1);
        qBox.fillStyle(0xffff00, 1);
        qBox.fillRoundedRect(295, 15, 1010, 130, 25);
        qBox.strokeRoundedRect(295, 15, 1010, 130, 25);

        //Estilo base do texto da pergunta
        const textStyle = {
            fontSize: '34px', fontStyle: 'bold', color: '#000000',
            stroke: '#000000', strokeThickness: 1.5, fontFamily: 'Righteous', letterSpacing: 2
        };

        //Linha 1 e 3 da pergunta centralizadas
        this.add.text(800, 42, "DADA A GERAÇÃO PARENTAL:", textStyle).setOrigin(0.5);
        this.add.text(800, 122, "QUAL ERVILHA REPRESENTA A GERAÇÃO F1?", textStyle).setOrigin(0.5);

        //Linha 2: AMARELA, (AA), VERDE e (aa) são botões interativos
        const pad = 4;
        const y2 = 82;

        const tAmarela = this.add.text(0, 0, "AMARELA", { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tSp1     = this.add.text(0, 0, " ",       textStyle).setOrigin(0, 0.5);
        const tAA      = this.add.text(0, 0, "(AA)",    { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tE       = this.add.text(0, 0, " E ",     textStyle).setOrigin(0, 0.5);
        const tVerde   = this.add.text(0, 0, "VERDE",   { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tSp2     = this.add.text(0, 0, " ",       textStyle).setOrigin(0, 0.5);
        const tAa      = this.add.text(0, 0, "(aa)",    { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tComma   = this.add.text(0, 0, ",",       textStyle).setOrigin(0, 0.5);

        //Calcula largura total para centralizar em x=800
        const lineWidth = tAmarela.width + tSp1.width + tAA.width + tE.width +
                          tVerde.width + tSp2.width + tAa.width + tComma.width;
        let curX = 800 - lineWidth / 2;

        //Helper: cria container interativo com fundo amarelo para uma palavra
        const makeWordBtn = (textObj, callback) => {
            const cx = curX + textObj.width / 2;
            const bg = this.add.graphics();
            bg.fillStyle(0xffff00, 1);
            bg.fillRoundedRect(-textObj.width / 2 - pad, -textObj.height / 2 - pad,
                                textObj.width + pad * 2, textObj.height + pad * 2, 6);
            textObj.setPosition(0, 0);
            const container = this.add.container(cx, y2);
            container.add([bg, textObj]);
            container.setSize(textObj.width + pad * 2, textObj.height + pad * 2);
            Helper.makeInteractive(this, container, callback, 1, 1.45);
            curX += textObj.width;
        };

        //Helper: posiciona texto estático (espaços, " E ", ",")
        const placeStatic = (textObj) => {
            textObj.setPosition(curX, y2);
            curX += textObj.width;
        };

        //AMARELA é a resposta correta — está escondida na própria pergunta
        makeWordBtn(tAmarela, () => Helper.showFeedbackImage(this, 'correct', 'CORRETO! A COR AMARELA (A) É DOMINANTE SOBRE A VERDE (a). NA GERAÇÃO F1 (Aa), TODAS AS ERVILHAS SERÃO AMARELAS.', 'Level10'));
        placeStatic(tSp1);
        makeWordBtn(tAA,      () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! (AA) É O GENÓTIPO DA ERVILHA AMARELA PARENTAL, NÃO DA GERAÇÃO F1. O CRUZAMENTO ENTRE AA E aa GERA FILHOS COM GENÓTIPO Aa.'));
        placeStatic(tE);
        makeWordBtn(tVerde,   () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A COR VERDE (a) É RECESSIVA. ELA SÓ APARECE QUANDO O GENÓTIPO É aa, O QUE NÃO ACONTECE NA GERAÇÃO F1.'));
        placeStatic(tSp2);
        makeWordBtn(tAa,      () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! (aa) É O GENÓTIPO DA ERVILHA VERDE PARENTAL. NA GERAÇÃO F1 O GENÓTIPO É Aa, QUE EXPRESSA A COR AMARELA.'));
        placeStatic(tComma);

        //Botões de resposta (todos errados — a resposta correta está na pergunta)
        new Button(this, 550, 280, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! ESSA COR NÃO REPRESENTA A HERANÇA GENÉTICA CORRETA DO CRUZAMENTO ENTRE AA E aa. LEMBRE-SE: O CRUZAMENTO É ENTRE VERDE E AMARELO, SENDO AMARELO DOMINANTE.'), 'resp1', 0.5);
        new Button(this, 1050, 280, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A COR VERDE (a) É RECESSIVA. ELA SÓ APARECE QUANDO O GENÓTIPO É aa, O QUE NÃO ACONTECE NA F1.'), 'resp2', 0.5);
        new Button(this, 550, 540, 420, 230, "", "45px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! NÃO HÁ MISTURA DE CORES NESSE CASO. LEMBRE-SE QUE O AMARELO É DOMINANTE, POIS POSSUI ALELOS AA.'), 'resp3', 0.5);
        new Button(this, 1050, 540, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A HERANÇA NÃO FUNCIONA COMO UMA “MISTURA VISUAL”. ESSA REPRESENTAÇÃO NÃO CORRESPONDE AO RESULTADO DO CRUZAMENTO ENTRE AMARELO E VERDE.'), 'resp4', 0.5);

        
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
