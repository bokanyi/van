import React, { useState } from "react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { Event } from "../components/Event";
import { notification } from 'antd';

export const Events = () => {
  const content = useGlobal($content);
  const [api, contextHolder] = notification.useNotification();

  // const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.694437137": "",
    "entry.720311472": "",
    "entry.68571661": "",
    "entry.1763473739": "1",
    "entry.1206785429": "beleegyezek",
  });

  const [open, setOpen] = useState(false);

  const handleInputData = (input: string) => (e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // setSubmit(true);

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSe4ACCCVkC9O3suSoRcIJ3p2TlTTsS3OTy-R1jaBCr9FdjHqw/formResponse?usp=pp_url&entry.694437137=${formData["entry.694437137"]}&entry.720311472=${formData["entry.720311472"]}&entry.68571661=${formData["entry.68571661"]}&entry.1763473739=${formData["entry.1763473739"]}&entry.1206785429=${formData["entry.1206785429"]}`;

    try{

      await fetch(url, {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      api.success({
        message: 'Sikeres regisztráció',
      });
      setOpen(false);
      setFormData({
        "entry.694437137": "",
        "entry.720311472": "",
        "entry.68571661": "",
        "entry.1763473739": "1",
        "entry.1206785429": "beleegyezek",
      })
    } 
    // console.log(res)
    catch (e) {
      api.error({
        message: 'Hiba történt próbálja újra a regisztrációt',
      });
    }

  }

  const handleClick = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      ["entry.694437137"]: value,
    }));  
    setOpen(!open);
    // console.log(formData["entry.694437137"])
  };

  const options = ["1", "2", "3", "4", "5", "6"]

  return (
    <div className="min-h-screen w-screen relative md:pt-40 pt-20 flex flex-col wrap bg-dark-blue ">
      {contextHolder}
      {open && (
        <div className="absolute top-0 h-screen w-screen z-20 backdrop-blur-md flex justify-center">
          <div></div>
          <div className="m-auto max-w-md bg-white z-20 flex flex-col  p-6 md:p-10">
            <button className="self-end" onClick={() => setOpen(false)}>
              x
            </button>
            <form
              onSubmit={(e) => handleSubmit(e)}
              target="_self"
              className=" flex flex-col gap-4"
            >
              <input
                type="text"
                name="entry.694437137"
                // onChange={handleInputData("entry.694437137")}
                value={formData["entry.694437137"]}
                disabled
              />
              <label htmlFor="">Név:</label>
              <input
                className="border border-black"
                type="text"
                name="entry.720311472"
                onChange={handleInputData("entry.720311472")}
                value={formData["entry.720311472"]}
                id=""
                required
              />
              <label htmlFor="">e-mail:</label>
              <input
                className="border border-black"
                type="email"
                name="entry.68571661"
                onChange={handleInputData("entry.68571661")}
                value={formData["entry.68571661"]}
                id=""
                required
              />
              <label htmlFor="">jegyek:</label>
              <select id="tickets" 
              name="entry.1763473739"
              onChange={handleInputData("entry.1763473739")}
              value={formData["entry.1763473739"]}
              >
                {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
              </select>
              <div className="flex gap-4">
                <label htmlFor="">
                  Elfogadom, hogy a regisztráció helyszíni fizetési
                  kötelezettséggel jár!
                </label>
                <input
                  type="checkbox"
                  name="entry.1206785429"
                  onChange={handleInputData("entry.1206785429")}
                  value={formData["entry.1206785429"]}
                  // checked 
                  required
                />
              </div>
              <button type="submit">REGISZTRÁCIÓ</button>
            </form>
          </div>

        </div>
      )}

      {content.events.map((event, index) => {
        return (
          <div className="" key={index}>
            <Event
              title={event.title}
              date={event.dateShort}
              img={event.img}
              details={event.details}
              setOpen={()=> handleClick(event.title)}
            />
            {index < 3 && <hr className="border-t-2 border-blue-green" />}
          </div>
        );
      })}
    </div>
  );
};
