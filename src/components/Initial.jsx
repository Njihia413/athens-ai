import React from 'react';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import InitialImg from "../assets/🌀.png"

const Initial = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-initialBg bg-cover bg-center bg-no-repeat w-full flex flex-col min-h-screen justify-between">
                    <div
                        className="flex-grow flex flex-col justify-center items-center space-y-4"> {/* Centers the content */}
                        <img className="mx-auto" alt="Logo" src={Logo}/>
                        <h4 className="font-dm-sans text-center font-semibold text-[#000033] text-[30px]">Athens AI</h4>
                    </div>

                    <div className="pb-4 flex justify-center"> {/* Button placed at the bottom */}
                        <Link
                            to="/login"
                            className="flex items-center text-[#000033B3] bg-white py-3 px-7 rounded-3xl font-dm-sans font-normal text-[18px]"
                        >
                            <img className="mr-2" alt="InitialImg" src={InitialImg}/> {/* Add margin to the right of the image */}
                            Hang tight...
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Initial;
