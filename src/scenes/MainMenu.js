import Phaser from "phaser";


let play;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('play','src/image/testImage.jpg');
    
    }

    create() {
        play = this.add.image(400,500,'play').setScale(0.1);
        play.setInteractive();
        play.on('pointerup',()=>{
            this.scene.start('GameScene');
        })
    }


    update(delta, time) {

    } 
}


export default MainMenu;
