import * as React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/Footer/facebook.svg"
import insta from "../../assets/images/Footer/insta.svg"
import twitter from "../../assets/images/Footer/twitter.svg"
import logo from "../../assets/images/Logo/Logo.svg"

const socialLinks = [
    {
        imgSrc: facebook,
        link: 'https://facebook.com',
        width: 10
    },
    {
        imgSrc: insta,
        link: 'https://instagram.com',
        width: 14
    },
    {
        imgSrc: twitter,
        link: 'https://twitter.com',
        width: 14
    },

]

const products = [
    {
        id: 1,
        section: "Company",
        link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
    }
    ,
    {
        id: 3,
        section: "More",
        link: ['Recipe', 'Chef', 'Food', 'Support']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        {/* <img src={logo} style={{width: "56px", height: "56px"}} /> */}
                        <Link href="/" className='text-3xl font-semibold text-black'>
                            VPBEdu
                        </Link>
                    </div>
                    <h3 className='text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16'> Mở tài khoản trong vài phút, học vui cả đời</h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                <img src={items.imgSrc} alt={items.imgSrc} width= {items.width} height={2} />
                            </div>
                        </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-xl font-semibold mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link, index) => (
                                <li key={index} className='mb-5'>
                                    <Link href="/" className="text-footerlinks text-base font-normal mb-6 space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
                <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2024 - VPBEdu. Mọi quyền được bảo lưu bởi <Link href="https://adminmart.com/" target="_blank"> Adminmart.com</Link></h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Chính sách bảo mật</Link></h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Điều khoản và điều kiện</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
