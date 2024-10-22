import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
    Input,
    Label,
    Select,
    Checkbox,
    Switch,
    Button,
} from "../../../components";
import { country, language } from "../../../store";
const displayname = [
    { name: "Mr. Kevin" },
    { name: "Mr. Hector" },
    { name: "Kevin Hector" },
];

const gender = [
    { name: "Male" },
    { name: "Female" },
]
function Settings() {
    const [selectedDisplayname, setSelectedDisplayname] = useState(
        displayname[0]
    );
    const [selectedGender, setSelectedGender] = useState(gender[0]);
    return (
        <>
            <div className="px-6 pt-4 pb-5">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label htmlFor="fullName" className="mb-2">
                                Full Name
                            </Label>
                            <Input defaultValue="Kevin Hector" id="fullName" />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label htmlFor="displayName" className="mb-2">
                                Display Name
                            </Label>
                            <Select
                                selected={selectedDisplayname}
                                onChange={(value) => {
                                    setSelectedDisplayname(value);
                                }}
                                options={displayname}
                                id="displayName"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label
                                htmlFor="useremail"
                                className="mb-2 w-full items-center justify-between"
                            >
                                Email
                            </Label>
                            <Input
                                defaultValue="kevinhector@athensai.com"
                                id="useremail"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label htmlFor="nationalID" className="mb-2">
                                National ID
                            </Label>
                            <Input
                                defaultValue="12345678"
                                id="nationalID"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label htmlFor="gender" className="mb-2">
                                Gender
                            </Label>
                            <Select
                                selected={selectedGender}
                                options={gender}
                                onChange={(value) => {
                                    setSelectedGender(value);
                                }}
                                id="gender"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <div className="py-2">
                            <Label htmlFor="userlanguage" className="mb-2">
                                Date of Birth
                            </Label>
                            <Input
                                defaultValue="1st October 2000"
                                id="dateOfBirth"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 py-2">
                        <Button className="bg-blue-600 text-white hover:bg-blue-800">
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-4 pb-5 border-t border-slate-200 dark:border-slate-800">
                <div className="mt-2 mb-2">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                        Reset Password
                    </h2>
                    <p className="text-sm text-slate-500">
                        Password must be at least 8 character and contain
                        symbols.
                    </p>
                </div>
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full  lg:w-1/3 px-3">
                        <div className="py-2">
                            <Label htmlFor="currentPassword" className="mb-2">
                                Current Password
                            </Label>
                            <Input
                                defaultValue=""
                                id="currentPassword"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
                        <div className="py-2">
                            <Label htmlFor="newPassword" className="mb-2">
                                New Password
                            </Label>
                            <Input
                                defaultValue=""
                                id="newPassword"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
                        <div className="py-2">
                            <Label htmlFor="confirmPassword" className="mb-2">
                                Confirm Password
                            </Label>
                            <Input
                                defaultValue=""
                                id="confirmPassword"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 pb-2 pt-4">
                        <Button className="bg-blue-600 text-white hover:bg-blue-800">
                            Update Password
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
