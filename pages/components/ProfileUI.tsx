import { useRouter } from "next/router"
import { useEffect } from "react"
import useStore from "../../helpers/store"
import AllDetails from "./AllDetails/Index"
import RandomAvatar from "../../webgl/RandomAvatar"

const Item = (props:any) => {
  const createAvatarItem:number = useStore((s) => s.createAvatarItem)
  return(
    <>
      <div className="customize-avatar-item" onClick={()=>useStore.setState({ createAvatarItem: props.item })}>
        <div className={createAvatarItem===props.item?"item-bkground selected-item":"item-bkground"}/>
        <div className="relative w-[40px] mr-[10px]">
          <img src={props.url} className="w-[40px] h-[40px] rounded-full"/>
        </div>
        <span className={createAvatarItem===props.item?"item-text selected-item-text":"item-text"}>{props.text}</span>
      </div>
    </>
  )
}

const ProfileUI = () => {

  const uiStep:number = useStore((s) => s.uiStep)
  const hairStyle:number = useStore((s) => s.hairStyle)
  const hairColor:number = useStore((s) => s.hairColor)
  const glasses:number = useStore((s) => s.glasses)
  const beardStyle:number = useStore((s) => s.beardStyle)
  const beardColor:number = useStore((s) => s.beardColor)
  const skinColor:number = useStore((s) => s.skinColor)
  const topStyle:number = useStore((s) => s.topStyle)
  const topColor:number = useStore((s) => s.topColor)
  const trousersStyle:number = useStore((s) => s.trousersStyle)
  const trousersColor:number = useStore((s) => s.trousersColor)
  const accessoriesStyle:number = useStore((s) => s.accessoriesStyle)
  const accessoriesColor:number = useStore((s) => s.accessoriesColor)
  const shoesStyle:number = useStore((s) => s.shoesStyle)
  const shoesColor:number = useStore((s) => s.shoesColor)

  useEffect(()=>{    
    if(typeof localStorage !== 'undefined'){
      console.log('prfoleUI useEffect')
    }
  },[])  

  const moveShowroom = () => {
    localStorage.setItem('hairStyle', String(hairStyle));
    localStorage.setItem('hairColor', String(hairColor));
    localStorage.setItem('glasses', String(glasses));
    localStorage.setItem('beardStyle', String(beardStyle));
    localStorage.setItem('beardColor', String(beardColor));
    localStorage.setItem('skinColor', String(skinColor));
    localStorage.setItem('topStyle', String(topStyle));
    localStorage.setItem('topColor', String(topColor));
    localStorage.setItem('trousersStyle', String(trousersStyle));
    localStorage.setItem('trousersColor', String(trousersColor));
    localStorage.setItem('accessoriesStyle', String(accessoriesStyle));
    localStorage.setItem('accessoriesColor', String(accessoriesColor));
    localStorage.setItem('shoesStyle', String(shoesStyle));
    localStorage.setItem('shoesColor', String(shoesColor));
    useStore.setState({uiStep: 3})
  }

  return (
    <>
      <div className="profile-ui absolute top-0 left-0 h-screen" style={{display:uiStep===2?'block':'none'}}>

        <div className="absolute top-0 left-0 w-screen">
          <div className="flex w-screen justify-center">
            <div className="p-4">
              {/* <div className="text-gray-300 text-[20px] mt-4 text-center">
                Creating Avatar
              </div> */}
              <div className="text-black text-[14px] mt-2.5 text-center md:hidden">
                Slide right/left to view model option setup
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute top-24 left-0 md:left-8 md:bottom-8 px-4 md:px-0 w-screen md:w-auto pointer-events-auto">
          <div className="relative w-full md:w-[230px] md:rounded-[32px] md:bg-white md:bg-opacity-20 overflow-x-scroll  md:h-full px-4">
            <div className="w-fit">
              <div className="relative w-fit md:h-[100%] text-black flex md:inline-block justify-between md:pt-4 pointer-events-auto">

                <div className="customize-avatar-item" onClick={()=>{
                  useStore.setState({ createAvatarItem: 0});
                  RandomAvatar();
                }}>
                  <div className="item-random">
                    <img src="/assets/img/media/icon_dice.d11ea7d7.png" className="w-[40px] h-[40px] rounded-full"/>
                  </div>
                  <span className="leading-[40px] w-[120px] md:w-[140px] font-bold">Surprise ME</span>
                </div>

                <Item item={1} url={'/assets/img/media/icon_hair.25a16a8e.png'} text='HairStyle'/>
                <Item item={2} url={'/assets/img/media/icon_glasses.3c79d8e2.png'} text='Glasses'/>
                <Item item={3} url={'/assets/img/media/icon_facial_details.e01f385e.png'} text='Beard'/>
                <Item item={4} url={'/assets/img/media/icon_skin.48a42311.png'} text='SkinColor'/>
                <Item item={5} url={'/assets/img/media/icon_top.fa8f3f41.png'} text='Top'/>
                <Item item={6} url={'/assets/img/media/icon_bottom.afc8a5cf.png'} text='Trousers'/>
                <Item item={7} url={'/assets/img/media/icon_accesoires.20a2f591.png'} text='Accessories'/>
                <Item item={8} url={'/assets/img/media/icon_shoes.c3c53bfd.png'} text='Shoes'/>
              </div>
            </div>

          </div>
        </div>
        
        <AllDetails/>

        <div className="absolute left-0 bottom-24 md:bottom-16 w-screen">
          <div className="w-screen flex justify-center">
            <div className="hidden md:block">
              <button className="relative w-[114px] h-[114px] flex justify-center items-center pointer-events-auto" onClick={()=>moveShowroom()}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M101.326 12.7015C90.7604 2.17558 75.567 1 57.0034 1C38.4398 1 23.1989 2.18918 12.6328 12.7423C2.0668 23.2954 1 38.4828 1 57.0544C1 75.6259 2.07359 90.8202 12.6396 101.38C23.2057 111.94 38.4126 113 57.0034 113C75.5942 113 90.8011 111.933 101.367 101.38C111.933 90.827 113 75.6259 113 57.0544C113 38.4828 111.913 23.2478 101.326 12.7015Z" fill="url(#paint0_radial_576_1642)" fillOpacity="0.1"/>
                    <path d="M101.679 12.3473C90.9484 1.65715 75.5433 0.5 57.0034 0.5C38.4634 0.5 23.0104 1.67074 12.2795 12.3885C1.54728 23.1076 0.5 38.5102 0.5 57.0544C0.5 75.5988 1.55415 91.0079 12.2862 101.734C23.0182 112.459 38.4403 113.5 57.0034 113.5C75.5667 113.5 90.9885 112.453 101.721 101.734C112.453 91.0147 113.5 75.5984 113.5 57.0544C113.5 38.51 112.432 23.0595 101.679 12.3473Z" stroke="white" strokeOpacity="0.6"/>
                    <defs>
                      <radialGradient id="paint0_radial_576_1642" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57 57) rotate(90) scale(56)">
                        <stop offset="0.709214" stopColor="white" stopOpacity="0.1"/>
                        <stop offset="1" stopColor="white"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-white text-[30px]">{'>'}</div>
              </button>
            </div>

            <div className="md:hidden pb-8">              
              <button className="text-white text-[20px] font-medium underline underline-offset-1 pointer-events-auto" onClick={()=>moveShowroom()}>
                Continue to the showroom
              </button>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileUI
