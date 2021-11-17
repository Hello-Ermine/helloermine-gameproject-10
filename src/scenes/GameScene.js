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
let shurikenEvent;
let shurikenGroup;


let ninjaHeart = 3;
let heartGroup;


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
        this.load.image('heart','src/image/heart.png');

        
    
    }

    create() {
        bg = this.add.tileSprite(0,0,1080,720,'bg').setOrigin(0,0).setDepth(1).setScale(1);
        ground = this.physics.add.image(500,1200,'ground').setDepth(2).setSize(1920,0).setScale(1).setOffset(0,-100).setImmovable().setVisible();
        ninja = this.physics.add.sprite(120,490,'ninja').setScale(1).setDepth(10).setSize(120,140).setOffset(40,10).setGravityY(2000);
        
        ninja.immortal = true;
        ninja.setCollideWorldBounds(true);
        this.physics.add.collider(ninja, ground);
        theme = this.sound.add('theme',{volume: 0.2});
        jump = this.sound.add('jump',{volume: 0.2});

        theme.play({loop: true});
        
        keySb = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        heartGroup = this.add.group();
        this.createNinjaHeart();

        woodGroup = this.physics.add.group();
        shurikenGroup = this.physics.add.group();

        woodEvent = this.time.addEvent({
            delay: 7000,
            callback: function () {
                wood = this.physics.add.image(Phaser.Math.Between(1500,2000), 435, 'wood').setScale(0.5).setDepth(3).setSize(135,380).setOffset(190,120);
                wood2 = this.physics.add.image(Phaser.Math.Between(2000,3000), 435, 'wood2').setScale(0.5).setDepth(3).setSize(135,380).setOffset(190,120);
                woodGroup.add(wood);
                woodGroup.add(wood2);
                woodGroup.setVelocityX(-500);
                this.physics.add.overlap( ninja, woodGroup, onNinjaHit);
            },
            callbackScope: this,
            loop: true,
        });
    
        shurikenEvent = this.time.addEvent({
            delay: 7000,
            callback: function () {
                shuriken = this.physics.add.image(Phaser.Math.Between(1500,5000), 515, 'shuriken').setScale(0.5).setDepth(3).setSize(250,220).setOffset(140,120);
                shuriken2 = this.physics.add.image(Phaser.Math.Between(3000,4000), 495, 'shuriken2').setScale(0.5).setDepth(3).setSize(220,220).setOffset(110,160);
                shurikenGroup.add(shuriken);
                shurikenGroup.add(shuriken2);
                shurikenGroup.setVelocityX(-500);
                this.physics.add.overlap( ninja, shurikenGroup, onNinjaHit);
            },
            callbackScope: this,
            loop: true,
        });
        
        function onNinjaHit(ninja,obj) {
            
            ninjaHeart--;
            if (ninjaHeart <=0) {
                ninjaHeart = 0;
                console.log("game over");
            }

            updateNinjaheart();
            ninja.immortal = true;
            flickerTimer = this.time.addEvent({
                delay: 100,
                callback: ninjaFlickering,
                repeat: 15
            });
        }

        function ninjaFlickering() {
            ninja.setVisible(!ninja.visible);

            if (frickerTimer.repeatCount == 0) {
                ninja.immortal = flase;
                ninja.setVisible(true);
                flickerTimer.remove();
            }
        }

        function updateNinjaheart(){
            for (let i = heartGroup.getChildren().length - 1; i >= 0; i--) {
                if (ninjaHeart < i+1) {
                    heartGroup.getChildren()[i].setVisible(false);
                } else {
                    heartGroup.getChildren()[i].setVisible(true);
                }
            }
        }

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

    createNinjaHeart() {
        for (let i = 0; i < ninjaHeart; i++) {
            let heart = this.add.image(900 + (i * 65),40,'heart').setDepth(11).setScale(0.15);
    
            heartGroup.add(heart)
        }
    }

        update(delta, time) {
            
        this.createNinjaHeart();
            
        if (ninja.body.touching.down) {
            ninja.jumpCount = 0;
        }

        let canDoubleJump = ninja.jumpCount < 2;

        if (Phaser.Input.Keyboard.JustDown(keySb) && (ninja.body.touching.down || canDoubleJump )) {
            jump.play({loop: false});
            ninja.jumpCount++;
            ninja.setVelocityY(-960);
            ninja.anims.play('ninjaJump', true,)
        }
        
        else if (keySb.isDown) {

        }
        else{ 
        ninja.anims.play('ninjaRun', true);
        }
        
        for (let i = 0; i < woodGroup.getChildren().length; i++) {
            if (woodGroup.getChildren()[i].x < -100) {
                    woodGroup.getChildren()[i].destroy();
            }
        }

        for (let i = 0; i < shurikenGroup.getChildren().length; i++) {
            if (shurikenGroup.getChildren()[i].x < -100) {
                shurikenGroup.getChildren()[i].destroy();
            }
        }
        bg.tilePositionX += 6;

        this.createNinjaHeart();
    } 

    
}




export default GameScene;
