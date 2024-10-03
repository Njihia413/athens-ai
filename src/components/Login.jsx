// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginImg from "../assets/Group 1000004164.png";

const Login = () => {
    return (
        <section>
            <div className="min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="hidden md:hidden lg:block">
                    <img className="h-full w-full" alt="Login" src={LoginImg}/>
                </div>

                <div className="px-10">
                    <p className="font-dm-sans font-black text-[40px] text-[#000033] mt-[2rem]">Login</p>

                    <p className="font-dm-sans font-normal text-[18px] text-[#000033B3] mt-[1rem]">
                        Don't have an account?&nbsp;
                        <Link to="/signup" className="text-[#3A4DF199] font-medium underline hover:no-underline">Create
                            now</Link>
                    </p>

                    <LoginForm/>
                </div>
            </div>
        </section>
    )
}

export default Login;
