import useStore from "../../../helpers/store"
import ItemColorElement from "./Item/ItemColorElement"

const ShoesColorPan = () => {
  const colors = [
                  'rgb(0, 0, 0)', 'rgb(61, 61, 61)', 'rgb(134, 226, 193)', 
                  'rgb(255, 255, 255)', 'rgb(16, 16, 95)', 'rgb(33, 62, 212)',
                  'rgb(176, 26, 10)', 'rgb(26, 208, 90)', 'rgb(255, 209, 86)',
                  'rgb(255, 75, 55)', 'rgb(167, 17, 220)', 'rgb(237, 52, 94)'
                ]

  const shoesColor:number = useStore((s) => s.shoesColor)

  const setIndex = (value:number) =>{
    localStorage.setItem('shoesColor', String(value));
    useStore.setState({ shoesColor: value })
  }

  return (
    <>
      <ItemColorElement index={0} current={shoesColor} bkcolor={colors[0]} setIndex={setIndex}/>
      <ItemColorElement index={1} current={shoesColor} bkcolor={colors[1]} setIndex={setIndex}/>
      <ItemColorElement index={2} current={shoesColor} bkcolor={colors[2]} setIndex={setIndex}/>
      <ItemColorElement index={3} current={shoesColor} bkcolor={colors[3]} setIndex={setIndex}/>
      <ItemColorElement index={4} current={shoesColor} bkcolor={colors[4]} setIndex={setIndex}/>
      <ItemColorElement index={5} current={shoesColor} bkcolor={colors[5]} setIndex={setIndex}/>
      <ItemColorElement index={6} current={shoesColor} bkcolor={colors[6]} setIndex={setIndex}/>
      <ItemColorElement index={7} current={shoesColor} bkcolor={colors[7]} setIndex={setIndex}/>
      <ItemColorElement index={8} current={shoesColor} bkcolor={colors[8]} setIndex={setIndex}/>
      <ItemColorElement index={9} current={shoesColor} bkcolor={colors[9]} setIndex={setIndex}/>
      <ItemColorElement index={10} current={shoesColor} bkcolor={colors[10]} setIndex={setIndex}/>
      <ItemColorElement index={11} current={shoesColor} bkcolor={colors[11]} setIndex={setIndex}/>
    </>
  )
}

export default ShoesColorPan