import Phaser from "phaser";


let winScreen;
let f5;


class Win extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Win'
        });
    }

    preload() {
        this.load.image('winScreen','src/image/Winscreen.png');
        this.load.image('F5','src/image/F5.png');
    }

    create() {
        winScreen = this.add.image(0,50,'winScreen').setOrigin(0,0).setScale(0.9);
        f5 = this.add.image(0,590,'F5').setOrigin(0,0);
    }

    update(delta, time) {
        
    }
}
export default Win;
