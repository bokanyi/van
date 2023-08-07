// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { FC } from 'react';
import { Autoplay } from 'swiper/modules';

type Props = {
  children: ReactNode;
}

export const Carousel:FC<Props> = ({
   children
  }) => {

  return (
    <Swiper
      className='relative'
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      // grabCursor={true}
     
      modules={[Autoplay]}
      autoplay={{
        delay: 8000,
        disableOnInteraction: true
    }}
    >
      <div  className='absolute w-40 h-40 bottom-[10%] right-[20%] z-10'>
      <a href="http://www.veszprembalaton2023.hu " target='blank'>

      <img className="invert" src="/VEB2023-logo_hu.png" alt="" />
      </a>
      </div>

      {children.map((child)=> 
        <SwiperSlide 
        className='flex justify-center
         rounded-xl'
        >
          {child}
          </SwiperSlide>
      )}

     
      
    </Swiper>
  );
};