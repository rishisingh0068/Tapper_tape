import { useState } from "react";
import { motion } from "framer-motion";
import PopularScreener from "./PopularScreener";
import EquityCards from "./EquityCards";

const ScreenerPage = () => {
  const [selectedTab, setSelectedTab] = useState("stocks");

  return (
    <div className="bg-white min-h-screen ">
      <div className="bg-gray-900 text-white flex flex-col items-center p-5 md:p-10 rounded-b-4xl">
        {/* Toggle Buttons */}
        <motion.div
          className="flex space-x-4 bg-gray-800 p-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedTab === "stocks" ? "bg-orange-500" : "bg-gray-700"
              }`}
            onClick={() => setSelectedTab("stocks")}
          >
            Stocks
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedTab === "mutual" ? "bg-purple-500" : "bg-gray-700"
              }`}
            onClick={() => setSelectedTab("mutual")}
          >
            Mutual Funds
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            Find the right pick with
            <span className={selectedTab === "stocks" ? "text-orange-500" : "text-purple-500"}>
              {" "}
              {selectedTab === "stocks" ? "Stock Screener" : "Mutual Fund Screener"}
            </span>
          </h1>
          <p className="text-gray-400 mt-2">All the tools you need to make wise & effective investment decisions</p>
          <motion.button
            className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            Start Screening
          </motion.button>
          <p className="mt-2 text-gray-300">Used by {selectedTab === "stocks" ? "700K+" : "220K+"} smart investors</p>
        </motion.div>

        {/* Content Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {["Quality Drifters", "Create Custom Filters", "Basic & Pro Filters"].map((title, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-lg">
                {index === 0 ? (selectedTab === "stocks" ? "Quality Drifters" : "Long Term Compounders") : title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {index === 0
                  ? selectedTab === "stocks"
                    ? "High growth quality companies exhibiting price momentum"
                    : "Funds with a long history of outperformance & a large cap bias"
                  : index === 1
                    ? selectedTab === "stocks"
                      ? "PE Ratio / 1 Year Forward EPS Growth"
                      : "3Y Avg Annual Rolling Return / Expense Ratio"
                    : selectedTab === "stocks"
                      ? "Earnings Quality Rank"
                      : "Return vs sub-category - 3Y"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="p-10">
        {/* Popular Screening Card  */}
        <PopularScreener />
        {/* Equity Cards */}
        <EquityCards/>
      </section>
    </div>
  );
};

export default ScreenerPage;
