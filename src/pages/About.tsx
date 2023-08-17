import { Page } from '../components/Page'
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { Carousel } from "../components/Carousel";

export const About = () => {
  const content = useGlobal($content);

  return (
    <div>
    {/* <Page custom={"min-h-screen py-40 bg-light-rose"}>
      <h1 className='italic'>Hamarosan...</h1>
    </Page> */}
    
    <Page custom="bg-orange pt-10 md:pt-40">
        {/* <div className="max-w-4xl md:w-[56rem] m-auto p-10 flex md:flex-row flex-col gap-10">
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
                    <p>{sections}</p>
                  </div>
                )
              })}
            </Carousel>
              <h1 className=" italic text-end">"</h1>
            </div>
            <h3 className="italic text-end">Hordós Johanna</h3>
      
          </div>
        </div> */}
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
                    <p>{sections}</p>
                  </div>
                )
              })}
            </Carousel>
              <h1 className=" italic text-end">"</h1>
            </div>
            <h3 className="italic text-end">Hordós Johanna</h3>
          </div>
        </div>
      </Page>

      <Page custom=" bg-orange px-10 md:py-40  m-auto items-center">
        <div className='max-w-4xl'>
        <p>{content.story[2]}</p>
        </div>
      </Page>

      <Page custom="bg-orange h-screen ">
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
  )
}
