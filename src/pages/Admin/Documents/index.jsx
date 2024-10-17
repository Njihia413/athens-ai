import React from "react";
import Layout from "../../../layout/dashboard";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {Breadcrumbs, Button} from "../../../components";
import DocumentsTable from "./DocumentsTable.jsx";

const Documents = () => {
    return (
        <Layout title="Documents">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Documents
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {text: "Dashboard", link: "/admin"},
                                    {text: "Documents"},
                                ]}
                            />
                        </div>
                    </div>
                    <DocumentsTable/>
                </Container>
            </Section>
        </Layout>
    );
}

export default Documents;
