import ShineBorder from "./ui/ShineBorder";
import Image from "next/image";
import Link from "next/link";
import loaderProp from "../utils/ImageLoader";


function CarCard(props) {

    return (
        <Link id="outer-link" href={`/categories/${props.car.category.slug}/${props.car._id}`}>
            <ShineBorder
                borderRadius={15}
                className="border w-full !bg-transparent border-neutral-700 relative flex flex-col h-full"
                color={['#f3c860', '#fbeeca', '#efaf30', '#ab4b12', '#411807']}
            >
                <div className="img w-full h-[250px] relative">
                    {
                        !props.preview &&
                        (props.car.is_soldout ? <span className="isAvailable badge bg-rose-700">Sold out</span> : <span className="isAvailable badge bg-green-700">Available</span>)
                    }
                    <Link id="inner-link" href={`/categories/${props.car.category.slug}`} title={props.car.category.name} className="category absolute top-1 right-1 rounded-full w-12 h-12 bg-neutral-800 shadow-lg grid place-items-center border border-transparent transition-all ease-out hover:border-primary-400">
                        <Image unoptimized loader={loaderProp} width={10000} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/categories/${props.car.category.image}`} alt={props.car.category.image} className="rounded-xl w-10 h-10 object-cover" />
                    </Link>
                    <Image unoptimized loader={loaderProp} width={1000} priority={true} height={150} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/cars/${props.car.images[0]}`} alt={props.car.images[1]} className="rounded-xl w-full h-full object-cover" />
                </div>
                <div className="info w-full mt-5 relative z-10">
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-bold hover:underline">{props.car.name}</h3>
                        {/* <div className="color-box-container">
                            <span className="block w-10 h-10 ms-auto mb-2 rounded-lg bg-[#020507] border border-neutral-600"></span>
                        </div> */}
                    </div>
                    <p className="mt-3 mb-5">
                        {props.car.description}
                    </p>
                </div>
                {
                    !props.preview &&
                    <button className="prime-btn w-full mt-auto">
                        Details
                    </button>
                }
            </ShineBorder>
        </Link>
    )
}

export default CarCard