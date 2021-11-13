import Phaser from "phaser";

let bg;
let cloud1;
let cloud2;
let block;
let snow;
let ground;
let keyA;
let keyD;
let keyX;
let queen;
let theme;
let keySb;
let keyCtrl;
let jump;
let bloop;
let sparkle;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.audio('theme','src/sound/cookietheme.mp3');
        this.load.audio('jump','src/sound/jump.mp3');
        this.load.audio('bloop','src/sound/bell.mp3');
        this.load.audio('sparkle','src/sound/sparkle.mp3');
        this.load.image('bg','src/image/bg05.png');
        this.load.image('ground','src/image/layers/ground.png');
        this.load.image('cloud1','src/image/layers/clouds_1.png');
        this.load.image('cloud2','src/image/layers/clouds_2.png');
        this.load.image('snow','src/image/layers/snowfalling.png');
        
        this.load.spritesheet('queen','src/image/spritesheet (5).png',{frameWidth: 382, frameHeight : 382});
        this.load.spritesheet('queen2','src/image/cookie1.png',{frameWidth: 382, frameHeight : 382});

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bg').setOrigin(0,0).setDepth(1).setScale(0.67);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,0).setImmovable().setVisible();
        cloud1 = this.add.tileSprite(0,0,1920,1080,'cloud1').setOrigin(0,0).setDepth(3).setScale(0.67);
        cloud2 = this.add.tileSprite(0,0,1920,1080,'cloud2').setOrigin(0,0).setDepth(4).setScale(0.67);
        snow = this.add.tileSprite(0,0,1920,1080,'snow').setOrigin(0,0).setDepth(5).setScale(0.67);
        
        
      
        queen = this.physics.add.sprite(150,400,'queen').setScale(0.7).setDepth(10).setSize(250,168).setOffset(40,210).setGravityY(1000);
       
        this.anims.create({
            key: 'queenAni2',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 10,
                end: 15
            }),
            duration: 1000,
            framerate: 10,
            repeat: -1
            
        })
        this.anims.create({
            key: 'queenDash',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 16,
                end: 21
            }),
            duration: 1000,
            framerate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'queenSleep',
            frames: this.anims.generateFrameNumbers('queen', {
                start: 23,
                end: 36
            }),
            duration: 2000,
            framerate: 10,
            repeat: 0,
            yoyo: true
           
        })
        this.anims.create({
            key: 'queenJump',
            frames: this.anims.generateFrameNumbers('queen2', {
                start: 0,
                end: 8
            }),
            duration: 1000,
            framerate: 9,
            repeat: 1,
           
        }) 
        this.anims.create({
            key: 'queenSlide',
            frames: this.anims.generateFrameNumbers('queen2', {
                start: 13,
                end: 16
            }),
            duration: 500,
            framerate: 4,
            repeat: 1,
           
        }) 
      
      
        
        
        queen.setCollideWorldBounds(true);
        this.physics.add.collider(queen, ground);
        theme = this.sound.add('theme',{volume: 0.2});
        jump = this.sound.add('jump',{volume: 0.2});
        bloop = this.sound.add('bloop',{volume: 0.2});
        sparkle = this.sound.add('sparkle',{volume: 0.2});

        theme.play({loop: true});
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyCtrl = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
      
    }
        update(delta, time) {
    
       
        if (Phaser.Input.Keyboard.JustDown(keySb)) {
            jump.play({loop: false});
        }
        else if (keySb.isDown) {
            
            queen.anims.play('queenJump', true,)
            
            
            queen.setVelocityY(-100);
        
        }
        else if (Phaser.Input.Keyboard.JustDown(keyCtrl)) {
            bloop.play({loop: false});
        }
        else if (keyCtrl.isDown) {
            
            queen.anims.play('queenSlide', true,)
           
      
        }else if (Phaser.Input.Keyboard.JustDown(keyX)) {

        sparkle.play({loop: false});


        }else if (keyX.isDown) {
            
            queen.anims.play('queenSleep', true,)
            

            

        }else{
            

           queen.anims.play('queenAni2', true);
           
        }
        
        cloud1.tilePositionX -= 2;
        cloud2.tilePositionX -= 2;
        snow.tilePositionY -= 2;
        bg.tilePositionX += 3;
        
        
    }
}

export default GameScene;
