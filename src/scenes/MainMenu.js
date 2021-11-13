import Phaser from "phaser";


let buttonStart;
let bg;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('start','src/image/Start.png');
        this.load.image('bg','src/image/BG.jpg');
    }

    create() {
        buttonStart = this.add.image(500,300, 'start').setScale(0.5).setDepth(5);
        buttonStart.setInteractive();

        buttonStart.on('pointerup', ()=>{
            this.scene.start('GameScene');
        })

        bg = this.add.tileSprite(0,0,1000,720,'bg').setOrigin(0,0).setDepth(1);
    }

    update(delta, time) {
        bg.tilePositionX += 2;
    }
}
export default MainMenu;
