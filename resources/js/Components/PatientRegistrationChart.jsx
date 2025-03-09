import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { format, subDays } from "date-fns";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function PatientRegistrationChart() {
    // const [chartData, setChartData] = useState(null);

    // useEffect(() => {
    //     // Generate dummy data for the last 10 days
    //     const generateDummyData = () => {
    //         let data = [];
    //         for (let i = 10; i >= 1; i--) {
    //             data.push({
    //                 date: format(subDays(new Date(), i), "MMM d"), // e.g., "May 1"
    //                 count: Math.floor(Math.random() * 300) + 50, // Random patient count (50-350)
    //             });
    //         }
    //         return data;
    //     };

    //     const dummyData = generateDummyData();
    //     const labels = dummyData.map((entry) => entry.date);
    //     const counts = dummyData.map((entry) => entry.count);

    //     setChartData({
    //         labels,
    //         datasets: [
    //             {
    //                 label: "Patients Registered",
    //                 data: counts,
    //                 borderColor: "#007bff",
    //                 backgroundColor: "rgba(0, 123, 255, 0.2)",
    //                 borderWidth: 2,
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderColor: "#007bff",
    //                 pointRadius: 5,
    //                 tension: 0.4, // Smooth curve effect
    //             },
    //         ],
    //     });
    // }, []); // Prevents infinite re-renders

    // const chartOptions = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     plugins: {
    //         legend: { display: false },
    //     },
    //     scales: {
    //         x: {
    //             type: "category",
    //             ticks: { color: "white" },
    //             grid: { display: false },
    //         },
    //         y: {

    //             ticks: { color: "white", stepSize: 100 },
    //             grid: { color: "rgba(255, 255, 255, 0.2)" },
    //         },
    //     },
    // };

    const chartData = {
        labels: [
            "Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13"
        ],
        datasets: [
            {
                label: "Patients Registered",
                data: [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 99, 67, 20], // Dummy data
                backgroundColor: "rgba(0, 123, 255, 0.2)", // Semi-transparent fill
                borderColor: "#007bff", // Blue line color
                borderWidth: 2,
                pointBackgroundColor: "#fff",
                pointBorderColor: "#007bff",
                pointRadius: 0,
                tension: 0.4, // Makes the line smooth
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    drawOnChartArea : false
                },
                border:{
                    display:false
                },
                legend: true,
                ticks: { color: "#97a4af" },

            },
            y: {
                grid: {
                    color: "#e7eaf3",
                    drawBorder: false,
                    zeroLineColor: "#fff"
                },
                border:{
                    display:false
                },
                ticks: {
                    color: "#97a4af", stepSize: 25,
                    min: 0,
                    max: 100,
                    padding: 10,
                    postfix: "k"
                },

            },
        },
        plugins: {
            legend: { display: false },
            tooltip:{
                prefix:"$",
                postfix : "k",
                hasIndicator: true,
                mode:"Index",
                intersect:false,
                lineMode:true,
                lineWithLineColor: "rgba(19, 33, 68, 0.075)"

            }
        },
        hover:{
            mode:"nearest",
            intersect: true
        }
    };


    return (
        <div className="card h-100" >
            <div class="card-header card-header-content-between">
                <h4 class="card-header-title">Daily Patient Registrations</h4>

            </div>
            <div className="card-body">
                <div className="chartjs-custom" style={{ height: '18rem' }}>
                    {chartData ? <Line data={chartData} options={chartOptions} className="js-chart" /> : <p className="text-white">Loading...</p>}
                </div>

            </div>

        </div>
    );
};