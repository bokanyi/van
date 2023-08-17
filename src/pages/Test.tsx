import { Page } from '../components/Page'
import Captcha from "../components/Captcha";

export const Test = () => {
    return (
      <div>
      <Page custom={"bg-orange min-h-screen py-40"}>
        hello
        <Captcha></Captcha>
      </Page>
    </div>
    )
  }