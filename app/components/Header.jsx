import Link from "next/link"
import MobileMenu from './MobileMenu'
import { usePathname } from "next/navigation"
import elzinyLogo from '../../public/images/Elziny Logo Alt.png'
import Image from "next/image"

function Header() {
    const pathName = usePathname()
    
    return (
        <header className="fixed xl:mx-80 lg:mx-52 m-3 flex items-center gap-2 justify-between rounded-lg p-2 z-40 xl:w-[calc(100%-640px)] lg:w-[calc(100%-416px)] w-[calc(100%-24px)] border border-neutral-400 bg-neutral-700/25 text-white before:absolute before:w-full before:h-full before:left-0 before:top-0 before:backdrop-blur-md before:rounded-md before:-z-10">
            <div className="logo ms-4">
                <Link href='/' className="font-bold text-xl">
                    <Image width={150} src={elzinyLogo} alt="Elziny Logo" priority />
                </Link>
            </div>
            <ul className="links md:flex items-center gap-4 uppercase hidden">
                <li className="line-hover hover:text-primary-300 has-[a.active]:text-primary-400 has-[a.active]:before:scale-100">
                    <Link href='/' className={`${pathName === '/about' ? "active" : ""}`}>
                        About
                    </Link>
                </li>
                <li className="line-hover hover:text-primary-300 has-[a.active]:text-primary-400 has-[a.active]:before:scale-100">
                    <Link href='/categories' className={`${pathName === '/categories' ? 'active' : ''}`}>
                        Categories
                    </Link>
                </li>
                <li className="line-hover hover:text-primary-300 has-[a.active]:text-primary-400 has-[a.active]:before:scale-100">
                    <Link href='/cars-for-sale' className={`${pathName === '/cars-for-sale' ? 'active' : ''}`}>
                        Cars for sale
                    </Link>
                </li>
            </ul>
            <Link href='/categories' className="prime-btn md:block hidden">Explore Cars</Link>
            <MobileMenu />
        </header >
    )
}

export default Header