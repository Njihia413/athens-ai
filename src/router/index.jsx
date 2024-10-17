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
import AdminDashboard from "../pages/Admin/Dashboard/index.jsx";
import UserList from "../pages/Admin/Users/index.jsx";
import UserEdit from "../pages/Admin/Users/Edit/index.jsx";
import ManagerList from "../pages/Admin/Users/Managers/index.jsx";
import CustomerServiceList from "../pages/Admin/Users/CustomerService/index.jsx";
import HRList from "../pages/Admin/Users/HR/index.jsx";
import ITSupportList from "../pages/Admin/Users/ITSupport/index.jsx";
import Roles from "../pages/Admin/Roles/index.jsx";
import RoleEdit from "../pages/Admin/Roles/Edit/index.jsx";
import Models from "../pages/Admin/Models/index.jsx";
import Documents from "../pages/Admin/Documents/index.jsx";
import UnverifiedList from "../pages/Admin/Users/UnverifiedUsers/index.jsx";
import User from "../pages/User/index.jsx";

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
                        <Route path="user" element={<User />} />
                        <Route path="otp" element={<OTPCode />} />
                        <Route path="forgot-password" element={<ForgotPassword />} />
                        <Route path="new-password" element={<NewPassword />} />

                        <Route path="admin">
                            <Route index element={<AdminDashboard />} />
                            <Route path="dashboard" element={<AdminDashboard />} />
                            <Route path="users">
                                <Route index element={<UserList />} />
                                <Route path="edit/:userId" element={<UserEdit />} />
                                <Route path="unverified" element={<UnverifiedList />} />
                                <Route path="managers" element={<ManagerList />} />
                                <Route path="customer_service" element={<CustomerServiceList />} />
                                <Route path="hr" element={<HRList />} />
                                <Route path="it_support" element={<ITSupportList />} />
                            </Route>
                            <Route path="roles" element={<Roles />} >
                                <Route path="edit/:roleId" element={<RoleEdit />} />
                            </Route>
                            <Route path="models" element={<Models />} />
                            <Route path="documents" element={<Documents />} />
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;
