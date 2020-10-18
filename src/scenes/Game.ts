import { SceneKeys } from '~/consts/index'

export default class Game extends Phaser.Scene {
  testScene: any
  constructor() {
    super(SceneKeys.GAME)
  }
  preload() { }
  create() {
    const { width, height } = this.scale
    this.add.image(width * 0.5, height * 0.5, 'test-bg')

    this.add.text(width * 0.5, height * 0.5, 'Game.ts', {
      fontSize: '38px'
    }).setOrigin(0.5)


    this.scene.launch('test')
    this.testScene = this.scene.get('test')
  }
  // update() { }

  updateCamera() {
    const { width, height } = this.scale
    const camera = this.cameras.main
    const zoom = this.testScene.getZoom()
    const offset = 120 * zoom

    camera.setZoom(zoom)
    camera.centerOn(750 / 2, 1334 / 2 + 120)
  }
}
