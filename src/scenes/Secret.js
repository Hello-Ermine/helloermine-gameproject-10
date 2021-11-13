import Phaser from "phaser";


let secretscene;
let f5;


class Secret extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Secret'
        });
    }

    preload() {
        this.load.image('secretscene','src/image/Secretending.jpg');
        this.load.image('F5','src/image/F5.png');
    }

    create() {
        secretscene = this.add.image(0,80,'secretscene').setOrigin(0,0).setScale(1.25);
        f5 = this.add.image(0,590,'F5').setOrigin(0,0);
    }

    update(delta, time) {
        
    }
}
export default Secret;
