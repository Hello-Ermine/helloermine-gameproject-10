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
        this.load.image('mainmenu','src/image/start.jpg');
    
    }

    create() {
        restart = this.add.image(400,500,'restart').setScale(0.1);
        restart.setInteractive();
        restart.on('pointerup',()=>{
            this.scene.start('GameScene');
        })

        mainmenu = this.add.image(400,500,'mainmenu').setScale(0.1);
        mainmenu.setInteractive();
        mainmenu.on('pointerup',()=>{
            this.scene.start('Mainmenu');
        })
    }

    update(delta, time) {

    } 
}


export default GameOver;
