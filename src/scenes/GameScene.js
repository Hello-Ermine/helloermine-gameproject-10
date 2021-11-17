import Phaser from "phaser";

let bg;
let ground;
let ninja;
let theme;
let keySb;
let jump;

let wood;
let wood2;
let woodEvent;
let woodGroup;

let shuriken;
let shuriken2;
let kunai;
let shurikenEvent;
let shurikenGroup;



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
        this.load.image('wood2','src/image/obj/wood2.png');
        this.load.image('shuriken','src/image/obj/shuriken.png');
        this.load.image('shuriken2','src/image/obj/shuriken2.png');
        this.load.image('kunai','src/image/obj/kunai.png');

    
    }

    create() {
        bg = this.add.tileSprite(0,0,1080,720,'bg').setOrigin(0,0).setDepth(1).setScale(1);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,-100).setImmovable().setVisible();
        ninja = this.physics.add.sprite(120,490,'ninja').setScale(1).setDepth(10).setSize(50,140).setOffset(90,10).setGravityY(2300);
        
        
        this.physics.add.collider(ninja, ground); 
        theme = this.sound.add('theme',{volume: 0.2});
        jump = this.sound.add('jump',{volume: 0.2});

        theme.play({loop: true});
        
      

        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
     
      

        woodGroup = this.physics.add.group();
        shurikenGroup = this.physics.add.group();

        //อนิเมชั่น obj
        woodEvent = this.time.addEvent({
            delay: 5000,
            callback: function () {
                wood = this.physics.add.image(Phaser.Math.Between(1500,2000), 435, 'wood').setScale(0.5).setDepth(3).setSize(135,350).setOffset(190,150);
                wood2 = this.physics.add.image(Phaser.Math.Between(2300,3000), 435, 'wood2').setScale(0.5).setDepth(3).setSize(135,350).setOffset(190,150);
                woodGroup.add(wood);
                woodGroup.add(wood2);
                woodGroup.setVelocityX(-500);
                this.physics.add.collider(woodGroup, ninja, ()=> {
                    this.scene.start('GameOver');
                    theme.stop();
                });
            },
            callbackScope: this,
            loop: true,
        });
    
        

        shurikenEvent = this.time.addEvent({
            delay: 8000,
            callback: function () {
                shuriken = this.physics.add.image(Phaser.Math.Between(1200,1300), 515, 'shuriken').setScale(0.5).setDepth(3).setSize(250,200).setOffset(140,140);
                shuriken2 = this.physics.add.image(Phaser.Math.Between(2000,3000), 495, 'shuriken2').setScale(0.5).setDepth(3).setSize(220,200).setOffset(110,180);
                kunai = this.physics.add.image(Phaser.Math.Between(1100,4000), 535, 'kunai').setScale(0.2).setDepth(3).setSize(110,180).setOffset(180,200);
                shurikenGroup.add(shuriken);
                shurikenGroup.add(shuriken2);
                shurikenGroup.add(kunai);
                shurikenGroup.setVelocityX(-500);
                this.physics.add.collider(shurikenGroup, ninja, ()=> {
                    this.scene.start('GameOver');
                    theme.stop();
                });
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
    
        
    }
        update(delta, time) {
            
         if (ninja.body.touching.down) {
            ninja.jumpCount = 0;
        }

        let canDoubleJump = ninja.jumpCount < 2;

        if (Phaser.Input.Keyboard.JustDown(keySb) && (ninja.body.touching.down || canDoubleJump )) {
            jump.play({loop: false});
            ninja.jumpCount++;
            ninja.setVelocityY(-1000);
            ninja.anims.play('ninjaJump', true,)
        } else if (keySb.isDown) {

        } else { 
            ninja.anims.play('ninjaRun', true);
        }
        
        for (let i = 0; i < woodGroup.getChildren().length; i++) {
            if (woodGroup.getChildren()[i].x < -100) {
                    woodGroup.getChildren()[i].destroy();
            }
        }
        bg.tilePositionX += 6;
    } 
}


export default GameScene;
