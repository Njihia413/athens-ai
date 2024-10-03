import React from 'react';
import {Link} from "react-router-dom";
import SignupForm from "./SignupForm.jsx";
import SignupImg from "../assets/SignupImg.png"

const Signup = () => {
    return (
        <section>
            <div className="min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="hidden md:hidden lg:block">
                    <img className="h-full w-full" alt="SignupImg" src={SignupImg}/>
                </div>

                <div className="px-10">
                    <p className="font-dm-sans font-black text-[40px] text-black mt-[2rem]">Sign up</p>

                    <p className="font-dm-sans font-normal text-[18px] text-[#000033B3] mt-[1rem]">
                        Already have an account?&nbsp;
                        <Link to="/login" className="text-[#3A4DF199] font-medium underline hover:no-underline">Sign in</Link>
                    </p>
                    <SignupForm/>
                </div>
            </div>
        </section>
    )
}

export default Signup;
