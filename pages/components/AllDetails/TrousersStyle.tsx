import useStore from "../../../helpers/store"
import TrousersColorPan from "./TrousersColorPan"
import TrousersStylePan from "./TrousersStylePan"

const TrousersStyle = () => {

  const createAvatarItem:number = useStore((s) => s.createAvatarItem)

  return (
    <>
      <div className="w-fit max-w-[90%] md:w-full md:max-w-full bg-white md:bg-transparent bg-opacity-20 rounded-[26px] overflow-hidden flex flex-col mx-auto" 
        style={{display:createAvatarItem===6?'block':'none'}}
      >        
        <div className="w-full overflow-scroll scrollbar-hide pt-4 md:pb-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px]">
          <div className="w-fit flex md:flex-wrap justify-between">
            <TrousersStylePan/>
          </div>
        </div>
        <div className="w-auto overflow-scroll scrollbar-hide py-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px] md:mt-2">
          <div className="w-fit flex md:flex-wrap justify-between">
            <TrousersColorPan/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrousersStyle