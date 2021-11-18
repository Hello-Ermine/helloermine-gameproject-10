import Phaser from "phaser";


let restart;
let mainmenu;
let gameover;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameover','src/image/scene/gameover.png');
        this.load.image('restart','src/image/button/start.png');
        this.load.image('mainmenu','src/image/button/mainmenu.png');
    
    }

    create() {
        gameover = this.add.image(540,300,'gameover');


        restart = this.add.image(540,500,'restart').setScale(0.55);
        restart.setInteractive();
        restart.on('pointerup',()=>{
            this.scene.start('GameScene');
            time1 = 0;
        })
        restart.on('pointerover',()=>{
            restart.setScale(0.8);
        })
        restart.on('pointerout',()=>{
            restart.setScale(0.55);
        })

        mainmenu = this.add.image(540,600,'mainmenu').setScale(0.55);
        mainmenu.setInteractive();
        mainmenu.on('pointerup',()=>{
            this.scene.start('MainMenu');
        })
        mainmenu.on('pointerover',()=>{
            mainmenu.setScale(0.8);
        })
        mainmenu.on('pointerout',()=>{
            mainmenu.setScale(0.55);
        })
        
        timertext = this.add.text(500, 20,"Time: " ).setDepth(15);
    }

    update(delta, time) {
        // timertext.setText('Time: ' + time1);
    } 
}


export default GameOver;
