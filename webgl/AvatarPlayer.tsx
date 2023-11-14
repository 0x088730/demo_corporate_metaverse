import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useAnimations, OrbitControls } from "@react-three/drei"
import useStore from '../helpers/store'
import usePlayerControls from '../hooks/usePlayerControls'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Avatar(props: any) {

  const gltf: any = useLoader(GLTFLoader, '/assets/models/avatars/mi_avatars_008.glb')
  const animations = gltf.animations
  const avatarHairStyle = ['none', 'msm_hair_18b', 'msm_hair_31', 'msm_hair_32_A', 'msm_hair_32_B', 'msm_hair_33', 'msm_hair_hat_A', 'msm_hair_hat_B', 'msm_hair_hat_C', 'msm_hair_hat_D', 'msm_hair_No3', 'msm_hair_No6', 'msm_hair_No17', 'msm_hair_No17b', 'msm_hair_No23']
  const avatarHairColors = [0x3d3637, 0x6c5f5b, 0xa18066, 0xadadad, 0xe4e4e4, 0xffffff, 0xe45241, 0xd4a45d, 0xffd667, 0x7a1e1e, 0x32acaf, 0x662df5]
  const avatarGlasses = ['none', 'msm_glasses_1', 'msm_glasses_2', 'msm_glasses_3', 'msm_glasses_4', 'msm_glasses_5', 'msm_glasses_6']
  const avatarBeardStyle = ['none', 'msm_facialHair_No1', 'msm_facialHair_No2', 'msm_facialHair_No3', 'msm_facialHair_No4', 'msm_facialHair_No5', 'msm_facialHair_No6', 'msm_facialHair_No7', 'msm_facialHair_No8', 'msm_facialHair_No9', 'msm_facialHair_No10', 'msm_facialHair_No11']
  const avatarSkinColors = [0xf1d0c0, 0xe6b8a3, 0xbd8b6f, 0xc7886a, 0x9d714f, 0x7a645c]
  const avatarTopStyle = ['msm_top_No3', 'msm_top_No7', 'msm_top_No14', 'msm_top_No20', 'msm_top_No26', 'msm_top_No31',]
  const avatarTopColors = [0x000000, 0x3d3d3d, 0x86e2c1, 0xffffff, 0x10105f, 0x213ed4, 0xb01a0a, 0x1ad05a, 0xffd156, 0xff4b37, 0xa711dc, 0xed345e]
  const avatarTrousersStyle = ['msm_pants_No3', 'msm_pants_No7', 'msm_pants_No13', 'msm_pants_No16', 'msm_pants_No21', 'msm_pants_No22',]
  const avatarAccessoriesStyle = ['none', 'msm_bowtie', 'msm_hairband_A', 'msm_hairband_B', 'msm_hairband_C', 'msm_scarf_A', 'msm_scarf_B']
  const avatarShoesStyle = ['msm_shoes_No3', 'msm_shoes_No7', 'msm_shoes_No16', 'msm_shoes_No17', 'msm_shoes_No21', 'msm_shoes_No29']

  const hairStyle: number = useStore((s) => s.hairStyle)
  const hairColor: number = useStore((s) => s.hairColor)
  const glasses: number = useStore((s) => s.glasses)
  const beardStyle: number = useStore((s) => s.beardStyle)
  const beardColor: number = useStore((s) => s.beardColor)
  const skinColor: number = useStore((s) => s.skinColor)
  const topStyle: number = useStore((s) => s.topStyle)
  const topColor: number = useStore((s) => s.topColor)
  const trousersStyle: number = useStore((s) => s.trousersStyle)
  const trousersColor: number = useStore((s) => s.trousersColor)
  const accessoriesStyle: number = useStore((s) => s.accessoriesStyle)
  const accessoriesColor: number = useStore((s) => s.accessoriesColor)
  const shoesStyle: number = useStore((s) => s.shoesStyle)
  const shoesColor: number = useStore((s) => s.shoesColor)

  Object.keys(gltf.nodes).forEach((name: any, i: any) => {
    if (name.search("msm_hair") > -1) {
      if (name.search(avatarHairStyle[hairStyle]) < 0) {
        gltf.nodes[name]['visible'] = false
      }
      else {
        gltf.nodes[name]['visible'] = true
        if (name.search('hat') > -1) {
          if (name.search('_3') > -1) {
            gltf.nodes[name]['material'] = gltf.nodes[name]['material'].clone()
            gltf.nodes[name]['material']['color'].setHex(avatarHairColors[hairColor])
          }
        } else {
          if (hairStyle === 2) {
            const newMaterial = gltf.nodes['msm_hair_32_A'].material
            newMaterial.color.setHex(avatarHairColors[hairColor])
          } else {
            const newMaterial = gltf.nodes[name].material
            newMaterial.color.setHex(avatarHairColors[hairColor])
          }
        }
      }
    }
    if (name.search("msm_glasses") > -1) {
      if (name.search(avatarGlasses[glasses]) < 0) {
        gltf.nodes[name]['visible'] = false
      }
      else
        gltf.nodes[name]['visible'] = true
    }
    if (name.search("msm_facialHair_No") > -1) {
      gltf.nodes[name]['visible'] = false
      if (name === avatarBeardStyle[beardStyle]) {
        gltf.nodes[name]['visible'] = true
        gltf.nodes[name]['material'] = gltf.nodes[name]['material'].clone()
        gltf.nodes[name]['material']['color'].setHex(avatarHairColors[beardColor])
      }
    }
    //Skin Color Setting
    if (name === 'msm_head_main') {
      const newMaterial = gltf.nodes[name].material
      newMaterial.color.setHex(avatarSkinColors[skinColor])
    }
    //Top Setting
    if (name.search("msm_top_No") > -1) {
      gltf.nodes[name]['visible'] = false
      if (name.search(avatarTopStyle[topStyle]) > -1) {
        gltf.nodes[name]['visible'] = true
        if (name.search("_2") > -1) {
          gltf.nodes[name]['material'] = gltf.nodes[name]['material'].clone()
          gltf.nodes[name]['material']['color'].setHex(avatarTopColors[topColor])
        }
      }
    }
    //Trouser Setting
    if (name.search("msm_pants_No") > -1) {
      gltf.nodes[name]['visible'] = false
      if (name.search(avatarTrousersStyle[trousersStyle]) > -1) {
        gltf.nodes[name]['visible'] = true
        if (name.search("_1") > -1) {
          gltf.nodes[name]['material'] = gltf.nodes[name]['material'].clone()
          gltf.nodes[name]['material']['color'].setHex(avatarTopColors[trousersColor])
        }
      }
    }
    //Accessories Setting
    if (name.search("msm_bowtie") > -1 || name.search("msm_hairband") > -1 || name.search("msm_scarf") > -1) {
      gltf.nodes[name]['visible'] = false
      if (name.search(avatarAccessoriesStyle[accessoriesStyle]) > -1) {
        gltf.nodes[name]['visible'] = true
        if (name !== 'msm_hairband_B' && name !== 'msm_hairband_C' && name !== 'msm_scarf_A') {
          gltf.nodes[name]['material']['color'].setHex(avatarTopColors[accessoriesColor])
        }
      }
    }
    //Shoes Setting
    if (name.search("msm_shoes_No") > -1) {
      gltf.nodes[name]['visible'] = false
      if (name.search(avatarShoesStyle[shoesStyle]) > -1) {
        gltf.nodes[name]['visible'] = true
        if (name !== 'msm_shoes_No21') {
          gltf.nodes[name]['material'] = gltf.nodes[name]['material'].clone()
          gltf.nodes[name]['material']['color'].setHex(avatarTopColors[shoesColor])
        }
      }
    }
  })

  gltf.nodes.xiaomi_phone.visible = false

  const uiStep: number = useStore((s) => s.uiStep)
  const avatarRef: any = useRef()
  const modelRef: any = useRef()
  const controlRef: any = useRef()
  const { actions }: any = useAnimations(animations, modelRef)
  const [actionName, setAction] = useState({ action: 'Idle', during: false })
  const { forward, backward, left, right } = usePlayerControls()
  const { camera } = useThree()
  const startWorld: boolean = useStore((s) => s.startWorld)
  let playerPosition: any = useStore((s) => s.playerPosition)
  const joystickDistance: number = useStore((s) => s.joystickDistance)
  const joystickAngle: number = useStore((s) => s.joystickAngle)
  const emojiAnimation: string = useStore((s) => s.emojiAnimation)
  const playerCameraRotation: any = useStore((s) => s.playerCameraRotation)
  useEffect(() => {
    console.log('playerCameraRotation', playerCameraRotation)
    useStore.setState({ playerCameraRotation: playerCameraRotation })
  }, [playerCameraRotation])
  useEffect(() => {
    console.log('props.rotation', props.rotation)
  }, [props.rotation])
  useEffect(() => {
    if (props.avatarSetting) {
      controlRef.current.minPolarAngle = 0
    } else {
      controlRef.current.minPolarAngle = Math.PI / 2
    }
  }, [props.avatarSetting])

  useEffect(() => {
    // const v = new THREE.Vector3(-6, 1.5, 2.5)
    const v0 = new THREE.Vector3(-6, 0.7, 0)
    controlRef.current.target = v0
    camera.position.set(playerCameraRotation[0], playerCameraRotation[1], playerCameraRotation[2])
    // camera.position.set(-6, 1, 3)
    camera.lookAt(v0)
  }, [])

  useEffect(() => {
    if (emojiAnimation !== "Idle") {
      actions[emojiAnimation].reset().fadeIn(0.5).play()
      return () => actions[emojiAnimation].fadeOut(0.5)
    } else {
      actions[actionName.action].reset().fadeIn(0.5).play()
      return () => actions[actionName.action].fadeOut(0.5)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionName.action, emojiAnimation])

  useEffect(() => {
    if (emojiAnimation !== "Idle")
      return

    let newActionName: string
    if (forward || (joystickDistance > 0 && joystickAngle < 180))
      newActionName = "Run"
    else if (backward || (joystickDistance > 0 && joystickAngle > 180))
      newActionName = "WalkBackward"
    else if (!forward && !backward && (left || right || joystickAngle === 0 || joystickAngle === 180))
      newActionName = "Turn"
    else
      newActionName = "Idle"

    setAction({ action: newActionName, during: true })

    const l = joystickDistance * Math.cos(Math.PI * joystickAngle / 180) * 0.6
    if (left)
      controlRef.current.autoRotateSpeed = -50
    else if (right)
      controlRef.current.autoRotateSpeed = 50
    else if (joystickDistance && 90 !== joystickAngle && joystickAngle !== 270)
      controlRef.current.autoRotateSpeed = l
    else
      controlRef.current.autoRotateSpeed = 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forward, backward, left, right, joystickDistance, joystickAngle])

  useFrame(() => {
    if (startWorld && !props.avatarSetting) {
      const v1 = new THREE.Vector3(playerPosition.x, playerPosition.y - 0.13, playerPosition.z)
      avatarRef.current.position.lerp(v1, 0.7)
      gsap.to(controlRef.current.target, 0.5, { x: v1.x, y: v1.y + 1.7, z: v1.z })
      if (forward || backward || left || right || joystickDistance > 0) {
        if (emojiAnimation !== "Idle") return
        avatarRef.current.rotation.copy(camera.rotation)
      }
    } else if (props.avatarSetting) {
      const v1 = new THREE.Vector3(playerPosition.x, playerPosition.y - 0.13, playerPosition.z)
      avatarRef.current.position.lerp(v1, 0.7)
      gsap.to(controlRef.current.target, 0.5, { x: v1.x, y: v1.y + 1, z: v1.z })
    }
  })

  return (
    <>
      <OrbitControls
        ref={controlRef}
        autoRotate
        minDistance={2.5}
        maxDistance={3.5}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <mesh ref={avatarRef} visible={props.visible}  >
        <primitive object={gltf.scene} scale={props.scale} position={[0,0.3,0]} ref={modelRef} rotation={props.rotation} />
      </mesh>
    </>
  )
}
