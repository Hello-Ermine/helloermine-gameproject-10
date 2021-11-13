import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import GameOver from './scenes/GameOver';
import Win from './scenes/Win';
import Secret from './scenes/Secret';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1000,
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
        GameOver,
        Win,
        Secret
    ],
    
    
};

const game = new Phaser.Game(config);