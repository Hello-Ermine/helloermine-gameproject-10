import Phaser from "phaser";


let restart;
let mainmenu;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('restart','src/image/button/start.png');
        this.load.image('restart','src/image/.jpg');
    
    }

    create() {
        restart = this.add.image(400,500,'restart').setScale(0.1);
        restart.setInteractive();
        restart.on('pointerup',()=>{
            this.scene.start('GameScene');
        })

        mainmenu = 
    }


    update(delta, time) {

    } 
}


export default GameOver;
