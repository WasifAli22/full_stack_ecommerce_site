"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci"
import { BsChevronCompactUp } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Navbar = (props: Props) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [showNav, setshowNav] = useState<boolean>(false)
    return (
        <div>
            <div className="flex items-center justify-between relative py-4">
                <div className="flex items-center md:space-x-10 lg:space-x-20">
                    <div className="font-semibold text-2xl"><a href="/">SEINE</a></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 text-[15px] opacity-70'>
                            <li><Link href="/" className='w-full py-3 inline-block'>Shop</Link></li>
                            <li><Link href="/filters" className='w-full py-3 inline-block'>Filters</Link></li>
                            <li><Link href="/myproducts" className='w-full py-3 inline-block'>My Products</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <SearchBar />
                    <div onClick={() => setShowProfile(!showProfile)} className="relative cursor-pointer">
                        <Image src="/user.jpg" height={35} width={35} alt="" className='h-[35px] w-[35px] rounded-full object-cover' />
                        <div className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile ? '' : 'hidden'} `}>
                            <Link href="/sign">SignIn</Link>
                        </div>

                    </div>
                    <Link href="/cart">
                        <div className="p-2 bg-gray-100 rounded-full"><CiShoppingCart size={20} /> </div>
                    </Link>
                    <span onClick={() => setshowNav(!showNav)} className='p-[.6rem] bg-gray-100 rounded-full md:hidden'>
                        <BsChevronCompactUp className={`transition ease-in-out duration-150 ${showNav ? 'rotate-180' : '0'}`} />
                    </span>
                </div>
            </div>
            <div className={`md:hidden ${showNav ? 'px-5 pb-4' : 'h-0 invisible opacity-0'}`}>
                <ul className='flex flex-col text-[15px] px-2 opacity-75'>
                    <li><Link href='/shop' className='py-3 inline-block w-full'>Shop</Link></li>
                    <li><Link href="/filters" className='w-full py-3 inline-block'>Filters</Link></li>
                    <li><Link href="/myproducts" className='w-full py-3 inline-block'>My Products</Link></li>
                </ul>
                <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
                    <input type="text" placeholder='Search' className='outline-none w-full ml-2 bg-transparent caret-blue-500 placeholder:font-light placeholder:text-gray-600' autoComplete='false' />
                    <button><BiSearch className="opacity-50" size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar