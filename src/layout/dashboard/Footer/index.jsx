import React from "react";
import { Link } from "react-router-dom";
import Container from "../../global/Container.jsx";
const Footer = () => {
    return (
        <div
            className="isolate relative py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-auto">
            <Container>
                <div className="flex justify-center items-center text-center">
                    <p className="text-md font-medium text-slate-600 dark:text-slate-200">
                        © 2024 Athens AI. All rights reserved.
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
