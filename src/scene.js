import bakke from "./graphics/bakke.png";
import solen from "./graphics/solen.png";
import nett from "./graphics/nett.png";
import figur1 from "./graphics/figur1.png";
import figur2 from "./graphics/figur2.png";
import badmintonBall from "./graphics/badmintonBall.png";

import Phaser from "phaser";

const figurStates = {
  still: 0,
  jumping: 1,
  moving: 2
}

let figur1State = figurStates.moving;
let figur2State = figurStates.moving;

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
    this.figur1 = this.matter.add.sprite(170, 500, "figur1", null, {
      onCollideCallback: () => {
        figur1State = figurStates.moving;
      }
    });
    this.figur2 = this.matter.add.sprite(630, 500, "figur2");
    this.ball = this.matter.add.sprite(200, 50, "ball").setBounce(0.8);

    this.dKey = this.input.keyboard.addKey('D');
    this.aKey = this.input.keyboard.addKey('A');
    this.wKey = this.input.keyboard.addKey('W');


    this.leftKey = this.input.keyboard.addKey('LEFT');
    this.rightKey = this.input.keyboard.addKey('RIGHT');
    this.upKey = this.input.keyboard.addKey('UP');
  }
  update() {
    switch (figur1State) {
      case figurStates.moving:
        if (this.dKey.isDown) {
          this.figur1.x += 2;
          figur1State = figurStates.moving;
        }
        else if (this.aKey.isDown) {
          this.figur1.x -= 2;
          figur1State = figurStates.moving;
        }
        else if (this.wKey.isDown) {
          this.figur1.setVelocityY(-4);
          figur1State = figurStates.jumping;
        }
        break;

      case figurStates.jumping:
        break;
    }
  }
}
