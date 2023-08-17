import { Page } from "../components/Page";
import { navigate } from "../states/routes";
// import { useState } from 'react';

export const Info = () => {
  return (
    <Page custom=" bg-dark-blue h-screen fixed">
      <div
        className="
      bg-dark-blue fixed z-10 flex flex-col h-96 justify-between"
      >
        <div
          className="grow flex items-center justify-center hover:bg-blue-green cursor-pointer"
          onClick={() => {
            navigate("/about");
          }}
        >
          <div className="max-w-4xl px-10 flex text-white  hover:bg-blue-green text-left ">
            <h3>RÓLUNK</h3>
          </div>
        </div>
        <hr className="border-t-2 border-blue-green" />

        <div
          className="grow flex items-center  hover:bg-blue-green cursor-pointer"
          onClick={() => {
            navigate("/events");
          }}
        >
          <div className="md:w-[56rem] px-10 flex text-white  text-left ">
            <h3>KONCERTEK</h3>
          </div>
        </div>

        <hr className="border-t-2 border-blue-green" />

        {/* <div
          className="grow flex items-center justify-center hover:bg-blue-green cursor-pointer"
          onClick={() => {
            navigate("/tickets");
          }}
        >
          <div className="w-[800px] px-10 flex text-white  hover:bg-blue-green text-left ">
            <h3>JEGYEK/ELŐREGISZTRÁCIÓ</h3>
          </div>
        </div>

        <hr className="border-t-2 border-blue-green" /> */}

        <div
          className="grow flex flex-col justify-center hover:bg-blue-green cursor-pointer"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div className="md:w-[56rem] text-end text-white  hover:bg-blue-green  ">
            <h3>KAPCSOLAT</h3>
          </div>
        </div>
    
        {/* <button onClick={() =>{ navigate("/aszf")}} className='md:max-w-4xl grow text-white  hover:bg-blue-green text-left px-1 md:px-10'> 
         <h3>ASZF</h3>
        </button> */}
      </div>
    </Page>
  );
};
