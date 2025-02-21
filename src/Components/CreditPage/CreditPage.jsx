import { FaRupeeSign, FaUsers } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function MutualFundLoan() {
    return (
        <div className="bg-gray-900 min-h-screen text-white py-10 px-6 md:px-16 lg:px-24">
            {/* Main Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Get cash against <span className="text-blue-400">mutual funds!</span>
                </h1>
                <p className="text-gray-400 mt-2">Money credited within 2 working hours ⚡</p>
            </div>

            {/* Button and Credit Score */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105 hover:shadow-lg animate-pulse"
                >
                    Find your credit limit
                </button>
                <p className="text-green-400">No impact on your credit score</p>
            </div>

            {/* Loan Applications Info */}
            <div className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-fit mx-auto">
                <FaUsers /> 100+ users applied for a loan this week
            </div>

            {/* Credit Limit Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
                <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md text-center">
                    <p className="text-gray-400">Credit limit</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <FaRupeeSign className="inline" /> 4,50,000
                    </h2>
                    <p className="text-green-400 mt-2">Cash withdrawn: ₹1,00,000</p>
                    <p className="text-gray-400">Mutual Funds: 4 funds</p>
                </div>
            </div>

            {/* Loan Rates */}
            <div className="mt-10 text-center text-gray-400">
                <h3 className="text-xl font-semibold text-white">Loan Against Mutual Funds</h3>
                <p className="mt-2">You read that right. Better interest rates than personal loans</p>
                <p className="text-green-400 text-2xl font-bold mt-2">10.50%</p>
            </div>

            {/* Loan Comparison */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                <p>Auto Loan 12-15%</p>
                <p>Consumer Loan 14-28%</p>
                <p>Credit Card 24-36%</p>
            </div>
        </div>
    );
}
