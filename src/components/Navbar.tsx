import { navigate } from "../states/routes";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between w-screen md:max-w-4xl fixed top-0 md:top-2 items-center lg:px-0 px-10 py-2 md:py-0 z-30 rounded-md  text-white ">
        <button
          className="w-24 md:w-36 rounded-md md:hover:w-40 transition-all duration-700 px-4 md:px-6 bg-white/30 "
          onClick={() => {
            navigate("/")
          }}
        >
          <img src="/van_logo.png" alt="" />
        </button>

        <div
        className="flex flex-col bg-white text-black border-2 rounded-md absolute top-4 right-10 lg:right-0  
        transition-all duration-700
        px-4 py-2 group " 
        >
          <div className="self-end relative md:group-hover:p-5 md:group-hover:py-6 transition-all duration-700 p-4 py-5">

        <MenuOutlined className="absolute text-3xl md:group-hover:text-4xl transition-all duration-700 top-0 right-0"
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
            navigate("/summery"),
            setMenuOpen(!menuOpen)
            ;
          }}
          >
          <p>ÖSSZEGZÉS</p>
          </button>
          <hr />
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
          className="text-end"
           onClick={() => {
            navigate("/contact"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>KAPCSOLAT</p>
          </button>
          <hr />
          <button
          className="text-end"
           onClick={() => {
            navigate("/location"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>HELYSZÍNEK</p>
          </button>
          <hr />
          <button
          className="text-end"
           onClick={() => {
            navigate("/"),
            setMenuOpen(!menuOpen)
            ;
          }}
        >
          <p>FŐOLDAL</p>
          </button>
          </div>
          
           }
        

        </div>

      </div>
    </>
  );
};
