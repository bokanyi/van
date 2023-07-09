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
    <div  className="flex justify-between w-screen fixed top-0 md:top-2 items-center px-1 md:px-10  md:py-2 z-20 rounded-lg">
        <button className='w-32' onClick={() => {navigate("/"),setOnInfo(false)}}>
          <img src="/van_logo.png"  alt="" />
        </button>
        <button onClick={() => {navigate("/events"), setOnInfo(false)}}>PROGRAMOK</button>
        <button onClick={() => {navigateToInfo()}}>INFO</button>
    </div>


        {/* {open && <div className="h-screen w-screen py-40 px-2 bg-dark-blue fixed z-10 flex flex-col justify-between"
        >
        <button onClick={() => {navigate("/about"), setOpen(!open)}}>RÓLUNK</button>
        <hr className='border-t-1 border-blue-green'/>
        <button onClick={() => {navigate("/events"), setOpen(!open)}}>PROGRAMOK</button>
        <hr className='border-t-1 border-blue-green'/>
        <button onClick={() =>{ navigate("/contacts"), setOpen(!open)}}>KAPCSOLAT</button>
          </div>} */}
    </>
  )
}
