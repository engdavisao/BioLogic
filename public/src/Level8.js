//Importa classes necessárias
import { Button } from './Button.js';
import { Helper } from './Helper.js';
import { BaseScene } from './BaseScene.js';

export class Level8 extends BaseScene {
    //Super construtor exportar Level8
    constructor() {
        super('Level8');
    }

    preload() {
        //Puxa preload de BaseScene
        super.preload();
    }

    create() {
        //Puxa create de BaseScene
        super.create();
        
        //Adiciona botões para o layout geral, pergunta + respostas + número
        new Button(this, 160, 80, 100, 100, "8", "70px", () => Helper.showFeedbackImage(this, 'wrong', 'O NÚMERO DA PERGUNTA NÃO É A RESPOSTA NESSE CASO'));
        new Button(this, 720, 80, 950, 100, "QUAL DESSAS MOLÉCULAS É USADA POR PLANTAS NA FOTOSSÍNTESE?", "37px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO: PROCURE POR MOLÉCULAS COMO RESPOSTA'));
        new Button(this, 460, 280, 420, 240, "CO", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO: O MONÓXIDO DE CARBONO (CO) NÃO É UTILIZADO POR PLANTAS NA FOTOSSÍNTESE, PORQUE É TÓXICO'));
        new Button(this, 980, 280, 420, 240, "H₂O₂", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO: POR MAIS QUE LEMBRE A FÓRMULA DA ÁGUA (H₂O), A ÁGUA OXIGENADA (H₂O₂) NÃO É UTILIZADA POR PLANTAS NA FOTOSSÍNTESE'));
        new Button(this, 460, 570, 420, 240, "CO₂", "145px", () => Helper.showFeedbackImage(this, 'correct', 'EXATAMENTE! O DIÓXIDO DE CARBONO (CO₂) É ABSORVIDO POR PLANTAS PARA REALIZAR A FOTOSSÍNTESE, LIBERANDO GÁS OXIGÊNIO (O₂) NO PROCESSO', 'Level9'));
        new Button(this, 980, 570, 420, 240, "OH⁻", "145px", () => Helper.showFeedbackImage(this, 'wrong', 'ERRADO: ÍONS HIDRÓXIDO (OH⁻) NÃO FAZEM PARTE DA REAÇÃO DA FOTOSSÍNTESE'));

    }

    update() {
        //Puxa update de BaseScene
        super.update();
    }

}
