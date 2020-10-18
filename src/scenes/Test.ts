import { SceneKeys } from '~/consts/index'

export default class Test extends Phaser.Scene {
  parent: any
  sizer: any
  backgroundScene: any
  GAME_WIDTH: any
  GAME_HEIGHT: any
  constructor() {
    super('test')
  }
  init() {
    this.GAME_WIDTH = window.innerWidth
    this.GAME_HEIGHT = window.innerHeight
  }
  preload() { }
  create() {
    const { width, height } = this.scale
    this.add.image(width * 0.5, height * 0.5, 'test-item')
    // this.cameras.main.setBackgroundColor(0x00ff00)

    this.parent = new Phaser.Structs.Size(width, height)
    this.sizer = new Phaser.Structs.Size(this.GAME_WIDTH, this.GAME_HEIGHT, Phaser.Structs.Size.FIT, this.parent)

    this.backgroundScene = this.scene.get(SceneKeys.GAME)

    this.add.text(width * 0.5, height * 0.5, 'test', {
      fontSize: '38px'
    }).setOrigin(0.5)
  }

  getZoom(){
    return this.cameras.main.zoom
  }


  updateCamera() {
    const camera = this.cameras.main;

    const x = Math.ceil((this.parent.width - this.sizer.width) * 0.5);
    const y = 0;
    const scaleX = this.sizer.width / this.GAME_WIDTH;
    const scaleY = this.sizer.height / this.GAME_HEIGHT;

    camera.setViewport(x, y, this.sizer.width, this.sizer.height);
    camera.setZoom(Math.max(scaleX, scaleY));
    camera.centerOn(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2);

    this.backgroundScene.updateCamera();
  }
}
