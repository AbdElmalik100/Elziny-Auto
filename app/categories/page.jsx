'use client'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import BlurFade from '../components/ui/BlurFade'
import { MagicCard } from '../components/ui/MagicCard'
import loaderProp from '../utils/ImageLoader'


function Categories() {
    const { categories } = useSelector(state => state.categories)
    
    return (
        <div className='categories-page min-h-screen text-white py-32'>
            <div className="container px-4">
                <div className="categories-boxes grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        categories.length > 0 &&
                        categories.map((category, index) => (
                            <BlurFade key={index} delay={0.25 * index * 0.2} inView={true}>
                                <Link href={`/categories/${category.slug}`} className='relative group'>
                                    <Image priority unoptimized loader={loaderProp} width="200" height="200" style={{height: "auto", width: "auto"}} className='absolute !w-48 z-10 group-hover:animate-pulse pointer-events-none opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/categories/${category.image}`} alt={category.image} />
                                    <MagicCard
                                        className="grid place-items-center w-full transition-all ease-out duration-300 hover:border-primary-400 h-[300px] shadow-2xl hover:text-primary-300"
                                        gradientColor={"#efaf3055"}
                                    >
                                        <h2 className='uppercase font-bold text-3xl z-10 text-center transition-all ease-out duration-300'>{category.name}</h2>
                                        <span className='number-of-carsw-full block text-neutral-400 text-center'>
                                            ({category.cars.length})
                                        </span>
                                    </MagicCard>
                                </Link>
                            </BlurFade>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories