import React from 'react';

const ResetPassword = () => {
    return (
        <>
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-initialBg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center min-h-screen">
                    <div
                        className="bg-white rounded-3xl w-5/6 md:w-11/12 lg:w-[800px] h-auto p-6"> {/* Added padding for content spacing */}
                        {/* Content inside the white box */}
                        <h4 className="font-dm-sans font-bold text-[#000033] text-[20px] md:text-[35px] text-center">
                            Reset your password
                        </h4>
                        <p className="font-dm-sans font-normal text-[#00003380] text-[20px] text-center">
                            Please enter your email to send OTP code
                        </p>

                        <div className="flex justify-center mt-8">
                            <form className="w-full max-w-md">
                                <div className="mb-5">
                                    <label htmlFor="email"
                                           className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                                        E-mail Address
                                    </label>
                                    <input type="email"
                                           id="email"
                                           className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                           placeholder="eg email@gmail.com"
                                           required
                                    />
                                </div>

                                <button type="submit"
                                        className="mt-[1rem] mb-[1rem] text-[#F7FAFC] bg-[#3A4DF1] h-14 font-dm-sans font-semibold rounded-full text-[20px] w-full px-5 py-2.5 text-center">
                                    <div className="flex justify-center gap-2">
                                        Send OTP
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default ResetPassword;
