import Phaser from "phaser";

let gameOver;
let f5;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameOver','src/image/Gameover.jpg');
        this.load.image('F5','src/image/F5.png');
    }

    create() {
        gameOver = this.add.image(-50,-100,'gameOver').setScale(0.4).setOrigin(0,0);
        f5 = this.add.image(500,550,'F5');
      
    }

    update(delta, time) {
        
    }
}
export default GameOver;
