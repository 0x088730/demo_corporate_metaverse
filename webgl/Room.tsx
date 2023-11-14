import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useTrimesh } from '@react-three/cannon'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import useStore from '../helpers/store'
import { useCursor } from '@react-three/drei'

const ObjMesh = (props:any) => {

  let vertices: ArrayLike<number>
  let indices: ArrayLike<number>

  if(props.geometry){
    vertices =props.geometry.attributes.position.array;
    indices = props.geometry.index.array;
  }
  const material=new THREE.MeshStandardMaterial({
    color: 0x00ff00, 
    transparent: true, opacity: 0.0
  });
  const [collisionRef]:any = useTrimesh(() => ({
    args: [vertices, indices],
    mass: 500.0,
    type: 'Static',
  }))

  return <mesh ref={collisionRef} geometry={props.geometry} material={material} />
}

const TVMesh3 = (props:any) => {

  const startWorld:boolean = useStore((s) => s.startWorld)

  const [video] = useState(
                    () => Object.assign(
                      document.createElement('video'), 
                      {
                        src: '/assets/media/new_video.mp4',
                        crossOrigin: 'Anonymous',
                        loop: true
                      }
                    )
                  )

  const repeat = new THREE.Vector2(1, -1)

  useEffect(() => {
    if(!startWorld) return
    video.muted = true
    video.autoplay = true
    video.play()
  }, [video, startWorld])

  const [hovered, setHover] = useState(false)
  useCursor(hovered)

  return  <mesh
            geometry={props.geometry}
            position={props.position}
            visible={props.visible}
            onClick={() => useStore.setState({ popup: 3 })}
            onPointerOver={() =>setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <meshBasicMaterial toneMapped = {false}>
              <videoTexture
                attach="map"
                args={[video]}
                encoding={THREE.sRGBEncoding}
                wrapT={THREE.RepeatWrapping}
                repeat={repeat}
              />
            </meshBasicMaterial>
          </mesh>
}

export default function Room(props:any) {

  const gltf:any = useLoader(GLTFLoader, '/assets/models/web-vr-room/room.glb', (loader:any) => {
                const dracoLoader = new DRACOLoader()
                dracoLoader.setDecoderPath('assets/draco/')
                loader.setDRACOLoader(dracoLoader)
              })
  
  gltf.scene.children.forEach((object: any, i: any) => {
    const name = object.name
    if (name.search("collision_mesh")>-1){
      object['material']['opacity']=0.0
      object['material']['transparent']=true
    }
  })
  
  return (
    <>
      {
        Object.entries(gltf.nodes).map(([name, obj])=>{
          if (name.search("collision_mesh")>-1 ){
            const object:any = obj
            const geometry = object.geometry            
            return <ObjMesh key={name} geometry={geometry}/>
          }
        })
      }

      <primitive object={gltf.scene} position={props.position} scale={props.scale} visible={props.visible}/>

      {
        Object.entries(gltf.nodes).map(([name, obj])=>{
          if (name === 'hub04_content_screen'){
            const object:any = obj      
            return <TVMesh3 key={name} geometry={object.geometry} position = {object.position} visible={props.visible}/>
          }
        })
      }
    </>
  )
}