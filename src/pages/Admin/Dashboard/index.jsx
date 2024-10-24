import React from "react";
import Layout from "../../../layout/dashboard";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import InfoTiles from "./InfoTiles.jsx";
import NewUsers from "./NewUsers";
import RecentDocument from "./RecentDocument.jsx";
import UsageOverviewChart from "./UsageOverviewChart.jsx";
import {Card} from "../../../components/index.jsx";

const AdminDashboard = () => {
    return (
        <Layout title="Admin Dashboard">
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex flex-wrap gap-3 justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Overview
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-200">
                                Welcome back to Athens AI
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <InfoTiles
                                title="New Users"
                                accent
                                data={{
                                    thisMonth: "27",
                                    lastMonth: "15",
                                    thisYear: "500",
                                }}
                            />
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <InfoTiles
                                title="New Errors"
                                data={{
                                    thisMonth: "10",
                                    lastMonth: "24",
                                    thisYear: "759",
                                }}
                            />
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <InfoTiles
                                title="Total Queries"
                                data={{
                                    thisMonth: "22",
                                    lastMonth: "55",
                                    thisYear: "42",
                                }}
                            />
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <InfoTiles
                                title="Total Datasources"
                                data={{
                                    thisMonth: "56",
                                    lastMonth: "37",
                                    thisYear: "10",
                                }}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-3">
                            <NewUsers/>
                        </div>
                        <div className="w-full lg:w-1/2 p-3">
                            <RecentDocument/>
                        </div>
                    </div>
                    <div className="w-full py-6">
                        <Card className="h-full">
                            <div className="flex flex-col isolate relative">
                                <div className="p-5 pb-2">
                                    <h6 className="text-md font-bold text-slate-700 dark:text-white mb-1">
                                        Logs Overview
                                    </h6>
                                    <span className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                                            Per day
                                    </span>
                                </div>
                                <div className="h-48 w-full px-5 pb-1">
                                    <UsageOverviewChart/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default AdminDashboard;
