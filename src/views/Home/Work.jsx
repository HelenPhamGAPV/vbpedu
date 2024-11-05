import * as React from "react";
// import Image from 'next/image';
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";
import featureOne from '../../assets/images/Features/trai-he-khoa-hoc.jpg'
import featureTwo from '../../assets/images/Features/ky-nang-song.jpg'
import featureThree from '../../assets/images/Features/Hoc-sinh-vui-choi-tai-trai-he.png'
import featureFour from '../../assets/images/Features/trai-he-sinh-ton.jpg'

const cardData = [
    {
        imgSrc: featureOne,
        heading: "Trại Hè Khoa Học",
        subheading: "Bé tha hồ khám phá thiên nhiên",
        link: 'Learn more'
    },
    {
        imgSrc: featureTwo,
        heading: "Kỹ năng mềm",
        subheading: "Nâng cao kỹ năng sống cho bé",
        link: 'Learn more'
    },
    {
        imgSrc: featureThree,
        heading: "Dã ngoại",
        subheading: "Vừa khám phá vừa học hỏi",
        link: 'Learn more'
    },
    {
        imgSrc: featureFour,
        heading: "Khóa học sinh tồn",
        subheading: "Bố mẹ cùng con sinh tồn trong rừng",
        link: 'Learn more'
    }

]

const Work = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Tính năng</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Nhận nhiều khóa học</p>
                    </Fade>
                </div>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-80'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center absolute md:top-[-100%] lg:top-[-100%] left-[0%]'>
                                    {/* <Image src={items.imgSrc} alt={items.imgSrc} width={510} height={10} /> */}
                                    <img src={items.imgSrc} alt={items.imgSrc}/>
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                    <Link href='/'><p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>{items.link}<ChevronRightIcon width={20} height={20} /></p></Link>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Work;
