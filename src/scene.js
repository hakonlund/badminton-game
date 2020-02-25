import background from "./graphics/background.png";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("Scene");
  }
  preload() {
    this.load.image("background", background);
  }
  create() {
    this.background = this.add.image(400, 300, "background");
  }
}
