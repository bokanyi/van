import { FC, useState, useRef } from "react";
import { Artists } from "./Artists";
import { CustomButton } from "./CustomButton";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";

type Details = {
  title: string;
  description: string;
};

type Event = {
  date: string;
  location: string;
  dateShort: string;
  title: string;
  img: string;
  description: string;
  details: Details[];
  images: string[];
  artists: string[];
  open: boolean;
  state: string;
};

type Props = {
  event: Event;
  index: number;
  setOpen: (params: boolean) => void;
  setTitle: (params: string) => void;
  open: boolean;
};

export const Event: FC<Props> = ({
  event,
  setOpen,
  // index,
  open,
  setTitle,
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current && !ref.current.contains(e?.target as Node)) {
      setDetailsOpen(!detailsOpen);
    }
  };

  return (
    <div
      className={`w-screen max-w-4xl flex p-10 flex-col gap-10 lg:px-4 hover:bg-blue-green bg-cover`}
      style={{
        color: "white",
          height: `${detailsOpen ? "auto" : "auto"}`,
        justifyContent: `${detailsOpen ? "" : "center"}`,
      }}
      onClick={(e) => handleClick(e)}
    >
      <div className="md:flex justify-between items-center gap-4">
        <img className="md:h-40 w-full rounded-md md:w-auto mb-2" src={event.img} alt="" />
        <div className="flex flex-col grow gap-1 mb-4 ">
          <h3 className="z-10">{event.title}</h3>
          <p className=" ">{event.date}</p>
          <p className=" ">Helyszín: {event.location}</p>
        </div>

        <div className="gap-10 flex md:flex-col justify-between items-end ">

          <div className="text-center">
            {detailsOpen ? (
              <CloseOutlined className="text-xl" />
            ) : (
              <CaretDownOutlined className="text-xl" />
            )}
          </div>
          <div className="w-44 text-end">
            <CustomButton
              disabled={!event.open}
              custom={`text-white text-left px-2 md:px-6 ${event.open? "hover:bg-dark-blue": ""}`}
              type="button"
              onClick={() => (setOpen(!open), setTitle(event.title))}
            >
              <p
                ref={ref}
                className="
              "
              >
                regisztráció
              </p>
            </CustomButton>
            <p>{event.state}</p>
          </div>

        </div>
      </div>
      {detailsOpen && (
        <div className="">
          <hr />
          <p className="my-4">{event.description}</p>
          <div className="flex flex-col md:justify-between gap-10">
            {event.details.map((detail, index) => {
              return (
                <div key={index} className="">
                  <p className="pb-10">{detail.title}</p>
                  <p>{detail.description}</p>
                </div>
              );
            })}
          </div>
          {event.artists.length > 1 && (
            <Artists images={event.images} artists={event.artists}></Artists>
          )}
        </div>
      )}
    </div>

  );
};
