// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { FC } from 'react';
import { Autoplay } from 'swiper/modules';


type Props = {
  delay: number;
  children: ReactNode;
}

export const Carousel:FC<Props> = ({ 
    delay,
   children
  }) => {

  return (
    <Swiper
      className='relative'
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: delay,
        disableOnInteraction: true
    }}
    >

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