import React from 'react';
import {Link} from "react-router-dom";

const OTPCode = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-initialBg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center min-h-screen">
                    <div
                        className="bg-white rounded-3xl w-5/6 md:w-11/12 lg:w-[800px] h-auto p-6"> {/* Added padding for content spacing */}
                        {/* Content inside the white box */}
                        <h4 className="font-dm-sans font-bold text-[#000033] text-[20px] md:text-[35px] text-center">
                            OTP Code Verification
                        </h4>
                        <p className="font-dm-sans font-normal text-[#00003380] text-[20px] text-center">
                            We sent an OTP code to jane***oe@gmail.com. <br/>
                            Enter the code below to verify
                        </p>

                        <div className="flex justify-center mt-8">
                            <form className="w-full max-w-md">
                                <div className="flex items-center justify-center gap-3">
                                    <input
                                        type="text"
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-white border border-[#D9D9D9] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        pattern="\d*" maxLength="1"/>
                                    <input
                                        type="text"
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-white border border-[#D9D9D9] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength="1"/>
                                    <input
                                        type="text"
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-white border border-[#D9D9D9] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength="1"/>
                                    <input
                                        type="text"
                                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-white border border-[#D9D9D9] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        maxLength="1"/>
                                </div>

                                <p className="font-dm-sans font-normal text-[18px] text-[#000033B3] mt-[1rem] text-center">
                                    Didn’t receive a code? Prompt in <span className="text-[#3A4DF1]">14</span> s&nbsp;
                                </p>

                                <Link
                                    to="/new-password"
                                    className="mt-[1rem] mb-[1rem] text-[#F7FAFC] bg-[#3A4DF1] h-14 font-dm-sans font-semibold rounded-full text-[20px] w-full px-5 py-2.5 text-center flex justify-center items-center gap-2"
                                >
                                    Submit
                                </Link>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OTPCode;
