//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level7 extends BaseScene {
    //Super construtor exportar Level7
    constructor() {
        super('Level7');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona o número da questão
        new Button(this, 160, 80, 100, 100, "7", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DESSA QUESTÃO NÃO É UMA ALTERNATIVA.'));

        //Desenha o fundo da caixa de pergunta manualmente (mesmo estilo do Button)
        const qBox = this.add.graphics();
        qBox.lineStyle(6, 0x000000, 1);
        qBox.fillStyle(0xffff00, 1);
        qBox.fillRoundedRect(300, 10, 960, 140, 25);
        qBox.strokeRoundedRect(300, 10, 960, 140, 25);

        //Estilo base do texto da pergunta
        const textStyle = {
            fontSize: '37px', fontStyle: 'bold', color: '#000000',
            stroke: '#000000', strokeThickness: 1.5, fontFamily: 'Righteous', letterSpacing: 2
        };

        //Linha 1 e 3 da pergunta centralizadas
        this.add.text(780, 42, "AS FASES DA MITOSE SÃO:", textStyle).setOrigin(0.5);
        this.add.text(780, 122, "QUAL A PRIMEIRA?", textStyle).setOrigin(0.5);

        //Linha 2: cada fase é um botão interativo
        const pad = 4;
        const y2 = 82;

        const tMetafase = this.add.text(0, 0, "METÁFASE", { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tComma1  = this.add.text(0, 0, ", ",        textStyle).setOrigin(0, 0.5);
        const tAnafase = this.add.text(0, 0, "ANÁFASE",   { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tComma2  = this.add.text(0, 0, ", ",        textStyle).setOrigin(0, 0.5);
        const tTelofase= this.add.text(0, 0, "TELÓFASE",  { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tE       = this.add.text(0, 0, " E ",       textStyle).setOrigin(0, 0.5);
        const tProfase = this.add.text(0, 0, "PRÓFASE",   { ...textStyle, color: '#000000' }).setOrigin(0.5, 0.5);
        const tDot     = this.add.text(0, 0, ".",         textStyle).setOrigin(0, 0.5);

        //Calcula largura total para centralizar em x=780
        const lineWidth = tMetafase.width + tComma1.width + tAnafase.width + tComma2.width +
                          tTelofase.width + tE.width + tProfase.width + tDot.width;
        let curX = 780 - lineWidth / 2;

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

        //Helper: posiciona texto estático (vírgulas, " E ", ".")
        const placeStatic = (textObj) => {
            textObj.setPosition(curX, y2);
            curX += textObj.width;
        };

        makeWordBtn(tMetafase, () => Helper.showFeedbackImage(this, 'wrong', 'É A 2ª FASE, NA QUAL OS CROMOSSOMOS FICAM NO MEIO.'));
        placeStatic(tComma1);
        makeWordBtn(tAnafase,  () => Helper.showFeedbackImage(this, 'wrong', 'É A 3ª FASE, NA QUAL OS CROMOSSOMOS SE SEPARAM.'));
        placeStatic(tComma2);
        makeWordBtn(tTelofase, () => Helper.showFeedbackImage(this, 'wrong', 'QUASE LA! ESSA É A ÚLTIMA FASE, CONHECIDA COMO O FIM DA DIVISÃO.'));
        placeStatic(tE);
        //PRÓFASE é a resposta correta — está escondida na própria pergunta
        makeWordBtn(tProfase,  () => Helper.showFeedbackImage(this, 'correct', 'MUITO BEM! AS FASES DA MITOSE SÃO RESPECTIVAMENTE: PRÓFASE, METÁFASE, ANÁFASE E TELÓFASE.', 'Level8'));
        placeStatic(tDot);

        //Botões de resposta (todos errados — a resposta correta está na pergunta)
        new Button(this, 510, 300, 420, 170, "METÁFASE", "65px", () => Helper.showFeedbackImage(this, 'wrong','É A 2ª FASE, NA QUAL OS CROMOSSOMOS FICAM NO MEIO.'));
        new Button(this, 1040, 300, 420, 170, "ANÁFASE", "65px", () => Helper.showFeedbackImage(this, 'wrong','É A 3ª FASE, NA QUAL OS CROMOSSOMOS SE SEPARAM.'));
        new Button(this, 510, 530, 420, 170, "TELÓFASE", "65px", () => Helper.showFeedbackImage(this, 'wrong','QUASE LA! ESSA É A ÚLTIMA FASE, CONHECIDA COMO O FIM DA DIVISÃO.'));
        new Button(this, 1040, 530, 420, 170, "G1", "65px", () => Helper.showFeedbackImage(this, 'wrong','NÃO PERTENCE A MITOSE, ACONTECE NA INTERFASE.'));;
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
