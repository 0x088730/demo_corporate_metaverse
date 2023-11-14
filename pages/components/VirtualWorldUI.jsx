import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useStore from '../../helpers/store'
import Image from 'next/image';
import Link from 'next/link';

const ReactNipple = dynamic(() => import('react-nipple'), { ssr: false });

const emojiActions = ["Idle", "GestureWaving", "GestureClapping", "GestureCheering", "GestureDanceTwist", "GestureGreeting", "GesturePointing"]

const EmojiItem = (props) => {

  const emojiAnimation = useStore((s) => s.emojiAnimation)

  return (
    <div
      className='relative w-7 hover:w-11 h-14 mx-auto cursor-pointer bg-contain bg-right bg-no-repeat'
      style={{
        backgroundImage: `url(${props.url})`,
        transition: 'all 0.15s ease-in-out 0s',
      }}
      onClick={() => {
        if (emojiAnimation !== "Idle") return
        useStore.setState({ emojiAnimation: emojiActions[props.emojiIndex] })
        setTimeout(() => {
          useStore.setState({ emojiAnimation: "Idle" })
        }, props.emojiIndex === 4 ? 9000 : 3000)
      }}
    >
    </div>
  )
}

const VirtualWorldUI = (props) => {
  let playerPosition = useStore((s) => s.playerPosition)
  const moveControl = (data) => {

    const angle = Math.floor(data.angle.degree * 0.7)
    const distance = Math.floor(data.distance * 0.7)
    // console.log('angle', angle)
    // console.log('distance', distance)

    console.log('position', playerPosition)
    useStore.setState({goto: ''});
    useStore.setState({ playerCameraRotation: [-6, 1, 3] })
    useStore.setState({ joystickAngle: angle, joystickDistance: distance })
  }

  const endContol = () => {
    useStore.setState({ joystickAngle: 90, joystickDistance: 0 })
  }

  const [show, setShow] = useState(false)

  const closeUI = (value) => {
    console.log(value)
    setShow(value)
  }

  return (
    <>

      <div className='absolute bottom-4 right-8 left-8 flex justify-end md:justify-between items-center' style={{ opacity: props.opacity }}>
        <div className='hidden md:block'>
          <Image src='/assets/img/ControlsL.png' width='132' height='95' alt='control.png' />
        </div>

        <div className='relative w-[150px] h-[150px] mr-12 cursor-move'>
          <ReactNipple
            options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
            style={{
              // outline:'1px solid red',
              width: 150,
              height: 150
            }}
            onMove={(evt, data) => moveControl(data)}
            onEnd={() => endContol()}
          />
        </div>

      </div>


      <div className='absolute right-8 bottom-9 ' style={{ opacity: props.opacity }}>
        <div className='emoji-groups relative w-12'>
          <EmojiItem url="assets/img/media/emoji_raising_hands.png" emojiIndex={1} />
          <EmojiItem url="assets/img/media/emoji_clap.png" emojiIndex={2} />
          <EmojiItem url="assets/img/media/emoji_smile.png" emojiIndex={3} />
          <EmojiItem url="assets/img/media/emoji_celebration.png" emojiIndex={4} />
          <EmojiItem url="assets/img/media/emoji_greet.png" emojiIndex={5} />
          <EmojiItem url="assets/img/media/emoji_fist_bump.png" emojiIndex={6} />
        </div>
      </div>

      <div className='fixed top-0 md:top-6 left-0 md:left-24 w-full md:w-[280px] bottom-0 ' style={{ display: show ? 'block' : 'none', opacity: props.opacity }}>
        <div className='pt-24 px-5 md:p-5 bg-black bg-opacity-40 md:rounded-[16px] text-[24px] text-white h-full md:h-auto text-center'>

          <div
            className='cursor-pointer w-full bg-black bg-opacity-50 rounded-[24px] py-6 px-4 mb-4'
            onClick={() => { useStore.setState({ uiStep: 2 }); closeUI(!show) }}
          >
            Change Avatar
          </div>

          <div
            className='cursor-pointer w-full bg-black bg-opacity-50 rounded-[24px] py-6 px-4 mb-4'
            onClick={() => { useStore.setState({ uiStep: 3 }); closeUI(!show) }}
          >
            Player Introduce
          </div>

          <div
            className='cursor-pointer w-full bg-black bg-opacity-50 rounded-[24px] py-6 px-4 mb-4'
            onClick={() => { useStore.setState({ popup: 5 }); closeUI(!show) }}
          >
            My Profile
          </div>

          <Link href='https://bifesbuker.co.id'>
            <a target={'_self'} className='w-full '>
              <div className='w-full bg-black bg-opacity-50 rounded-[24px] py-6 px-4'>
                Exit Virtual
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div className='fixed top-0 left-0 m-6 ' style={{ opacity: props.opacity }}>
        <div
          className='w-11 h-11 cursor-pointer bg-black bg-opacity-40 hover:bg-opacity-60 rounded-[16px]'
          style={{ padding: show ? '17px 15px 11px 17px' : '12px 13px 8px' }}
          onClick={() => closeUI(!show)}
        >
          {
            show ?
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1l4.776 4.776L1 10.552M10.553 1L5.777 5.776l4.776 4.776" stroke="#fff" strokeWidth="2"></path>
              </svg>
              :
              <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.382V5.618a1 1 0 01.553-.894l7-3.5a1 1 0 01.894 0l7 3.5a1 1 0 01.553.894v8.764a1 1 0 01-.553.894l-7 3.5a1 1 0 01-.894 0l-7-3.5A1 1 0 011 14.382z" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
                <circle cx="9" cy="10" r="3" stroke="#fff" strokeWidth="2"></circle>
              </svg>
          }
        </div>
      </div>
    </>
  )
}

export default VirtualWorldUI
