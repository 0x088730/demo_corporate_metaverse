import type { NextPage } from "next";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";

import useStore from '../helpers/store';

import { Environment, Html, useProgress, Loader } from "@react-three/drei";
// import CustomLoader from './components/CustomLoader'
import FirstUI from "./components/FirstUI";
import InputNameUI from "./components/InputNameUI";
import { Canvas } from "@react-three/fiber";
import SkyBox from "../webgl/SkyBox";
import { Physics } from "@react-three/cannon";
import Room from "../webgl/Room";
import PlayerDesktop from "../webgl/PlayerDesktop";
import Phone from "../webgl/Phone";
import AniCat from "../webgl/AniCat";
import AvatarPlayer from "../webgl/AvatarPlayer";
import ProfileUI from "./components/ProfileUI";
import PlayerIntroduce from "./components/PlayerIntroduce";
import VirtualWorldUI from "./components/VirtualWorldUI";
import VideoDetail from "./components/VideoDetail";
import Phone2 from "../webgl/Phone2";
import VideoBoard from "../webgl/VideoBoard";
import PopupUI1 from "./components/PopupUI1";
import PopupUI2 from "./components/PopupUI2";
import PopupUI3 from "./components/PopupUI3";
import PopupUI4 from "./components/PopupUI4";
import { useRouter } from "next/router";
import PopupUI5 from "./components/PopupUI5";
import Link from 'next/link'

function loadStorage() {
  if (localStorage.getItem("hairStyle") !== null) {
    const hairStyle = Number(localStorage.getItem("hairStyle"));
    const hairColor = Number(localStorage.getItem("hairColor"));
    const glasses = Number(localStorage.getItem("glasses"));
    const beardStyle = Number(localStorage.getItem("beardStyle"));
    const beardColor = Number(localStorage.getItem("beardColor"));
    const skinColor = Number(localStorage.getItem("skinColor"));
    const topStyle = Number(localStorage.getItem("topStyle"));
    const topColor = Number(localStorage.getItem("topColor"));
    const trousersStyle = Number(localStorage.getItem("trousersStyle"));
    const trousersColor = Number(localStorage.getItem("trousersColor"));
    const accessoriesStyle = Number(localStorage.getItem("accessoriesStyle"));
    const accessoriesColor = Number(localStorage.getItem("accessoriesColor"));
    const shoesStyle = Number(localStorage.getItem("shoesStyle"));
    const shoesColor = Number(localStorage.getItem("shoesColor"));

    useStore.setState({
      hairStyle: hairStyle,
      hairColor: hairColor,
      glasses: glasses,
      beardStyle: beardStyle,
      beardColor: beardColor,
      skinColor: skinColor,
      topStyle: topStyle,
      topColor: topColor,
      trousersStyle: trousersStyle,
      trousersColor: trousersColor,
      accessoriesStyle: accessoriesStyle,
      accessoriesColor: accessoriesColor,
      shoesStyle: shoesStyle,
      shoesColor: shoesColor,
      uiStep: 3,
    });
  } else if (localStorage.getItem("avatarName") !== null) {
    const name = String(localStorage.getItem("avatarName"));
    useStore.setState({ name: name, uiStep: 2 });
  }
}

const Loading = (props: any) => {
  const [show, setShow] = useState("block");
  const [percent, setPercent] = useState(0);
  let intervalId: any;

  const increasePercent = () => {
    const delta = Math.floor(Math.random() * 5);
    setPercent((percent) => (percent + delta > 100 ? 100 : percent + delta));
  };
  useEffect(() => {
    intervalId = setInterval(increasePercent, 300);
  }, []);

  useEffect(() => {
    console.log(percent);
    if (percent == 100) {
      clearInterval(intervalId);
      setShow("none");
    }
  }, [percent]);
  return (
    <div className="loader" style={{ display: show }}>
      <div className="loader_spinner">
        <div className="loader_ring1" />
        <div className="loader_ring2" />
        <div className="loader_ring3" />
      </div>
      <div className="loader_text">{percent} %</div>
      {/* <div className="loader_text">Loading ...</div> */}
    </div>
  );
};

