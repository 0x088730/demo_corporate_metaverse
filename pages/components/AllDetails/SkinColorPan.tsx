import useStore from "../../../helpers/store"
import ItemColorElement from "./Item/ItemColorElement"

const SkinColorPan = () => {
  const colors = ['#f1d0c0', '#e6b8a3', '#bd8b6f', '#c7886a', '#9d714f', '#7a645c']

  const skinColor:number = useStore((s) => s.skinColor)

  const setIndex = (value:number) =>{
    localStorage.setItem('skinColor', String(value));
    useStore.setState({ skinColor: value })
  }

  return (
    <>
      <ItemColorElement index={0} current={skinColor} bkcolor={colors[0]} setIndex={setIndex}/>
      <ItemColorElement index={1} current={skinColor} bkcolor={colors[1]} setIndex={setIndex}/>
      <ItemColorElement index={2} current={skinColor} bkcolor={colors[2]} setIndex={setIndex}/>
      <ItemColorElement index={3} current={skinColor} bkcolor={colors[3]} setIndex={setIndex}/>
      <ItemColorElement index={4} current={skinColor} bkcolor={colors[4]} setIndex={setIndex}/>
      <ItemColorElement index={5} current={skinColor} bkcolor={colors[5]} setIndex={setIndex}/>
    </>
  )
}

export default SkinColorPan