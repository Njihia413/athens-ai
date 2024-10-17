import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonIcon, Card } from "../../../components";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";

import { templates, documents } from "../../../store";
function RecentDocument() {
    return (
        <Card className="h-full">
            <div className="flex flex-col isolate relative">
                <div className="p-5 flex justify-between items-center gap-x-4">
                    <h6 className="text-md font-bold text-slate-700 dark:text-white">
                        Recent Documents
                    </h6>
                    <Link
                        to="/admin/documents"
                        className="font-medium text-sm text-blue-600 hover:text-blue-800"
                    >
                        View All
                    </Link>
                </div>
                <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-200 dark:scrollbar-track-slate-800 scrollbar-thumb-slate-600">
                    <table className="table-auto w-full text-sm border-t border-slate-200 dark:border-slate-800 border-collapse">
                        <thead className="text-slate-600 dark:text-slate-200">
                            <tr>
                                <th className="text-start px-5 py-2">
                                    Document
                                </th>
                                {/*<th className="text-start px-5 py-2">Created</th>*/}
                                <th className="sticky end-0 bg-white dark:bg-slate-950"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.length ? (
                                documents.slice(0, 3).map((item, index) => {
                                    const icon = templates.filter(function (
                                        template
                                    ) {
                                        return template.name.includes(
                                            item.template
                                        );
                                    });
                                    return (
                                        <tr key={index}>
                                            <td className="px-5 py-3 border-t border-slate-200 dark:border-slate-800">
                                                <div className="flex items-center">
                                                    <span className="h-6 w-6 block">
                                                        {icon[0].icon}
                                                    </span>
                                                    <div className="ms-3">
                                                        <span className="block text-slate-600 dark:text-slate-200 font-bold text-xs whitespace-nowrap">
                                                            {item.name}
                                                        </span>
                                                        <span className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                                                            {item.tool}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            {/*<td className="px-5 py-3 border-t border-slate-200 dark:border-slate-800">*/}
                                            {/*    <span className="block text-slate-600 dark:text-slate-200 text-xs font-bold  whitespace-nowrap">*/}
                                            {/*        {item.created.split(",")[0]}*/}
                                            {/*    </span>*/}
                                            {/*    <span className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium">*/}
                                            {/*        {item.created.split(",")[1]}*/}
                                            {/*    </span>*/}
                                            {/*</td>*/}
                                            <td className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 sticky end-0 bg-white dark:bg-slate-950">
                                                <ul className="flex justify-end gap-2">
                                                    <li>
                                                        <ButtonIcon
                                                            as="Link"
                                                            to={`/app/documents/edit/${item.id}`}
                                                            circle
                                                            size="sm"
                                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:dark:bg-blue-600 hover:dark:text-white"
                                                        >
                                                            <EyeIcon className="h-3 w-3" />
                                                        </ButtonIcon>
                                                    </li>
                                                    <li>
                                                        <ButtonIcon
                                                            circle
                                                            size="sm"
                                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-rose-600 hover:text-white hover:dark:bg-rose-600 hover:dark:text-white"
                                                        >
                                                            <TrashIcon className="h-3 w-3" />
                                                        </ButtonIcon>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td
                                        className="px-5 py-8 border-t text-center"
                                        colSpan={4}
                                    >
                                        <span className="block text-slate-500 dark:text-slate-400 mb-3">
                                            There is no document to show
                                        </span>
                                        <Button
                                            as="Link"
                                            to="/templates"
                                            className="bg-blue-600 text-white hover:bg-blue-800"
                                        >
                                            Create New
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    );
}

export default RecentDocument;
