import { useState } from "react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { Event } from "../components/Event";
import { notification } from "antd";
import { Form } from "../components/Form";
// import { CustomButton } from "../components/CustomButton";

export const Events = () => {
  const content = useGlobal($content);

  const [open, setOpen] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const [title, setTitle] = useState("");

  return (
    <div className="min-h-screen w-screen relative md:pt-40 pt-20  flex flex-col wrap bg-dark-blue items-center pb-10 ">
      <div className="max-w-4xl w-screen px-10 lg:px-0 mb-20 ">
        <div className=" text-white">
          <h1 className="">KONCERTEK</h1>
        </div>
      </div>

      {contextHolder}
      {open && <Form setOpen={setOpen} title={title} api={api}></Form>}
      {/* <div className="flex justify-between">
        <p className="text-white">
          Bérlet váltható a helyszínen: 3+1 koncert ajándék 7500 Ft
        </p>
        <CustomButton
          // disabled={}
          custom="text-white text-left px-2 md:px-6 hover:bg-dark-blue"
          type="button"
          onClick={() => (setOpen(!open), setTitle("Bérlet"))}
        >
          <p
            // ref={ref}
            className="
              "
          >
            bérlet
          </p>
        </CustomButton>
      </div> */}
      {content.events.map((event, index) => {
        return (
          <div className=" max-w-4xl " key={index}>
            <Event
              event={event}
              setOpen={setOpen}
              open={open}
              index={index}
              setTitle={setTitle}
            />
            {index < 3 && <hr className=" border-t-2 border-blue-green" />}
          </div>
        );
      })}
    </div>
  );
};
