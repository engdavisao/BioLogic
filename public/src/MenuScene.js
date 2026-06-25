//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';

export class MenuScene extends Phaser.Scene {

    //Super construtor para exportar MenuScene
    constructor() {
        super('MenuScene');
    }
    

    preload() {
        //Adiciona imagens no geral
        this.load.image('volume', './assets/images/volume.webp');
        this.load.image('logo', './assets/images/logo.webp');
        this.load.image('volume_muted', './assets/images/volume_muted.webp');
        this.load.image('cursor', './assets/images/cursor.webp');
        this.load.image('eye_closed', './assets/images/eye_closed.webp');
        this.load.image('eye_open', './assets/images/eye_open.webp');
    }

    create() {

        //Usa escala do phaser para width e height
        const width = this.scale.width;
        const height = this.scale.height;

        //Adiciona logo e o deixa interativo para crescer ao passar o mouse
        const logo = this.add.image(width/2, 180, 'logo').setScale(0.8);
        Helper.makeInteractive(this, logo, () => (console.log('logo clicado')), 0.8, 0.9);

        //Cria botão de jogar
        new Button(this, width / 2, 430, 450, 80, "JOGAR", "68px", () => {
            const lastScene = localStorage.getItem('lastScene');
            //Inicia última cena ou tutorial dependendo se há uma cena jogada previamente
            if (lastScene) {
                this.scene.start(lastScene);
            } else {
                this.scene.start('Tutorial');
            }
        });

        //Cria botão de novo jogo
        new Button(this, width / 2, 560, 550, 80, "NOVO JOGO", "68px", () => {
            this.scene.start('Tutorial');
            localStorage.setItem('lastScene', 'Tutorial');
            localStorage.setItem('correct', '0');
            localStorage.setItem('wrong', '0');
        });

        if (this.registry.get('cursorEnabled') === undefined) {
            this.registry.set('cursorEnabled', true);
        }

        //Botão para ativar e desativar o cursor que troca imagem de acordo com o estado
        const cursorButton = this.add.image(1400, 100, this.registry.get('cursorEnabled') ? 'eye_closed' : 'eye_open').setScale(0.5);
        Helper.makeInteractive(this, cursorButton, () => {

            //Consulta estado do cursor na registry
            let enabled = this.registry.get('cursorEnabled');
            //Ativa caso esteja desativado e vice-versa
            enabled = !enabled;

            //Define cursor como ativado na registry
            this.registry.set('cursorEnabled', enabled);

            //Muda textura do botão segundo ativação
            cursorButton.setTexture(
                enabled ? 'eye_closed' : 'eye_open'
            );

            //Ativa o cursor caso ativado
            if (enabled) {
            this.cursor = this.add.image(0, 0, 'cursor')
                .setDepth(10000)
                .setOrigin(0, 0);

            } 

            // Desabilita cursor se desativado
            else {
                if (this.cursor) {
                    this.cursor.destroy();
                    this.cursor = null;
                }

            }
        }, 0.5, 0.6);

        //Chama função para o botão de volume com y = 600
        Helper.volumeButton(this, 600);
        //Chama função para habilitar cursor baseado no estado da registry
        Helper.cursorEnable(this);
    }

    update() {
        //Chama função para atualizar o cursor
        Helper.cursorUpdate(this);
    }
}