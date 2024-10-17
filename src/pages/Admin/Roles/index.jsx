import React from "react";
import Layout from "../../../layout/dashboard";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {Breadcrumbs, Button} from "../../../components";
import RolesTable from "./RolesTable.jsx";

const Roles = () => {
    return (
        <Layout title="Roles">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Roles
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {text: "Dashboard", link: "/admin"},
                                    {text: "Roles"},
                                ]}
                            />
                        </div>
                        <div className="px-3 mt-5">
                            <Button
                                className="bg-[#3a4df1] text-white hover:bg-blue-800"
                            >
                                Add New Role
                            </Button>
                        </div>
                    </div>
                    <RolesTable/>
                </Container>
            </Section>
        </Layout>
    );
}

export default Roles;
