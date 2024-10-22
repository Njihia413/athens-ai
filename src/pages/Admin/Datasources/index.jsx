import React from "react";
import Layout from "../../../layout/dashboard";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {Breadcrumbs, Button} from "../../../components";
import DatasourcesTable from "./DatasourcesTable.jsx";
import {Link} from "react-router-dom";

const Documents = () => {
    return (
        <Layout title="Datasources">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Datasources
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {text: "Dashboard", link: "/admin"},
                                    {text: "Datasources"},
                                ]}
                            />
                        </div>
                        <div className="px-3 mt-5">
                            <Link to="/admin/datasources/add">
                                <Button className="bg-[#3a4df1] text-white hover:bg-blue-800">
                                    Add New Datasource
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <DatasourcesTable/>
                </Container>
            </Section>
        </Layout>
    );
}

export default Documents;
