import React from 'react';
import {AutoTabProvider} from "react-auto-tab";
import Section from "../../layout/global/Section.jsx";
import Container from "../../layout/global/Container.jsx";
import {Button, Label} from "../../components/index.jsx";
import {Link} from "react-router-dom";

const OTPCode = () => {
    return (
        <Section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950">
            <Container>
                <div className="flex justify-center md:-mx-3">
                    <div className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-3/8 px-3">
                        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                            <div className="mb-2 text-center">
                                <h3 className="font-dm-sans font-semibold text-[25px] md:text-[35px] text-[#000033] dark:text-white">
                                    Verify Email
                                </h3>
                                <p className="font-dm-sans text-sm text-slate-500 dark:text-slate-400">
                                    We sent an OTP code to jane***oe@gmail.com. <br/>
                                    Enter the code below to verify
                                </p>
                            </div>
                            <div className="py-2">
                                <Label
                                    htmlFor="password"
                                    className="mb-2 justify-between w-full items-center font-dm-sans"
                                >
                                    Enter Code
                                    <Link
                                        className="text-xs text-[#3A4DF1] hover:text-blue-700 font-dm-sans"
                                        to="#"
                                    >
                                        Resend Code
                                    </Link>
                                </Label>
                                <AutoTabProvider className="flex gap-x-3">
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR1"
                                           maxLength={1}
                                           type="password"
                                    />
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR2"
                                           maxLength={1}
                                           type="password"
                                    />
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR3"
                                           maxLength={1}
                                           type="password"
                                    />
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR4"
                                           maxLength={1}
                                           type="password"
                                    />
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR5"
                                           maxLength={1}
                                           type="password"
                                    />
                                    <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                           id="passwordCR6"
                                           maxLength={1}
                                           type="password"
                                    />
                                </AutoTabProvider>
                            </div>
                            <div className="pt-3">
                                <Button
                                    block
                                    className="text-[#F7FAFC] bg-[#3A4DF1] h-12 font-dm-sans font-semibold md:text-[20px] px-5 py-2.5 text-center"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default OTPCode;
