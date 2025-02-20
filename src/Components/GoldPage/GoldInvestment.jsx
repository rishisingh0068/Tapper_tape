import React from "react";

const GoldInvestment = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-10 ">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
                Start your gold investment today
            </h2>
            <div className="w-full max-w-4xl   rounded-lg p-6 md:p-10">
                <div className="grid grid-cols-3 text-center font-medium text-gray-700">
                    <div></div>
                    <div className="text-lg font-bold">Digital Gold</div>
                    <div className="text-lg font-bold">Physical Gold</div>
                </div>
                <div className="mt-4 border-t border-gray-300">
                    {[
                        "Buy as low as ₹10",
                        "Trade 24/7 at market linked prices",
                        "No lock-in, easy to sell",
                        "Security",
                        "No need for a demat account",
                        "Conversion to physical gold",
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 text-center py-4 border-b border-gray-200"
                        >
                            <div className="text-gray-700 text-sm md:text-base">{feature}</div>
                            <div>
                                <span className="text-green-500 text-xl">✔</span>
                            </div>
                            <div>
                                <span className={
                                    index >= 4 ? "text-green-500 text-xl" : "text-red-500 text-xl"
                                }>
                                    {index >= 4 ? "✔" : "✖"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-between mt-6 space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-black text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-gray-800">
                        Invest now
                    </button>
                    <button className="bg-white text-black border border-gray-400 py-2 px-6 rounded-lg text-lg font-medium hover:bg-gray-200">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoldInvestment;
