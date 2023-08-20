// import { Page } from "./Page";


export const Footer = () => {

  return (
    <div className="flex flex-col md:w-[56rem] max-w-4xl md:flex-row md:justify-between items-center px-4 md:px-0 py-2 rounded-lg" >
        {/* <Page  custom="h-96"> */}
        <p className="cursor-pointer md:inline">VESZPRÉMIEK A NAGYVILÁGBAN</p>
        <div className="md:h-52 h-28 self-end flex margin-auto items-center">
           <img  className="md:h-32 h-20" src="/VEB2023-logo_hu.png" alt="" />
        </div>
        {/* </Page> */}
    </div>
  )
}