import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";


export default function Captcha() {
  const [token, setToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);


  const onLoad = () => {

    captchaRef.current?.execute();

  };

  useEffect(() => {

    if (token)
      console.log(`hCaptcha Token: ${token}`);

  }, [token]);

  return (
    <form>
      <HCaptcha
        sitekey="cef42da7-2198-451b-87bf-1528982aa4ec"
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />
    </form>
  );
}