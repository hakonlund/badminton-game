import bakke from "./graphics/bakke.png";
import solen from "./graphics/solen.png";
import nett from "./graphics/nett.png";
import figur1 from "./graphics/figur1.png";
import figur2 from "./graphics/figur2.png";
import badmintonBall from "./graphics/badmintonBall.png";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("Scene");
  }
  preload() {
    this.load.image("bakke", bakke);
    this.load.image("solen", solen);
    this.load.image("nett", nett);
    this.load.image("figur1", figur1);
    this.load.image("figur2", figur2);
    this.load.image("ball", badmintonBall);
  }
  create() {
    this.matter.world.setBounds(0, 0, 800, 600);
    this.solen = this.matter.add.sprite(700, 100, "solen", null, {
      isStatic: true
    });
    this.bakke = this.matter.add.image(400, 550, "bakke", null, {
      isStatic: true
    });
    this.nett = this.matter.add.sprite(400, 350, "nett", null, {
      isStatic: true
    });
    this.figur1 = this.matter.add.sprite(170, 500, "figur1");
    this.figur2 = this.matter.add.sprite(630, 500, "figur2");
    this.ball = this.matter.add.sprite(200, 50, "ball");
  }
}
