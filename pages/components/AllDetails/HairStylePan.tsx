import useStore from "../../../helpers/store"
import ItemStyleElement from "./Item/ItemStyleElement"

const HairStylePan = () => {
  const hairStyle:number = useStore((s) => s.hairStyle)

  const setIndex = (value:number) =>{
    localStorage.setItem('hairStyle', String(value));
    useStore.setState({ hairStyle: value })
  }

  return (
    <>
      
      <ItemStyleElement index={0} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_00.6eb5267c.png'} setIndex={setIndex}/>
      <ItemStyleElement index={1} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_02.bf01309c.png'} setIndex={setIndex}/>
      <ItemStyleElement index={2} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_03.a17c1adf.png'} setIndex={setIndex}/>
      <ItemStyleElement index={3} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_04.dbea93fe.png'} setIndex={setIndex}/>
      <ItemStyleElement index={4} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_05.c06c2c66.png'} setIndex={setIndex}/>
      <ItemStyleElement index={5} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_06.83aa1b9f.png'} setIndex={setIndex}/>
      <ItemStyleElement index={6} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_07.a557a664.png'} setIndex={setIndex}/>
      <ItemStyleElement index={7} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_08.0e571e69.png'} setIndex={setIndex}/>
      <ItemStyleElement index={8} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_09.e775aa40.png'} setIndex={setIndex}/>
      <ItemStyleElement index={9} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_10.b858071e.png'} setIndex={setIndex}/>
      <ItemStyleElement index={10} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_11.ee19a83c.png'} setIndex={setIndex}/>
      <ItemStyleElement index={11} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_12.adf037c9.png'} setIndex={setIndex}/>
      <ItemStyleElement index={12} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_15.eb0cb601.png'} setIndex={setIndex}/>
      <ItemStyleElement index={13} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_16.d60218dc.png'} setIndex={setIndex}/>
      <ItemStyleElement index={14} current={hairStyle} url={'/assets/img/media/Thumb_Hairstyle_17.f45cd1ca.png'} setIndex={setIndex}/>
      
    </>
  )
}

export default HairStylePan