import Phaser from "phaser";


let resume;
let bg;
let mainmenu
let ninja;
let ninja2;
let theme;

class Pause extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Pause'
        });
    }

    preload() {
        this.load.image('bg','src/image/bg.png')
        this.load.spritesheet('ninja','src/image/spritesheet (7).png',{frameWidth: 218, frameHeight : 164});
        this.load.image('resume','src/image/button/resume.png');
        this.load.image('mainmenu','src/image/button/mainmenu.png');
    }

    create() {
        bg = this.add.image(0,0,'bg').setOrigin(0,0).setDepth(1);
        ninja = this.add.sprite(300,490,'ninja').setScale(1).setDepth(4); 
        ninja2 = this.add.sprite(800,490,'ninja').setScale(1).setDepth(5);
        ninja2.flipX=true;

        resume = this.add.image(540,400,'resume').setScale(0.55).setDepth(2);
        resume.setInteractive();
        resume.on('pointerup',()=>{
            this.scene.resume('GameScene');
            this.scene.stop();
            
        })
        resume.on('pointerover',()=>{
            resume.setScale(0.8); 
        })
        resume.on('pointerout',()=>{
            resume.setScale(0.55);
        })

        //ทำไม่ได้ก็ไม่ต้องทำ555
        // mainmenu = this.add.image(540,500,'mainmenu').setScale(0.55).setDepth(3);
        // mainmenu.setInteractive();
        // mainmenu.on('pointerup',()=>{
        //     this.scene.restart('GaneScene');
        //     this.scene.start('MainMenu');
        //     this.scene.stop();
        // })
        // mainmenu.on('pointerover',()=>{
        //     mainmenu.setScale(0.8);
        // })
        // mainmenu.on('pointerout',()=>{
        //     mainmenu.setScale(0.55);
        // })
    }


    update(delta, time) {

    } 
}
export default Pause;