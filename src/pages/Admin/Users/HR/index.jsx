import React from "react";
import Layout from "../../../../layout/dashboard";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Breadcrumbs } from "../../../../components";
import HRTable from "./HRTable.jsx";

const HRList = () => {
    return (
        <Layout>
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                All HRs
                            </h2>
                            <Breadcrumbs
                                items={[
                                    { text: "Dashboard", link: "/admin" },
                                    { text: "All HRs" },
                                ]}
                            />
                        </div>
                    </div>
                    <HRTable />
                </Container>
            </Section>
        </Layout>
    );
}

export default HRList;
