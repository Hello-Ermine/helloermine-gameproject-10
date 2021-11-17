import Phaser from "phaser";


let start;
let bg;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('main','src/image/scene/bg.png')
        this.load.image('start','src/image/button/start.png');
    
    }

    create() {
        bg = this.add.image(0,0,'main').setOrigin(0,0);
        start = this.add.image(780,520,'start').setScale(0.55);
        start.setInteractive();
        start.on('pointerup',()=>{
            this.scene.start('GameScene');
        })
        start.on('pointerover',()=>{
            start.setScale(0.8);
        })
        start.on('pointerout',()=>{
            start.setScale(0.55);
        })
    }


    update(delta, time) {

    } 
}


export default MainMenu;
