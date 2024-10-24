import React from "react";
import { ButtonIcon } from "../../../components/index.jsx";
import {documents, templates} from "../../../store/index.jsx";
import { PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import  DataTable  from "../../../components/Datatable/index.jsx";

import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("name", {
        header: (info) => "Datasource Name",
        cell: ({ row }) => {
            const icon = templates.filter(function (template) {
                return template.name.includes(row.original.template);
            });

            return (
                <div className="flex items-center">
                    <span className="h-6 w-6 block">{icon[0].icon}</span>
                    <div className="ms-3">
                        <span className="block text-slate-600 dark:text-slate-200 font-bold text-xs mb-1">
                            {row.original.name}
                        </span>
                    </div>
                </div>
            );
        },
    }),

    columnHelper.display({
        id: "tableAction",
        header: (info) => "",
        cell: (info) => {
            return (
                <>
                    <ul className="flex justify-end gap-2">
                        <li>
                            <ButtonIcon
                                as="Link"
                                // to={`/admin/roles/edit/${info.row.original.id}`}
                                to="#"
                                circle
                                size="sm"
                                className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:dark:bg-blue-600 hover:dark:text-white"
                            >
                                <PencilIcon className="h-3 w-3" />
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
                </>
            );
        },
    }),
];

const DatasourcesTable = () => {

    return (
        <>
            <DataTable columns={columns}  tableData={documents}/>
        </>
    );
}

export default DatasourcesTable;
