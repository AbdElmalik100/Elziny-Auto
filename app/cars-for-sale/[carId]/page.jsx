'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { getCar } from '../../store/slices/carsSlice'
import DetailsSlider from '../../components/DetailsSlider'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import checkList from '../../../public/images/checklist_2666505.png'
import Loading from '../../components/Loading'
import PremiumCard from '../../components/PremiumCard'


function CarDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const { car, loading } = useSelector(state => state.cars)
    const formatPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP"
    })


    useEffect(() => {
        dispatch(getCar(params.carId))
    }, [dispatch])
    return (
        <div className='car-details py-32 min-h-screen text-white overflow-x-hidden'>
            {
                loading
                    ?
                    <Loading></Loading>
                    :
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
                                    <div className='category flex items-center gap-2 mb-3'>
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
                                    <h3 className='font-bold text-4xl mt-5 mb-3'>
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
                                        {
                                            car.is_luxury &&
                                            <>
                                                <PremiumCard></PremiumCard>
                                                <span className='block w-1 h-1 rounded-full bg-neutral-700'></span>
                                            </>
                                        }
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
                                                {car.properties?.max_speed || 'N/A'}
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
                        <motion.div
                            initial={{ filter: 'blur(12px)' }}
                            whileInView={{ filter: 'blur(0px)' }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.1 }}
                        >
                            <div className="price mt-32 text-center">
                                <h3 className='uppercase rounded-2xl text-primary-400 lg:text-5xl text-3xl font-bold p-10 px-4 border border-primary-400'>
                                    {(+car.price).toString() === 'NaN' ? car.price : formatPrice.format(car.price)}
                                </h3>
                            </div>
                        </motion.div>
                        <div className='car-check mt-32 flex items-center gap-16 lg:flex-row flex-col'>
                            <motion.div
                                initial={{ x: -25, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "tween", ease: "easeOut", delay: 0.1 }}
                                className='left-side lg:w-1/2 w-full lg:text-start text-center'
                            >
                                <h2 className='font-bold lg:text-7xl text-4xl mb-8 uppercase'>Car check provider for you</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae perferendis nostrum ad iste aliquam sit tenetur voluptatum commodi, quo, amet in suscipit excepturi, labore placeat sint blanditiis earum numquam. Cum harum quod iusto possimus.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 75, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
                                className='right-side lg:w-1/2 w-full text-end'
                            >
                                <Image src={checkList} className='lg:ms-auto mx-auto rotate-6 w-[400px]' width={400} height={200} ></Image>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 75, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
                            className='mt-32 text-center'
                        >
                            <p className='lg:text-3xl text-2xl'>
                                If you&apos;re interested in acquiring your own luxury car, please feel free to contact us to arrange for your vehicle and customize it according to your preferences.
                            </p>
                            <a href="https:wa.me/+2001111874999" target='_blank' className='prime-btn mx-auto flex text-xl mt-10 items-center gap-3 w-fit justify-center'>
                                <Icon icon='ic:baseline-whatsapp' fontSize={28} />
                                <span>Whats app</span>
                            </a>
                        </motion.div>
                    </div>
            }
        </div>
    )
}

export default CarDetails