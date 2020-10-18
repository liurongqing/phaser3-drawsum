import { SceneKeys } from '~/consts/index'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.PRELOAD)
  }
  preload() {
    // this.load.image('bg', 'assets/images/bg.jpg')
    this.load.image('test-bg', 'assets/images/test-bg.png')
    this.load.image('test-item', 'assets/images/test-item.png')
  }
  create() {
    this.scene.start(SceneKeys.GAME)
  }
  update() { }
}
