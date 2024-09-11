'use client'
import { useParams, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../store/slices/carsSlice'
import CarCard from '../../components/CarCard'
import { motion } from 'framer-motion'
import { getCarModels } from '../../store/slices/carModelsSlice'
import FiltersButton from '../../components/FiltersButton'
import Image from 'next/image'
import emptyFuel from '../../../public/images/fuel.png'
import Loading from '../../components/Loading'

function Cars() {
    const params = useParams()
    const dispatch = useDispatch()
    const { cars, loading } = useSelector(state => state.cars)
    const { carModels } = useSelector(state => state.carModels)
    const query = useSearchParams()

    
    useEffect(() => {
        console.log("query changed");
        if (query.size > 0) {
            dispatch(getCars({ model: query.get("model") || '', fuel_type: query.get("ft") || '', is_luxury: query.get("lux") || '' }))
        } else {    
            dispatch(getCars({ slug: params.slug }))
        }
        dispatch(getCarModels(params.slug))
    }, [dispatch, query])

    return (
        <div className='cars-page py-32 min-h-screen text-white'>
            <div className="container px-4">
                <div className='filters relative py-3 flex items-center justify-between gap-3'>
                    <div className="left-side">
                        <h3 className='capitalize font-bold text-3xl'>
                            {carModels[0]?.category.name}
                        </h3>
                    </div>
                    <div className="right-side flex items-center gap-3">
                        <FiltersButton carModels={carModels} categorySlug={params.slug} query={query}></FiltersButton>
                    </div>
                </div>
                <div className='cars-container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                    {
                        loading
                            ?
                            <Loading></Loading>
                            :
                            cars.length > 0
                                ?
                                cars.map((car, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: -25, opacity: 0 }}
                                        transition={{ type: "tween", ease: "easeOut" }}
                                        exit={{ x: -25, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        animate={{ x: 0, opacity: 1 }}
                                    >
                                        <CarCard car={car} preview={true} ></CarCard>
                                    </motion.div>
                                ))
                                :
                                <div className='empty-cars grid place-items-center col-span-full min-h-screen'>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <Image src={emptyFuel} alt='Empty Fuel' className='w-40' />
                                        <h3 className='text-4xl text-neutral-400'>No cars to show</h3>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cars