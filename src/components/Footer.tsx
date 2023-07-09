// import { Page } from "./Page";


export const Footer = () => {

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center m-auto w-full bottom-4 px-4 md:px-10 py-2 rounded-lg" >
        {/* <Page  custom="h-96"> */}
        <div className="md:h-96 h-40 flex margin-auto items-center">
           <img  className="md:h-32 h-28" src="/VEB2023-logo_hu.png" alt="" />
        </div>
        <p className="cursor-pointer md:inline">VESZPRÉMIEK A NAGYVILÁGBAN</p>
        {/* </Page> */}
    </div>
  )
}