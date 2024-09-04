import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import car1 from '../../public/images/car1.jpg'
import car2 from '../../public/images/car2.jpg'
import car3 from '../../public/images/car3.jpg'
import car4 from '../../public/images/car4.jpg'
import BoxReveal from "./ui/BoxReveal";
import Link from "next/link";
import { Icon } from '@iconify/react';


function Slider() {
    return (
        <div className="landing-slider min-h-screen relative">
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                direction="vertical"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper relative"
            >
                <SwiperSlide className="relative">
                    <div className="slider-overlay">
                        <Image src={car1} alt="car-1" />
                    </div>
                    <div className="absolute z-10 top-1/2 w-1/2 -translate-y-1/2 left-64 text-start">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="text-8xl font-bold uppercase bg-clip-text bg-gradient-to-t from-neutral-300 to-white text-transparent">
                                The Luxury Drive Experience
                                <span className="text-primary-400">.</span>
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <p className="mt-3 w-1/2">
                                <span className="font-bold text-primary-400 text-xl italic">Luxury</span> cars represent the pinnacle of automotive design and engineering, blending exceptional performance with unparalleled comfort and style.
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <Link href='#' className="line-hover text-primary-400 mt-4 flex items-center gap-3">
                                <span className="block">See more</span>
                                <Icon icon='bi:arrow-right' fontSize={20} />
                            </Link>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <div className="slider-overlay">
                        <Image src={car2} alt="car-2" />
                    </div>
                    <div className="absolute z-10 top-1/2 w-1/2 -translate-y-1/2 left-64 text-start">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="text-8xl font-bold uppercase">
                                Opulent Drives for the <span className="text-primary-400 uppercase">Elite</span>
                                <span className="text-primary-400">.</span>
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <p className="mt-3 w-1/2">
                                Whether it&apos;s the smooth, powerful acceleration, the quiet, opulent interiors, or the cutting-edge features, luxury cars stand as symbols of prestige and
                                <span className="font-bold text-primary-400 text-xl uppercase"> sophistication.</span>
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <Link href='#' className="line-hover text-primary-400 mt-4 flex items-center gap-3">
                                <span className="block">See more</span>
                                <Icon icon='bi:arrow-right' fontSize={20} />
                            </Link>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <div className="slider-overlay">
                        <Image src={car3} alt="car-3" />
                    </div>
                    <div className="absolute z-10 top-1/2 w-[1300px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="text-8xl font-bold uppercase">
                                Where Elegance and Power Converge
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} width="100%" duration={0.5}>
                            <p className="mt-4 text-3xl w-fit mx-auto relative before:absolute before:w-[150px] before:-left-[165px] before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:rounded-full before:bg-primary-300 after:absolute after:w-[150px] after:-right-[165px] after:top-1/2 after:-translate-y-1/2 after:h-0.5 after:rounded-full after:bg-primary-300">
                                The Art of Automotive Excellence
                            </p>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <div className="slider-overlay">
                        <Image src={car4} alt="car-4" />
                    </div>
                    <div className="absolute z-10 top-1/2 w-[1000px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="text-8xl font-bold uppercase text-primary-400">
                                The World of Luxury is Yours
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} width="100%" duration={0.5}>
                            <button className="prime-btn mt-8">Place An Order Now</button>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider