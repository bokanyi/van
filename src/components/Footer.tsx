// import { Page } from "./Page";


export const Footer = () => {

  return (
    <div className="
     justify-between w-screen md:max-w-4xl lg:px-0 px-10 py-10  z-30 rounded-md 
    
    flex flex-col lg:w-[56rem] max-w-4xl sm:flex-row sm:justify-between items-center gap-10 md:items-start  " >
        {/* <Page  custom="h-96"> */}
        <p className="self-center text-lg italic md:inline">VESZPRÉMIEK A NAGYVILÁGBAN</p>
        <div className=" flex sm:flex-col items-end gap-10">
          {/* <div className="flex flex-col items-center"> */}
          <a href="http://www.veszprembalaton2023.hu " target="blank">

           <img  className="w-40" src="/VEB2023-logo_hu.png" alt="" />
          </a>
          <a href="http://www.veszprem2030.hu/" target="blank">
           <img  className="w-40" src="/veszprem2030_emblema.png" alt="" />
           </a>
          {/* </div> */}
        </div>
        {/* </Page> */}
    </div>
  )
}