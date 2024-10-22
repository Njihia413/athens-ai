import React from 'react';
import Section from "../../../../layout/global/Section.jsx";
import Container from "../../../../layout/global/Container.jsx";
import {Button, Card, Input, Label, UploadZone} from "../../../../components/index.jsx";
import {ArrowLeftIcon} from "@heroicons/react/24/outline/index.js";
import Layout from "../../../../layout/dashboard/index.jsx";

const DatasourceAdd = () => {
    return (
        <Layout title="Add New Datasource">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Add New Datasource
                            </h2>
                            {/*<Breadcrumbs*/}
                            {/*    items={[*/}
                            {/*        {*/}
                            {/*            text: "All Models",*/}
                            {/*            link: "/admin/models",*/}
                            {/*        },*/}
                            {/*        // { text: model.name },*/}
                            {/*    ]}*/}
                            {/*/>*/}
                        </div>
                        <div className="px-3">
                            <Button
                                as="Link"
                                to="/admin/datasources"
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
                                    Add New Datasource
                                </span>{" "}
                            </h2>
                        </div>
                        <div className="px-6 pt-5 pb-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex flex-wrap items-center -mx-3 -my-2">
                                <div className="w-full  px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="modelid"
                                            className="mb-2"
                                        >
                                            Datasource ID
                                        </Label>
                                        <Input
                                            disabled
                                            defaultValue="07"
                                            id="datasourceid"
                                        />
                                    </div>
                                </div>

                                {/*<div className="w-full lg:w-1/2 xl:w-2/5 px-3">*/}
                                {/*    <div className="py-2">*/}
                                {/*        <Label*/}
                                {/*            htmlFor="datasourceName"*/}
                                {/*            className="mb-2"*/}
                                {/*        >*/}
                                {/*            Datasource Name*/}
                                {/*        </Label>*/}
                                {/*        <Input*/}
                                {/*            id="datasourceName"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="w-full px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="documentUpload"
                                            className="mb-2"
                                        >
                                            Add datasource(s) .pdf,.txt,.docx
                                        </Label>
                                        <UploadZone id="documentUpload"/>
                                    </div>
                                </div>
                                <div className="w-full px-3 pb-2 pt-4">
                                    <Button className="bg-[#3a4df1] text-white hover:bg-blue-800">
                                        Add Datasource
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

export default DatasourceAdd;
