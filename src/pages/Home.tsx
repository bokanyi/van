import { Carousel } from "../components/Carousel";
import { Page } from "../components/Page";
// import { Card } from "../components/Card";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import supabase from "../config/supabaseClient";
// import Form from "../components/Form";

export const Home = () => {
  const content = useGlobal($content);

  console.log(supabase);
  return (
    <div>
      {/* <Page custom={" w-screen bg-orange py-40"}> */}
      <div className="w-screen ">
        <Carousel
        //  slides={["/pexels-cottonbro-studio-7095504.jpg"]}
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
                {/* <img className="absolute h-screen z-0" src={`${event.img}`} alt="" /> */}
                <div className="md:w-[520px] px-6 relative text-center md:text-right m-auto z-10">
                  <h3 className=" inline ">{event.title}</h3>
                  <p className=" ">{event.date}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Page custom="bg-orange h-auto">
        {/* <hr /> */}
        <div className="p-10 md:p-40">
          <h3 className="italic animate-lineUp">{content.story[0]}</h3>
        </div>
        {/* <hr /> */}
      </Page>
      <Page custom="bg-orange h-max">
        <div className=" max-w m-auto p-10 flex md:flex-row flex-col gap-10">
          <div className="grow md:w-[50%] border:none; bg-contain">
            <img src="/hordos_johanna.jpg" alt="" />
          </div>
          <div className="grow md:w-[50%] flex flex-col gap-10 justify-between">
            <p className="animate-lineUp">{content.story[2]}</p>
            <h3 className="italic text-end">Hordós Johanna</h3>
            {/* <p >{content.story[3]}</p> */}
          </div>
        </div>
      </Page>
      {/* <Page custom="bg-orange h-auto">
        <div className="h-screen items-center m-auto p-10 flex md:flex-row flex-col gap-10 " >
      <iframe className="grow md:w-[50%] border:none overflow-hidden 
      md:max-w-[560px] md:h[314px] 
      "  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVeszpremBalaton2023%2Fvideos%2F1131369687497022%2F&show_text=false&width=560&t=0"     scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
          <p className="grow md:w-[50%]">{content.story[1]}</p>
        </div>
      </Page> */}
      <Page custom="bg-orange px-10 md:px-40  m-auto items-center">
        <p>{content.story[3]}</p>
      </Page>
      <Page custom="bg-orange  ">
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
