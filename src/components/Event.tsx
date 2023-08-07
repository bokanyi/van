import { FC, useState } from "react";
import { Artists } from "./Artists";

type Details = {
  title: string,
  description: string,
}

type Props = {
  title: string;
  date: string;
  img: string;
  details: Details[];
  images: string[];
  artists: string[];
  index: number;
  setOpen: () => void;
  // slides: string[]
};

export const Event: FC<Props> = ({ title, date, details, setOpen, images, artists, index }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (

        <div
          className={`grow flex flex-col gap-10 md:p-10 p-4 hover:bg-blue-green bg-cover`}
          style={{
            color: "white",
            // backgroundImage: `url('${img}')`,
            height: `${detailsOpen ? "auto" : "auto"}`,
            justifyContent: `${detailsOpen ? "" : "center"}`,
          }}
        >
          <div className="md:flex justify-between items-center">
            <h3 className="z-10">{title}</h3>
            <div className="md:flex justify-between items-end">
              <button
                // onClick={() => {}}
                className=" grow text-white  text-left px-1 md:px-10"
                onClick={() => setOpen()}
              >
                előregisztráció
              </button>
              <button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className=" grow text-white  hover:bg-blue-green text-left px-1 md:px-10"
              >
                infó
              </button>
              <p className=" ">{date}</p>
            </div>
          </div>
          {detailsOpen && (
            <>
            <div className="md:flex md:justify-between">

             { details.map((detail, index) => {
              return (
              <div key={index} className="grow md:w-[50%]">
              <p>{detail.title}</p>
              <p >{detail.description}</p>
              </div>
              )
             })}
                        {/* <hr /> */}
            </div>
              { index===0 && <Artists
               images={images}
               artists={artists}
              >
               
               </Artists>}
            </>
          )}
        </div>

        // <hr className="border-t-2 border-blue-green" /> 
    

  );
};
