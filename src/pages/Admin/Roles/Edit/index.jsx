import React from 'react';
import Section from "../../../../layout/global/Section.jsx";
import Container from "../../../../layout/global/Container.jsx";
import {Breadcrumbs, Button, Card, Input, Label} from "../../../../components/index.jsx";
import {ArrowLeftIcon} from "@heroicons/react/24/outline/index.js";
import Layout from "../../../../layout/dashboard/index.jsx";
import {useParams} from "react-router-dom";
import {roles} from "../../../../store/index.jsx";


const RoleEdit = () => {
    [];
    const { roleId } = useParams();

    const role = roles.filter((role) => role.id === roleId)[0];

    return (
        <Layout title={`Update - ${role.name}`}>
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Edit Role Info
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {
                                        text: "All Roles",
                                        link: "/admin/roles",
                                    },
                                    { text: role.name },
                                ]}
                            />
                        </div>
                        <div className="px-3">
                            <Button
                                as="Link"
                                to="/admin/roles"
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
                                {role.name}
                            </h2>
                        </div>
                        <div className="px-6 pt-5 pb-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-wrap items-center -mx-3 -my-2">
                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="roleid"
                                            className="mb-2"
                                        >
                                            Role ID
                                        </Label>
                                        <Input
                                            disabled
                                            defaultValue={role.id}
                                            id="roleid"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 xl:w-2/5 px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="roleName"
                                            className="mb-2"
                                        >
                                            Role Name
                                        </Label>
                                        <Input
                                            defaultValue={role.name}
                                            id="roleName"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 pb-2 pt-4">
                                    <Button className="bg-[#3a4df1] text-white hover:bg-blue-800">
                                        Update Role
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </Card>
                </Container>
            </Section>
        </Layout>
    )
}

export default RoleEdit;
