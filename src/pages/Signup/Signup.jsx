import React, { useState } from 'react';
import Container from "../../layout/global/Container.jsx";
import { Button, Input, Select, Label } from "../../components/index.jsx";
import { Link } from "react-router-dom";
import Section from "../../layout/global/Section.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const genderOptions = [
        { name: 'Male' },
        { name: 'Female' },
        { name: 'Other' },
    ];

    const [selectedGender, setSelectedGender] = useState(genderOptions[0]);

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
                    <div className="w-full xs:w-4/5 sm:w-3/5 md:w-2/3 lg:w-2/5 xl:w-3/8 px-3 pt-10 pb-10 md:pt-0 md:pb-0">
                        <div
                            className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                            <div className="mb-2">
                                <h3 className="font-dm-sans font-extrabold text-[25px] md:text-[35px] text-[#000033] dark:text-white">Signup</h3>
                                <p className="font-dm-sans text-sm text-slate-500 dark:text-slate-400">
                                    To access Athens AI
                                </p>
                            </div>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="firstName"
                                            className="mb-2 font-dm-sans"
                                        >
                                            First Name
                                        </Label>
                                        <Input
                                            placeholder="eg John"
                                            id="firstName"
                                            className="font-dm-sans"
                                            type="text"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <Label
                                            htmlFor="lastName"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Last Name
                                        </Label>
                                        <Input
                                            placeholder="eg Doe"
                                            id="lastName"
                                            className="font-dm-sans"
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="gender"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Gender
                                        </Label>
                                        <Select
                                            id="gender"
                                            className="font-dm-sans"
                                            options={genderOptions}
                                            selected={selectedGender}
                                            onChange={setSelectedGender}
                                        />
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="dateOfBirth"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Date of Birth
                                        </Label>
                                        <Input
                                            id="dateOfBirth"
                                            className="font-dm-sans"
                                            type="date"
                                        />
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="emailAddress"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Email Address&nbsp;<span className="text-[#f62d51]">*</span>
                                        </Label>
                                        <Input
                                            placeholder="eg email@gmail.com"
                                            id="emailAddress"
                                            className="font-dm-sans"
                                            type="email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="nationalID"
                                            className="mb-2 font-dm-sans"
                                        >
                                            National ID
                                        </Label>
                                        <Input
                                            placeholder="eg 12345678"
                                            id="nationalID"
                                            className="font-dm-sans"
                                            type="number"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Label
                                            htmlFor="password"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Password&nbsp;<span className="text-[#f62d51]">*</span>
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
                                    <div className="relative">
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="mb-2 font-dm-sans"
                                        >
                                            Confirm Password&nbsp; <span className="text-[#f62d51]">*</span>
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
                                </div>
                                <div className="pt-5">
                                    <Button
                                        block
                                        type="submit"
                                        className="text-[#F7FAFC] bg-[#3A4DF1] h-12 font-dm-sans font-semibold md:text-[20px] px-5 py-2.5 text-center"
                                    >
                                        Create Account
                                    </Button>
                                </div>
                            </form>

                            <p className="font-dm-sans font-normal text-[#000033B3] mt-[1rem] text-center dark:text-white">
                                Already have an account?&nbsp;
                                <Link to="/login" className="text-[#3A4DF199] font-medium underline hover:no-underline">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Signup;
