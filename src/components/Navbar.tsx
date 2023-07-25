import { navigate } from '../states/routes'
import { useState } from 'react';

export const Navbar = () => {

  const [onInfo, setOnInfo] = useState(false)

  const navigateToInfo = () => {
    if (!onInfo) navigate("/info"), setOnInfo(true)
    if (onInfo) history.back(), setOnInfo(false)
  }

  return (
    <>
    <div  className="flex justify-between w-screen fixed top-0 md:top-2 items-center px-1 md:px-10  md:py-0 z-30 rounded-lg text-white " >
        <button className='w-16 md:w-32' onClick={() => {navigate("/"),setOnInfo(false)}}>
          <img src="/van_logo.png"  alt="" />
        </button>
        {/* <button onClick={() => {navigate("/events"), setOnInfo(false)}}>ESEMÉNYEK</button> */}
        <button onClick={() => {navigate("/events"), setOnInfo(false)}}>ESEMÉNYEK</button>
        <button onClick={() => {navigateToInfo()}}>INFO</button>
    </div>

    </>
  )
}
