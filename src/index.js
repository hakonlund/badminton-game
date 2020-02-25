import Phaser from "phaser";
import Scene from "./scene";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#c2fffe",
  physics: {
    default: "matter",
    matter: {
      gravity: {
        y: 0.2
      },
      debug: false
    }
  },
  scene: [Scene]
};

export const game = new Phaser.Game(config);
