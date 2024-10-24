import React from "react";
import Layout from "../../../../layout/dashboard";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Breadcrumbs } from "../../../../components";
import UnverifiedUsersTable from "./UnverifiedUsersTable.jsx";

const UnverifiedList = () => {
    return (
        <Layout>
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                All Unverified Users
                            </h2>
                            <Breadcrumbs
                                items={[
                                    { text: "Dashboard", link: "/admin" },
                                    { text: "All Unverified Users" },
                                ]}
                            />
                        </div>
                    </div>
                    <UnverifiedUsersTable />
                </Container>
            </Section>
        </Layout>
    );
}

export default UnverifiedList;
