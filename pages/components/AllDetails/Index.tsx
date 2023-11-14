import AccessoriesStyle from "./AccessoriesStyle"
import BeardStyle from "./BeardStyle"
import Glasses from "./Glasses"
import HairStyle from "./HairStyle"
import ShoesStyle from "./ShoesStyle"
import SkinColor from "./SkinColor"
import TopStyle from "./TopStyle"
import TrousersStyle from "./TrousersStyle"

const AllDetails = () => {

  return (
    <div className="absolute bottom-[170px] md:bottom-[2000px] md:top-24 left-0 md:left-[280px] w-screen md:w-[200px] ">
      <div className="relative md:h-auto pointer-events-auto">
        <HairStyle/>
        <Glasses/>
        <BeardStyle/>
        <SkinColor/>
        <TopStyle/>
        <TrousersStyle/>
        <AccessoriesStyle/>
        <ShoesStyle/>
      </div>
    </div>
  )
}

export default AllDetails
