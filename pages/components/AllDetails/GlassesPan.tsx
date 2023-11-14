import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const GlassesPan = () => {

  const glasses:number = useStore((s) => s.glasses)

  const setIndex = (value:number) =>{
    localStorage.setItem('glasses', String(value));
    useStore.setState({ glasses: value })
  }
  return (
    <>
      <ItemStyleElement index={0} current={glasses} url={'/assets/img/media/Thumb_Glasses_00.e9e313d0.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={glasses} url={'/assets/img/media/Thumb_Glasses_01.44bf1f98.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={glasses} url={'/assets/img/media/Thumb_Glasses_02.0d159048.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={glasses} url={'/assets/img/media/Thumb_Glasses_03.0003f62f.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={glasses} url={'/assets/img/media/Thumb_Glasses_04.a5772a7c.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={glasses} url={'/assets/img/media/Thumb_Glasses_05.472daca2.png'} setIndex={setIndex}/>
      <ItemStyleElement index={6} current={glasses} url={'/assets/img/media/Thumb_Glasses_06.d19ced10.png'} setIndex={setIndex}/>
    </>
  )
}

export default GlassesPan