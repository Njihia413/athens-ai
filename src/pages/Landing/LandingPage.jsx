import React from 'react';
import Logo from '../../assets/images/Logo.png';
import {Link} from "react-router-dom";
import InitialImg from "../../assets/images/🌀.png";

const LandingPage = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950 flex flex-col min-h-screen justify-between">
                    <div
                        className="flex-grow flex flex-col justify-center items-center space-y-4"> {/* Centers the content */}
                        <img className="mx-auto animate-bounceSlow" alt="Logo" src={Logo}/>
                        <h1 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-800 dark:text-white">
                            <span
                                className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#000033] mb-3 lg:mb-6 dark:text-white">Athens AI</span>
                        </h1>
                    </div>

                    <div className="pb-4 flex justify-center"> {/* Button placed at the bottom */}
                        <Link
                            to="/guest"
                            className="flex items-center text-[#000033B3] bg-white py-3 px-7 rounded-3xl font-dm-sans font-normal text-[18px]"
                        >
                            <img className="mr-2" alt="InitialImg"
                                 src={InitialImg}/> {/* Add margin to the right of the image */}
                            Get Started
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPage;
