// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Line2 from "../assets/Line2.png";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <form className="max-w-xl mt-[2rem]">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                        E-mail
                    </label>
                    <input type="email"
                           id="email"
                           className="bg-[#F7FAFC] border border-[#CBD5E0] font-dm-sans font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                           placeholder="eg email@gmail.com" required/>
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
                               required/>
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

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-[#CFD9E0] rounded bg-white"
                                   required/>
                        </div>

                        <div className="flex">
                            <label htmlFor="remember"
                                   className="ms-2 text-[16px] font-dm-sans font-normal text-[#718096]">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Link to="/reset-password"
                       className="text-[16px] font-dm-sans font-medium text-[#3A4DF199] underline hover:no-underline dark:text-primary-500">
                        Forgot Password?
                    </Link>
                </div>

                <button type="submit" className="mt-[2rem] text-[#F7FAFC] bg-[#3A4DF1] h-14 font-dm-sans font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                    <div className="flex justify-center gap-2">
                        Login
                    </div>
                </button>

                <img src={Line2} className="mx-auto mt-[3rem]" alt="Line2"/>

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
            </form>
        </>
    )
}

export default LoginForm;
