import 'phaser';
import Phaser from 'phaser';
import GameOver from './scenes/GameOver';
import GameScene from './scenes/GameScene';
import Pause from './scenes/Pause';
import MainMenu from './scenes/MainMenu';


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
        MainMenu,
        GameScene,
        Pause,
        GameOver
       
    ],
    
    
};

const game = new Phaser.Game(config);