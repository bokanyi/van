import { useState } from "react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { Event } from "../components/Event";
import { notification } from "antd";
import { Form } from "../components/Form";

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
      <div className=" max-w-4xl text-white w-screen px-10 lg:px-0 mb-10 flex flex-col md:flex-row md:gap-10 justify-between">
        <div>
          <br />
          <br />
          <h4>Árak:</h4>
          <p>Helyszíni jegy: 2500 HUF</p>
          <p>Regisztrációval: 2000 HUF</p>
          <p>Bérlet az összes koncertre: 7500 HUF</p>
          <br />
          <p>
            Az összes jegy és bérlet a helyszínen váltható. Felhívjuk figyelmét, hogy csak
            készpénzzel lehet fizetni.
          </p>
        </div>
      </div>
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
