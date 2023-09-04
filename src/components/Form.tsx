import React, { FC, useState, useRef } from "react";
import { CustomButton } from "../components/CustomButton";
import useClickOutside from "../hooks/useClickOutside"
import HCaptcha from "@hcaptcha/react-hcaptcha";


type NotificationApi = {
    success: (params: { message: string }) => void;
    error: (params: { message: string }) => void;
  };
  
  type Props = {
    setOpen: (params: boolean) => void;
    title: string;
    api: NotificationApi; 
  };


export const Form: FC<Props> = ({ setOpen, title, api }) => {

    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => setOpen(!open))
    const captchaRef = useRef<HCaptcha | null>(null);


    const [showCaptchaModal, setShowCaptchaModal] = useState(false);

    const [emailMatch, setEmailMatch] = useState(true);

  const [formData, setFormData] = useState({
    "entry.694437137": title,
    "entry.720311472": "",
    "entry.68571661": "",
    "entry.1763473739": "1",
    "entry.1206785429": "beleegyezek",
    "email-again": ""
  });

  const handleInputData =
    (input: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      const { name,  value } = e.target;

      if (input === "email-again") {

        if (name === "email-again" && formData["entry.68571661"] !== value) {
          setEmailMatch(false);
        } else {
          setEmailMatch(true);
        }
      }
      if (input === "entry.68571661") {
        if (name === "entry.68571661" && formData["email-again"] !== value) {
          setEmailMatch(false);
        } else {
          setEmailMatch(true);
        }
      }


      setFormData((prevState) => ({
        ...prevState,
        [input]: value,
      }));
    };

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!emailMatch) {
    return;
  }

  setShowCaptchaModal(true);

    // const url = `https://docs.google.com/forms/d/e/1FAIpQLSe4ACCCVkC9O3suSoRcIJ3p2TlTTsS3OTy-R1jaBCr9FdjHqw/formResponse?usp=pp_url&entry.694437137=${formData["entry.694437137"]}&entry.720311472=${formData["entry.720311472"]}&entry.68571661=${formData["entry.68571661"]}&entry.1763473739=${formData["entry.1763473739"]}&entry.1206785429=${formData["entry.1206785429"]}`;

    // try {
    //   await fetch(url, {
    //     mode: "no-cors",
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   });
    //   api.success({
    //     message: "Sikeres regisztráció",
    //   });
    //   setOpen(false);
    //   setFormData({
    //     "entry.694437137": "",
    //     "entry.720311472": "",
    //     "entry.68571661": "",
    //     "entry.1763473739": "1",
    //     "entry.1206785429": "beleegyezek",
    //     "email-again": "",
    //   });
    // } catch (e) {
    //   api.error({
    //     message: "Hiba történt próbálja újra a regisztrációt",
    //   });
    // }
  }

  const handleCaptchaVerify = async (
    // token: string
    ) => {
    setShowCaptchaModal(false);
     const url = `https://docs.google.com/forms/d/e/1FAIpQLSe4ACCCVkC9O3suSoRcIJ3p2TlTTsS3OTy-R1jaBCr9FdjHqw/formResponse?usp=pp_url&entry.694437137=${formData["entry.694437137"]}&entry.720311472=${formData["entry.720311472"]}&entry.68571661=${formData["entry.68571661"]}&entry.1763473739=${formData["entry.1763473739"]}&entry.1206785429=${formData["entry.1206785429"]}`;

    try {
      await fetch(url, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      api.success({
        message: "Sikeres regisztráció",
      });
      setOpen(false);
      setFormData({
        "entry.694437137": "",
        "entry.720311472": "",
        "entry.68571661": "",
        "entry.1763473739": "1",
        "entry.1206785429": "beleegyezek",
        "email-again": "",
      });
    } catch (e) {
      api.error({
        message: "Hiba történt próbálja újra a regisztrációt",
      });
    }

  }
  const options = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="fixed top-0 h-screen w-screen backdrop-blur-md flex justify-center z-30">
      <div></div>
      <div ref={ref} className="m-auto max-w-md bg-white z-20 flex flex-col  p-6 md:p-10">
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
          <label htmlFor="">e-mail újra:</label>
          <input
  className={`border border-black ${!emailMatch ? "border-red-500" : ""}`}
  type="email"
  name="email-again"
  onChange={handleInputData("email-again")}
  value={formData["email-again"]}
  id=""
  required
/>
{!emailMatch && (
  <div className="text-red-500">A két e-mail cím nem egyezik!</div>
)}
          <label htmlFor="">jegyek:</label>
          <select
            id="tickets"
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
              A regisztrációval elfogadom a Felhasználási feltételeket.
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
          <CustomButton
            type="submit"
            onClick={() => handleSubmit}
            custom=" bg-blue-green color text-white hover:bg-dark-blue "
          >
            <p
              className="transition-all  duration-700
                  hover:scale-110 "
            >
              REGISZTRÁCIÓ
            </p>
          </CustomButton>
        </form>
      </div>
      {showCaptchaModal && (
  <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-50 bg-gray-500 z-30 flex justify-center items-center">
    <div className="bg-white p-6 md:p-10">
      <HCaptcha
        sitekey="cef42da7-2198-451b-87bf-1528982aa4ec"
        onVerify={handleCaptchaVerify}
        ref={captchaRef}
      />
    </div>
  </div>
)}
    </div>
  );
};
