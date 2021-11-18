import Phaser from "phaser";


let resume;
let bg;

class Pause extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Pause'
        });
    }

    preload() {
        this.load.image('bg','src/image/bg.png')
        
        this.load.image('resume','src/image/button/resume.png');
      
    
    }

    create() {
        bg = this.add.image(0,0,'bg').setOrigin(0,0).setDepth(1);
        resume = this.add.image(780,520,'resume').setScale(0.55).setDepth(2);
        resume.setInteractive();
        resume.on('pointerup',()=>{
            this.scene.resume('Gamescene');
            this.scene.stop();
            
            
        })
        resume.on('pointerover',()=>{
            resume.setScale(0.8);
        })
        resume.on('pointerout',()=>{
            resume.setScale(0.55);
        })
    }


    update(delta, time) {

    } 
}
export default Pause;