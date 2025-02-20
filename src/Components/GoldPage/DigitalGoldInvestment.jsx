import React, { useState } from "react";

const DigitalGoldInvestment = () => {
    const [selectedStep, setSelectedStep] = useState(null);

    const steps = [
        { text: "Log-in to Tickertape using your phone number", icon: "📱", details: "Securely log in using your registered mobile number to access your investment dashboard." },
        { text: "Enter the amount or weight of gold you want to buy", icon: "💰", details: "Choose the amount in INR or gold weight in grams that you want to invest in.", highlight: true },
        { text: "Choose between a SIP or a one-time investment", icon: "🏦", details: "Decide whether to invest as a lump sum or set up a systematic investment plan (SIP)." },
        { text: "Start tracking your gold investments in portfolio", icon: "📊", details: "Monitor your gold holdings, track returns, and make informed decisions." },
        { text: "Withdraw anytime, hassle free!", icon: "💵", details: "Sell your gold holdings whenever you want with instant liquidity options." },
    ];

    return (
        <div className="flex flex-col items-center justify-center  ">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
                Investing in <span className="text-blue-500">Digital Gold</span> made easy
            </h2>
            <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-80 text-center">
                        <p className="text-gray-500 text-sm">Current amount</p>
                        <p className="text-2xl font-bold">8,39,079</p>
                        <div className="mt-4 space-y-2">
                            <p className="flex justify-between text-gray-600 text-sm">
                                Invested Amount <span className="w-10 bg-gray-300 h-2 rounded"></span>
                            </p>
                            <p className="flex justify-between text-gray-600 text-sm">
                                Total P&L <span className="text-green-500">✔</span>
                            </p>
                            <p className="flex justify-between text-gray-600 text-sm">
                                Today’s P&L <span className="text-red-500">✖</span>
                            </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between bg-gray-200 p-2 rounded-lg">
                            <span className="text-gray-700 text-sm">Ongoing SIP • 6 SIPs</span>
                            <span className="text-blue-500">→</span>
                        </div>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="w-full md:w-1/2 space-y-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-4 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${step.highlight ? "border-l-4 border-blue-500 bg-blue-100" : "bg-white"} ${selectedStep === index ? "ring-2 ring-blue-300" : ""}`}
                            onClick={() => setSelectedStep(index)}
                        >
                            <span className="text-xl">{step.icon}</span>
                            <p className="text-gray-700 text-sm md:text-base">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Details */}
            {selectedStep !== null && (
                <div className="mt-6 p-6 bg-white shadow-lg rounded-lg max-w-3xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {steps[selectedStep].icon} {steps[selectedStep].text}
                    </h3>
                    <p className="text-gray-700">{steps[selectedStep].details}</p>
                </div>
            )}
        </div>
    );
};

export default DigitalGoldInvestment;
