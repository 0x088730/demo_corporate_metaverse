import useStore from "../helpers/store"

export default function RandomAvatar() {
  const hairStyle = Math.floor(Math.random() * 13) + 1
  const hairColor = Math.floor(Math.random() * 11)
  const glasses = Math.floor(Math.random() * 6)
  const beardStyle = Math.floor(Math.random() * 11)
  const beardColor = Math.floor(Math.random() * 11)
  const skinColor = Math.floor(Math.random() * 5)
  const topStyle= Math.floor(Math.random() * 5)
  const topColor = Math.floor(Math.random() * 11)
  const trousersStyle = Math.floor(Math.random() * 5)
  const trousersColor = Math.floor(Math.random() * 11)
  const accessoriesStyle = Math.floor(Math.random() * 6)
  const accessoriesColor = Math.floor(Math.random() * 11)
  const shoesStyle = Math.floor(Math.random() * 5)
  const shoesColor = Math.floor(Math.random() * 11)

  useStore.setState({ 
    hairStyle : hairStyle,
    hairColor : hairColor,
    glasses : glasses,
    beardStyle : beardStyle,
    beardColor : beardColor,
    skinColor : skinColor,
    topStyle : topStyle,
    topColor : topColor,
    trousersStyle : trousersStyle,
    trousersColor : trousersColor,
    accessoriesStyle : accessoriesStyle,
    accessoriesColor : accessoriesColor,
    shoesStyle : shoesStyle,
    shoesColor : shoesColor
  })
}