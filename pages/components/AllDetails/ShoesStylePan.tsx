import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const ShoesStylePan = () => {

  const shoesStyle:number = useStore((s) => s.shoesStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('shoesStyle', String(value));
    useStore.setState({ shoesStyle: value })
  }

  return (
    <>
      <ItemStyleElement index={0} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_01.e2a6f538.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_02.d89122e0.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_03.084b0617.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_04.d63e0489.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_05.20aafe3b.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={shoesStyle} url={'/assets/img/media/Thumb_Shoes_06.c145e9f8.png'} setIndex={setIndex}/>
    </>
  )
}

export default ShoesStylePan