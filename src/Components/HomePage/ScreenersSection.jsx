import React from "react";
import { FaPlus, FaEye, FaChartBar } from "react-icons/fa";

const curatedData = [
    {
        title: "Stock Screens",
        icon: <FaChartBar size={18} />,
        items: ["Cash Rich Smallcaps", "Near 52W lows", "Momentum Monsters"],
    },
    {
        title: "Deals",
        icon: <FaEye size={18} />,
        items: [
            "Latest deals by Radhakishan Damani",
            "Latest deals by the Govt of Singapore",
            "Latest deals by the Vanguard group",
        ],
    },
    {
        title: "Mutual Fund Screens",
        icon: <FaChartBar size={18} />,
        items: ["Top Tax Savers", "Long Term Compounders", "Concentrated Bets"],
    },
];

const ScreenersSection = () => {
    return (
        <section className="bg-gray-900 text-white   rounded-lg mb-5">
            <h2 className="text-lg font-semibold text-gray-400 mb-4">
                Curated screens and deals
            </h2>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {curatedData.map((category, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center bg-gray-600 px-5 py-3">
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                {category.icon}
                                {category.title}
                            </div>
                            <FaPlus size={16} className="cursor-pointer text-gray-400" />
                        </div>

                        {/* Items */}
                        <div className="p-5 space-y-3">
                            {category.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center py-2 border-b border-gray-700 last:border-none hover:text-blue-400 cursor-pointer"
                                >
                                    <span>{item}</span>
                                    <span className="text-gray-500">{">"}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScreenersSection;
