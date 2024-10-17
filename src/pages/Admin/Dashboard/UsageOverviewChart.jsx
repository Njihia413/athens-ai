import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "../../../layout/provider";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


function UsageOverviewChart() {
    const theme = useTheme();

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    labelColor: function (context) {
                        return {
                            borderColor: "rgb(30 41 59)",
                            backgroundColor: "rgb(30 41 59)",
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderRadius: 2,
                        };
                    },
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ` : ${context.parsed.y}`;
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            y: {
                display: true,
                beginAtZero: true,
                ticks: {
                    color: "rgb(100 116 139)",
                    font: {
                        size: "11px",
                    },
                    padding: 10,
                },
                grid: {
                    color: theme.mode !== "dark" ? "rgb(226 232 240)" : "rgb(30 41 59)",
                    tickMarkLength: 0,
                },
            },
            x: {
                display: true,
                ticks: {
                    color: "rgb(100 116 139)",
                    font: {
                        size: "9px",
                    },
                    source: "auto",
                    padding: 5,
                    callback: function (value) {
                        return value;
                    },
                },
                grid: {
                    color: "transparent",
                    tickMarkLength: 0,
                    zeroLineColor: "transparent",
                },
            },
        },
    };

    const labels = [
        "01 September",
        "02 September",
        "03 September",
        "04 September",
        "05 September",
        "06 September",
        "07 September",
        "08 September",
        "09 September",
        "10 September",
        "11 September",
        "12 September",
        "13 September",
        "14 September",
        "15 September",
        "16 September",
        "17 September",
        "18 September",
        "19 September",
        "20 September",
        "21 September",
        "22 September",
        "23 September",
        "24 September",
        "25 September",
        "26 September",
        "27 September",
        "28 September",
        "29 September",
        "30 September",
    ];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "Word Used",
                data: [
                    260, 270, 280, 400, 550, 400, 390, 360, 400, 500, 700, 900, 800,
                    600, 550, 500, 520, 540, 580, 620, 670, 700, 700, 710, 690, 620,
                    640, 680, 660, 630,
                ],
                borderWidth: 2,
                borderColor: "rgb(37,99,235)",
                backgroundColor: "rgba(37,99,235, 0.5)",
                lineTension: 0.4,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 4,
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointHoverBorderColor: "rgb(37,99,235)",
                pointHoverBackgroundColor: "#fff",
            },
        ],
    };
    return <Line options={options} data={data} />;
}

export default UsageOverviewChart;
