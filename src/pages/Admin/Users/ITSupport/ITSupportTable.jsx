import React from "react";
import { ButtonIcon } from "../../../../components/index.jsx";
import { users } from "../../../../store/index.jsx";
import { PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import  DataTable  from "../../../../components/Datatable/index.jsx";

import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("name", {
        header: (info) => "Name",
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <div>
                        <span className="block text-slate-600 dark:text-slate-200 font-bold text-xs mb-1">
                            {row.original.name}
                        </span>
                    </div>
                </div>
            );
        },
    }),
    columnHelper.accessor("email", {
        header: (info) => "Email Address",
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <div>
                       <span className="block text-slate-500 dark:text-slate-400 text-xs font-medium">
                            {row.original.email}
                        </span>
                    </div>
                </div>
            );
        },
    }),
    columnHelper.accessor("nationalId", {
        header: (info) => "National ID",
        cell: (info) => {
            return (
                <>
                    <span
                        className={`block w-max text-xs font-bold ${
                            info.getValue() === "Strater"
                                ? "bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text"
                                : "text-slate-600 dark:text-slate-200"
                        }`}
                    >
                        {info.getValue()}
                    </span>
                </>
            );
        },
    }),
    columnHelper.accessor("gender", {
        header: (info) => "Gender",
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <div>
                       <span className="block text-slate-500 dark:text-slate-400 text-xs font-medium">
                            {row.original.gender}
                        </span>
                    </div>
                </div>
            );
        },
    }),
    columnHelper.accessor("status", {
        header: (info) => "Status",
        cell: (info) => {
            return (
                <>
                    <span
                        className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold capitalize ${
                            info.getValue() == "verified"
                                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-500"
                                : info.getValue() == "unverified"
                                    ? "bg-rose-100 dark:bg-rose-950 text-rose-500"
                                    : "text-slate-500 bg-slate-100 dark:bg-slate-900"
                        }`}
                    >
                        {info.getValue()}
                    </span>
                </>
            );
        },
    }),
    columnHelper.accessor("role", {
        header: (info) => "Role",
        cell: (info) => {
            const roleColors = {
                "Customer Service": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600",
                "HR": "bg-purple-100 dark:bg-purple-900 text-purple-600",
                "Manager": "bg-teal-100 dark:bg-teal-900 text-teal-600",
                "Finance": "bg-blue-100 dark:bg-blue-900 text-blue-600",
                "IT Support": "bg-orange-100 dark:bg-orange-900 text-orange-600",
                "Employee": "bg-green-100 dark:bg-green-900 text-green-600",
                "user": "bg-gray-100 dark:bg-gray-900 text-gray-600",
            };

            const role = info.getValue() || "user"; // Default to 'user' if no role is provided

            return (
                <span
                    className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold capitalize ${
                        roleColors[role] || "bg-gray-100 dark:bg-gray-900 text-gray-600"
                    }`}
                >
                {role}
            </span>
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
                                to={`/admin/users/edit/${info.row.original.id}`}
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

const ITSupportTable = () => {
    // Filter users whose role is "IT Support"
    const itSupportUsers = users.filter(user => user.role === "IT Support");

    return (
        <>
            <DataTable columns={columns} tableData={itSupportUsers} />
        </>
    );
}

export default ITSupportTable;