const Home: NextPage = () => {
  const router = useRouter();
  const date = new Date();
  const mode =
    router.query["mode"] +
    `?${date.getFullYear()}${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    }`;

  useEffect(() => {
    loadStorage();
  }, []);

  useEffect(() => {
    // The counter changed!
    console.log('router.query', router.query)
    const goto = router.query.goto;
    switch (goto) {
      case 'lobby':
        useStore.setState({ goto: 'lobby' })
        console.log('lobby')
        useStore.setState({ playerCameraRotation: [-6, 1, 3] })
        useStore.setState({ playerInitialPosition: [-6, 0, 0] })
        break;
      case 'bigscreen':
        console.log('bigscreen')
        useStore.setState({ goto: 'bigscreen' })
        useStore.setState({ playerCameraRotation: [-6, 1, 3] })
        useStore.setState({ playerInitialPosition: [1.8930402994155884, -1.6213771104812622, -10.819884300231934] })
        break;
      case 'stage':
        console.log('stage')
        useStore.setState({ goto: 'stage' })
        useStore.setState({ playerCameraRotation: [-6, 6, 3] })
        useStore.setState({ playerInitialPosition: [-32.26596450805664, -1.7329879999160767, -18.50287437438965] })
        break;

      default:
        break;
    }
  }, [router.query.goto])

  const uiStep: number = useStore((s) => s.uiStep);
  const goto: string = useStore((s) => s.goto);

  useEffect(() => {
    console.log('---------------', goto)
  }, [goto])

  const getPlayerRotation = (goto_: string) => {
    let angle;
    switch (goto_) {
      case 'lobby':
        angle = Math.PI
        break;
      case 'bigscreen':
        angle = Math.PI / 0.37
        break;
      case 'stage':
        angle = Math.PI / 0.75
        break;
      case '':
        angle = Math.PI
        break;

      default:
        break;
    }
    return angle
  }

  return (
    <main
      className="w-screen h-screen"
      style={{
        backgroundImage: "url('assets/img/media/xiaomi_background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#5ea8f1",
      }}
    >
      <Head>
        <title>Web Showroom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="canvas-container" className="w-screen h-screen">
        <Canvas>
          <Environment near={1} far={1000} resolution={256} preset="night" />
          <ambientLight intensity={0.3} color={"#ffddcc"} />
          <Suspense fallback={null}>
            <Physics gravity={[0, -65, 0]}>
              <Room visible={uiStep === 4 ? true : false} />
              <PlayerDesktop />
              <Phone
                position={[-1.7, -0.7, -22.0]}
                rotation={[0, 2.5, 0]}
                scale={[15, 15, 15]}
                visible={uiStep === 4 ? true : false}
              />
              <AniCat
                position={[-4.7, -1.7, -22.0]}
                rotation={[0, 2.5, 0]}
                scale={[3, 3, 3]}
                visible={uiStep === 4 ? true : false}
              />
              <VideoBoard visible={uiStep === 4 ? true : false} />

              <Phone2
                position={[-12.4, -1.2, -30.7]}
                scale={[15, 15, 15]}
                visible={uiStep === 4 ? true : false}
              />

              <AvatarPlayer
                position={[-6, -0.13, 0]}
                // rotation={[0, uiStep === 2 ? 0 : Math.PI/0.75, 0]}
                rotation={[0, uiStep === 2 ? 0 : getPlayerRotation(goto), 0]}
                scale={[1, 1, 1]}
                visible={uiStep === 2 || uiStep === 4 ? true : false}
                avatarSetting={uiStep === 2 ? true : false}
              />
            </Physics>
            <SkyBox visible={uiStep === 4 ? true : false} />
          </Suspense>
        </Canvas>
        <VirtualWorldUI
          show={uiStep === 4 ? "block" : "none"}
          opacity={uiStep === 4 ? 1 : 0}
        />
      </div>

      <div
        className="dom-elements absolute top-0 left-0 w-screen h-screen overflow-hidden z-10 pointer-events-none"
        style={{ display: uiStep < 4 ? "block" : "none" }}
      >
        <FirstUI />
        <InputNameUI />
        <ProfileUI />
        <PlayerIntroduce />
      </div>
      <VideoDetail />

      <PopupUI1 mode={String(mode)} />
      <PopupUI2 mode={String(mode)} />
      <PopupUI3 mode={String(mode)} />
      <PopupUI4 mode={String(mode)} />
      <PopupUI5 mode={String(mode)} />
      <Loading />
    </main>
  );
};

export default Home;
