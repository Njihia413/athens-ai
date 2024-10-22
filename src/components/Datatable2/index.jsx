import React, { useState } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Pagination from "./Pagination";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";
import PageStatus from "./PageStatus";
import Card from "../ui/Card";

function DataTable({ columns, tableData }) {
    const pageSizeSelect = [
        { name: 5 },
        { name: 10 },
        { name: 15 },
        { name: 20 },
    ];

    const statusSelect = [
        { name: 'Active'},
        { name: 'Inactive'},
        { name: 'Archive'},
    ]

    const roleSelect = [
        { name: 'Manager'},
        { name: 'IT Support'},
        { name: 'Human Resource'},
        { name: 'Customer Service'},
    ]

    const [data, setData] = useState(() => [...tableData]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [selected, setSelected] = useState(pageSizeSelect[0]);
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const [selectedRole, setSelectedRole] = useState(roleSelect[0]);

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
    });

    // Update the state when input changes
    const handleFilterChange = (e) => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
    };

    return (
        <>
            <Card>
                <div className="px-5 py-5 flex gap-3 items-center ">
                    <div className="w-full xs:w-44">
                        <Input
                            value={globalFilter}
                            onChange={handleFilterChange}
                            placeholder="Search all columns..."
                        />
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="w-24 xs:w-20">
                            <Select
                                selected={selectedStatus}
                                options={statusSelect}
                                onChange={setSelectedStatus} // Set the selected status
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="w-auto xs:w-32">
                            <Select
                                selected={selectedRole}
                                options={roleSelect}
                                onChange={selectedRole} // Set the selected role
                            />
                        </div>
                    </div>
                    <div className="flex items-center ml-auto gap-x-3">
                        <div className="text-slate-500 dark:text-slate-300 text-sm hidden xs:block">
                            Show
                        </div>
                        <div className="w-16 xs:w-20">
                            <Select
                                selected={selected}
                                options={pageSizeSelect}
                                onChange={(value) => {
                                    table.setPageSize(Number(value.name));
                                    setSelected(value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="overflow-x-auto scrollbar-thin scrollbar-track-slate-200 dark:scrollbar-track-slate-800 scrollbar-thumb-slate-600">
                    <table
                        className="table-auto w-full text-sm border-t border-b border-slate-200 dark:border-slate-800 border-collapse">
                        <thead className="text-slate-600 dark:text-slate-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        className="text-start ps-5 pe-5 py-2 last:ps-2 last:sticky last:end-0 last:bg-white last:dark:bg-slate-950"
                                            key={header.id}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            className="ps-5 pe-5 py-3 border-t border-slate-200 dark:border-slate-800 last:ps-2 last:sticky last:end-0 last:bg-white last:dark:bg-slate-950"
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div
                    className={`px-5 py-5 flex sm:items-center justify-between flex-col sm:flex-row gap-4`}
                >
                    <PageStatus table={table} />
                    <Pagination table={table} />
                </div>
            </Card>
        </>
    );
}

export default DataTable;
