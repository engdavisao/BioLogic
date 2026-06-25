//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class FinalFeedback extends BaseScene {
    //Super construtor exportar Level1
    constructor() {
        super('FinalFeedback');
    }

    preload() {
        //Puxa preload de BaseScene      
        super.preload();

        //Carrega imagens e aúdio necessários 
        this.load.image('particle', './assets/images/particle.webp');
        this.load.image('trophy', './assets/images/trophy.webp');
        this.load.audio('comemoracao', './assets/sounds/comemoracao.mp3');
    }

    create() {
        //Puxa create de BaseScene 
        super.create()

        //Coloca à width e height conforme escala
        const width = this.scale.width;
        const height = this.scale.height;

        //Transforma as variáveis correct e wrong em int
        const correct = parseInt(localStorage.getItem('correct')) || 0;
        const wrong = parseInt(localStorage.getItem('wrong')) || 0;

        //Cria array de partículas vazio
        this.particles = [];

        //Define origem das partículas
        const originX = 768;
        const originY = 205;

        //Cria botão do troféu e botões de feedback
        new Button(this, 768, 265, 420, 300, "", "68px", () => this.launchFireworks(originX, originY), 'trophy', 1);
        new Button(this, 568, 600, 250, 180, `✖${wrong}`, "68px", () => Helper.showFeedbackImage(this, 'feedback', `Você errou ${wrong} alternativas ao longo do jogo.`));
        new Button(this, 968, 600, 250, 180, `✔${correct}`, "68px", () => Helper.showFeedbackImage(this, 'feedback', `Você acertou de primeira ${correct} alternativas ao longo do jogo.`));  

        //Inicia fogos de artifício
        this.launchFireworks(originX, originY);
    }

    update(time, delta) {
        //Chama função para atualizar o cursor
        Helper.cursorUpdate(this);
        
        //Dt = tempo em segundos
        const dt = delta / 1000;

        //Define constante de gravidade para aceleração
        const g = 9.8;

        //loop para cada partícula aplicar as mudanças
        this.particles.forEach((p, i) => {
            //Adiciona tempo ao tempo das partículas
            p.t += dt;

            //Atualiza velocidade segundo gravidade * tempo, acelerando constantemente em g
            p.vy = p.vy + g*p.t;

            //Define posição x como posição inicial x + velocidade de x * tempo de p
            const x = p.x0 + p.vx * p.t;

            //Define posição y como posição inicial y + velocidade de y (que varia constantemente conforme V) * tempo de p
            //O movimento se caracteriza como uniformemente variado mesmo com a fórmula de MU, pois a velocidade varia constantemente
            const y = p.y0 + p.vy * p.t;

            //Atualiza posição das partículas segundo x e y
            p.sprite.setPosition(x, y);

            //Faz console.log da velocidade, posição e aceleração de x e y
            if (i === 0 && p.t < 1.5) {
                console.log(`MU: Velocidade: ${p.vx} Posição: ${x}`);
                console.log(`MUV: Velocidade: ${p.vy} Posição: ${y} Aceleração: ${g}`);
            }

            //Destrói as partículas dentro do tempo limite (1.5 segundos)   
            if (p.t > 1.5) {
                p.sprite.destroy();
            }
        });
    }

    //Define função de atirar fogos de artifício
    launchFireworks(originX, originY) {
        //Toca som de comemoração
        this.sound.play('comemoracao');

        //Cria array de partículas caso não esteja existente
        if (!this.particles) {
            this.particles = [];
        }

        for (let i = 0; i < 50; i++) {
            //Matemática para rotar o angulo até finalizar 2 PI
            const angle = (i+1) * Math.PI * 2/50;

            //Aleatoriza velocidade base tanto para vy quanto vx
            const speed = Phaser.Math.FloatBetween(200, 500);
            //Declara vy
            let vy;

            //Deixa a velocidade de acordo com o cosseno do ângulo
            const vx = Math.cos(angle) * speed;

            //Coloca velocidade inicial como 0 na primeira partícula para fins de aplicação da função de matemática
            if (i === 0){
                vy = 0;
            }
            else{
            //Caso não seja a primeira partícula a velocidade inicial é definida de acordo com o seno do ângulo e incrementada em g*t
            vy = Math.sin(angle) * speed;
            }

            //Partículo colocada na origem X e Y inicialmente
            const particle = this.add.image(originX, originY, 'particle')
                .setDisplaySize(64, 64)
                .setDepth(1000);

            //Coloca elementos de sprite (estrela), x0 (origem X), y0 (Origem Y), vx (velocidade de x), vy (velocidade de y) e t (tempo)
            this.particles.push({
                sprite: particle,
                x0: originX,
                y0: originY,
                vx: vx,
                vy: vy,
                t: 0
            });
        }
}
}
