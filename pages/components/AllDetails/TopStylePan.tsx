import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const TopStylePan = () => {

  const topStyle:number = useStore((s) => s.topStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('topStyle', String(value));
    useStore.setState({ topStyle: value })
  }

  return (
    <>
      <ItemStyleElement index={0} current={topStyle} url={'/assets/img/media/Thumb_Top_01.5fd540d9.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={topStyle} url={'/assets/img/media/Thumb_Top_02.6f884b29.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={topStyle} url={'/assets/img/media/Thumb_Top_03.b11d115f.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={topStyle} url={'/assets/img/media/Thumb_Top_04.0941254b.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={topStyle} url={'/assets/img/media/Thumb_Top_05.68d35031.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={topStyle} url={'/assets/img/media/Thumb_Top_06.dcf458b9.png'} setIndex={setIndex}/>
    </>
  )
}

export default TopStylePan