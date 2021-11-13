import Phaser from "phaser";

let player;
let bg;
let meteor1;
let meteor2;
let finish;
let secret;
let keyW;
let keyA;
let keyS;
let keyD;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player','src/image/Player.png',
            { frameWidth: 94.25, frameHeight: 90 });
        this.load.image('bg','src/image/BG.jpg');
        this.load.image('meteor','src/image/Meteor.png');
        this.load.image('finish','src/image/Finish.png');
        this.load.image('secret','src/image/Secretline.png');

     }

    create() {
        player = this.physics.add.sprite(250, 450, 'player').setDepth(20);
        player.setCollideWorldBounds(true);
    
        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player',{
                start:0,
                end:3
            }),
            duration: 50,
            repeat: 1
        })

        bg = this.add.tileSprite(0,0,1000,720,'bg').setOrigin(0,0).setDepth(1);
        
        meteor1 = this.physics.add.image(1300,250,'meteor').setDepth(19).setSize(577,300);
        meteor2 = this.physics.add.image(1300,500,'meteor').setDepth(18);

        this.physics.add.collider(player, meteor1, ()=>{
            this.scene.start('GameOver');
        });
        
        this.physics.add.collider(player, meteor2, ()=>{
            this.scene.start('GameOver');
        });

        finish = this.physics.add.image(3000,350,'finish').setDepth(17).setScale(2.5).setOffset(0,-40);
        this.physics.add.collider(player, finish, ()=>{
            this.scene.start('Win');
        });

        secret = this.physics.add.image(5000,350,'secret').setDepth(17).setScale(2.5);
        this.physics.add.collider(player, secret, ()=>{
            this.scene.start('Secret');
        });
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
        
    update(delta, time) {
        bg.tilePositionX += 2;
    
        if(true){meteor1.setVelocityX(-1000);}
        if(true){meteor2.setVelocityX(-1000);}
        if(true){finish.setVelocityX(-500);}
        if(true){secret.setVelocityX(-500);}

        if(keyW.isDown){
            player.setVelocityY(-1000);
            player.anims.play('playerAni',true);
        }else if(keyS.isDown){
            player.setVelocityY(1000);
            player.anims.play('playerAni',true);
        }else{
            player.setVelocityY(0);
        }
        if(keyA.isDown){
            player.setVelocityX(-1000);
            player.anims.play('playerAni',true);
        }else if(keyD.isDown){
            player.setVelocityX(1000);
            player.anims.play('playerAni',true);
        }else{
            player.setVelocityX(0);
        }

       
        
    }
}
export default GameScene;
