import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Stocks', color: 'bg-orange-500' },
  { name: 'Mutual Funds', color: 'bg-purple-500' },
  { name: 'Gold', color: 'bg-yellow-500' },
];

const sections = {
  Stocks: {
    title: 'Stocks',
    downloads: '60L+',
    rating: '4.5 ★',
    description: 'Learn more about investing in Stocks',
    buttonText: 'Explore Stocks',
  },
  'Mutual Funds': {
    title: 'Mutual Funds',
    downloads: '75L+',
    rating: '4.6 ★',
    description: 'Learn more about investing in Mutual Funds',
    buttonText: 'Explore Mutual Funds',
  },
  Gold: {
    title: 'Digital Gold',
    downloads: '65L+',
    rating: '4.2 ★',
    description: 'Learn more about investing in Digital Gold',
    buttonText: 'Explore Digital Gold',
  },
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Stocks');
  const section = sections[activeTab];

  return (
    <div className="max-w-7xl mx-auto py-8 px-6 ">
      {/* Portfolio Tabs */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2 p-5">
        {tabs.map((tab) => (
          <motion.button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${tab.color} text-white px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === tab.name ? 'ring-2 ring-white' : ''}`}
          >
            {tab.name}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={section.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg p-10 md:p-8 mt-30 "
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>{section.downloads} Downloads</span>
              <span>{section.rating} App Rating</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-400">A 360° view of your investments</p>
            <p className="text-gray-400">Start your first SIP & invest as low as rupees 10</p>
            <h3 className="text-xl font-semibold mb-2">Track all your transactions at one place</h3>
            <p className="text-gray-400">{section.description}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>{section.buttonText}</span>
              <FiArrowRight />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
