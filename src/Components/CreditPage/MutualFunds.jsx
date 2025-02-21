import { FaRupeeSign, FaCheckCircle, FaLock, FaMoneyBillWave } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

export default function MutualFunds() {
    return (
        <div className=" text-gray-900 py-10 px-6 md:px-16 lg:px-24">
            {/* Introduction Section */}
            <div className="grid md:grid-cols-2 gap-10 mb-10 items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">What is loan against mutual funds?</h2>
                    <p className="text-gray-600 mb-4">
                        It is a type of loan where you can pledge your mutual funds to obtain instant funds from a lender.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform hover:scale-105">
                        Read more
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src="/Mutual_card.jpeg" alt="Mutual Funds Loan" className="w-full max-w-sm" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
                <div className="p-6 bg-gray-100 rounded-lg shadow">
                    <FaMoneyBillWave className="text-blue-500 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg">Low Interest</h3>
                    <p className="text-gray-600">Interest rate as low as 10.50% per annum</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow">
                    <FaRupeeSign className="text-green-500 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg">Stay Invested</h3>
                    <p className="text-gray-600">Your mutual funds continue to earn returns</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow">
                    <FaLock className="text-yellow-500 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg">Flexi Cash</h3>
                    <p className="text-gray-600">Focus on wealth protection near maturity</p>
                </div>
            </div>

            {/* Steps Section */}
            <div className="bg-gray-50 py-10 px-6 md:px-16 lg:px-24 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Cash against your mutual funds in 4 easy steps</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 text-xl" />
                                <span>Calculate credit limit</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiInfo className="text-blue-600 text-xl" />
                                <span>Confirm amount</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaRupeeSign className="text-blue-600 text-xl" />
                                <span>Link bank account</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
                                <FaLock className="text-blue-600 text-xl" />
                                <span>Pledge mutual funds - Loan is sanctioned against the funds</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img src="/step2_dweb.svg" alt="Steps Illustration" className="w-full max-w-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}
