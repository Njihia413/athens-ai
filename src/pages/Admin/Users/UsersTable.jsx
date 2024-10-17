import React, {useState} from "react";
import moment from "moment";
import { ButtonIcon } from "../../../components";
import { users } from "../../../store";
import { PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import  DataTable  from "../../../components/Datatable";

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
    columnHelper.accessor("joined", {
        header: (info) => "Joined At",
        cell: (info) => {
            const date = moment(info.getValue()).format("ll");
            const time = moment(info.getValue()).format("LT");
            return (
                <>
                    <span className="block text-slate-600 dark:text-slate-200 text-xs font-bold whitespace-nowrap mb-1">
                        {date}
                    </span>
                    <span className="block text-slate-500 dark:text-slate-400 text-xs font-medium">
                        {time}
                    </span>
                </>
            );
        },
    }),
    columnHelper.accessor("dob", {
        header: (info) => "Date of Birth",
        cell: (info) => {
            return (
                <>
                    <span
                        className="block w-max text-xs font-bold text-slate-600 dark:text-slate-200"
                    >
                        {info.getValue()}
                    </span>
                </>
            );
        },
    }),
    columnHelper.accessor("status", {
        header: (info) => "Status",
        cell: (info) => {
            const [isOpen, setIsOpen] = useState(false);
            const [status, setStatus] = useState(info.getValue());

            // Toggle dropdown visibility
            const toggleDropdown = () => setIsOpen(!isOpen);

            // Handle option selection
            const handleSelect = (value) => {
                setStatus(value);
                setIsOpen(false);
                console.log("Status changed to:", value);
            };

            return (
                <div className="relative inline-block text-left">
                    <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold capitalize cursor-pointer
                        ${
                            status == "verified"
                                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-500"
                                : status == "unverified"
                                    ? "bg-rose-100 dark:bg-rose-950 text-rose-500"
                                    : "text-slate-500 bg-slate-100 dark:bg-slate-900"
                        }`}
                        onClick={toggleDropdown}
                    >
                        {status}
                    </div>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="absolute mt-1 right-0 w-32 rounded-md shadow-lg bg-white dark:bg-slate-950 ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1">
                                <div
                                    className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-100 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-950"
                                    onClick={() => handleSelect("active")}
                                >
                                    Verify
                                </div>
                                <div
                                    className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-100 cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-950"
                                    onClick={() => handleSelect("inactive")}
                                >
                                    Unverify
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        },
    }),
    columnHelper.accessor("role", {
        header: (info) => "Role",
        cell: (info) => {
            const [isOpen, setIsOpen] = useState(false);
            const [role, setRole] = useState(info.getValue() || "user");

            // Toggle dropdown visibility
            const toggleDropdown = () => setIsOpen(!isOpen);

            // Handle role selection
            const handleSelect = (selectedRole) => {
                setRole(selectedRole);
                setIsOpen(false);
                console.log("Role changed to:", selectedRole);
            };

            // Color mappings for each role, including the new "Employee" role
            const roleColors = {
                "Customer Service": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600",
                "HR": "bg-purple-100 dark:bg-purple-900 text-purple-600",
                "Manager": "bg-teal-100 dark:bg-teal-900 text-teal-600",
                "Finance": "bg-blue-100 dark:bg-blue-900 text-blue-600",
                "IT Support": "bg-orange-100 dark:bg-orange-900 text-orange-600",
                "Employee": "bg-green-100 dark:bg-green-900 text-green-600",  // New "Employee" role
                "user": "bg-gray-100 dark:bg-gray-900 text-gray-600", // Default 'user' role
            };

            return (
                <div className="relative inline-block text-left">
                    {/* Role Display with Click to Open Dropdown */}
                    <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold capitalize cursor-pointer ${
                            roleColors[role] || "bg-gray-100 dark:bg-gray-900 text-gray-600"
                        }`}
                        onClick={toggleDropdown}
                    >
                        {role}
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute mt-1 right-0 w-40 rounded-md shadow-lg bg-white dark:bg-slate-950 ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1">
                                {["Customer Service", "HR", "Manager", "Finance", "IT Support", "Employee"].map((roleOption) => (
                                    <div
                                        key={roleOption}
                                        className={`block px-4 py-2 text-sm cursor-pointer capitalize ${roleColors[roleOption]} hover:opacity-80`}
                                        onClick={() => handleSelect(roleOption)}
                                    >
                                        {roleOption}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
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

const UsersTable = () => {
    return (
        <>
            <DataTable columns={columns} tableData={users} />
        </>
    );
}

export default UsersTable;
