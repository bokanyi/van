import { Page } from "../components/Page";
import { Cookies } from "../components/Cookies";

export const Aszf = () => {
  return (
    <div>
      <Page custom={"min-h-screen pt-60 p-40 bg-light-rose"}>
        <div className="bg-orange h-40 w-screen fixed top-0"></div>
        <h1 className="italic"></h1>
        <Cookies/>

      </Page>
    </div>
  );
};
