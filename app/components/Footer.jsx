"use client"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BorderBeam } from './ui/BorderBeam'
import elzinyLogo from '../../public/images/Elziny Logo Alt.png'
import Image from "next/image"

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 0.4 }}
        >
            <footer className='lg:p-12 p-8 px-3 m-5 overflow-hidden relative w-auto h-auto bg-neutral-950 rounded-3xl text-white'>
                <BorderBeam size={550} colorFrom='#f3c860' colorTo='#723215' duration={12} delay={9}></BorderBeam>
                <div className="container px-4">
                    <div className='grid grid-cols-4 gap-10 justify-items-center'>
                        <div className="left-side lg:col-span-1 col-span-4">
                            <Link href='/' className='uppercase font-bold text-4xl mb-3 block lg:text-start text-center'>
                                <Image width={200} src={elzinyLogo} alt="Elziny Logo" priority />
                            </Link>
                            <p className='text-neutral-400 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla vitae sed in vel soluta debitis quidem quis illo provident facilis, eos architecto sapiente repellendus quibusdam dolor sit numquam laudantium iusto!</p>
                            <div className="contacts mt-8 flex flex-col gap-4">
                                <div className="location flex items-center gap-3">
                                    <Icon icon='mingcute:location-fill' className='text-primary-300' fontSize={20}></Icon>
                                    <span>New Cairo 1, Cairo Governorate 4740003</span>
                                </div>
                                <div className="email flex items-center gap-3">
                                    <Icon icon='material-symbols:mail-rounded' className='text-primary-300' fontSize={20}></Icon>
                                    <a href='mailto:elzinyw@gmail.com' className='line-hover transition-all ease-in-out duration-300 hover:text-primary-300'>elzinyw@gmail.com</a>
                                </div>
                                <div className="phone flex items-center gap-3">
                                    <Icon icon='mdi:phone' fontSize={20} className='text-primary-300'></Icon>
                                    <a href='tel:+2001111874999' className='line-hover transition-all ease-in-out duration-300 hover:text-primary-300'>+20 0111 187 4999</a>
                                </div>
                            </div>
                        </div>
                        <div className="mid-side lg:col-span-2 col-span-4 flex lg:gap-24 gap-10 w-full justify-center lg:flex-row flex-col lg:items-start items-center lg:text-start text-center">
                            <ul className='first-links flex flex-col gap-5'>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>About</Link>
                                </li>
                                <li>
                                    <Link href='/cars-for-sale' className='line-hover transition-all ease-in-out hover:text-primary-300'>Cars for sale</Link>
                                </li>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>Shop</Link>
                                </li>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>News</Link>
                                </li>
                            </ul>
                            <ul className='second-links flex flex-col gap-5'>
                                <li>
                                    <Link href='/categories' className='line-hover transition-all ease-in-out hover:text-primary-300'>Categories</Link>
                                </li>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>Contact us</Link>
                                </li>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>Privacy</Link>
                                </li>
                                <li>
                                    <Link href='#' className='line-hover transition-all ease-in-out hover:text-primary-300'>Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side basis-1/4 w-full lg:col-span-1 col-span-4">
                            <h2 className='font-bold uppercase text-lg mb-5 lg:text-start text-center'>
                                Follow us <span className='text-primary-300 italic ms-2'>On</span>
                            </h2>
                            <div className="social-links flex items-center gap-3 lg:justify-start justify-center">
                                <a href="https://www.facebook.com/elzinygroup" target='_blank' className='grid place-items-center w-10 h-10 border rounded-full transition-all ease-in-out duration-300 hover:text-primary-300 hover:border-primary-300'>
                                    <Icon icon='ri:facebook-fill' fontSize={22}></Icon>
                                </a>
                                <a href="www.instagram.com" target='_blank' className='grid place-items-center w-10 h-10 border rounded-full transition-all ease-in-out duration-300 hover:text-primary-300 hover:border-primary-300'>
                                    <Icon icon='basil:instagram-solid' fontSize={22}></Icon>
                                </a>
                                <a href="www.x.com" target='_blank' className='grid place-items-center w-10 h-10 border rounded-full transition-all ease-in-out duration-300 hover:text-primary-300 hover:border-primary-300'>
                                    <Icon icon='ri:twitter-x-line' fontSize={22}></Icon>
                                </a>
                                <a href="www.tiktok.com" target='_blank' className='grid place-items-center w-10 h-10 border rounded-full transition-all ease-in-out duration-300 hover:text-primary-300 hover:border-primary-300'>
                                    <Icon icon='ic:baseline-tiktok' fontSize={22}></Icon>
                                </a>
                            </div>
                            <div className='rounded-lg mt-8 overflow-hidden h-[225px] w-full'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d75938.00580774879!2d31.48126831332433!3d30.026636625829727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458230f8eec8f39%3A0xc0bbbdced89f01de!2sElziny%20auto!5e0!3m2!1sen!2seg!4v1725432213665!5m2!1sen!2seg" className='border-none w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='copyrights mt-20 pt-5 border-t border-neutral-500 flex items-center justify-between lg:text-base lg:flex-row flex-col-reverse lg:gap-0 gap-3'>
                        <span className='text-neutral-400'>
                            &copy; 2023 Elziny, All Rights Reserved
                        </span>
                        <div className="privacy-links flex items-center gap-3 text-neutral-400">
                            <Link href="#" className='transition-all duration-300 hover:text-primary-300'>Privacy</Link>
                            <span className='text-xl font-bold mb-2'>.</span>
                            <Link href="#" className='transition-all duration-300 hover:text-primary-300'>Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </motion.div>
    )
}

export default Footer