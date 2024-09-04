'use client'

import Slider from "./components/Slider";
import { BentoGrid } from "./components/ui/Bento";
import IconCloud from "./components/ui/IconCloud";
import { motion } from "framer-motion";
import car6 from '../public/images/car6.jpg'
import car7 from '../public/images/car7.jpg'
import car8 from '../public/images/car8.jpg'
import car9 from '../public/images/car9.jpg'
import carCard1 from '../public/images/car card1.jpg'
import carCard2 from '../public/images/car card2.jpg'
import carCard3 from '../public/images/car card3.jpg'
import bannerCar from '../public/images/banner-car.jpg'
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BlurFade from "./components/ui/BlurFade";
import ShineBorder from "./components/ui/ShineBorder";
import { NeonGradientCard } from "./components/ui/NeonGradientCard";
import { BorderBeam } from "./components/ui/BorderBeam";


export default function Home() {
  const slugs = [
    "rollsroyce",
    "landrover",
    "bmw",
    "mercedes",
    "lamborghini",
    "bentley",
    "porsche",
    "mclaren",
    "ferrari",
  ];
  return (
    <main className="home-page text-white min-h-screen">
      <Slider></Slider>
      <div className="categories py-12">
        <div className="container px-4 flex items-center justify-center gap-5">
          <motion.div
            className="w-2/4"
            initial={{ x: -50, opacity: 0 }}
            transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-7xl font-bold">Our luxury cars types, here is what your hear love.</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
            whileInView={{ opacity: 1 }}
          >
            <IconCloud iconSlugs={slugs}></IconCloud>
          </motion.div>
        </div>
      </div>
      <div className="bento-grid py-12">
        <div className="container px-4">
          <BentoGrid>
            <BlurFade delay={0.25} inView={true}>
              <div className="bento-card h-full transition-all ease-in-out duration-300 group relative overflow-hidden border border-primary-400/25 cursor-pointer shadow-[inset_0_-20px_80px_-20px_#efaf302b] hover:shadow-[inset_0_-20px_80px_-20px_#efaf3059] rounded-3xl p-10 flex flex-col justify-end">
                <Link href='/' className="w-12 h-12 rounded-full grid duration-300 place-items-center transition-all ease-in-out border group-hover:bg-primary-300 border-primary-300 absolute right-3 top-3 z-10">
                  <Icon icon="mingcute:arrow-right-up-fill" fontSize={28} className="group-hover:rotate-45 transition-all ease-in-out duration-300" />
                </Link>
                <Image src={car6} alt="car 6" className="w-full -z-10 rounded-xl absolute top-0 left-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] object-cover h-full" />
                <div className="flex flex-col translate-y-20 transition-all ease-in-out group-hover:translate-y-0 duration-300">
                  <h2 className="text-4xl font-bold mb-2 uppercase">Iconic</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum explicabo, totam voluptatem odit numquam..</p>
                  <button className="line-hover flex items-center gap-2 text-primary-300 w-fit mt-10 group-hover:mt-4">
                    <span>Learn more</span>
                    <Icon icon='bi:arrow-right' fontSize={18} />
                  </button>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.32} className="col-span-2" inView={true}>
              <div className="bento-card h-full transition-all ease-in-out duration-300 group relative overflow-hidden border border-primary-400/25 cursor-pointer shadow-[inset_0_-20px_80px_-20px_#efaf302b] hover:shadow-[inset_0_-20px_80px_-20px_#efaf3059] rounded-3xl p-10 flex flex-col justify-end">
                <Link href='/' className="w-12 h-12 rounded-full grid duration-300 place-items-center transition-all ease-in-out border group-hover:bg-primary-300 border-primary-300 absolute right-3 top-3 z-10">
                  <Icon icon="mingcute:arrow-right-up-fill" fontSize={28} className="group-hover:rotate-45 transition-all ease-in-out duration-300" />
                </Link>
                <Image src={car7} alt="car 7" className="w-full -z-10 rounded-xl absolute top-0 left-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] object-cover h-full" />
                <div className="flex flex-col translate-y-20 transition-all ease-in-out group-hover:translate-y-0 duration-300">
                  <h2 className="text-4xl font-bold mb-2 uppercase">Majesty</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum explicabo, totam voluptatem odit numquam..</p>
                  <button className="line-hover flex items-center gap-2 text-primary-300 w-fit mt-10 group-hover:mt-4">
                    <span>Learn more</span>
                    <Icon icon='bi:arrow-right' fontSize={18} />
                  </button>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.37} className="col-span-2" inView={true}>
              <div className="bento-card h-full transition-all ease-in-out duration-300 group relative overflow-hidden border border-primary-400/25 cursor-pointer shadow-[inset_0_-20px_80px_-20px_#efaf302b] hover:shadow-[inset_0_-20px_80px_-20px_#efaf3059] rounded-3xl p-10 flex flex-col justify-end">
                <Link href='/' className="w-12 h-12 rounded-full grid duration-300 place-items-center transition-all ease-in-out border group-hover:bg-primary-300 border-primary-300 absolute right-3 top-3 z-10">
                  <Icon icon="mingcute:arrow-right-up-fill" fontSize={28} className="group-hover:rotate-45 transition-all ease-in-out duration-300" />
                </Link>
                <Image src={car8} alt="car 8" className="w-full -z-10 rounded-xl absolute top-0 left-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] object-cover h-full" />
                <div className="flex flex-col translate-y-20 transition-all ease-in-out group-hover:translate-y-0 duration-300">
                  <h2 className="text-4xl font-bold mb-2 uppercase">Mastercraft</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum explicabo, totam voluptatem odit numquam..</p>
                  <button className="line-hover flex items-center gap-2 text-primary-300 w-fit mt-10 group-hover:mt-4">
                    <span>Learn more</span>
                    <Icon icon='bi:arrow-right' fontSize={18} />
                  </button>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.42} inView={true}>
              <div className="bento-card h-full transition-all ease-in-out duration-300 group relative overflow-hidden border border-primary-400/25 cursor-pointer shadow-[inset_0_-20px_80px_-20px_#efaf302b] hover:shadow-[inset_0_-20px_80px_-20px_#efaf3059] rounded-3xl p-10 flex flex-col justify-end">
                <Link href='/' className="w-12 h-12 rounded-full grid duration-300 place-items-center transition-all ease-in-out border group-hover:bg-primary-300 border-primary-300 absolute right-3 top-3 z-10">
                  <Icon icon="mingcute:arrow-right-up-fill" fontSize={28} className="group-hover:rotate-45 transition-all ease-in-out duration-300" />
                </Link>
                <Image src={car9} alt="car 9" className="w-full -z-10 rounded-xl absolute top-0 left-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] object-cover h-full" />
                <div className="flex flex-col translate-y-20 transition-all ease-in-out group-hover:translate-y-0 duration-300">
                  <h2 className="text-4xl font-bold mb-2 uppercase">Elite</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum explicabo, totam voluptatem odit numquam..</p>
                  <button className="line-hover flex items-center gap-2 text-primary-300 w-fit mt-10 group-hover:mt-4">
                    <span>Learn more</span>
                    <Icon icon='bi:arrow-right' fontSize={18} />
                  </button>
                </div>
              </div>
            </BlurFade>
          </BentoGrid>
        </div>
        <div className="cars py-28">
          <div className="container px-4">
            <BlurFade delay={0.25} inView={true}>
              <h2 className="text-7xl uppercase text-center font-bold">Take your car</h2>
              <Icon icon='bxs:down-arrow' fontSize={50} className="mx-auto text-primary-300 mt-5 animate-bounce" />
            </BlurFade>
            <div className="boxes-container flex justify-between gap-5 mt-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
                className="w-full"
              >
                <ShineBorder
                  borderRadius={15}
                  className="border w-full !bg-transparent border-neutral-700 relative flex flex-col h-full"
                  color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
                >
                  <span className="isAvailable badge bg-green-700">Available</span>
                  <div className="img w-full h-[250px]">
                    <Image src={carCard1} alt="car card 1" className="rounded-xl w-full h-full object-cover" />
                  </div>
                  <div className="info w-full mt-5">
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-bold">Mercedes Benz CLA 200 Coupé</h3>
                      <div className="color-box-container">
                        <span className="block w-10 h-10 ms-auto mb-2 rounded-lg bg-[#020507] border border-neutral-600"></span>
                      </div>
                    </div>
                    <p className="mt-3 mb-5">
                      You can fit out the new CLA as you wish, just lean your back.
                      Get it now & Play By Your Rules
                    </p>
                  </div>
                  <button className="prime-btn w-full mt-auto">
                    Place an order
                  </button>
                </ShineBorder>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
                className="w-full"
              >
                <ShineBorder
                  borderRadius={15}
                  className="border w-full !bg-transparent border-neutral-700 relative flex flex-col h-full"
                  color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
                >
                  <span className="isAvailable badge bg-rose-700">Unavailable</span>
                  <div className="img w-full h-[250px]">
                    <Image src={carCard2} alt="car card 2" className="rounded-xl w-full h-full object-cover" />
                  </div>
                  <div className="info w-full mt-5">
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-bold">HE Range ROVER SV AUTOBIOGRAPHY</h3>
                      <div className="color-box-container">
                        <span className="block w-10 h-10 ms-auto mb-2 rounded-lg bg-[#14181D] border border-neutral-600"></span>
                      </div>
                    </div>
                    <p className="mt-3 mb-5">
                      An unmatched combination of luxury, design, and all-terrain performance ... specific to your exacting taste.
                    </p>
                  </div>
                  <button className="prime-btn w-full mt-auto" disabled={true}>
                    Place an order
                  </button>
                </ShineBorder>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
                className="w-full"
              >
                <ShineBorder
                  borderRadius={15}
                  className="border w-full !bg-transparent border-neutral-700 relative flex flex-col h-full"
                  color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
                >
                  <span className="isAvailable badge bg-green-700">Available</span>
                  <div className="img w-full h-[250px]">
                    <Image src={carCard3} alt="car card 3" className="rounded-xl w-full h-full object-cover" />
                  </div>
                  <div className="info w-full mt-5">
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-bold">Lamborghini URUS</h3>
                      <div className="color-box-container">
                        <span className="block w-10 h-10 ms-auto mb-2 rounded-lg bg-[#918D8C] border border-neutral-600"></span>
                      </div>
                    </div>
                    <p className="mt-3 mb-5">
                      Conquer Any Road In The Unique Masculine Grey Color
                      The Only Car With Such Features In Egypt. Exclusively Available At Elziny Auto
                    </p>
                  </div>
                  <button className="prime-btn w-full mt-auto">
                    Place an order
                  </button>
                </ShineBorder>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
              className="w-full"
            >
              <Link href="#" className="mt-20 line-hover hover:text-primary-300 transition-all ease-in-out duration-300 flex items-center gap-3 text-xl uppercase w-fit mx-auto">
                <span>See more cars</span>
                <Icon icon='bi:arrow-right' className="group-hover:animate-pulse" fontSize={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="banner py-28">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ type: "tween", ease: "easeOut", delay: 0.4 }}
              className="w-full"
            >
              <NeonGradientCard borderSize={0} borderRadius={16} neonColors={{ firstColor: "#efaf30", secondColor: "#8b3b15" }}>
                <div className="banner-box mb-10 p-14 h-[400px] relative rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-primary-400 to-black flex items-center gap-3 justify-between">
                  <div className="w-3/5 z-10">
                    <h1 className="text-7xl uppercase font-bold">Your master piece car is here for you.</h1>
                    <button className="text-primary-400 group border border-transparent duration-300 border-neutral-900 bg-neutral-900 mt-8 p-3 rounded-lg px-8 flex items-center gap-2 font-bold uppercase transition-all ease-in-out hover:border-white hover:text-white">
                      <span className="group-hover:animate-pulse">Go to cars</span>
                      <Icon icon='bi:arrow-right' className="group-hover:animate-pulse" fontSize={20} />
                    </button>
                  </div>
                  <div className="image-banner absolute top-0 -right-24 h-full w-3/4">
                    <Image src={bannerCar} alt="banner car" className="w-full h-full object-cover object-bottom [mask-image:linear-gradient(to_right,transparent_15%,#000_100%)]" />
                  </div>
                </div>
              </NeonGradientCard>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
