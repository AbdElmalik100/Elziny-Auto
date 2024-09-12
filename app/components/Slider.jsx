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
        <div className="landing-slider lg:min-h-screen h-1/2 relative">
            <a href="#Categories" className="scroll-down w-6 h-10 z-20 rounded-full py-3 absolute bottom-20 left-1/2 -translate-x-1/2 border border-neutral-400 lg:hidden animate-pulse transition-transform ease-in-out flex items-end justify-center">
                <span className="dot w-1 h-1 bg-neutral-400 rounded-full block animate-bounce"></span>
            </a>
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
                    <div className="absolute flex flex-col lg:items-start items-center z-10 top-1/2 lg:w-1/2 w-[calc(100%-15px)] lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-64 left-1/2 lg:text-start text-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="lg:text-8xl text-4xl font-bold uppercase bg-clip-text bg-gradient-to-t from-neutral-300 to-white text-transparent">
                                The Luxury Drive Experience
                                <span className="text-primary-400">.</span>
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <p className="mt-3 lg:w-1/2 w-full">
                                <span className="font-bold text-primary-400 text-xl italic">Luxury</span> cars represent the pinnacle of automotive design and engineering, blending exceptional performance with unparalleled comfort and style.
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <Link href='#' className="line-hover text-primary-400 mt-4 flex items-center gap-3 lg:justify-start justify-center">
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
                    <div className="absolute flex flex-col lg:items-start items-center z-10 top-1/2 lg:w-1/2 w-[calc(100%-15px)] lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-64 left-1/2 lg:text-start text-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="lg:text-8xl text-4xl font-bold uppercase">
                                Opulent Drives for the <span className="text-primary-400 uppercase">Elite</span>
                                <span className="text-primary-400">.</span>
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} duration={0.5}>
                            <p className="mt-3 lg:w-1/2 w-full">
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
                    <div className="absolute flex flex-col z-10 top-1/2 lg:w-[1300px] w-[calc(100%-15px)] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center items-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="lg:text-8xl text-3xl font-bold uppercase">
                                Where Elegance and Power Converge
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} width="100%" duration={0.5}>
                            <p className="mt-4 lg:text-3xl text-lg w-fit mx-auto relative before:absolute before:w-[150px] before:-left-[165px] before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:rounded-full before:bg-primary-300 after:absolute after:w-[150px] after:-right-[165px] after:top-1/2 after:-translate-y-1/2 after:h-0.5 after:rounded-full after:bg-primary-300">
                                The Art of Automotive Excellence
                            </p>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <div className="slider-overlay">
                        <Image src={car4} alt="car-4"/>
                    </div>
                    <div className="absolute flex flex-col z-10 top-1/2 lg:w-[1000px] w-[calc(100%-15px)] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center items-center">
                        <BoxReveal boxColor={"#f3c860 "} duration={0.5}>
                            <h1 className="lg:text-8xl text-4xl font-bold uppercase text-primary-400">
                                The World of Luxury is Yours
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#f3c860"} width="100%" duration={0.5}>
                            <Link href='/cars-for-sale' className="prime-btn block w-fit mx-auto mt-8">Place An Order Now</Link>
                        </BoxReveal>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider