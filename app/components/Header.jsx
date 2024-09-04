import Link from "next/link"

function Header() {
    return (
        <header className="fixed top-10 left-1/2 -translate-x-1/2 rounded-lg p-2 z-30 w-[775px] border border-neutral-400 text-white bg-neutral-700/50 flex items-center gap-2 justify-between backdrop-blur-md">
            <div className="logo ms-4">
                <Link href='/' className="font-bold text-xl">Elziny</Link>
            </div>
            <ul className="links flex items-center gap-4 uppercase">
                <li className="relative transition-all ease hover:text-primary-300 before:absolute before:w-full before:h-[1px] before:rounded-full before:origin-right before:scale-x-0 before:bg-primary-300 before:left-0 before:bottom-0 before:transition-transform before:ease before:duration-300 hover:before:scale-x-100 hover:before:origin-left">
                    <Link href='/'>
                        About
                    </Link>
                </li>
                <li className="relative transition-all ease hover:text-primary-300 before:absolute before:w-full before:h-[1px] before:rounded-full before:origin-right before:scale-x-0 before:bg-primary-300 before:left-0 before:bottom-0 before:transition-transform before:ease before:duration-300 hover:before:scale-x-100 hover:before:origin-left">
                    <Link href='/'>
                        Cars
                    </Link>
                </li>
                <li className="relative transition-all ease hover:text-primary-300 before:absolute before:w-full before:h-[1px] before:rounded-full before:origin-right before:scale-x-0 before:bg-primary-300 before:left-0 before:bottom-0 before:transition-transform before:ease before:duration-300 hover:before:scale-x-100 hover:before:origin-left">
                    <Link href='/'>
                        Cars for sale
                    </Link>
                </li>
            </ul>
            <button className="prime-btn">Explore Cars</button>
        </header>
    )
}

export default Header