import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../../layout/dashboard";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import {
    Breadcrumbs,
    Button,
    Label,
    Input,
    Select,
    Card,
} from "../../../../components";
import { users, country, language } from "../../../../store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const userStatus = [
    { name: "Active" },
    { name: "Inactive" },
];

const userGender = [
    { name: "Male" },
    { name: "Female" },
];

const UserEdit = () => {
    [];
    const { userId } = useParams();

    const user = users.filter((user) => user.id === userId)[0];

    const statusIndex = userStatus.findIndex((object) => {
        return object.name.toLowerCase() === user.status.toLowerCase();
    });

    const genderIndex = userGender.findIndex((object) => {
        return object.name.toLowerCase() === user.gender.toLowerCase();
    });

    const [selectedStatus, setSelectedStatus] = useState(
        userStatus[statusIndex]
    );

    const [selectedGender, setSelectedGender] = useState(
        userGender[genderIndex]
    );

    return (
        <Layout title={`Update - ${user.firstName}`}>
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Edit User Info
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {
                                        text: "All Users",
                                        link: "/admin/users",
                                    },
                                    { text: user.firstName + " " + user.middleName + " " + user.lastName },
                                ]}
                            />
                        </div>
                        <div className="px-3">
                            <Button
                                as="Link"
                                to="/admin/users"
                                className="bg-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white"
                            >
                                <ArrowLeftIcon className="h-5 -mx-2 sm:mx-0 sm:h-4" />
                                <span className="hidden sm:block">Back</span>
                            </Button>
                        </div>
                    </div>

                    <Card>
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white">
                                <span className="text-base text-slate-400 font-normal">
                                    Edit -{" "}
                                </span>{" "}
                                {user.firstName} {user.middleName} {user.lastName}
                            </h2>
                        </div>
                        <div className="px-6 pt-5 pb-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-wrap items-center -mx-3 -my-2">
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="userid"
                                            className="mb-2"
                                        >
                                            User ID
                                        </Label>
                                        <Input
                                            disabled
                                            defaultValue={user.id}
                                            id="userid"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="firstName"
                                            className="mb-2"
                                        >
                                            First Name
                                        </Label>
                                        <Input
                                            defaultValue={user.firstName}
                                            id="firstName"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="middleName"
                                            className="mb-2"
                                        >
                                            Middle Name
                                        </Label>
                                        <Input
                                            defaultValue={user.middleName}
                                            id="middleName"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="lastName"
                                            className="mb-2"
                                        >
                                            Last Name
                                        </Label>
                                        <Input
                                            defaultValue={user.lastName}
                                            id="lastName"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="useremail"
                                            className="mb-2"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            defaultValue={user.email}
                                            id="useremail"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="nationalID"
                                            className="mb-2"
                                        >
                                            National ID
                                        </Label>
                                        <Input
                                            defaultValue={user.nationalId}
                                            id="useremail"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="gender"
                                            className="mb-2"
                                        >
                                            Gender
                                        </Label>
                                        <Select
                                            options={userGender}
                                            selected={selectedGender}
                                            onChange={(value) => {
                                                setSelectedGender(value);
                                            }}
                                            id="gender"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="userstatus"
                                            className="mb-2"
                                        >
                                            Status
                                        </Label>
                                        <Select
                                            options={userStatus}
                                            selected={selectedStatus}
                                            onChange={(value) => {
                                                setSelectedStatus(value);
                                            }}
                                            id="userstatus"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-5">
                            <div className="w-full xl:w-2/3 mb-2">
                                <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                    Reset Password
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Password must be at least 8 character and
                                    contain symbols.
                                </p>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                                Leave it empty if you don't want to change
                                    the user's password!
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center -mx-3">
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="newPassword"
                                            className="mb-2"
                                        >
                                            New Password
                                        </Label>
                                        <Input
                                            defaultValue=""
                                            id="newPassword"
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="mb-2"
                                        >
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
                                    <Button className="bg-[#3a4df1] text-white hover:bg-blue-800">
                                        Update Profile
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Section>
        </Layout>
    );
}

export default UserEdit;
