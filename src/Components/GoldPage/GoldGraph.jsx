import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { date: "Feb '20", price: 4000 },
    { date: "Jan '21", price: 5200 },
    { date: "Jan '22", price: 6100 },
    { date: "Jan '23", price: 7200 },
    { date: "Jan '24", price: 8800 },
];

const timeFilters = ["1M", "3M", "6M", "1Y", "3Y", "5Y"];

const PerformanceGraph = () => {
    const [activeFilter, setActiveFilter] = useState("5Y");

     const [investment, setInvestment] = useState(1000);
        const [frequency, setFrequency] = useState("Daily");
        const [years, setYears] = useState(1);

        const calculateReturns = () => {
            const annualRate = 0.08; // 8% estimated annual return
            let totalAmount = 0;
    
            if (frequency === "Daily") {
                const dailyRate = annualRate / 365;
                const days = years * 365;
                for (let i = 0; i < days; i++) {
                    totalAmount = (totalAmount + investment) * (1 + dailyRate);
                }
            } else if (frequency === "Monthly") {
                const monthlyRate = annualRate / 12;
                const months = years * 12;
                for (let i = 0; i < months; i++) {
                    totalAmount = (totalAmount + investment) * (1 + monthlyRate);
                }
            } else {
                // One-time investment
                totalAmount = investment * Math.pow(1 + annualRate, years);
            }
    
            return totalAmount.toFixed(2);
        };
    return (
        <div className=" text-white  flex flex-col lg:flex-row gap-">
            {/* Performance Graph */}
            <div className="w-full lg:w-2/3  p-6 ">
                <h2 className="text-2xl font-bold mb-4">Performance</h2>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-gray-800 gap-2 mb-4">
                    <span>🔴 Live buy price</span>
                    <span className="text-white font-semibold">₹ {data[data.length - 1].price}/gm</span>
                    <span>Absolute returns: <span className="text-green-400">+99.45%</span></span>
                    <span>CAGR: <span className="text-green-400">+14.81%</span></span>
                </div>

                {/* Time Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {timeFilters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-3 py-1 rounded-md text-sm transition ${
                                activeFilter === filter ? "bg-white text-gray-800 font-bold" : "bg-gray-700"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Graph */}
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="date" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Line type="monotone" dataKey="price" stroke="#4ade80" strokeWidth={3} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>          
            
            <div className="w-full lg:w-1/3 bg-white text-gray-900 p-6 rounded-lg shadow-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Calculate & Decide</h2>

            {/* Investment Amount */}
            <label className="block text-gray-600 mb-1">Investment Amount (₹)</label>
            <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full p-2 border rounded-md mb-4"
                min="1"
            />

            {/* Investment Frequency */}
            <label className="block text-gray-600 mb-1">Investment Frequency</label>
            <div className="flex space-x-2 mb-4">
                {["Daily", "Monthly", "One-time"].map((option) => (
                    <button
                        key={option}
                        onClick={() => setFrequency(option)}
                        className={`flex-1 p-2 border rounded-md transition ${
                            frequency === option ? "bg-black text-white font-semibold" : "bg-gray-100"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Investment Period */}
            <label className="block text-gray-600 mb-1">Investment Period (Years)</label>
            <div className="flex items-center space-x-3 mb-4">
                <button
                    onClick={() => setYears((prev) => Math.max(1, prev - 1))}
                    className="p-2 bg-gray-200 rounded-md"
                >
                    -
                </button>
                <span className="text-lg font-semibold">{years}</span>
                <button
                    onClick={() => setYears((prev) => prev + 1)}
                    className="p-2 bg-gray-200 rounded-md"
                >
                    +
                </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">Figures are based on historical returns.</p>

            {/* Estimated Returns */}
            <div className="bg-gray-100 p-4 rounded-lg text-center mb-4">
                <p className="text-sm text-gray-600">
                    If you invest ₹{investment} {frequency} for {years} years, your investment could grow to:
                </p>
                <p className="text-2xl font-bold mt-2">₹ {calculateReturns()}</p>
            </div>

            {/* Invest Button */}
            <button className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Invest Now
            </button>
        </div>

        </div>
    );
};

export default PerformanceGraph;
