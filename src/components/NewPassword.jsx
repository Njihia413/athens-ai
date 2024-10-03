import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const NewPassword = () => {
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
            <div className="px-0 grid grid-cols-1">
                <section
                    className="bg-initialBg bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center min-h-screen">
                    <div className="bg-white rounded-3xl w-5/6 md:w-11/12 lg:w-[800px] h-auto p-6">
                        <h4 className="font-dm-sans font-bold text-[#000033] text-[20px] md:text-[35px] text-center">
                            Create New Password
                        </h4>
                        <p className="font-dm-sans font-normal text-[#00003380] text-[20px] text-center">
                            Enter your new password
                        </p>

                        <div className="flex justify-center mt-8">
                            <form className="w-full max-w-md">
                                <div className="mb-5">
                                    <label htmlFor="password"
                                           className="block mb-2 text-[18px] font-dm-sans font-medium text-[#718096]">
                                        New Password
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
                                        Confirm New Password
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

                                <Link
                                    to="/success"
                                    className="mt-[2rem] mb-[1rem] text-[#F7FAFC] bg-[#3A4DF1] h-14 font-dm-sans font-semibold rounded-full text-[20px] w-full px-5 py-2.5 text-center flex justify-center items-center gap-2"
                                >
                                    Change Password
                                </Link>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NewPassword;
