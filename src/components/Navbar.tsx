import { navigate } from "../states/routes";
import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { MenuOutlined} from '@ant-design/icons';


export const Navbar = () => {
  const [onInfo, setOnInfo] = useState(false);

  const navigateToInfo = () => {
    if (!onInfo) navigate("/info"), setOnInfo(true);
    if (onInfo) history.back(), setOnInfo(false);
  };

  return (
    <>
      <div className="flex justify-between w-screen md:max-w-4xl fixed top-0 md:top-2 items-start md:px-0 px-4 py-2 md:py-0 z-30 rounded-xs text-white ">
        <button
          className="w-24 md:w-36 px-4 md:px-6 bg-white/30 rounded "
          onClick={() => {
            navigate("/"), setOnInfo(false);
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
        <CustomButton
        custom="md:mt-8 "
          type="button"
          onClick={() => {
            navigateToInfo();
          }}
        >
          < MenuOutlined
          className="text-3xl"
          />
        </CustomButton>
      </div>
    </>
  );
};
