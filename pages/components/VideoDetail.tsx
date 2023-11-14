import { useEffect, useRef, useState } from "react"
import useStore from "../../helpers/store"

const VideoDetail = () => {

  const video = useStore((s) => s.video)

  const changeShowState = ()=>{useStore.setState({ video: false });}

  useEffect(()=>{
    if(video){
      var vid:any = document.getElementById("videoDetail")
      vid.autoplay = true;
      vid.load()
    }
  }, [video])

  return (
    <>
      <div
        className="video-detail fixed top-0 left-0 w-screen h-screen bg-black z-20 pointer-events-auto"
        style={{display:video?'block':'none'}}
      >
        <div className="relative w-screen h-screen">
          <video id="videoDetail" className="w-screen h-screen" controls>
            <source src="/assets/media/K6S_KSP_fullscreen_3D.mp4" type="video/mp4"/>
          </video>

          <button
            className="absolute top-8 left-8 text-white text-center text-[18px] rounded-full bg-black bg-opacity-70 w-[30px] h-[30px]"
            onClick={()=>changeShowState()}
          >
            X
          </button>
        </div>
      </div>
    </>
  )
}

export default VideoDetail