import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import NavigationButtons from './NavigationButtons'
import { useState } from 'react';


function DetailsSlider({car}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                loop={true}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 !h-[auto] rounded-3xl"
            >
                {
                    car.images?.map((image, index) => (
                        <SwiperSlide key={index} className='relative rounded-3xl !h-auto'>
                            <img className='!w-full !h-full rounded-3xl' src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/cars/${image}`} />
                        </SwiperSlide>
                    ))
                }
                <NavigationButtons></NavigationButtons>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper lg:!h-[150px] !h-[100px]"
            >
                {
                    car.images?.map((image, index) => (
                        <SwiperSlide key={index} className='!items-stretch cursor-pointer'>
                            <img width={150} height={150} className='!w-full my-3 lg:rounded-2xl rounded-xl !h-[auto]' src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/cars/${image}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default DetailsSlider