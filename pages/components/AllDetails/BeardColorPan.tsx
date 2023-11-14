import useStore from "../../../helpers/store"
import ItemColorElement from "./Item/ItemColorElement"

const BeardColorPan = () => {
  const colors = [
                  'rgb(61, 54, 55)', 'rgb(108, 95, 91)', 'rgb(161, 128, 102)', 'rgb(173, 173, 173)', 
                  'rgb(228, 228, 228)', 'rgb(255, 255, 255)', 'rgb(228, 82, 65)', 'rgb(212, 164, 93)',
                  'rgb(255, 214, 103)', 'rgb(122, 30, 30)', 'rgb(50, 172, 175)', 'rgb(102, 45, 245)'
                ]

  const beardColor:number = useStore((s) => s.beardColor)

  const setIndex = (value:number) =>{
    localStorage.setItem('beardColor', String(value));
    useStore.setState({ beardColor: value })
  }

  return (
    <>
      <ItemColorElement index={0} current={beardColor} bkcolor={colors[0]} setIndex={setIndex}/>
      <ItemColorElement index={1} current={beardColor} bkcolor={colors[1]} setIndex={setIndex}/>
      <ItemColorElement index={2} current={beardColor} bkcolor={colors[2]} setIndex={setIndex}/>
      <ItemColorElement index={3} current={beardColor} bkcolor={colors[3]} setIndex={setIndex}/>
      <ItemColorElement index={4} current={beardColor} bkcolor={colors[4]} setIndex={setIndex}/>
      <ItemColorElement index={5} current={beardColor} bkcolor={colors[5]} setIndex={setIndex}/>
      <ItemColorElement index={6} current={beardColor} bkcolor={colors[6]} setIndex={setIndex}/>
      <ItemColorElement index={7} current={beardColor} bkcolor={colors[7]} setIndex={setIndex}/>
      <ItemColorElement index={8} current={beardColor} bkcolor={colors[8]} setIndex={setIndex}/>
      <ItemColorElement index={9} current={beardColor} bkcolor={colors[9]} setIndex={setIndex}/>
      <ItemColorElement index={10} current={beardColor} bkcolor={colors[10]} setIndex={setIndex}/>
      <ItemColorElement index={11} current={beardColor} bkcolor={colors[11]} setIndex={setIndex}/>
    </>
  )
}

export default BeardColorPan