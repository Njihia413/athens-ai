import React, {useState} from 'react';
import Container from "../../layout/global/Container.jsx";
import {Button, Input, Label} from "../../components/index.jsx";
import {Link} from "react-router-dom";
import {AutoTabProvider} from "react-auto-tab";
import Section from "../../layout/global/Section.jsx";
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
        <Section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950">
            <Container>
                <div className="flex justify-center md:-mx-3">
                    <div className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-3/8 px-3">
                        <div
                            className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                            <div className="mb-2 text-center">
                                <h3 className="font-dm-sans font-semibold text-[25px] md:text-[35px] text-[#000033] dark:text-white">
                                    Create New Password
                                </h3>
                                <p className="font-dm-sans text-sm text-slate-500 dark:text-slate-400">
                                    Enter your new password
                                </p>
                            </div>
                            <form>
                                <div className="relative py-2">
                                    <Label
                                        htmlFor="password"
                                        className="mb-2 font-dm-sans"
                                    >
                                        New Password&nbsp;<span className="text-[#f62d51]">*</span>
                                    </Label>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="@#*%"
                                        className="font-dm-sans"
                                        required
                                    />
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEye : faEyeSlash}
                                        style={{
                                            position: 'absolute',
                                            right: '5%',
                                            top: '60%',
                                            cursor: 'pointer'
                                        }}
                                        className="dark:text-white"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                                <div className="relative py-2">
                                    <Label
                                        htmlFor="confirmPassword"
                                        className="mb-2 font-dm-sans"
                                    >
                                        Confirm New Password&nbsp; <span className="text-[#f62d51]">*</span>
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type={showRepeatPassword ? "text" : "password"}
                                        placeholder="@#*%"
                                        className="font-dm-sans"
                                        required
                                    />
                                    <FontAwesomeIcon
                                        icon={showRepeatPassword ? faEye : faEyeSlash}
                                        style={{
                                            position: 'absolute',
                                            right: '5%',
                                            top: '60%',
                                            cursor: 'pointer'
                                        }}
                                        className="dark:text-white"
                                        onClick={toggleRepeatPasswordVisibility}
                                    />
                                </div>
                            </form>

                            <div className="pt-3">
                                <Button
                                    block
                                    className="text-[#F7FAFC] bg-[#3A4DF1] h-12 font-dm-sans font-semibold md:text-[20px] px-5 py-2.5 text-center"
                                >
                                    Change Password
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default NewPassword;
