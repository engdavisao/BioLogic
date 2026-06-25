    //Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level12 extends BaseScene {
   //Super construtor exportar Level12
   constructor() {
       super('Level12');
   }

   preload() {
       //Puxa preload de BaseScene 
       super.preload();

       //Carrega todas as imagens necessarias
       this.load.image('resp1', './assets/images/imagens-questao-12/1.webp');
       this.load.image('resp2', './assets/images/imagens-questao-12/2.webp');
       this.load.image('resp3', './assets/images/imagens-questao-12/3.webp');
       this.load.image('resp4', './assets/images/imagens-questao-12/4.webp');
   }

   create() {
       //Puxa create de BaseScene
       super.create();

       // Limpa a memória dos assets das variáveis 'resp' para reutilização em cenas futuras com novas imagens
       this.events.once('shutdown', () => {
           ['resp1', 'resp2', 'resp3', 'resp4'].forEach(key => this.textures.remove(key));
       });

      
       //Adiciona botões para o layout geral, pergunta + respostas + número
       new Button(this, 200, 80, 100, 100, "12", "50px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DO ENUNCIADO DESSA QUESTÃO NÃO REPRESENTA A RESPOSTA DA PERGUNTA! FIQUE ATENTO ÀS IMAGENS!'));
       new Button(this, 800, 80, 950, 100, "EM QUAL DESSES ÓRGÃOS O ALIMENTO CHEGA PRIMEIRO DEPOIS DE SER ENGOLIDO?", "35px", () => Helper.showFeedbackImage(this, 'wrong', 'O OBJETIVO DESSA QUESTÃO É SABER QUAL IMAGEM REPRESENTA O PRIMEIRO ÓRGÃO QUE A COMIDA PASSA APÓS SER ENGOLIDA.'));
       new Button(this, 540, 280, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! A BOCA É ONDE O ALIMENTO ENTRA E COMEÇA A SER MASTIGADO. A PERGUNTA É SOBRE O QUE VEM DEPOIS DE ENGOLIR.'), 'resp1', 0.5);
       new Button(this, 1060, 280, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'correct', 'CORRETO! DEPOIS DE SER ENGOLIDO, O ALIMENTO PASSA DA BOCA PARA A FARINGE, INICIANDO O CAMINHO PELO SISTEMA DIGESTÓRIO.', 'Level13'), 'resp2', 0.5);
       new Button(this, 540, 540, 420, 230, "", "45px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! O ESTÔMAGO RECEBE O ALIMENTO APÓS ELE PASSAR PELA FARINGE E PELO ESÔFAGO. NÃO É O PRIMEIRO ÓRGÃO DEPOIS DA DEGLUTIÇÃO.'), 'resp3', 0.5);
       new Button(this, 1060, 540, 420, 230, "", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'INCORRETO! OS RINS FAZEM PARTE DO SISTEMA EXCRETOR, NÃO DO SISTEMA DIGESTÓRIO. ELES NÃO PARTICIPAM DO CAMINHO DO ALIMENTO.'), 'resp4', 0.5);
       
   }

   update() {
        //Puxa update de BaseScene
        super.update();
   }
}
