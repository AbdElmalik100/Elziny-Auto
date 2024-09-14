'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCar } from '../../../store/slices/carsSlice'
import DetailsSlider from '../../../components/DetailsSlider'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

function CarDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const { car } = useSelector(state => state.cars)


    useEffect(() => {
        dispatch(getCar(params.carId))
    }, [dispatch])

    return (
        <div className='car-details py-32 min-h-screen text-white'>
            <div className="container px-4">
                <div className='top-info flex items-start gap-5 lg:flex-row flex-col'>
                    <div className="left-silde slider lg:w-3/5 w-full">
                        <motion.div
                            initial={{ x: -35, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
                        >
                            <DetailsSlider car={car}></DetailsSlider>
                        </motion.div>
                    </div>
                    <div className="right-side w-full">
                        <motion.div
                            initial={{ y: -35, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
                        >
                            <div className='category flex items-center gap-2 mb-5'>
                                <img width={50} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/categories/${car.category?.image}`} alt="" />
                                <span className='capitalize'>
                                    {car.category?.name}
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.4 }}
                        >
                            <h3 className='font-bold text-4xl mb-3'>
                                {car.name}
                            </h3>
                        </motion.div>
                        <motion.div
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.5 }}
                        >
                            <p>
                                {car.description}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.6 }}
                        >
                            <div className='flex items-center gap-3 text-white mt-4'>
                                <span className='p-1 px-3 rounded-lg bg-neutral-600'>
                                    {car.model?.name}
                                </span>
                                <span className='block w-1 h-1 rounded-full bg-neutral-700'></span>
                                <span className='p-1 px-3 rounded-lg bg-neutral-600'>
                                    {car.properties?.year}
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: -25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.7 }}
                        >
                            <div className='flex flex-col mt-10 rounded-xl border border-neutral-400 [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-neutral-400 [&>div]:p-3 [&>div]:px-5'>
                                <h3 className='text-2xl font-bold mb-2 p-5 pb-0'>Technical Data</h3>
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='fluent:engine-20-filled' fontSize={20} />
                                        Engine capacity
                                    </span>
                                    <span>
                                        {car.properties?.engine_capacity || 'N/A'}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='mdi:horse-variant-fast' fontSize={20} />
                                        Horse power
                                    </span>
                                    <span>
                                        {car.properties?.horse_power || 'N/A'}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='fluent:fast-acceleration-24-filled' fontSize={20} />
                                        Acceleration
                                    </span>
                                    <span>
                                        {car.properties?.acceleration || 'N/A'}
                                    </span>
                                </div> 
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='ion:speedometer' fontSize={20} />
                                        Speeds
                                    </span>
                                    <span>
                                        {car.properties?.speeds || 'N/A'}
                                    </span>
                                </div> 
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='mdi:car-info' fontSize={20} />
                                        Kilometers
                                    </span>
                                    <span>
                                        {car.properties?.kilometers || 'N/A'}
                                    </span>
                                </div> 
                                {/* New */}
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='material-symbols:speed' fontSize={20} />
                                        Max speed
                                    </span>
                                    <span>
                                        {car.properties?.max_speed}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='solar:transmission-circle-bold' fontSize={20} />
                                        Transmission type
                                    </span>
                                    <span>
                                        {car.properties?.transmission_type || 'N/A'}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                        <Icon icon='mingcute:cylinder-fill' fontSize={20} />
                                        Number of cylinders
                                    </span>
                                    <span>
                                        {car.properties?.number_of_cylinders || 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails