import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'

import usePlayerControls from '../hooks/usePlayerControls'
import useStore from '../helpers/store'

const PlayerDesktop = (props: any) => {

  const { camera } = useThree()
  const { forward, backward, speed } = usePlayerControls()
  const joystickDistance: number = useStore((s) => s.joystickDistance)
  const joystickAngle: number = useStore((s) => s.joystickAngle)
  const playerInitialPosition = useStore((s) => s.playerInitialPosition)
  const defaultPosition = [-6, 0, 0];

  const [ref, api]: any = useSphere(() => ({
    mass: 500,
    type: 'Dynamic',
    position: playerInitialPosition[0] == 999 ? defaultPosition : playerInitialPosition,
    rotation: [0, 0, Math.PI / 2],
    args: [0.14],
    ...props
  }))

  const velocity = useRef([0, 0.0, 0])
  const targetStep = useRef(new THREE.Vector3())
  const emojiAnimation: string = useStore((s) => s.emojiAnimation)

  useEffect(() => {
    api.velocity.subscribe((v: number[]) => (velocity.current = v))
  }, [api.velocity])

  useFrame(() => {
    if (emojiAnimation !== "Idle") return
    const direction = new THREE.Vector3()
    if (joystickDistance === 0) {
      const frontVector = new THREE.Vector3(0, 0, Number(backward) - Number(forward))
      const sideVector = new THREE.Vector3(0, 0, 0)
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(4).applyEuler(camera.rotation)
    } else {
      const l = Math.abs(joystickDistance * Math.sin(Math.PI * joystickAngle / 180) * 0.05)
      const frontVector = new THREE.Vector3(0, 0, (joystickAngle <= 180) ? -1 : 1)
      const sideVector = new THREE.Vector3(0, 0, 0)
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(4).applyEuler(camera.rotation)
    }

    //apply the velocity to our sphere
    api.velocity.set(direction.x, 0, direction.z)
    ref.current.getWorldPosition(ref.current.position)
    targetStep.current = direction
  })

  useStore.setState({ playerPosition: ref?.current?.getWorldPosition(ref.current.position) })

  return (
    <>
      <mesh />
    </>
  )
}

export default PlayerDesktop
