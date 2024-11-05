import * as React from "react";
// import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import banner from "../../assets/images/Banner/banner-image.png"


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-4 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                               Cách tốt nhất để nâng cao kỹ năng cho bé
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>Website giáo dục trẻ em này cung cấp nội dung học tập đa dạng, phù hợp với từng độ tuổi, giúp trẻ phát triển tư duy, sáng tạo và kỹ năng xã hội qua các trò chơi, bài học tương tác và hoạt động vui nhộn</p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href='#cook-section'>Đọc thêm</Link></button>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-8 flex justify-center relative'>
                            <img src={banner} alt="logo" width={1000} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
