import { motion } from "framer-motion";
import { FaArrowRight, FaUser } from "react-icons/fa";

const sections = [
    {
        title: "Equity Focused Screens",
        screens: [
            {
                title: "Efficient Equity Picks",
                tags: ["Alpha", "Sharpe Ratio", "+4 more"],
                description: "Funds with low expense ratios & healthy risk-adjusted returns",
                users: "236K+",
            },
            {
                title: "Value Picks",
                tags: ["PE Ratio", "Sortino Ratio", "+6 more"],
                description: "Funds available at a better valuation than their category average & peers.",
                users: "85K+",
            },
            {
                title: "Consistent Out-performers",
                tags: ["Return vs Sub-Category - 5Y", "Volatility", "+8 more"],
                description: "Funds with long-term outperformance & low volatility.",
                users: "84.6K+",
                isPro: true,
            },
        ],
    },
    {
        title: "Debt Focused Screens",
        screens: [
            {
                title: "Liquid & Overnight Funds",
                tags: ["Average Maturity", "Overnight Fund", "+2 more"],
                description: "Funds with high liquidity & minimal credit risk.",
                users: "236K+",
            },
            {
                title: "High Quality Debt Portfolio",
                tags: ["AA Rated Bonds", "Average Maturity", "+6 more"],
                description: "Funds with high credit quality & medium interest rate risk, ideal for an investment horizon of 3-5 years.",
                users: "83K+",
                isPro: true,
            },
            {
                title: "High Yield Debt Options",
                tags: ["Average YTM", "Average Maturity", "+4 more"],
                description: "Funds with credit quality on the lower side & medium interest rate risk offering high yields.",
                users: "235K+",
                isPro: true,
            },
        ],
    },
    {
        title: "Multi-Asset Focused Screens",
        screens: [
            {
                title: "Hybrid Focused",
                tags: ["CAGR 5Y", "Time since inception", "+4 more"],
                description: "Diversified investment strategies combining equity and debt.",
                users: "156K+",
            },
            {
                title: "Balanced Investing",
                tags: ["AUM", "3Y Average Rolling Return", "+4 more"],
                description: "Balanced mutual funds for stable growth across market conditions.",
                users: "176K+",
            },
            {
                title: "Multi-Asset Play",
                tags: ["CAGR 5Y", "Volatility", "+3 more"],
                description: "Curated funds strategically allocating investments across diverse asset classes for optimal portfolio growth.",
                users: "176K+",
            },
        ],
    },
];

// Reusable Card Component
const ScreenCard = ({ title, tags, description, users, isPro }) => {
    return (
        <motion.div
            className="bg-white p-5 rounded-xl hover:shadow-2xl transition duration-300 relative shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.02 }}
        >
            {isPro && (
                <div className="absolute top-3 right-3 bg-purple-200 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">
                    Pro
                </div>
            )}
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <div className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-md inline-block mb-2">
                {tags.join(" • ")}
            </div>
            <p className="text-gray-500 text-sm mb-3">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs flex items-center gap-1">
                    <FaUser /> {users} users have been using this
                </span>
                <button className="text-gray-600 hover:text-gray-900 transition">
                    <FaArrowRight />
                </button>
            </div>
        </motion.div>
    );
};

const EquityCards = () => {
    return (
        <div className="mt-5 md:px-10">
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.screens.map((screen, index) => (
                            <ScreenCard key={index} {...screen} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition">
                            Load more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EquityCards;
