// import { Page } from "../components/Page";
import { Carousel } from "../components/Carousel";
// import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div>
      {/* <Page custom={" w-screen bg-orange py-40"}> */}
      <div className="w-screen ">
        <Carousel
        //  slides={["/pexels-cottonbro-studio-7095504.jpg"]}
        >
          <div className="w-screen h-screen bg-orange flex">
            <div className="w-[520px] relative text-right m-auto">
              <h1 className="font-prata inline leading-3">Veszprémiek</h1>
              <h3 className=" ">a Nagyvilágban</h3>
            </div>
          </div>
          <div className="w-screen h-screen bg-black">
            <img
              className="object-cover w-screen h-screen"
              src="/pexels-cottonbro-studio-7095504.jpg"
              alt=""
            />
          </div>
          <div className="w-screen h-screen flex flex-col relative justify-center items-center">
            <div className="flex flex-col md:absolute md:right-[10%] md:top-[30%]">
              <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 self-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <h3 className="italic">2023 ősz</h3>
              </div>
            </div>
              <div className="md:absolute md:left-[10%] md:bottom-[30%]">
                <h3>Classic+ koncert sorozat</h3>
                <h3 className="italic">Veszprém</h3>
              </div>
          </div>
          <div className="w-screen h-screen bg-light-rose flex justify-center items-center">
             <img src="/kotta_02.png" alt="" className="absolute left-[48%] top-[17%]" />
              <h1 className='italic '>Hamarosan...</h1>
            
          </div>
        </Carousel>
      </div>

    </div>
  );
};
