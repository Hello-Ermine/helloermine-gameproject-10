import Phaser from "phaser";


let restart;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('restart','src/image/testImage.jpg');
    
    }

    create() {
        restart = this.add.image(400,500,'restart').setScale(0.1);
        
    }


    update(delta, time) {

    } 
}


export default GameOver;
