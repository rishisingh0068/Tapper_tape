import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppDownload = () => {
    return (
        <section className="bg-gray-900 text-white p-10 md:px-12  border-t-2">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section - Text & Stats */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-400 leading-tight">
                        Everything you need to redefine your investing experience
                    </h1>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400 text-lg">
                        <div>
                            <p className="text-white text-2xl font-semibold">60,500 Cr</p>
                            <p>Assets tracked worth</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-semibold">60 L+ investors</p>
                            <p>Loved by</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-semibold">6.2M+</p>
                            <p>Downloads</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-semibold">4.2</p>
                            <p>Rated on Google Play</p>
                        </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
                            <FaApple size={24} />
                            <span>Download on iOS</span>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
                            <FaGooglePlay size={24} />
                            <span>Download on Android</span>
                        </button>
                    </div>
                </div>

                {/* Right Section - Mobile Mockup */}
                <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                    <img
                        src="/logo.jpg"
                        alt="Investment App Mockup"
                        className="max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
