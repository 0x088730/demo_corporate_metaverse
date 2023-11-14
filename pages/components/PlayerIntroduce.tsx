import useStore from "../../helpers/store"

const PlayerIntroduce = () => {

  const uiStep:number = useStore((s) => s.uiStep)

  const changeShowState = ()=>{
    useStore.setState({ startWorld: true, uiStep:4 });
  }

  return (
    <>
      <div
        className="player-introduce absolute top-0 left-0 w-screen h-screen overflow-hidden z-10"
        style={{display:uiStep===3?'block':'none'}} 
      >
        
        <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex items-center">
          <div className="max-w-[700px] mx-auto text-white p-8 flex justify-center mb-40">
            <div className="grid grid-cols-4 md:grid-cols-5 gap-6 md:gap-12">
              <div className="col-span-3 md:col-span-4 flex justify-start items-center">Use the arrow keys to move around the room</div>

              <div>
                <svg viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1414_10774)">
                    <path d="M68.75 29.431c-2.024-2.044-4.936-2.273-8.494-2.273-3.557 0-6.478.231-8.503 2.281-2.025 2.05-2.23 5.001-2.23 8.61 0 3.607.206 6.559 2.231 8.61 2.025 2.052 4.94 2.258 8.502 2.258 3.563 0 6.478-.207 8.503-2.258 2.025-2.05 2.229-5.003 2.229-8.61 0-3.609-.208-6.569-2.237-8.617z" fill="url(#paint0_radial_1414_10774)" fillOpacity=".06"></path>
                    <path d="M69.106 29.08c-2.19-2.212-5.315-2.422-8.85-2.422-3.534 0-6.669.213-8.859 2.43-2.189 2.216-2.374 5.38-2.374 8.96 0 3.58.187 6.746 2.375 8.963 2.191 2.22 5.322 2.406 8.858 2.406 3.536 0 6.667-.188 8.858-2.406 2.189-2.216 2.374-5.383 2.374-8.963 0-3.58-.189-6.754-2.382-8.968l-.349.345.349-.345z" stroke="#fff" strokeOpacity=".6"></path>
                    <path d="M58.928 35.2l2.412 2.852-2.412 2.854" stroke="#fff" strokeWidth="1.586"></path>
                    <path d="M3.288 29.431c2.025-2.044 4.937-2.273 8.495-2.273 3.557 0 6.478.231 8.503 2.281 2.025 2.05 2.23 5.001 2.23 8.61 0 3.607-.206 6.559-2.231 8.61-2.025 2.052-4.94 2.258-8.502 2.258-3.563 0-6.478-.207-8.502-2.258-2.025-2.05-2.23-5.003-2.23-8.61 0-3.609.208-6.569 2.237-8.617z" fill="url(#paint1_radial_1414_10774)" fillOpacity=".06"></path>
                    <path d="M2.933 29.08c2.19-2.212 5.315-2.422 8.85-2.422 3.534 0 6.669.213 8.859 2.43 2.189 2.216 2.374 5.38 2.374 8.96 0 3.58-.187 6.746-2.375 8.963-2.191 2.22-5.322 2.406-8.858 2.406-3.536 0-6.667-.188-8.858-2.406C.736 44.795.55 41.628.55 38.048c0-3.58.189-6.754 2.382-8.968l.349.345-.349-.345z" stroke="#fff" strokeOpacity=".6"></path>
                    <path d="M13.086 35.2l-2.412 2.852 2.412 2.854" stroke="#fff" strokeWidth="1.586"></path>
                    <path d="M44.507 46.65c2.018-2.054 2.243-5.005 2.243-8.612 0-3.606-.228-6.567-2.25-8.62-2.023-2.052-4.934-2.26-8.493-2.26s-6.47.209-8.495 2.261c-2.023 2.053-2.227 5.007-2.227 8.62 0 3.611.205 6.565 2.227 8.618 2.023 2.053 4.936 2.26 8.495 2.26 3.56 0 6.48-.211 8.5-2.268z" fill="url(#paint2_radial_1414_10774)" fillOpacity=".06"></path>
                    <path d="M44.864 47c2.18-2.218 2.386-5.38 2.386-8.962s-.21-6.753-2.394-8.97c-2.189-2.222-5.316-2.41-8.849-2.41-3.532 0-6.66.19-8.85 2.41-2.188 2.219-2.372 5.387-2.372 8.97 0 3.584.186 6.752 2.371 8.97 2.189 2.221 5.319 2.409 8.851 2.409 3.533 0 6.67-.192 8.857-2.417l-.357-.35.357.35z" stroke="#fff" strokeOpacity=".6"></path>
                    <path d="M38.818 36.83l-2.814 2.445-2.815-2.446" stroke="#fff" strokeWidth="1.586"></path>
                    <path d="M44.507 4.86c2.018 2.053 2.243 5.005 2.243 8.611 0 3.607-.228 6.568-2.25 8.62-2.023 2.053-4.934 2.26-8.493 2.26s-6.47-.208-8.495-2.26c-2.023-2.053-2.227-5.008-2.227-8.62 0-3.611.205-6.566 2.227-8.618 2.023-2.053 4.936-2.26 8.495-2.26 3.56 0 6.48.211 8.5 2.268z" fill="url(#paint3_radial_1414_10774)" fillOpacity=".06"></path>
                    <path d="M44.864 4.51c2.18 2.218 2.386 5.38 2.386 8.962s-.21 6.753-2.394 8.97c-2.189 2.222-5.316 2.41-8.849 2.41-3.532 0-6.66-.19-8.85-2.41-2.188-2.22-2.372-5.387-2.372-8.97 0-3.584.186-6.752 2.371-8.97 2.189-2.222 5.319-2.41 8.851-2.41 3.533 0 6.67.192 8.857 2.418l-.35.344.35-.344z" stroke="#fff" strokeOpacity=".6"></path>
                    <path d="M38.818 14.82l-2.814-2.445-2.815 2.445" stroke="#fff" strokeWidth="1.586"></path>
                  </g>
                  <defs>
                    <radialGradient id="paint0_radial_1414_10774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 10.8794 -10.7323 0 60.256 38.038)">
                      <stop stopOpacity=".33"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <radialGradient id="paint1_radial_1414_10774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 10.8794 -10.7323 0 11.783 38.038)">
                      <stop stopOpacity=".33"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <radialGradient id="paint2_radial_1414_10774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-10.7323 0 0 -10.8794 36.018 38.038)">
                      <stop stopOpacity=".33"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <radialGradient id="paint3_radial_1414_10774" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-10.7323 0 0 -10.8794 36.018 13.472)">
                      <stop stopOpacity=".33"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <clipPath id="clip0_1414_10774">
                      <path fill="#fff" d="M0 0h72v50H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="col-span-3 md:col-span-4 flex justify-start items-center">Using the Joystick</div>

              <div>
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1330_10647)">
                    <path d="M63.514 8.504c-6.559-6.533-15.989-7.263-27.511-7.263-11.522 0-20.982.738-27.54 7.289-6.559 6.55-7.22 15.976-7.22 27.504 0 11.527.666 20.958 7.224 27.512 6.558 6.554 15.997 7.212 27.536 7.212 11.539 0 20.978-.662 27.536-7.212s7.22-15.985 7.22-27.512c0-11.528-.674-20.984-7.245-27.53z" fill="url(#paint0_radial_1330_10647)" fillOpacity=".1"></path><path d="M63.867 8.15C57.144 1.452 47.5.741 36.003.741c-11.499 0-21.17.72-27.894 7.435C1.385 14.892.742 24.534.742 36.034S1.39 57.179 8.113 63.9c6.725 6.72 16.378 7.358 27.89 7.358s21.165-.642 27.89-7.358c6.724-6.716 7.366-16.367 7.366-27.866 0-11.5-.655-21.172-7.392-27.884z" stroke="#fff" strokeOpacity=".8"></path>
                    <circle cx="36.332" cy="36.329" r="17.209" fill="#fff" fillOpacity=".7" stroke="#fff"></circle>
                  </g>
                  <defs>
                    <radialGradient id="paint0_radial_1330_10647" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 36) scale(34.7586)">
                      <stop offset=".709" stopColor="#C4C4C4" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#B9B9B9"></stop>
                    </radialGradient>
                    <clipPath id="clip0_1330_10647">
                      <path fill="#fff" d="M0 0h72v72H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="col-span-3 md:col-span-4 flex justify-start items-center">The viewing direction always follows your mouse. Just try it!</div>

              <div>
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity=".3" d="M63.813 8.203C57.115 1.531 47.505.817 36.003.817c-11.502 0-21.142.722-27.84 7.412C1.463 14.92.818 24.53.818 36.034c0 11.504.65 21.117 7.349 27.812 6.699 6.696 16.32 7.337 27.836 7.337 11.516 0 21.137-.646 27.836-7.337 6.7-6.69 7.345-16.309 7.345-27.812 0-11.505-.658-21.144-7.37-27.83l-.3.3.3-.3z" fill="url(#paint0_linear_1253_11677)" fillOpacity=".3" stroke="url(#paint1_linear_1253_11677)" strokeWidth=".849"></path>
                  <path d="M29.36 25.916a.877.877 0 00-.695.89l.691 17.208a.876.876 0 001.405.668l2.948-2.213 2.242 4.54a.877.877 0 001.175.397l4.176-2.068a.87.87 0 00.397-1.175l-2.242-4.539 3.553-.996a.873.873 0 00.33-1.514L30.103 26.103a.87.87 0 00-.743-.187zm1.133 2.792l10.442 8.69-2.965.823a.873.873 0 00-.544 1.232l2.322 4.71-2.613 1.282-2.32-4.7a.874.874 0 00-1.317-.314l-2.455 1.845-.55-13.568z" fill="#fff"></path>
                  <path opacity=".8" d="M60.268 11.575C54.394 5.723 45.97 5.1 35.916 5.1c-10.053 0-18.504.63-24.378 6.496-5.875 5.868-6.437 14.292-6.437 24.347 0 10.055.566 18.483 6.44 24.354 5.875 5.871 14.31 6.43 24.375 6.43s18.5-.563 24.375-6.43c5.874-5.868 6.437-14.3 6.437-24.354 0-10.055-.574-18.506-6.46-24.37l-.3.301.3-.3z" fill="url(#paint2_linear_1253_11677)" fillOpacity=".3" stroke="url(#paint3_linear_1253_11677)" strokeWidth=".849"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1253_11677" x1="70.725" y1="35.361" x2="1.106" y2="35.361" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff"></stop>
                      <stop offset=".245" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".802" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".974" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1253_11677" x1="1.106" y1="34.809" x2="70.725" y2="34.809" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff"></stop>
                      <stop offset=".193" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".802" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1253_11677" x1="66.273" y1="35.356" x2="5.407" y2="35.356" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff"></stop>
                      <stop offset=".245" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".786" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".974" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1253_11677" x1="5.407" y1="34.873" x2="66.273" y2="34.873" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff"></stop>
                      <stop offset=".193" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset=".802" stopColor="#fff" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="col-span-3 md:col-span-4 flex justify-start items-center">Clicking on the hotspots takes you to our main page.</div>

              <div>
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1256_10472)">
                    <rect width="72" height="72" rx="25.468" fill="url(#paint0_linear_1256_10472)"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.455 31.2a3.25 3.25 0 013.25-3.25h7.441a1.083 1.083 0 110 2.167h-7.44c-.6 0-1.084.485-1.084 1.083v12.08c0 .599.485 1.084 1.083 1.084h12.08c.599 0 1.084-.485 1.084-1.084v-6.04a1.083 1.083 0 012.166 0v6.04a3.25 3.25 0 01-3.25 3.25h-12.08a3.25 3.25 0 01-3.25-3.25V31.2z" fill="#fff"></path>
                    <path d="M40.435 25.516a1.172 1.172 0 100 2.345v-2.345zm5.862 1.173h1.172c0-.648-.525-1.173-1.172-1.173v1.173zm-1.173 5.861a1.172 1.172 0 102.345 0h-2.345zm-7.863 1.516a1.173 1.173 0 001.658 1.658l-1.658-1.658zm3.174-6.205h5.862v-2.345h-5.862v2.345zm4.69-1.172v5.861h2.344V26.69h-2.345zm.343-.83l-8.207 8.207 1.658 1.658 8.207-8.206-1.658-1.659z" fill="#fff"></path>
                    <rect opacity=".5" x="12.971" y="12.971" width="46.059" height="46.059" rx="16.172" stroke="#fff" strokeWidth="3.204"></rect>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_1256_10472" x1="74.769" y1="34.339" x2="0" y2="28.246" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF6800"></stop>
                      <stop offset="1" stopColor="#F5A155"></stop>
                    </linearGradient>
                    <clipPath id="clip0_1256_10472">
                      <path fill="#fff" d="M0 0h72v72H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>

            </div>

          </div>          
        </div>

        <div className="absolute bottom-32 md:bottom-24 left-0 w-screen overflow-hidden">
          <div className="mx-auto w-[114px]">
            <button className="relative w-[114px] h-[114px] flex justify-center items-center pointer-events-auto"
                onClick={()=>changeShowState()}
              > 
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M101.326 12.7015C90.7604 2.17558 75.567 1 57.0034 1C38.4398 1 23.1989 2.18918 12.6328 12.7423C2.0668 23.2954 1 38.4828 1 57.0544C1 75.6259 2.07359 90.8202 12.6396 101.38C23.2057 111.94 38.4126 113 57.0034 113C75.5942 113 90.8011 111.933 101.367 101.38C111.933 90.827 113 75.6259 113 57.0544C113 38.4828 111.913 23.2478 101.326 12.7015Z" fill="url(#paint0_radial_576_1642)" fillOpacity="0.1"/>
                    <path d="M101.679 12.3473C90.9484 1.65715 75.5433 0.5 57.0034 0.5C38.4634 0.5 23.0104 1.67074 12.2795 12.3885C1.54728 23.1076 0.5 38.5102 0.5 57.0544C0.5 75.5988 1.55415 91.0079 12.2862 101.734C23.0182 112.459 38.4403 113.5 57.0034 113.5C75.5667 113.5 90.9885 112.453 101.721 101.734C112.453 91.0147 113.5 75.5984 113.5 57.0544C113.5 38.51 112.432 23.0595 101.679 12.3473Z" stroke="white" strokeOpacity="0.6"/>
                    <defs>
                      <radialGradient id="paint0_radial_576_1642" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57 57) rotate(90) scale(56)">
                        <stop offset="0.709214" stopColor="white" stopOpacity="0.1"/>
                        <stop offset="1" stopColor="white"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-white">GO</div>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default PlayerIntroduce
