import { Disclosure } from '@headlessui/react';
import { Link } from "react-router-dom";
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signindialog from './Signindialog';
import logo from "../../assets/images/Logo/Logo.svg"
import phone from "../../assets/images/Navbar/phone.svg"
// import Image from 'next/image';


const navigation = [
    { name: 'Trang chủ', href: '#home-section', current: false },
    { name: 'Chúng tôi', href: '#about-section', current: false },
    { name: 'Thư viện', href: '#gallery-section', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                                {/* <img src={logo} alt="logo" style={{width: "36px", height: "36px"}} /> */}
                                <Link href="/" className='text-3xl font-semibold text-black'>
                                    VBPEdu
                                </Link>
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                {/* <img src={logo} alt="logo" style={{width: "56px", height: "56px"}} /> */}
                                <Link href="/" className='text-3xl font-semibold text-black'>
                                    VBPEdu
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-black' : 'navlinks hover:opacity-100',
                                                'px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <div className='gap-6 hidden lg:flex'>
                                {/* <div className='flex items-center gap-2'>
                                    <img src={phone} alt="logo" style={{width: "19px", height: "19px"}} />
                                    <p className='text-lg font-medium'>+1(909) 235-9814</p>
                                </div> */}
                                {/* <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-black'>Sign in</button> */}
                                <Signindialog />
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
