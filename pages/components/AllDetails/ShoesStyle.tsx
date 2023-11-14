import useStore from "../../../helpers/store"
import ShoesColorPan from "./ShoesColorPan"
import ShoesStylePan from "./ShoesStylePan"

const ShoesStyle = () => {

  const createAvatarItem:number = useStore((s) => s.createAvatarItem)

  return (
    <>
      <div className="w-fit max-w-[90%] md:w-full md:max-w-full bg-white md:bg-transparent bg-opacity-20 rounded-[26px] overflow-hidden flex flex-col mx-auto" 
        style={{display:createAvatarItem===8?'block':'none'}}
      >        
        <div className="w-full overflow-scroll scrollbar-hide pt-4 md:pb-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px]">
          <div className="w-fit flex md:flex-wrap justify-between">
            <ShoesStylePan/>
          </div>
        </div>
        <div className="w-auto overflow-scroll scrollbar-hide py-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px] md:mt-2">
          <div className="w-fit flex md:flex-wrap justify-between">
            <ShoesColorPan/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoesStyle