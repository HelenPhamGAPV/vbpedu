import * as React from "react";
import { Fade } from "react-awesome-reveal";
import students from "../../assets/images/Newsletter/students.jpg"

const Newsletter = () => {
    return (
        <div className='relative'>
            <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-xl font-normal text-white mb-3 ls-51"> Bản tin </h3>
                            </Fade>
                            <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                                    Đăng ký nhận thông tin khoá học.
                                </h3>
                            </Fade>

                            <div>
                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                                        <input type="Email address" name="q" className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black" placeholder="@ enter your email-address" autoComplete="off" />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                {/* <img src={'../../assets/images/Newsletter/arrow.svg'} alt="inputicone" style={{width: "57px", height: "71px"}} /> */}
                                            </button>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="col-span-5 relative hidden md:block">
                        <div>
                            <img src={students} alt="soup-image" style={{width: "626px", height: "602px"}} className='-mt-24'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;