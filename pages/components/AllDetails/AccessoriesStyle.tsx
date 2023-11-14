import useStore from "../../../helpers/store"
import AccessoriesColorPan from "./AccessoriesColorPan"
import AccessoriesStylePan from "./AccessoriesStylePan"

const AccessoriesStyle = () => {

  const createAvatarItem:number = useStore((s) => s.createAvatarItem)

  return (
    <>
      <div className="w-fit max-w-[90%] md:w-full md:max-w-full bg-white md:bg-transparent bg-opacity-20 rounded-[26px] overflow-hidden flex flex-col mx-auto" 
        style={{display:createAvatarItem===7?'block':'none'}}
      >        
        <div className="w-full overflow-scroll scrollbar-hide pt-4 md:pb-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px]">
          <div className="w-fit flex md:flex-wrap justify-between">
            <AccessoriesStylePan/>
          </div>
        </div>
        <div className="w-auto overflow-scroll scrollbar-hide py-4 px-2 relative md:bg-white md:bg-opacity-20 md:rounded-[32px] md:mt-2">
          <div className="w-fit flex md:flex-wrap justify-between">
            <AccessoriesColorPan/>
          </div>
        </div>        
      </div>
    </>
  )
}

export default AccessoriesStyle