import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const AccessoriesStylePan = () => {

  const accessoriesStyle:number = useStore((s) => s.accessoriesStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('accessoriesStyle', String(value));
    useStore.setState({ accessoriesStyle: value })
  }

  return (
    <>    
      <ItemStyleElement index={0} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_00.088a7318.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_01.e8d68229.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_02.212c2984.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_03.bbbcade2.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_04.8d202ade.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_05.f59411e6.png'} setIndex={setIndex}/>
      <ItemStyleElement index={6} current={accessoriesStyle} url={'/assets/img/media/Thumb_Accessories_06.0749f3de.png'} setIndex={setIndex}/>
    </>
  )
}

export default AccessoriesStylePan