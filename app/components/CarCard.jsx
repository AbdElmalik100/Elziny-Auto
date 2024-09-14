import ShineBorder from "./ui/ShineBorder";
import Image from "next/image";
import Link from "next/link";
import loaderProp from "../utils/ImageLoader";
import { NeonGradientCard } from "./ui/NeonGradientCard";
import { Icon } from "@iconify/react";
import SparklesText from "./ui/SparklesText";


function CarCard(props) {

    return (
        <Link id="outer-link" href={`${props.sale ? `/cars-for-sale/${props.car._id}` : `/categories/${props.car.category.slug}/${props.car._id}`}`}>
            {
                props.car.is_luxury && !props.preview
                    ?
                    <NeonGradientCard borderSize={0} borderRadius={16} neonColors={{ firstColor: "#efaf30", secondColor: "#8b3b15" }}>
                        <ShineBorder
                            borderRadius={15}
                            className="border w-full !bg-gradient-to-b from-primary-400 to-black border-neutral-700 relative flex flex-col h-full"
                            color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
                        >
                            <div className="img w-full h-[250px] relative">
                                <div className="absolute top-1 left-1 flex flex-col gap-2">
                                    {
                                        props.car.is_luxury &&
                                        <span className="luxury badge rounded-full font-bold text-white bg-primary-400 flex items-center gap-1">
                                            <Icon icon="ic:round-stars" className="animate-spin duration-1000" fontSize={22} />
                                            <SparklesText text="Premium" sparklesCount={5} className="text-xs font-normal"></SparklesText>
                                        </span>
                                    }
                                    {
                                        !props.preview &&
                                        (props.car.is_soldout ? <span className="isAvailable badge bg-rose-700">Sold out</span> : <span className="isAvailable badge bg-green-700">Available</span>)
                                    }
                                </div>
                                <Link id="inner-link" href={`/categories/${props.car.category.slug}`} title={props.car.category.name} className="category absolute top-1 right-1 rounded-full w-12 h-12 bg-neutral-800 shadow-lg grid place-items-center border border-transparent transition-all ease-out hover:border-primary-400">
                                    <Image unoptimized loader={loaderProp} width={10000} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/categories/${props.car.category.image}`} alt={props.car.category.image} className="rounded-xl w-10 h-10 object-cover" />
                                </Link>
                                <Image unoptimized loader={loaderProp} width={1000} priority={true} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/cars/${props.car.images[0]}`} alt={props.car.images[1]} className="rounded-xl w-full h-full object-cover" />
                            </div>
                            <div className="info w-full mt-5 relative z-10">
                                <div className="flex justify-between">
                                    <h3 className="text-2xl font-bold hover:underline">{props.car.name}</h3>
                                </div>
                                <p className="mt-3 mb-5">
                                    {props.car.description}
                                </p>
                            </div>
                            {
                                !props.preview &&
                                <button className="prime-btn w-full mt-auto relative z-20">
                                    Details
                                </button>
                            }
                        </ShineBorder>
                    </NeonGradientCard>
                    :
                    <ShineBorder
                        borderRadius={15}
                        className="border w-full !bg-transparent border-neutral-700 relative flex flex-col h-full"
                        color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
                    >
                        <div className="img w-full h-[250px] relative">
                            <div className="absolute top-1 left-1 flex flex-col gap-2">
                                {
                                    !props.preview &&
                                    (props.car.is_soldout ? <span className="isAvailable badge bg-rose-700">Sold out</span> : <span className="isAvailable badge bg-green-700">Available</span>)
                                }
                            </div>
                            <Link id="inner-link" href={`/categories/${props.car.category.slug}`} title={props.car.category.name} className="category absolute top-1 right-1 rounded-full w-12 h-12 bg-neutral-800 shadow-lg grid place-items-center border border-transparent transition-all ease-out hover:border-primary-400">
                                <Image unoptimized loader={loaderProp} width={10000} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/categories/${props.car.category.image}`} alt={props.car.category.image} className="rounded-xl w-10 h-10 object-cover" />
                            </Link>
                            <Image unoptimized loader={loaderProp} width={1000} priority={true} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/cars/${props.car.images[0]}`} alt={props.car.images[1]} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="info w-full mt-5 relative z-10">
                            <div className="flex justify-between">
                                <h3 className="text-2xl font-bold hover:underline">{props.car.name}</h3>
                            </div>
                            <p className="mt-3 mb-5">
                                {props.car.description}
                            </p>
                        </div>
                        {
                            !props.preview &&
                            <button className="prime-btn w-full mt-auto relative z-20">
                                Details
                            </button>
                        }
                    </ShineBorder>
            }
        </Link >
    )
}

export default CarCard