'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React, { useState } from 'react'
import { useClickAway } from '@uidotdev/usehooks'

function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const menu = useClickAway(() => {
        setShowMenu(false)
    })

    return (
        <div className='md:hidden block'>
            <div className='menu-icon '>
                <div className='grid place-items-center rounded-lg w-10 h-10 border cursor-pointer transition-all ease-in-out'
                    onClick={() => setShowMenu(true)}>
                    <Icon icon="hugeicons:menu-11" fontSize={24} className='text-white' />
                </div>
            </div>
            <div className={`overlay fixed z-40 top-0 left-0 w-full h-full bg-black/50 transition-all ease-out duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div ref={menu} className={`menu transition-all ease-out duration-300 border border-primary-400 bg-neutral-800 p-5 fixed top-0 rounded-lg h-[calc(100%-24px)] w-[275px] m-3 flex flex-col gap-3 ${showMenu ? 'right-0' : '-right-[450px]'}`}>
                    <div className='grid place-items-center self-end w-10 h-10 rounded-lg border cursor-pointer transition-all ease-in-out'
                        onClick={() => setShowMenu(false)}>
                        <Icon icon="ci:close-md" className='cursor-pointer' fontSize={24} />
                    </div>
                    <ul className="links flex flex-col gap-4 text-2xl items-center grow justify-center">
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
                    <button className="prime-btn mt-auto">Explore Cars</button>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu