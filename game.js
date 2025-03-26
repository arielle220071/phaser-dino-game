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
  for(let i =1; i<7; i++){
    this.load.image(`obstacle${i}`, `assets/cactuses_${i}.png`)
  }
}

function create() {

    this.player = this.physics.add.sprite(200,200, "dino").setOrigin(0)
    .setCollideWorldBounds(true)
    .setBodySize(44,92)
    .setGravityY(5000);
    this.ground = this.add.tileSprite(0, 500, 1000, 30, "ground").setOrigin(0,1);
    
    this.groundCollider= this.physics.add.staticSprite(0, 500, "ground").setOrigin(0,1);
    this.groundCollider.body.setSize(1000,30);

    this.physics.add.collider(this.player, this.groundCollider);

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
    this.gameSpeed =5;
    this.obstacles = this.physics.add.group({
        allowGravity:false
    });
}

function update() {
    this.ground.tilePositionX +=this.gameSpeed;
    const num= Math.floor(Math.random() * 6) +1;
    this.obstacles.create(750,390, `obstacle${num}`).setOrigin(0);
}
