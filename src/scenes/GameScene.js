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
let ninja;
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
        this.load.image('bg','src/image/bg06.png');
        this.load.image('ground','src/image/layers/ground.png');
        this.load.image('cloud1','src/image/layers/clouds_1.png');
        this.load.image('cloud2','src/image/layers/clouds_2.png');
        this.load.image('snow','src/image/layers/snowfalling.png');
        
        this.load.spritesheet('ninja','src/image/spritesheet (7).png',{frameWidth: 218, frameHeight : 164});
        //this.load.spritesheet('ninja2','src/image/cookie1.png',{frameWidth: 382, frameHeight : 382});

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1080,720,'bg').setOrigin(0,0).setDepth(1).setScale(1);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,-100).setImmovable().setVisible();
        // cloud1 = this.add.tileSprite(0,0,1920,1080,'cloud1').setOrigin(0,0).setDepth(3).setScale(0.67);
        // cloud2 = this.add.tileSprite(0,0,1920,1080,'cloud2').setOrigin(0,0).setDepth(4).setScale(0.67);
        // snow = this.add.tileSprite(0,0,1920,1080,'snow').setOrigin(0,0).setDepth(5).setScale(0.67);
        
        
      
        ninja = this.physics.add.sprite(120,490,'ninja').setScale(1).setDepth(10).setSize(120,140).setOffset(40,10).setGravityY(1000);
      
        this.anims.create({
            key: 'ninjaRun',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 6,
                end: 10
            }),
            duration: 500,
            framerate: 10,
            repeat: -1
            
        })
        // this.anims.create({
        //     key: 'ninjaAni2',
        //     frames: this.anims.generateFrameNumbers('ninja', {
        //         start: 10,
        //         end: 15
        //     }),
        //     duration: 1000,
        //     framerate: 10,
        //     repeat: -1
            
        // })
        // this.anims.create({
        //     key: 'ninjaDash',
        //     frames: this.anims.generateFrameNumbers('ninja', {
        //         start: 16,
        //         end: 21
        //     }),
        //     duration: 1000,
        //     framerate: 10,
        //     repeat: -1
        // })
        // this.anims.create({
        //     key: 'ninjaSleep',
        //     frames: this.anims.generateFrameNumbers('ninja', {
        //         start: 23,
        //         end: 36
        //     }),
        //     duration: 2000,
        //     framerate: 10,
        //     repeat: 0,
        //     yoyo: true
           
        // })
        
        // this.anims.create({
        //     key: 'ninjaSlide',
        //     frames: this.anims.generateFrameNumbers('ninja2', {
        //         start: 13,
        //         end: 16
        //     }),
        //     duration: 500,
        //     framerate: 4,
        //     repeat: 1,
           
        // }) 
        this.anims.create({
            key: 'ninjaJump',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 0,
                end: 6
            }),
            duration: 500,
            framerate: 0,
            repeat: 1,
           
        }) 
    
        
        
        
        ninja.setCollideWorldBounds(true);
        this.physics.add.collider(ninja, ground);
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
            ninja.setVelocityY(-100);
            ninja.anims.play('ninjaJump', true,)
      
        
        }
    
        // else if (Phaser.Input.Keyboard.JustDown(keyCtrl)) {
        //     bloop.play({loop: false});
        // }
        // else if (keyCtrl.isDown) {
            
        //     // ninja.anims.play('ninjaSlide', true,)
           
      
        // }
        else if (Phaser.Input.Keyboard.JustDown(keyX)) {

        sparkle.play({loop: false});


        // }else if (keyX.isDown) {
            
        //     // ninja.anims.play('ninjaSleep', true,)
            
        }else{
            

        //    ninja.anims.play('ninjaAni2', true);
        ninja.anims.play('ninjaRun', true);
           
        }
        
        // cloud1.tilePositionX -= 2;
        // cloud2.tilePositionX -= 2;
        // snow.tilePositionY -= 2;
        bg.tilePositionX += 3;
        
        
    }
}

export default GameScene;
