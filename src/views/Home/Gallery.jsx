import * as React from "react";
import { Fade } from "react-awesome-reveal";
import foodtwo from "../../assets/images/Gallery/foodtwo.jpg"
import callToAction from "../../assets/images/Gallery/call-to-action.jpg"
import carousel1 from "../../assets/images/Gallery/carousel-1.jpg"
import carousel2 from "../../assets/images/Gallery/carousel-2.jpg"
import carousel3 from "../../assets/images/Gallery/carousel-3.jpg"


const Gallery = () => {
    return (
        <div id="gallery-section">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Bộ sưu tập</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                        Bộ sưu tập những khoảnh khắc của chúng tôi.
                        </h3>
                    </Fade>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>

                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <img src={callToAction} alt="logo" style={{width: "1000px", height: "805px"}} />
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <img src={carousel1} alt="pizza-two" style={{height: "100%"}} className="inner-img"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src={carousel2} alt="pizza-three" style={{height: "100%"}} className="inner-img"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src={carousel3} alt="pizza-four" style={{height: "100%"}} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;
