import { navigate } from "../states/routes";
import useGlobal from "../hooks/useGlobal";
import { Page } from "./Page";


export const Footer = () => {

  return (
    <div className=" max-w-3xl flex justify-between w-full  bottom-4 backdrop-blur-lg items-center px-4 py-2 rounded-lg" >
        <Page  custom="h-96">
        <div className="">
            <p>szponzorok</p>
        </div>
        <p className="cursor-pointer hidden md:inline">VESZPRÉMIEK A NAGYVILÁGBAN</p>
        </Page>
    </div>
  )
}