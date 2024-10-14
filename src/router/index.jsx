import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useLocation } from "react-router";
import ThemeProvider from "../layout/provider/index.jsx";
import LandingPage from "../pages/Landing/LandingPage.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Guest from "../pages/Chat/Guest/index.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import OTPCode from "../pages/OTP/OTPCode.jsx";
import NewPassword from "../pages/NewPassword/NewPassword.jsx";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};


const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route element={<ThemeProvider />}>
                        <Route index element={<LandingPage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="guest" element={<Guest />} />
                        <Route path="otp" element={<OTPCode />} />
                        <Route path="forgot-password" element={<ForgotPassword />} />
                        <Route path="new-password" element={<NewPassword />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;
