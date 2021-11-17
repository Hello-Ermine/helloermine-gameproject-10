import Phaser from "phaser";


let start;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg','')
        this.load.image('start','src/image/button/start');
    
    }

    create() {
        start = this.add.image(400,500,'start').setScale(0.1);
        start.setInteractive();
        start.on('pointerup',()=>{
            this.scene.start('GameScene');
        })
    }


    update(delta, time) {

    } 
}


export default MainMenu;
