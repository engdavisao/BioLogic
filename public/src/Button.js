//Importa classes necessárias
import { Helper } from './Helper.js';

// Temas de cores disponíveis para os botões
// Para adicionar um novo tema: { fill: 0xHEX, border: 0xHEX, text: '#hex', stroke: '#hex' }
const THEMES = {
    default:  { fill: 0xffff000, border: 0x000000, text: '#000000', stroke: '#000000' },
    white:  { fill: 0xFFFFFF, border: 0x000000, text: '#000000', stroke: '#000000' },
    inverted: { fill: 0x6a96fe, border: 0x000000, text: '#ffffff', stroke: '#ffffff' },
};

//Classe para o botão para não precisar fazer a função dentro de cada classe apenas chamar new Button
//Construtor leva cena, posição x e y, altura e largura, texto à ser escrito "label", tamanho da fonte "fontSize"
//E interação à ser feita "callback"
export class Button {
    constructor(scene, x, y, width, height, label, fontSize, callback, imageKey = null, imageScale = 1, theme = 'default', lock = true) {
        this.scene = scene;
        this.width = width;
        this.height = height;
        this.theme = theme;

        const colors = THEMES[theme] ?? THEMES.default;

        //Utiliza containeres e gráficos do phaser para customização dos botões
        this.container = scene.add.container(x, y);
        this.graphics = scene.add.graphics();

        // Desenha a borda
        this.graphics.lineStyle(6, colors.border, 1);
        this.graphics.strokeRoundedRect(-width/2, -height/2, width, height, 25);

        // Desenha o preenchimento do quadrado
        this.graphics.fillStyle(colors.fill, 1);
        this.graphics.fillRoundedRect(-width/2, -height/2, width, height, 25);

        // Adiciona texto com fonte customizada
        this.text = scene.add.text(0, 0, label, {
            fontSize: fontSize,
            fontStyle: 'bold',
            color: colors.text,
            stroke: colors.stroke,
            strokeThickness: 1.5,
            fontFamily: 'Righteous',
            letterSpacing: 2,
            wordWrap: { width: width - 20, useAdvancedWrap: true }, // Formata strings dentro do botão, para que o 
            align: 'center'                                         // texto fique dentro do botão.
        }).setOrigin(0.5);
    
        //Adiciona o gráfico e texto ao botão, pass o tamanho para o botão, deixa interativo e deixa um callback à escolha
        this.container.add([this.graphics, this.text]);

        // Adiciona imagem ao quadrado, caso necessário
        if (imageKey) {
            this.image = scene.add.image(0, 0, imageKey).setScale(imageScale);
            this.container.add(this.image);
        }

        this.container.setSize(width, height);
        this.container.setInteractive();
        Helper.makeInteractive(scene, this.container, callback, 1, 1.1, lock);
    }

    //Define novo texto para o botão para não precisar criar novo botão no tutorial e encerramento
    setLabel(newLabel){
        this.text.setText(newLabel);
    }
    
    //Altera tamanho do botão também para encerramento e tutorial
    setSize(width, height){

        this.width = width;
        this.height = height;

        const colors = THEMES[this.theme] ?? THEMES.default;

        this.container.setSize(width, height);

        this.graphics.clear();

        this.graphics.lineStyle(6, colors.border, 1);
        this.graphics.strokeRoundedRect(-width/2, -height/2, width, height, 25);

        this.graphics.fillStyle(colors.fill, 1);
        this.graphics.fillRoundedRect(-width/2, -height/2, width, height, 25);
    }

    //Altera posição segundo argumentos
    setPosition(x, y) {
        this.container.setPosition(x, y);
    }
}
