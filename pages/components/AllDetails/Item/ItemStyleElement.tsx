import { useRef, useState } from "react"

const CheckSVG = () => {  

  return (
    <div className="absolute right-0 bottom-0 bg-[#fd592c] rounded-full w-[35%] h-[35%] flex justify-center items-center shadow-md">
      <svg width="12" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.11 5.107L4.43 8.07 9.999 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  )
}


const ItemStyleElement = (props:any) => {
  return (
    <>
      <div className="px-2 md:py-2">
        <div
          className="relative w-[40px] h-[40px] rounded-full mx-auto cursor-pointer bg-contain bg-no-repeat" 
          style={{backgroundImage:`url(${props.url})`}}
          onClick={()=>props.setIndex(props.index)}
        >
          {props.index===props.current?<CheckSVG/>:<></>}
        </div>
      </div>
    </>
  )
}

export default ItemStyleElement