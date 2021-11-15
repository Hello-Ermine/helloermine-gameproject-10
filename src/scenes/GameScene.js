import Phaser from "phaser";

let bg;
let ground;
let ninja;
let theme;
let keySb;
let jump;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.audio('theme','src/sound/themesong.mp3');
        this.load.audio('jump','src/sound/jump.mp3');
        this.load.image('bg','src/image/bg.png');
        this.load.image('ground','src/image/layers/ground.png');
        this.load.spritesheet('ninja','src/image/spritesheet (7).png',{frameWidth: 218, frameHeight : 164});
       

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1080,720,'bg').setOrigin(0,0).setDepth(1).setScale(1);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,-100).setImmovable().setVisible();
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
      
        this.anims.create({
            key: 'ninjaJump',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 0,
                end: 6
            }),
            duration: 500,
            framerate: 0,
            repeat: 0,
           
        }) 
    
        
        
        
        ninja.setCollideWorldBounds(true);
        this.physics.add.collider(ninja, ground);
        theme = this.sound.add('theme',{volume: 0.2});
        jump = this.sound.add('jump',{volume: 0.2});

        theme.play({loop: true});
        
      

        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
     
      
    }
        update(delta, time) {
    
       
        if (Phaser.Input.Keyboard.JustDown(keySb)) {
            jump.play({loop: false});
            // ninja.anims.play('ninjaJump', true,)
            ninja.anims.play('ninjaJump', true,)
            ninja.setVelocityY(-500);
            
        }
        else if (keySb.isDown) {
            
            // setTimeout(function() { 
            //     ninja.anims.play('ninjaJump', true,)
            //     ninja.setVelocityY(-100) }, 1000);;
            
        }
        else{ 
            

        ninja.anims.play('ninjaRun', true);
           
        }
        
        
        bg.tilePositionX += 3;
        
        
    }
}

export default GameScene;
