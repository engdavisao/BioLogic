//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level1 extends BaseScene {
    //Super construtor exportar Level1
    constructor() {
        super('Level1');
    }

    preload() {
        //Puxa preload de BaseScene     
        super.preload();
    }

    create() {
        //Puxa create de BaseScene
        super.create();

        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 160, 120, 80, 80, "1", "75px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DA PERGUNTA NÃO TEM RELAÇÃO COM A RESPOSTA AQUI'));
        new Button(this, 720, 120, 950, 80, "QUEM CRIOU A LEI DO USO E DESUSO?", "45px", () => Helper.showFeedbackImage(this, 'wrong', 'PROCURE O NOME DO CIENTISTA QUE CRIOU A LEI DO USO E DESUSO PARA RESPONDER A PERGUNTA'));
        new Button(this, 460, 280, 420, 170, "LAMACK", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'NÃO CONHEÇO UM CIENTISTA FAMOSO CHAMADO "LAMACK"...'));
        new Button(this, 970, 280, 420, 170, "LAMARCK", "68px", () => Helper.showFeedbackImage(this, 'correct', 'ISSO MESMO! JEAN-BAPTISTE LAMARCK É O CIENTISTA QUE CRIOU A LEI DO USO E DESUSO, QUE DEFENDE QUE O AMBIENTE INFLUENCIA A EVOLUÇÃO', 'Level2'));
        new Button(this, 460, 510, 420, 170, "DARWIN", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'CHARLES DARWIN FOI O CIENTISTA QUE CRIOU A TEORIA DA SELEÇÃO NATURAL, NÃO A LEI DO USO E DESUSO'));
        new Button(this, 970, 510, 420, 170, "LEWIS", "68px", () => Helper.showFeedbackImage(this, 'wrong', 'GILBERT NEWTON LEWIS FOI UM FÍSICO QUE CRIOU A TEORIA DAS LIGAÇÕES COVALENTES, NÃO A LEI DO USO E DESUSO'));
    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }
}