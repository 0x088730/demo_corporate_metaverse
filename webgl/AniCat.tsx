import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { Html } from '@react-three/drei'
import useStore from "../helpers/store"
import { useAnimations } from '@react-three/drei'

export default function AniCat(props: any) {

  const [showPhone, setShowPhone] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  const gltf: any = useLoader(GLTFLoader, '/assets/models/phone/AniCat.glb', (loader: any) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('assets/draco/')
    loader.setDRACOLoader(dracoLoader)
  })

  const animations = gltf.animations
  console.log(animations)

  gltf.castShadow = true;
  gltf.scene.castShadow = true;

  const { camera } = useThree()
  const phoneRef: any = useRef()
  const catRef: any = useRef()
  const { actions }: any = useAnimations(animations, catRef)


  useFrame((state) => {
    const pos = camera.position
    // const t = state.clock.getElapsedTime()
    // phoneRef.current.position.y = Math.sin(t)*0.1
    const distance = Math.pow((pos.x - props.position[0]), 2) + Math.pow(pos.z - props.position[2], 2)
    if (distance < 60) {
      if (!showPhone) setShowPhone(true)
      if (!playMusic) setPlayMusic(true)
    } else {
      if (showPhone) setShowPhone(false)
      if (playMusic) setPlayMusic(false)
    }
  })

  useEffect(() => {
    console.log(actions)
    actions["All Animations"].reset().fadeIn(0.5).play()
    if (playMusic) {
      var vid: any = document.getElementById("audioDetail")
      vid.autoplay = true;
      vid.loop = true;
      vid.load()
    }
  }, [playMusic])
  return (
    <>
      <mesh ref={phoneRef} visible={props.visible}>
        <primitive ref={catRef} object={gltf.scene} position={props.position} scale={props.scale} rotation={[0.0, -Math.PI / 4, 0]}>
          <Html position={[0, 0.18, 0]} style={{ display: showPhone ? 'block' : 'none' }}>
            <div style={{ transform: 'translate3d(-50%, -207%, 0px)' }}>
              <div
                style={{
                  backgroundImage: 'linear-gradient(274.66deg, rgb(234, 91, 12) 0.38%, rgb(245, 161, 85) 97.04%)',
                  padding: '8px',
                  color: 'white',
                  borderRadius: '18px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  cursor: 'pointer'
                }}
                onClick={(e) => useStore.setState({ popup: 1 })}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%', height: '65%' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 8a3 3 0 013-3h6.195a1 1 0 110 2H6a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 112 0v5a3 3 0 01-3 3H6a3 3 0 01-3-3V8z" fill="#fff"></path>
                    <path d="M15 3a1 1 0 100 2V3zm5 1h1a1 1 0 00-1-1v1zm-1 5a1 1 0 102 0h-2zm-6.707 1.293a1 1 0 001.414 1.414l-1.414-1.414zM15 5h5V3h-5v2zm4-1v5h2V4h-2zm.293-.707l-7 7 1.414 1.414 7-7-1.414-1.414z" fill="#fff"></path>
                  </svg>
                </div>
                <audio autoPlay loop muted={playMusic ? false : true} id="audioDetail">
                  <source src="/assets/media/Spring-Flowers.mp3" type="audio/ogg" />
                </audio>
              </div>
            </div>
          </Html>
        </primitive>
      </mesh>
    </>
  )
}
