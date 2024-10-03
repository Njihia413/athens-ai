// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import Line2 from "../assets/Line2.png";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    }

    return (
        <>
            <form className="max-w-xl mt-[2rem]">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                        Full Names
                    </label>
                    <input type="text"
                           id="full_name"
                           name="full_name"
                           className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                           placeholder="eg Jane Doe"
                           required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                        E-mail
                    </label>
                    <input type="email"
                           id="email"
                           name="email"
                           className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                           placeholder="eg email@gmail.com"
                           required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                        Password
                    </label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"}
                               id="password"
                               className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                               placeholder="@#*%"
                               required
                               name="password"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                top: '30%',
                                cursor: 'pointer'
                            }}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="confirm_password"
                           className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input type={showRepeatPassword ? "text" : "password"}
                               id="confirm_password"
                               className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                               placeholder="@#*%"
                               required
                               name="confirm_password"
                        />
                        <FontAwesomeIcon
                            icon={showRepeatPassword ? faEye : faEyeSlash}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                top: '30%',
                                cursor: 'pointer'
                            }}
                            onClick={toggleRepeatPasswordVisibility}
                        />
                    </div>
                </div>


                <button type="submit"
                        className="mt-[2rem] text-[#F7FAFC] bg-[#3A4DF1] h-14 font-dm-sans font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                    <div className="flex justify-center gap-2">
                        Create Account
                    </div>
                </button>

                <img src={Line2} className="mx-auto mt-[3rem]" alt="Line2"/>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <button
                            className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                     className="absolute left-0 w-5" alt="google logo"/>
                                <span
                                    className="block w-max font-dm-sans font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                                Continue with Google
                            </span>
                            </div>
                        </button>
                    </div>

                    <div>
                        <button
                            className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://www.svgrepo.com/show/448224/facebook.svg"
                                     className="absolute left-0 w-5" alt="google logo"/>
                                <span
                                    className="block w-max font-dm-sans font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                                Continue with Facebook
                            </span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignupForm;
