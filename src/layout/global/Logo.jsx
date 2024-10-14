import React from "react";
import { twMerge } from 'tailwind-merge'

function Logo({rootClassName, className, classNameDark, classNameWhite}) {
    return (
        <div className={twMerge('flex items-center', rootClassName)}>
            <img className={twMerge('h-10 md:h-14 dark:hidden', className, classNameDark)} src="/Logo.png"/>
            <p className="font-dm-sans text-black font-semibold dark:text-white dark:hidden">
                Athens AI
            </p>
            <img className={twMerge('h-10 md:h-14 hidden dark:block', className, classNameWhite)} src="/Logo.png"/>
            <p className="font-dm-sans text-black font-semibold dark:text-white hidden dark:block">
                Athens AI
            </p>
        </div>
    );
}

export default Logo;
