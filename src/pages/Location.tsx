import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { FacebookFilled, MailFilled } from "@ant-design/icons";

export const Location = () => {
  const content = useGlobal($content);

  return (
    // <div>
    <Page custom={"min-h-screen py-40 bg-light-rose flex-col "}>
      <div className="
      w-screen px-10 lg:px-0 mb-10 
      max-w-4xl m-auto p-10 flex flex-col gap-10">
        <h1 className="">Helyszínek</h1>
        <h3>Deák Ferenc utcai Rendezvényközpont</h3>
        <p>
          Veszprém, Deák Ferenc u. 13, 8200
          <br />
          Parkoló: 50 méterre a helyszíntől a Pajta utca ingyenes parkolójában
        </p>
        <div className={`flex overflow-scroll rounded-md gap-4`}>
          <img
            className="h-80 object-cover rounded-md"
            src="/rendezvenzkozpont_1.jpeg"
            alt=""
          />
          <img
            className="h-80 object-cover rounded-md"
            src="/rendezvenzkozpont_2.jpeg"
            alt=""
          />
          <img
            className="h-80 object-cover rounded-md"
            src="/rendezvenzkozpont_3.jpeg"
            alt=""
          />
        </div>
        <div className= " filter grayscale lg:w-[56rem] max-w-4xl rounded-lg">
          <iframe
            className="w-full h-80  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.1381154246747!2d17.905395000000002!3d47.096363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47699a5d870b24cb%3A0x3a98f469034ee345!2sVeszpr%C3%A9m%2C%20De%C3%A1k%20Ferenc%20u.%2013%2C%208200!5e0!3m2!1shu!2shu!4v1694109344821!5m2!1shu!2shu"
            // width="600" height="450"
            loading="lazy"
          ></iframe>
        </div>

        

        <h3>Hangvilla, Medelssohn Kamarazenekar Próbaterme</h3>
        <p>Veszprém, Brusznyai Árpád u. 2, 8200</p>
        <div className="filter grayscale  lg:w-[56rem] max-w-4xl rounded-lg">
          <iframe
            className="w-full h-80  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.3506598705208!2d17.90656717706091!3d47.092195971147284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47699a68aff08c35%3A0x2e2ef9f3b6569125!2zSGFuZ3ZpbGxhIE11bHRpZnVua2Npb27DoWxpcyBLw7Z6w7Zzc8OpZ2kgVMOpcg!5e0!3m2!1shu!2shu!4v1694109567238!5m2!1shu!2shu"
            // width="600" height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Page>
    // </div>
  );
};
