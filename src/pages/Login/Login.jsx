import React, {useState} from 'react';
import Layout from "../../layout/website";
import Section from "../../layout/global/Section.jsx";
import Container from "../../layout/global/Container";
import { Label, Input, Button } from "../../components";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950">
            <Container>
                <div className="flex justify-center md:-mx-3">
                    <div className="w-full xs:w-4/5 sm:w-3/5 md:w-2/3 lg:w-2/5 xl:w-3/8 px-3">
                        <div
                            className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                            <div className="mb-2">
                                <h3 className="font-dm-sans font-extrabold text-[25px] md:text-[35px] text-[#000033] dark:text-white">Login</h3>
                                <p className="font-dm-sans text-sm text-slate-500 dark:text-slate-400">
                                    To access your account
                                </p>
                            </div>
                            <form>
                                <div className="py-2">
                                    <Label
                                        htmlFor="email-address"
                                        className="mb-2 font-dm-sans"
                                    >
                                        Email Address
                                    </Label>
                                    <Input
                                        placeholder="eg email@gmail.com"
                                        id="email-address"
                                        className="font-dm-sans"
                                        type="email"
                                        defaultValue="admin@athensai.com"
                                    />
                                </div>
                                <div className="relative py-2">
                                    <Label
                                        htmlFor="password"
                                        className="mb-2 justify-between w-full items-center font-dm-sans"
                                    >
                                        Password
                                        <Link
                                            className=" font-dm-sans font-medium text-[#3A4DF199] underline hover:no-underline dark:text-primary-500"
                                            to="/forgot-password"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </Label>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="@#*%"
                                        className="font-dm-sans"
                                        defaultValue="12345678"
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
                                <div className="pt-3">
                                    <Link
                                        to="/admin/dashboard"
                                        className="block text-[#F7FAFC] bg-[#3A4DF1] h-12 font-dm-sans font-semibold md:text-[20px] px-5 py-2.5 text-center"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </form>

                            <p className="font-dm-sans font-normal text-[#000033B3] mt-[1rem] text-center dark:text-white">
                                Don't have an account?&nbsp;
                                <Link to="/signup" className="text-[#3A4DF199] font-medium underline hover:no-underline">
                                    Create now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Login;
