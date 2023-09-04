import { useState, useEffect } from 'react';
import { Carousel } from "../components/Carousel";
import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import supabase from "../config/supabaseClient";
import { CustomButton } from "../components/CustomButton";
import {CaretRightOutlined} from "@ant-design/icons";
import { navigate } from "../states/routes";
import { CookiePopup } from "../components/CookiePopup";
import { $cookieConfirm } from "../states/content";

export const Home = () => {
  const content = useGlobal($content);
  const cookieConfirm = useGlobal($cookieConfirm);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  console.log(supabase);
  return (
    <div>
      { !cookieConfirm && <CookiePopup/>}
      { !cookieConfirm &&
      <div
      className={`fixed h-screen w-screen bg-orange z-20 flex flex-col justify-center items-center  
      transition-all duration-300
       ${!visible && '-translate-y-[100vh] '} 
      font-prata italic `}
      >
        <div className='relative flex flex-col gap-6 p-4'>
        <h1 className='' >Veszprémiek a nagyvilágban</h1>
        <h2 className='absolute top-36 right-4  not-italic'>Koncertsorozat</h2>
        <p className='absolute top-52 right-4 not-italic '>2023 ősz</p>
        </div>

      </div> }

      <div className="w-screen relative">
      <div  className='absolute w-40 h-40 bottom-[10%] right-[20%] z-10'>
      <a href="http://www.veszprembalaton2023.hu " target='blank'>
      <img className="invert" src="/VEB2023-logo_hu.png" alt="" />
      </a>
      </div>
        <Carousel
        delay={8000}
        >
          {content.events.map((event) => {
            return (
              <div
                className={`w-screen h-screen bg-orange flex bg-cover bg-[url('${event.img}')]`}
                style={{
                  color: "white",
                  backgroundImage: `url('${event.img}')`,
                }}
              >
              
                <div className="md:w-[520px] px-6 relative text-center md:text-right m-auto z-10">
                  <h3 className=" inline ">{event.title}</h3>
                  <p className=" ">{event.date}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      
      <Page custom="bg-orange h-screen">
        <div className="max-w-4xl md:p-0 p-10 italic">
        <h3 className="bg-light-rose inline underline ">Veszprémi kötődésű zenészek</h3><h3 className="inline" >, akik pályafutásuk során messzire sodródtak a nagyvilágban, <u>most hazatérnek</u>, és négy alkalmas élménykoncertre invitálnak az őszi hónapokban</h3>
        </div>
      </Page>

      <Page custom="bg-light-rose md:h-screen min-h-[800px]">
        <div className="max-w-4xl m-auto p-10 md:p-0 flex md:flex-row flex-col gap-10">
          <div className="grow md:w-[50%] border:none; bg-contain">
            <img src="/hordos_johanna.jpg" alt="" />
          </div>
          <div className="grow md:w-[50%] flex flex-col justify-between">
            <div className="md:hidden ">
            <h1 className=" italic  ">"</h1>
            {content.quotation.map((sections) => {
                return (
                  <div>
                    <p>{sections}</p>
                    <br />
                  </div>
                )
              })}
                <h1 className=" italic text-end">"</h1>
            </div>
            <div className="hidden md:block">
              <h1 className=" italic  ">"</h1>
            <Carousel
             delay={18000}
            >
              {content.quotation.map((sections) => {
                return (
                  <div>
                    <p className='italic'>{sections}</p>
                  </div>
                )
              })}
            </Carousel>
              <h1 className=" italic text-end">"</h1>
            </div>
            <h3 className=" text-end">Hordós Johanna</h3>
  

            <CustomButton
        type="button"
        custom="self-end bg-orange hover:bg-light-rose "
        onClick={() => {
          navigate("/about");
        }}        >
          <p >Rólunk</p>
          <CaretRightOutlined className="text-xl"/>
        </CustomButton>
          </div>
        </div>
      </Page>

      <Page custom="bg-orange md:h-screen min-h-[800px] p-10 py-10 md:p-0 flex-col m-auto items-center">
        <div className="max-w-4xl md:h-full flex flex-col justify-between md:py-40 relative gap-10">

          <h1 className="self-start">KONCERTEK</h1>
        <div className="flex flex-col md:gap-4 gap-4">
          {content.events.map((event, index)=> {
            return <>
            
            <div className="grow md:w-[56rem] flex justify-between gap-2 ">
              
              <p>{event.title}</p>
              <p>{event.dateShort}</p>


            </div>
              {index < 3 && <hr />}
            </>
          })}
        </div>
      

        <CustomButton
        type="button"
        custom="self-end bg-light-rose hover:bg-orange"
        onClick={() => {
          navigate("/events");
        }}        >
          <p >Bővebben</p>
          <CaretRightOutlined className="text-xl"/>
        </CustomButton>
        </div>
        
      </Page>

      <Page custom="bg-orange md:h-[500px] min-h-[300px] ">
        <div className="flex w-96 max-w[800px] max-height-[448px] md:p-40 p-10 relative items-center  justify-center">
          <iframe
            className="border:none overflow-hidden
       absolute w-80 md:w-[800px] md:h-[448px] grow
      "
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVeszpremBalaton2023%2Fvideos%2F1131369687497022%2F&show_text=false&width=560&t=0"
            width="800"
            height="314"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Page>
      
    </div>
  );
};
