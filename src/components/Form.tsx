import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
// import '@hcaptcha/types';
// hcaptcha.execute();

export default function Form() {
  const [token, setToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current?.execute();
    // if (captchaRef.current) {
    //     captchaRef.current.execute();
    //   }
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