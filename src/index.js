import Phaser from "phaser";
import Scene from "./scene";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [Scene]
};

export const game = new Phaser.Game(config);
