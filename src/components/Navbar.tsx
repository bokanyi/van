import { navigate } from '../states/routes'
import { useState } from 'react';

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
    <div  className="max-w-3xl flex justify-between w-screen fixed top-2 items-center px-4  py-2 z-20 rounded-lg">
        <button onClick={() => {navigate("/"),setOpen(false)}}>LOGO</button>
        <button onClick={() => {navigate("/events"), setOpen(false)}}>PROGRAMOK</button>
        <button onClick={() => setOpen(!open)}>INFO</button>
    </div>
        {open && <div className="h-screen w-screen py-40 px-2 bg-dark-blue fixed z-10 flex flex-col justify-between"
        >
        <button onClick={() => {navigate("/about"), setOpen(!open)}}>RÓLUNK</button>
        <hr className='border-t-1 border-blue-green'/>
        <button onClick={() => {navigate("/events"), setOpen(!open)}}>PROGRAMOK</button>
        <hr className='border-t-1 border-blue-green'/>
        <button onClick={() =>{ navigate("/contacts"), setOpen(!open)}}>KAPCSOLAT</button>
          </div>}
    </>
  )
}
