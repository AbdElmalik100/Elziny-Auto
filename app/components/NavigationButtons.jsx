import React from 'react'
import { useSwiper } from 'swiper/react';
import { Icon } from '@iconify/react'


function NavigationButtons() {
    const swiper = useSwiper()
    
    return (
        <>
            <button className='prev z-10 absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 rounded-full border grid place-items-center transition-all ease-out hover:text-primary-400 hover:border-primary-400' title='Previous'
                onClick={() => swiper.slidePrev()}>
                <Icon icon='material-symbols:arrow-back-2-rounded' className='transition-all ease-out' fontSize={24} />
            </button>
            <button className='next z-10 absolute top-1/2 -translate-y-1/2 right-5 w-10 h-10 rounded-full border grid place-items-center transition-all ease-out hover:text-primary-400 hover:border-primary-400' title='Previous'
                onClick={() => swiper.slideNext()}>
                <Icon icon='material-symbols:arrow-back-2-rounded' className='transition-all ease-out rotate-180' fontSize={24} />
            </button>
        </>
    )
}

export default NavigationButtons