import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

// Generate random numbers for services
const dentalServices = [
    "Dental Implants",
    "Regular Check-ups and Professional Cleaning",
    "Complete Smile Makeover",
    "Invisalign",
    "Dental Crowns",
    "Preventive Treatment",
    "Pediatric Treatment",
    "Teeth Whitening",
    "Dentures",
    "Over Dentures",
    "Root Canal",
    "Tooth Extractions",
    "Dental Fillings",
    "Wisdom Tooth Removal",
    "Dental Bridge",
    "Bone Graft",
    "Adult Braces",
    "Mouth Guard & Night Guard",
    "Sleep Apnea & Snoring Devices",
    "Veneers",
];

// Generate random numbers between 10-100
const generateRandomData = (count) => Array.from({ length: count }, () => Math.floor(Math.random() * 90) + 10);

// Colors for each section
const colors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
    "#FF9F40", "#FFCD56", "#C9CBCF", "#36A2EB", "#FF6384",
    "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56", "#C9CBCF",
    "#36A2EB", "#FF6384", "#4BC0C0", "#9966FF", "#FF9F40"
];

export default function ServicesChart() {
    const data = {
        labels: dentalServices,
        datasets: [
            {
                data: generateRandomData(dentalServices.length),
                backgroundColor: colors,
                hoverBackgroundColor: colors.map(color => `${color}D0`), // Slightly transparent on hover
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Ensures it doesn't inherit CSS aspect ratio
        cutout:"80%",
        plugins: {
            legend: {
                position: "right",
                labels: { color: "#000", font: { size: 14 } },
            },
            tooltip: {
                bodyColor: "#000", // Tooltip text color
                backgroundColor: "#fff", // Tooltip background
                titleColor: "#000", // Title color
            },
        },
    };
    return (
        <>
            <div className="card h-100" >
                <div class="card-header card-header-content-between">
                    <h4 class="card-header-title">Services Availed</h4>

                </div>
                <div className="card-body">
                    <div className="chartjs-custom" style={{ height: '18rem' }}>
                        <Doughnut data={data} options={options} />
                    </div>

                </div>

            </div>
        </>
    )
}