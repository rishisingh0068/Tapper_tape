import React, { useState } from "react";

const InvestmentCalculator = () => {
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
    );
};

export default InvestmentCalculator;
