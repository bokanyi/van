import { navigate } from '../states/routes'
// import { useState } from 'react';

export const  Info = () => {
  return (
    <div className="h-screen w-screen md:pt-40 pt-20 bg-dark-blue fixed z-10 flex flex-col justify-between"
        >
        <button onClick={() => {navigate("/about")}}  className=' grow text-white  hover:bg-blue-green text-left px-1 md:px-10'>
           <h3>RÓLUNK</h3> 
            </button>
   
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() => {navigate("/events") }} className=' grow text-white  hover:bg-blue-green text-left px-1 md:px-10'>
            <h3>ESEMÉNYEK</h3>
            </button>
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() =>{ navigate("/tickets")}} className='grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h3>JEGYEK/ELŐREGISZTRÁCIÓ</h3>
        </button>
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() =>{ navigate("/locations")}} className='grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h3>HELSZÍNEK</h3>
        </button>
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() =>{ navigate("/contact")}} className='grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h3>KAPCSOLAT</h3>
        </button>
          </div>
  )
}
