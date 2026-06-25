//Importa classes necessárias
import { Button } from './Button.js';

export class Helper {
    //função estática helper para reuso em diferentes scripts
    static makeInteractive(scene, element, callback, baseScaleAmount = 1, scaleAmount = 1.1, lock = true){
        element.setInteractive();
        //adiciona callback na interação
        element.on('pointerdown', () => {
            scene.tweens.killTweensOf(element);
            element.setDepth(element._baseDepth ?? 0);
            callback();
        });
        //aumenta o botão ao colocar o ponteiro por cima e eleva o depth acima dos outros botões
        element.on('pointerover', () => {
            scene.tweens.killTweensOf(element);
            element._baseDepth = element.depth;
            element.setDepth(element.depth + 10);
            scene.tweens.add({
                targets: element,
                scale: scaleAmount,
                duration: 150
            });
        });
        //diminui o botão assim que tira o ponteiro e restaura o depth original
        element.on('pointerout', () => {
            scene.tweens.killTweensOf(element);
            element.setDepth(element._baseDepth ?? 0);
            scene.tweens.add({
                targets: element,
                scale: baseScaleAmount,
                duration: 150
            });
        });
    }

    static showFeedbackImage(scene, feedbackType, message = '', nextSceneKey) {
        //Imagem indicando erro/acerto, cor dependente no tipo de feedback
        const config = {
            correct: {
                color: 0x228B22,
                image: feedbackType,
            },
            wrong: {
                color: 0xD2042D,
                image: feedbackType,
            },
            feedback: {
                color: 0x6a96fe,
                image: feedbackType,
            }
        }

        const { color, image } = config[feedbackType];
        //Coloca imagem de X ou tique segundo feedback para depois dar feedback detalhado
        let feedbackImg;

        //Mostra a imagem e toca o som segundo feedback
        if (feedbackType === 'wrong' || feedbackType === 'correct'){
            feedbackImg = scene.add.image(scene.scale.width / 2, scene.scale.height / 2, image).setDepth(67).setScale(0.5);
            scene.sound.play(feedbackType);
        }

        //Hitbox invisível para impedir interação juntamente com a imagem de feedback
        const blocker = scene.add.rectangle(scene.scale.width / 2, scene.scale.height / 2, scene.scale.width, scene.scale.height, 0x000000, 0).setDepth(66).setInteractive();

        //Espera 1 segundo e mostra o feedback detalhado
        scene.time.delayedCall(1000, () => {
            //Tira a imagem anterior e a hitbox invisível
            blocker.destroy()
            if (feedbackImg) feedbackImg.destroy();

            //Coloca cor segundo feedback errado ou correto (verde) ou (vermelho)
            const overlay = scene.add.rectangle(scene.scale.width / 2, scene.scale.height / 2, scene.scale.width, scene.scale.height, color, 1).setDepth(999);

            //Deixa interativo para impedir escrita nos botões
            overlay.setInteractive();

            //Constante correto para não reutilizar muitos ifs
            const isCorrect = feedbackType === 'correct';

            //Coloca imagem do davi segundo correto ou errado
            const imgX = isCorrect ? 200 : 1310;

            //Colo botão de voltar/avançar segundo correto ou errado
            const backX = isCorrect ? 1410 : 126;

            //Imagem do davi
            const img = scene.add.image( imgX, 590, 'davi').setScale(0.32).setDepth(1000);
            
            //Botão com feedback das questões
            const text = new Button(scene, scene.scale.width / 2, scene.scale.height / 2 - 120,  900, 400, message, '45px',() => {console.log('clicado')}, null, 0.5, 'white');

            //Botão de voltar
            const back = new Button(scene, backX, 650, 170, 120, "", "150px", () => {
                overlay.destroy();
                img.destroy();
                text.container.destroy();
                back.container.destroy();
                
                //Se não tiver erros antes adiciona ao contador de acertos de primeira
                if (isCorrect){
                    if (scene.mistakesInScene === 0) {
                        const correct = parseInt(localStorage.getItem('correct')) || 0;
                        localStorage.setItem('correct', correct + 1);
                    }
                    scene.scene.start(nextSceneKey);
                }

                //Se tiver erros adiciona ao contador de erros
                if (feedbackType === 'wrong') {
                    scene.mistakesInScene++;
                    const wrong = parseInt(localStorage.getItem('wrong')) || 0;
                    localStorage.setItem('wrong', wrong + 1);
                }

            }, 'arrow_left', 0.4, 'Default');

            //Se estiver correto troca imagem e botão de lugar
            if (isCorrect) {
                back.image.setFlipX(true);
                img.setFlipX(true);
            }

            text.container.setDepth(1001);
            back.container.setDepth(1001);
        });
    }

    static cursorUpdate(scene){
        //Coloca a ponta do cursor como a ponta do cursor normal
        if (scene.cursor) {
        const pointer = scene.input.activePointer;

        //Define offset para limitar o cursor
        const maxX = scene.scale.width - 48;
        const maxY = scene.scale.height - 48;

        //Da clamp/limita o cursor utilizando o offset prévio
        const x = Phaser.Math.Clamp(pointer.x, 0, maxX);
        const y = Phaser.Math.Clamp(pointer.y, 0, maxY);

        //Atualiza cursor segundo posição do cursor normal
        scene.cursor.setPosition(x, y);
        }
    }

    static cursorEnable(scene){
        //Remove cursor para adicionar o cursor customizado
        scene.input.setDefaultCursor('none');

        //Checa se o cursor esta ativado na registry
        if (scene.registry.get('cursorEnabled')) {
            //Adiciona cursor e coloca origem no centro do cursor
            scene.cursor = scene.add.image(0, 0, 'cursor').setDepth(10000);
            scene.cursor.setOrigin(0, 0);
        }
    }

    static volumeButton(scene, y){
        //Botão de volume, que troca imagem e som de acordo com estado
        const volume = scene.add.image(1400, y, scene.sound.mute ? 'volume_muted' : 'volume').setScale(0.4);
        Helper.makeInteractive(scene, volume, () => {
            scene.sound.mute = !scene.sound.mute;

            volume.setTexture(
                scene.sound.mute ? 'volume' : 'volume_muted'
            );
        }, 0.3, 0.4);
    }
}
