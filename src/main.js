import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene1(Tonpor)';
import GameScene from './scenes/GameScene2(Pol)';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1080,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene
    ],
    
    
};

const game = new Phaser.Game(config);