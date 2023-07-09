import { navigate } from '../states/routes'
// import { useState } from 'react';

export const  Info = () => {
  return (
    <div className="h-screen w-screen pt-40 bg-dark-blue fixed z-10 flex flex-col justify-between"
        >
        <button onClick={() => {navigate("/about")}}  className=' grow text-white  hover:bg-blue-green text-left px-1 md:px-10'>
           <h1>RÓLUNK</h1> 
            </button>
   
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() => {navigate("/events") }} className=' grow text-white  hover:bg-blue-green text-left px-1 md:px-10'>
            <h1>PROGRAMOK</h1>
            </button>
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() =>{ navigate("/locations")}} className='grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h1>HELSZÍNEK</h1>
        </button>
        <hr className='border-t-2 border-blue-green'/>
        <button onClick={() =>{ navigate("/contact")}} className='grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h1>KAPCSOLAT</h1>
        </button>
          </div>
  )
}
