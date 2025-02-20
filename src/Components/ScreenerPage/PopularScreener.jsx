import { motion } from "framer-motion";

const screensData = [
    {
        title: "Top Tax Savers",
        icon: "🟩",
        tags: "Equity Linked Savings Scheme (ELSS) • Alpha +4 more",
        description: "Funds that help you save tax and build wealth at the same time.",
        users: "362K+ users have been using this",
    },
    {
        title: "Long Term Compounders",
        icon: "🌸",
        tags: "CAGR 5Y • Time since inception +5 more",
        description: "Funds with a long history of outperformance & a large cap bias.",
        users: "566K+ users have been using this",
    },
    {
        title: "Bolder Bets",
        icon: "🔷",
        tags: "3Y Average Rolling Return • Return vs Sub-Category - 3Y +5 more",
        description: "Funds with bold multicap strategies giving better returns than their peers.",
        users: "91K+ users have been using this",
        pro: true,
    },
];

const PopularScreens = () => {
    return (
        <div className="  md:px-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {screensData.map((screen, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg  p-6 relative overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        {screen.pro && (
                            <span className="absolute top-3 right-3 bg-purple-200 text-purple-600 text-xs font-bold px-2 py-1 rounded-full">Pro</span>
                        )}
                        <div className="text-4xl mb-2">{screen.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{screen.title}</h3>
                        <div className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md inline-block my-2">{screen.tags}</div>
                        <p className="text-gray-600 text-sm mb-4">{screen.description}</p>
                        <div className="text-gray-500 text-xs flex items-center">
                            <span className="mr-1">👥</span>
                            {screen.users}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PopularScreens;
