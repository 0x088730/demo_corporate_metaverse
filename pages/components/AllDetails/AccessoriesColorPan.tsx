import useStore from "../../../helpers/store"
import ItemColorElement from "./Item/ItemColorElement"

const AcessoriesColorPan = () => {
  const colors = [
                  'rgb(0, 0, 0)', 'rgb(61, 61, 61)', 'rgb(134, 226, 193)', 
                  'rgb(255, 255, 255)', 'rgb(16, 16, 95)', 'rgb(33, 62, 212)',
                  'rgb(176, 26, 10)', 'rgb(26, 208, 90)', 'rgb(255, 209, 86)',
                  'rgb(255, 75, 55)', 'rgb(167, 17, 220)', 'rgb(237, 52, 94)'
                ]

  const accessoriesColor:number = useStore((s) => s.accessoriesColor)

  const setIndex = (value:number) =>{
    localStorage.setItem('accessoriesColor', String(value));
    useStore.setState({ accessoriesColor: value })
  }

  return (
    <>
      <ItemColorElement index={0} current={accessoriesColor} bkcolor={colors[0]} setIndex={setIndex}/>
      <ItemColorElement index={1} current={accessoriesColor} bkcolor={colors[1]} setIndex={setIndex}/>
      <ItemColorElement index={2} current={accessoriesColor} bkcolor={colors[2]} setIndex={setIndex}/>
      <ItemColorElement index={3} current={accessoriesColor} bkcolor={colors[3]} setIndex={setIndex}/>
      <ItemColorElement index={4} current={accessoriesColor} bkcolor={colors[4]} setIndex={setIndex}/>
      <ItemColorElement index={5} current={accessoriesColor} bkcolor={colors[5]} setIndex={setIndex}/>
      <ItemColorElement index={6} current={accessoriesColor} bkcolor={colors[6]} setIndex={setIndex}/>
      <ItemColorElement index={7} current={accessoriesColor} bkcolor={colors[7]} setIndex={setIndex}/>
      <ItemColorElement index={8} current={accessoriesColor} bkcolor={colors[8]} setIndex={setIndex}/>
      <ItemColorElement index={9} current={accessoriesColor} bkcolor={colors[9]} setIndex={setIndex}/>
      <ItemColorElement index={10} current={accessoriesColor} bkcolor={colors[10]} setIndex={setIndex}/>
      <ItemColorElement index={11} current={accessoriesColor} bkcolor={colors[11]} setIndex={setIndex}/>
    </>
  )
}

export default AcessoriesColorPan