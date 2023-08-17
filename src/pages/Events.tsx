import { useState } from "react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { Event } from "../components/Event";
import { notification } from 'antd';
import { Form } from "../components/Form";


export const Events = () => {
  const content = useGlobal($content);
  
  const [open, setOpen] = useState(false);
  
  const [api, contextHolder] = notification.useNotification();

  const [title, setTitle] = useState("")



  return (
    <div className="min-h-screen w-screen relative md:pt-40 pt-20 flex flex-col wrap bg-dark-blue items-center ">
      {contextHolder}
      {open && (

        <Form
        setOpen={setOpen}
        title={title}
        api={api}
        ></Form>

      )}

      {content.events.map((event, index) => {
        return (
          <div className="max-w-4xl" key={index}>
            <Event
              event={event}
              setOpen={setOpen}
              open={open}
              index={index}
              setTitle={setTitle}
            />
            {index < 3 && <hr className="border-t-2 border-blue-green" />}
          </div>
        );
      })}
    </div>
  );
};
