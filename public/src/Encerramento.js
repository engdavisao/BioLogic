//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';

export class Encerramento extends Phaser.Scene {
    //Super construtor exportar Level
    constructor() {
        super({ key: 'Encerramento' });
    }

    preload() {
        //Carrega todas as imagens necessarias
        this.load.image('bg9', './assets/images/Encerramento1.webp');
        this.load.image('bg10', './assets/images/Encerramento2.webp');
        this.load.image('bg11', './assets/images/Encerramento3.webp');
        this.load.image('cursor', './assets/images/cursor.webp');
        this.load.image('arrow', './assets/images/arrow.webp');
        this.load.audio('encAudio-step-0', './assets/sounds/encerramento/Encerramento-01.mp3');
        this.load.audio('encAudio-step-1', './assets/sounds/encerramento/Encerramento-02.mp3');
        this.load.audio('encAudio-step-2', './assets/sounds/encerramento/Encerramento-03.mp3');
        this.load.audio('encAudio-step-3', './assets/sounds/encerramento/Encerramento-04.mp3');
        this.load.audio('encAudio-step-4', './assets/sounds/encerramento/Encerramento-05.mp3');
    }

    create() {
        //Coloca step inicial como 0 e muda de acordo com a função nextScene
        this.step = 0;
        this.currentSound = null;
        this.playStepAudio(0);
        
        this.bg = this.add.image(1536/2, 730/2, 'bg9').setDisplaySize(this.scale.width, this.scale.height);

        //Caixa de diálogo inicial
        this.dialogueBox = new Button(this, 1536/2, 140, 990, 200, "ESPERA… O SISTEMA PAROU DE APRESENTAR ERROS. INCRÍVEL! AS FICHAS DE ESTUDO ESTÃO VOLTANDO AO LUGAR CORRETO NO BANCO DE DADOS.", "36px", () => console.log('clicado'), null, 0.5, 'white');
        this.input.on('pointerdown', () => {
            console.log("mouse clicked");
        });
        
        //Botão para mudar "cena", textura do fundo e texto dos botões
        new Button(this, 1410, 650, 170, 120, "", "150px", () => this.nextScene(), 'arrow', 0.4, 'Default', false);

        //Chama função para o botão de volume com y = 100
        Helper.volumeButton(this, 100);

        //Chama função para habilitar cursor baseado no estado da registry
        Helper.cursorEnable(this);
    }

    update() {
        //Chama função para atualizar o cursor
        Helper.cursorUpdate(this);
    }

    //Função para tocar os aúdios segundo step da função nextScene
    playStepAudio(step){
        //Para aúdio caso já tenha aúdio tocando
        if (this.currentSound){
            this.currentSound.stop();
        }
        //Define variável encAudio-step- segundo número do step
        const key = 'encAudio-step-' + step;
        if (this.sound.get(key) || this.cache.audio.exists(key)){
            //Adiciona o aúdio ao currentSound e o toca
            this.currentSound = this.sound.add(key);
            this.currentSound.play();
        }
    }

    nextScene(){
        //Muda a textura do fundo e o texto/tamanho do botão de acordo com um switch case baseado em step
        this.step++;
        console.log("Current step:", this.step);

        switch (this.step) {
            case 1:
                this.dialogueBox.setLabel('VOCÊ CONSEGUIU REORGANIZAR TODAS AS PERGUNTAS DO CENTRO DE ESTUDOS! SEM A SUA AJUDA, O VÍRUS TERIA DEIXADO TODO O SISTEMA INUTILIZÁVEL.');
                this.bg.setTexture('bg10');
                this.playStepAudio(1);
                break;

            case 2:
                this.dialogueBox.setLabel('AGORA OS ESTUDANTES PODERÃO USAR NOVAMENTE AS FICHAS PARA REVISAR CONTEÚDOS DE BIOLOGIA.');
                this.bg.setTexture('bg10');
                this.playStepAudio(2);
                break;
            case 3:
                this.dialogueBox.setLabel('MUITO OBRIGADO POR AJUDAR A RESTAURAR O LABORATÓRIO. O CENTRO DE ESTUDOS DIGITAL VOLTOU A FUNCIONAR NORMALMENTE.');
                this.bg.setTexture('bg11');
                this.playStepAudio(3);
                break;

            case 4:
                this.dialogueBox.setLabel('MISSÃO CONCLUÍDA. ATÉ A PRÓXIMA INVESTIGAÇÃO CIENTÍFICA!');
                this.bg.setTexture('bg11');
                this.playStepAudio(4);
                break;
            
            case 5:
                this.scene.start('FinalFeedback');
                this.currentSound.stop();
                break;
            default:
                break;
        }
    }
}