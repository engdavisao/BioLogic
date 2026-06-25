//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';

export class BaseScene extends Phaser.Scene {
    //Super construtor exportar Level1
    constructor(key) {
        super(key);
        this.sceneKey = key;
    }

    preload() {
        //Carrega todas as imagens necessarias
        this.load.image('cursor', './assets/images/cursor.webp');
        this.load.image('wrong', './assets/images/wrong.webp');
        this.load.image('correct', './assets/images/correct.webp');
        this.load.image('volume', './assets/images/volume.webp');
        this.load.image('volume_muted', './assets/images/volume_muted.webp');
        this.load.image('menu', './assets/images/menu-icon.webp');
        this.load.image('arrow_left', './assets/images/arrow_left.webp');
        this.load.image('davi', './assets/images/davi.webp');
        this.load.audio('correct', './assets/sounds/correct.mp3');
        this.load.audio('wrong', './assets/sounds/wrong.mp3');
    }

    create() {
        //Coloca erros na cena como 0 para identificar acerto de primeira
        this.mistakesInScene = 0;

        //Define a cena ao voltar ao menu como última cena que o jogador esteve em
        localStorage.setItem('lastScene', this.sceneKey);

        //Chama função para o botão de volume com y = 600
        Helper.volumeButton(this, 600);

        //Botão de menu para retornar ao menu
        new Button(this, 100, 650, 100, 100, "", "68px", () =>  this.scene.start('MenuScene'), 'menu', 0.1);
        
        //Chama função para habilitar cursor baseado no estado da registry
        Helper.cursorEnable(this);
    }

    update() {
        //Chama função para atualizar o cursor
        Helper.cursorUpdate(this);
    }
}