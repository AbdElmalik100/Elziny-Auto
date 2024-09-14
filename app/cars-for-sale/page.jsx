'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../store/slices/carsSlice'
import Loading from '../components/Loading'
import emptyFuel from '../../public/images/fuel.png'
import FiltersButton from '../components/FiltersButton'
import CarCard from '../components/CarCard'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { getCarModels } from '../store/slices/carModelsSlice'

function CarsForSale() {
    const dispatch = useDispatch()
    const { cars, loading } = useSelector(state => state.cars)
    const { categories } = useSelector(state => state.categories)
    const { carModels } = useSelector(state => state.carModels)
    const query = useSearchParams()


    useEffect(() => {
        if (query.size > 0) {
            dispatch(getCars({ category: query.get("category") || '', model: query.get("model") || '', fuel_type: query.get("ft") || '', is_luxury: query.get("lux") || '' }))
            dispatch(getCarModels({ categoryId: query.get("category") }))
        } else {
            dispatch(getCars({}))
        }
    }, [dispatch, query])

    return (

        <div className='cars-for-sale min-h-screen py-32 text-white'>
            <div className="container px-4">
                <div className='filters relative py-3 flex items-center justify-between gap-3'>
                    <div className="left-side">
                        <h3 className='capitalize font-bold text-3xl'>
                            Choose your car
                        </h3>
                    </div>
                    <div className="right-side flex items-center gap-3">
                        {
                            carModels.length > 0
                                ?
                                <FiltersButton categories={categories} carModels={carModels} query={query}></FiltersButton>
                                :
                                <FiltersButton categories={categories} carModels={carModels} query={query}></FiltersButton>
                        }
                    </div>
                </div>
                <div className="cars mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
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
                                        <CarCard car={car} sale={true}></CarCard>
                                    </motion.div>
                                ))
                                :
                                <div className='empty-cars grid place-items-center col-span-full min-h-screen'>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <Image priority src={emptyFuel} alt='Empty Fuel' className='w-40' />
                                        <h3 className='text-4xl text-neutral-400'>No cars to show</h3>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CarsForSale