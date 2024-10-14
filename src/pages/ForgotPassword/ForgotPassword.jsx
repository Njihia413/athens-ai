import React from 'react';
import Container from "../../layout/global/Container.jsx";
import {Button, Input, Label} from "../../components/index.jsx";
import {Link} from "react-router-dom";
import Section from "../../layout/global/Section.jsx";

const ForgotPassword = () => {
    return (
        <Section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950">
            <Container>
                <div className="flex justify-center md:-mx-3">
                    <div className="w-full xs:w-4/5 sm:w-3/5 md:w-2/3 lg:w-2/5 xl:w-3/8 px-3">
                        <div
                            className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                            <div className="mb-2 text-center">
                                <h3 className="font-dm-sans font-semibold text-[25px] md:text-[35px] text-[#000033] dark:text-white">Reset Password</h3>
                                <p className="font-dm-sans font-normal text-sm text-slate-500 dark:text-slate-400">
                                    Enter your email to receive an OTP code
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
                                    />
                                </div>
                                <div className="pt-3">
                                    <Button
                                        block
                                        type="submit"
                                        className="text-[#F7FAFC] bg-[#3A4DF1] h-12 font-dm-sans font-semibold md:text-[20px] px-5 py-2.5 text-center"
                                    >
                                        Send OTP
                                    </Button>
                                </div>
                            </form>

                            <p className="font-dm-sans font-normal text-[#000033B3] mt-[1rem] text-center dark:text-white">
                                Remembered your Password?&nbsp;
                                <Link to="/login" className="text-[#3A4DF199] font-medium underline hover:no-underline">
                                   Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default ForgotPassword;
