import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const BeardStylePan = () => {

  const beardStyle:number = useStore((s) => s.beardStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('beardStyle', String(value));
    useStore.setState({ beardStyle: value })
  }

  return (
    <>
      <ItemStyleElement index={0} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_00.11404728.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_01.f22f481a.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_02.931881af.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_03.af912969.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_04.f0e26798.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_05.83ef7ff7.png'} setIndex={setIndex}/>
      <ItemStyleElement index={6} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_06.45fa5230.png'} setIndex={setIndex}/>
      <ItemStyleElement index={7} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_07.bc71d033.png'} setIndex={setIndex}/>
      <ItemStyleElement index={8} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_08.97da51d4.png'} setIndex={setIndex}/>
      <ItemStyleElement index={9} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_09.0067ab56.png'} setIndex={setIndex}/>
      <ItemStyleElement index={10} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_10.b149367e.png'} setIndex={setIndex}/>
      <ItemStyleElement index={11} current={beardStyle} url={'/assets/img/media/Thumb_Facial_Hair_11.1fe6c6cf.png'} setIndex={setIndex}/>      
    </>
  )
}

export default BeardStylePan