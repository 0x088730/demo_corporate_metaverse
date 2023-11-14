import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, useCursor} from '@react-three/drei'
import useStore from "../helpers/store"
import * as THREE from 'three'
import { PositionalAudio } from '@react-three/drei'
import { MeshStandardMaterial, TextureLoader } from 'three'

export default function VideoBoard(props:any) {

  const startWorld:boolean = useStore((s) => s.startWorld)
  const audioRef:any = useRef()
  const buttonRef:any = useRef()
  const {camera} = useThree()
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/assets/media/opening_vid_demo_600_338.mp4', crossOrigin: 'Anonymous', loop: true }))
  const buttonTexture = useLoader(TextureLoader, '/assets/img/playbutton.png')
  const [hovered, setHover] = useState(false)
  const [distance, setDistance] = useState({distance:100})

  useCursor(hovered)
  
  useEffect(() => {
    video.muted = true
    video.autoplay = true
    video.play()
  }, [video])

  useEffect(() => {
    if(!startWorld) return
    audioRef.current.setVolume(0.3)
    audioRef.current.play()
  }, [startWorld])

  useFrame(() => {
    const v = new THREE.Vector3(6.2, 3.35, -17.5)
    const _distance = camera.position.distanceTo(v)
    distance.distance = _distance
    if (_distance>15){
      if(audioRef.current) audioRef.current.setVolume(0.3)
      buttonRef.current.visible = false
    }
    else{
      buttonRef.current.visible = true
      if(audioRef.current) audioRef.current.setVolume(1)
    }
  })
  return (
    <>
      <group 
        position={[6.2, 3.35, -17.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={[1.3, 1.15, 1.15]}
        visible={props.visible}
      >
        <mesh >
          <planeGeometry args={[1280*0.008, 720*0.008]}/>
          <meshBasicMaterial toneMapped = {false}>
            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
          </meshBasicMaterial>
        </mesh>
        {
          <mesh position={[0,0,-0.11]}>
            <boxGeometry args={[1280*0.008+0.4, 720*0.008+0.4, 0.2]}/>
            <meshBasicMaterial color="#99ffcc" side={THREE.DoubleSide}/>
          </mesh>
        }

        <PositionalAudio loop url="/assets/media/xiaomi-ambient-music_final.mp3" distance={30} ref={audioRef}/>

        <mesh
          ref={buttonRef}
          position={[0, 0, 0.01]}
          scale={[1.5, 1.5, 1.5]}
          onClick={() => {
            if(distance.distance<23)
              useStore.setState({ popup: 2 })
          }}
          onPointerOver={() => (distance.distance<23 && setHover(true))}          
          onPointerOut={() => (setHover(false))}
        >
          <planeGeometry/>
          <meshBasicMaterial map={buttonTexture} transparent={true} alphaTest={0.2} color={'white'} />
        </mesh>
      </group>
    </>
  )
}
