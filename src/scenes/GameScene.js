import Phaser from "phaser";

let bg;
let ground;
let ninja;
let theme;
let keySb;
let jump;

let wood;
let woodevent;
let woodGroup;


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
        this.load.image('wood','src/image/obj/wood.png');

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1080,720,'bg').setOrigin(0,0).setDepth(1).setScale(1);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,-100).setImmovable().setVisible();
        ninja = this.physics.add.sprite(120,490,'ninja').setScale(1).setDepth(10).setSize(120,140).setOffset(40,10).setGravityY(2000);
        

        woodGroup = this.physics.add.group();

        woodevent = this.time.addEvent({
            delay: 5000,
            callback: function () {
                wood = this.physics.add.image(1500, 435, 'wood').setScale(0.5).setDepth(3).setSize(135,380).setOffset(190,120);
                woodGroup.add(wood);
                woodGroup.setVelocityX(-400);
                this.physics.add.overlap(woodGroup, ninja);
            },
            callbackScope: this,
            loop: true,
        });
    
       
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
        
      

        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
     
      
    }
        update(delta, time) {
            
         if (ninja.body.touching.down) {
            ninja.jumpCount = 0;
        }

        let canDoubleJump = ninja.jumpCount < 2;

        if (Phaser.Input.Keyboard.JustDown(keySb) && (ninja.body.touching.down || canDoubleJump )) {
            jump.play({loop: false});
            ninja.jumpCount++;
            ninja.setVelocityY(-900);
            ninja.anims.play('ninjaJump', true,)
        }
            // if (keySb.isDown && Phaser.Input.Keyboard.JustDown(keySb)) {
        //     jump.play({loop: false});
        //     // ninja.anims.play('ninjaJump', true,)
        //     ninja.anims.play('ninjaJump', true,)
        //     ninja.setVelocityY(-500);
            
        // }
        
        else if (keySb.isDown) {
            // setTimeout(function() { 
            //     ninja.anims.play('ninjaJump', true,)
            //     ninja.setVelocityY(-100) }, 1000);
        }
        else{ 
        ninja.anims.play('ninjaRun', true);
        }
        
        for (let i = 0; i < woodGroup.getChildren().length; i++) {
            if (woodGroup.getChildren()[i].x < -100) {
                    woodGroup.getChildren()[i].destroy();
            }
        }
        bg.tilePositionX += 4;
    } 
}


export default GameScene;
