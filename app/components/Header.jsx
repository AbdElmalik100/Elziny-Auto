import Link from "next/link"
import MobileMenu from './MobileMenu'
function Header() {
    return (
        <header className="fixed xl:mx-80 lg:mx-52 m-3 flex items-center gap-2 justify-between rounded-lg p-2 z-40 xl:w-[calc(100%-640px)] lg:w-[calc(100%-416px)] w-[calc(100%-24px)] border border-neutral-400 bg-neutral-700/25 text-white before:absolute before:w-full before:h-full before:left-0 before:top-0 before:backdrop-blur-md before:rounded-md before:-z-10">
            <div className="logo ms-4">
                <Link href='/' className="font-bold text-xl">Elziny</Link>
            </div>
            <ul className="links md:flex items-center gap-4 uppercase hidden">
                <li className="line-hover hover:text-primary-300">
                    <Link href='/'>
                        About
                    </Link>
                </li>
                <li className="line-hover hover:text-primary-300">
                    <Link href='/categories'>
                        Categories
                    </Link>
                </li>
                <li className="line-hover hover:text-primary-300">
                    <Link href='/'>
                        Cars for sale
                    </Link>
                </li>
            </ul>
            <button className="prime-btn md:block hidden">Explore Cars</button>
            <MobileMenu />
        </header >
    )
}

export default Header