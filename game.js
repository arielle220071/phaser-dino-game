const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#FFF",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let ground;
let clouds;

function preload() {
  this.load.spritesheet("dino", "assets/dino-idle.png", {frameWidth: 88, frameHeight: 94});
  this.load.image("ground","assets/ground.png");  
  this.load.image("clouds","assets/cloud.png"); 
}

function create() {

    this.player = this.physics.add.sprite(200,200, "dino").setOrigin(0);
    this.ground = this.add.tileSprite(0, 500, 1000, 30, "ground").setOrigin(0,1);dx
    this.clouds = this.add.group();
    this.clouds = this.clouds.addMultiple(
        [this.add.image(300,130, "clouds"),
            this.add.image(500,130, "clouds"),
            this.add.image(100,130, "clouds"),
            this.add.image(700,130, "clouds"),
            this.add.image(400,200, "clouds"),
            this.add.image(600,200, "clouds"),
            this.add.image(200,200, "clouds")]
        );
    
}

function update() {

}
