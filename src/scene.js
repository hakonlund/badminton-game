import bakke from "./graphics/bakke.png";
import badmintonBall from "./graphics/badmintonBall.png";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("Scene");
  }
  preload() {
    this.load.image("bakke", bakke);
    this.load.image("ball", badmintonBall);
  }
  create() {
    this.matter.world.setBounds(0, 0, 800, 600);
    this.bakke = this.matter.add.image(400, 550, "bakke", null, {
      isStatic: true
    });
    this.ball = this.matter.add.sprite(200, 50, "ball");
  }
}
