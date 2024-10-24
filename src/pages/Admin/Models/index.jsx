import React from "react";
import Layout from "../../../layout/dashboard";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {Breadcrumbs, Button} from "../../../components";
import ModelsTable from "./ModelsTable.jsx";
import {Link} from "react-router-dom";

const Models = () => {
    return (
        <Layout title="Models">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Models
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {text: "Dashboard", link: "/admin"},
                                    {text: "Models"},
                                ]}
                            />
                        </div>
                        <div className="px-3 mt-5">
                            <Link to="/admin/models/add">
                                <Button className="bg-[#3a4df1] text-white hover:bg-blue-800">
                                    Add New Model
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <ModelsTable/>
                </Container>
            </Section>
        </Layout>
    );
}

export default Models;
