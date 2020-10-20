import 'phaser'

import scene from '~/scenes'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'root',
    width: 750,
    height: 1334,
    min: {
      width: 375,
      height: 667
    },
    max: {
      width: 750,
      height: 1334
    }
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 200 }
    }
  },
  scene
}

export default new Phaser.Game(config)
