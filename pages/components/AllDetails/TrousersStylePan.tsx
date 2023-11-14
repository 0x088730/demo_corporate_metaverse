import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const TrousersStylePan = () => {

  const trousersStyle:number = useStore((s) => s.trousersStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('trousersStyle', String(value));
    useStore.setState({ trousersStyle: value })
  }

  return (
    <>
      <ItemStyleElement index={0} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_01.27010266.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_02.358370fc.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_03.a847265a.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_04.cc76e3d5.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_05.2ef47208.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={trousersStyle} url={'/assets/img/media/Thumb_Bottom_06.73ef0bce.png'} setIndex={setIndex}/>
    </>
  )
}

export default TrousersStylePan