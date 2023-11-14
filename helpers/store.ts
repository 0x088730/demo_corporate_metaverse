import create from 'zustand'

const useStore = create(() => {
  return {
    startWorld: false,
    playerPosition: [0, 0, 0],
    playerInitialPosition: [999, 999, 999],
    playerStatus: true,
    goto: '',
    playerRotation: Math.PI / 2,
    playerCameraRotation: [-6, 1, 3],
    joystickDistance: 0,
    joystickAngle: 90,
    uiStep: 0,
    popup: 0,
    createAvatarItem: -1,
    emojiAnimation: 'Idle',
    video: false,

    name: '',
    hairStyle: 8,
    hairColor: 0,
    glasses: 0,
    beardStyle: 0,
    beardColor: 0,
    skinColor: 0,
    topStyle: 5,
    topColor: 0,
    trousersStyle: 0,
    trousersColor: 0,
    accessoriesStyle: 0,
    accessoriesColor: 0,
    shoesStyle: 0,
    shoesColor: 0,
  }
})

export default useStore