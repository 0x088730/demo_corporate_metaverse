import '../styles/globals.scss'
import '../styles/animation.scss'
import type { AppProps } from 'next/app'
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.removeItem("hairStyle");
    localStorage.removeItem("hairColor");
    localStorage.removeItem("glasses");
    localStorage.removeItem("beardStyle");
    localStorage.removeItem("beardColor");
    localStorage.removeItem("skinColor");
    localStorage.removeItem("topStyle");
    localStorage.removeItem("topColor");
    localStorage.removeItem("trousersStyle");
    localStorage.removeItem("trousersColor");
    localStorage.removeItem("accessoriesStyle");
    localStorage.removeItem("accessoriesColor");
    localStorage.removeItem("shoesStyle");
    localStorage.removeItem("shoesColor");
    localStorage.removeItem("avatarName")
    console.log('removed')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp