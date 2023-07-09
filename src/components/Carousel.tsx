// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Swiper, SwiperSlide,  } from 'swiper/react';
//  import { Navigation } from "swiper"; 
import 'swiper/css';
import "swiper/css/autoplay";
// import "swiper/css/navigation";
import { FC } from 'react';
import { Autoplay } from 'swiper/modules';

type Props = {
  children: ReactNode;
  // slides: string[]
}

export const Carousel:FC<Props> = ({
  // slides,
   children
  }) => {

  return (
    <Swiper
      className='relative'
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      // navigation
     
      modules={[Autoplay]}
      // className=" mySwiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: true
    }}
    >
      <div  className='absolute w-32 h-32 bottom-[10%] right-[20%] z-10'>
      <a href="http://www.veszprembalaton2023.hu " target='blank'>

      <img src="/VEB2023-logo_hu.png" alt="" />
      </a>
      </div>

      {/* <SwiperSlide>
        {children}
      </SwiperSlide> */}
      {children.map((child)=> 
        <SwiperSlide 
        className='flex justify-center
         rounded-xl'
        >
          {child}
          </SwiperSlide>
      )}
      {/* {slides.map((slide)=> 
        <SwiperSlide key={slide} 
        className='flex justify-center
         rounded-xl'
        >
            
          <img  className='object-contain' src={slide}></img>
          </SwiperSlide>
      )} */}
     
      
    </Swiper>
  );
};