//Importa classe botão
import { Button } from './Button.js';
import { Helper } from './Helper.js';

export class Tutorial extends Phaser.Scene {
    //Super construtor exportar Level1
    constructor() {
        super('Tutorial');
    }

    preload() {
        //Carrega todas as imagens necessarias
        this.load.image('bg1', './assets/images/Tutorial1.webp');
        this.load.image('bg2', './assets/images/Tutorial2.webp');
        this.load.image('bg3', './assets/images/Tutorial3.webp');
        this.load.image('bg4', './assets/images/Tutorial4.webp');
        this.load.image('bg5', './assets/images/Tutorial5.webp');
        this.load.image('bg6', './assets/images/Tutorial6.webp');
        this.load.image('bg7', './assets/images/Tutorial7.webp');
        this.load.image('bg8', './assets/images/Tutorial8.webp');
        this.load.image('arrow', './assets/images/arrow.webp');
        this.load.audio('tutAudio-step-0', './assets/sounds/tutorial/Tutorial-01.mp3');
        this.load.audio('tutAudio-step-1', './assets/sounds/tutorial/Tutorial-02.mp3');
        this.load.audio('tutAudio-step-2', './assets/sounds/tutorial/Tutorial-03.mp3');
        this.load.audio('tutAudio-step-3', './assets/sounds/tutorial/Tutorial-04.mp3');
        this.load.audio('tutAudio-step-4', './assets/sounds/tutorial/Tutorial-05.mp3');
        this.load.audio('tutAudio-step-5', './assets/sounds/tutorial/Tutorial-06.mp3');
        this.load.audio('tutAudio-step-6', './assets/sounds/tutorial/Tutorial-07.mp3');
        this.load.audio('tutAudio-step-7', './assets/sounds/tutorial/Tutorial-08.mp3');
        this.load.audio('tutAudio-step-8', './assets/sounds/tutorial/Tutorial-09.mp3');
        this.load.audio('tutAudio-step-9', './assets/sounds/tutorial/Tutorial-10.mp3');
        this.load.audio('tutAudio-step-10', './assets/sounds/tutorial/Tutorial-11.mp3');
    }

    create() {
        //Coloca step inicial como 0 e muda de acordo com a função nextScene
        this.step = 0;
        this.currentSound = null;
        this.playStepAudio(0);

        this.bg = this.add.image(1536/2, 730/2, 'bg1').setDisplaySize(this.scale.width, this.scale.height);

        //Caixa de diálogo inicial
        this.dialogueBox = new Button(this, 1536/2, 140, 990, 200, "OLÁ! SEJA BEM-VINDO AO CENTRO DE ESTUDOS DIGITAL. EU SOU A GABI, A CIENTISTA RESPONSÁVEL POR ORGANIZAR OS CONTEÚDOS DESTE LABORATÓRIO.", "36px", () => console.log('clicado'), null, 0.5, 'white');
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
        //Define variável tutAudio-step- segundo número do step
        const key = 'tutAudio-step-' + step;
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
                this.dialogueBox.setLabel('AQUI DENTRO DO COMPUTADOR PRINCIPAL NÓS ORGANIZAMOS FICHAS DE ESTUDO DIGITAIS COM PERGUNTAS DE BIOLOGIA.');
                this.bg.setTexture('bg2');
                this.playStepAudio(1);
                break;

            case 2:
                this.dialogueBox.setLabel('OS ESTUDANTES USAM ESSAS FICHAS PARA REVISAR CONTEÚDOS IMPORTANTES COMO CÉLULAS, MITOSE E MEIOSE.');
                this.bg.setTexture('bg2');
                this.playStepAudio(2);
                break;
            case 3:
                this.dialogueBox.setLabel('EU ESTAVA JUSTAMENTE TESTANDO UM NOVO EXPERIMENTO PARA MELHORAR O SISTEMA QUANDO— EI… ESPERA… NÃO!');
                this.bg.setTexture('bg3');
                this.playStepAudio(3);
                break;

            case 4:
                this.dialogueBox.setLabel('AH NÃO… EU DERRUBEI UMA SUBSTÂNCIA EXPERIMENTAL. ESSA SUBSTÂNCIA CONTÉM UM VÍRUS QUE PODE INTERFERIR EM SISTEMAS DIGITAIS.');
                this.bg.setTexture('bg4');
                this.playStepAudio(4);
                break;
            case 5:
                this.dialogueBox.setSize(1000, 90);
                this.dialogueBox.setPosition(1536/2, 50);
                this.dialogueBox.setLabel('O VÍRUS ESTÁ AFETANDO O BANCO DE DADOS DAS FICHAS DE ESTUDO!');
                this.bg.setTexture('bg5');
                this.playStepAudio(5);
                break;

            case 6:
                this.dialogueBox.setSize(990, 200);
                this.dialogueBox.setPosition(1536/2, 140);
                this.dialogueBox.setLabel('AS PERGUNTAS AINDA APARECEM NORMALMENTE… MAS AS RESPOSTAS FORAM MISTURADAS E EMBARALHADAS.');
                this.bg.setTexture('bg6');
                this.playStepAudio(6);
                break;
            case 7:
                this.dialogueBox.setLabel('EU PRECISO DA SUA AJUDA PARA CORRIGIR O SISTEMA. ANALISE CADA PERGUNTA COM ATENÇÃO E ESCOLHA A ALTERNATIVA CORRETA.');
                this.bg.setTexture('bg6');
                this.playStepAudio(7);
                break;

            case 8:
                this.dialogueBox.setLabel('CADA RESPOSTA CORRETA VAI RESTAURAR PARTE DO BANCO DE DADOS DO CENTRO DE ESTUDOS.');
                this.bg.setTexture('bg7');
                this.playStepAudio(8);
                break;

            case 9:
                this.dialogueBox.setLabel('MAS CUIDADO! ALGUMAS ALTERNATIVAS PODEM SER CONFUSAS OU PEGADINHAS.');
                this.bg.setTexture('bg7');
                this.playStepAudio(9);
                break;
            case 10:
                this.dialogueBox.setLabel('SE CONSEGUIRMOS CORRIGIR TODAS AS FICHAS, O SISTEMA VOLTARÁ AO NORMAL. VAMOS COMEÇAR? O CENTRO DE ESTUDOS PRECISA DA SUA AJUDA!');
                this.bg.setTexture('bg8');
                this.playStepAudio(10);
                break;
            case 11:
                this.scene.start('Level1');
                this.currentSound.stop();
                break;
            default:
                break;
        }
    }
}