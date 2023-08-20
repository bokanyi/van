import { navigate } from "../states/routes";
import { useState } from "react";
// import { CustomButton } from "./CustomButton";
import { MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  // const [onInfo, setOnInfo] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false)

  // const navigateToInfo = () => {
  //   if (!onInfo) navigate("/info"), setOnInfo(true);
  //   if (onInfo) history.back(), setOnInfo(false);
  // };

  return (
    <>
      <div className="flex justify-between w-screen md:max-w-4xl fixed top-0 md:top-2 items-center md:px-0 px-4 py-2 md:py-0 z-30 rounded-md text-white ">
        <button
          className="w-24 md:w-36 px-4 md:px-6 bg-white/30 "
          onClick={() => {
            navigate("/")
            // setOnInfo(false);
          }}
        >
          <img src="/van_logo.png" alt="" />
        </button>

        {/* <CustomButton
        custom="md:mt-8"
          type="button"
          onClick={() => {
            navigate("/events"), setOnInfo(false);
          }}
        >
          <p>KONCERTEK</p>
        </CustomButton> */}

        {/* <CustomButton
          custom="border-2 rounded-md bg-orange hover:bg-light-rose"
          type="button"
          onClick={() => {
            navigateToInfo();
          }}
        >
          <MenuOutlined className="text-3xl" />
        </CustomButton> */}

        <div
        className="flex flex-col bg-white text-black border-2 rounded-md absolute top-4 right-4 md:right-0 
        transition-all duration-700
        px-4 py-2 "
        >
          <div className="self-end relative p-4 py-5">

        <MenuOutlined className="absolute text-3xl top-0 right-0"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        />
          </div>

        {menuOpen && <div
        className="mt-6 flex flex-col gap-4 "
        >

          <button
          className="text-end"
          onClick={() => {
            navigate("/events"),
            setMenuOpen(!menuOpen)
            ;
          }}
          >
          <p>KONCERTEK</p>
          </button>
          <hr />
          <button
          className="text-end"
           onClick={() => {
            navigate("/about"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>RÓLUNK</p>
          </button>
          <hr />
          <button
           onClick={() => {
            navigate("/contact"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>KAPCSOLAT</p>
          </button>
          </div>
          
           }
        

        </div>

        {/* <CustomButton
          custom="bg-orange hover:bg-light-rose"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuOutlined className="text-3xl" />

        </CustomButton> */}



        {/* {menuOpen && <div
        className="absolute right-0 top-[80px] w-44" 
        >
          <CustomButton
          custom="border-2 rounded-md bg-orange hover:bg-light-rose"
          type="button"
          onClick={() => {
            navigate("/events"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>KONCERTEK</p>
        </CustomButton>
          <CustomButton
          custom="border-2 rounded-md bg-orange hover:bg-light-rose"
          type="button"
          onClick={() => {
            navigate("/about"),
            setMenuOpen(!menuOpen);
          }}
        >
          <p>RÓLUNK</p>
        </CustomButton>
          <CustomButton
          custom="border-2 rounded-md bg-orange hover:bg-light-rose"
          type="button"
          onClick={() => {
            navigate("/contact"),
            setMenuOpen(!menuOpen);
          }}
        >
          <p>KAPCSOLAT</p>
        </CustomButton>

        </div> } */}


      </div>
    </>
  );
};
