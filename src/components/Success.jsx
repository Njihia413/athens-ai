// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import InitialImg from "../assets/🌀.png";

const Success = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-initialBg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center min-h-screen">
                    <div className="bg-white rounded-3xl w-5/6 md:w-11/12 lg:w-[800px] h-auto p-6">
                        <div className="mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="mx-auto">
                                <path fill="#3A4DF1"
                                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                            </svg>
                        </div>

                        <h4 className="font-dm-sans font-bold text-[#000033] text-[20px] md:text-[35px] text-center">
                            Password Successfully Changed!
                        </h4>
                        <p className="mt-[1rem] font-dm-sans font-normal text-[#00003380] text-[20px] text-center">
                            Your password has been changed successfully. Redirecting...
                        </p>

                        <div className="mt-[4rem] flex justify-center">
                            <Link
                                to="/login"
                                className="flex items-center text-[#000033B3] bg-[#E3E8FF] py-3 px-7 rounded-3xl font-dm-sans font-normal text-[18px]"
                            >
                                <img className="mr-2" alt="InitialImg" src={InitialImg}/>
                                Hang tight...
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Success;
