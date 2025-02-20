import { FiSearch } from 'react-icons/fi'
import { BsBriefcase, BsCoin, BsApple, BsAndroid2 } from 'react-icons/bs'
import AppDownload from './AppDownload'
import ScreenersSection from './ScreenersSection'



const screenersData = [
    { title: 'Cash Rich Smallcaps', category: 'Stock Screeners' },
    { title: 'Near 52W lows', category: 'Stock Screeners' },
    { title: 'Momentum Monsters', category: 'Stock Screeners' },
    { title: 'Latest deals by Radhakishan Damani', category: 'Deals' },
    { title: 'Latest deals by the Govt of Singapore', category: 'Deals' },
    { title: 'Latest deals by the Vanguard group', category: 'Deals' },
    { title: 'Top Tax Savers', category: 'Mutual Fund Screeners' },
    { title: 'Long Term Compounders', category: 'Mutual Fund Screeners' },
    { title: 'Concentrated Bets', category: 'Mutual Fund Screeners' }
]


const marketData = [
    { name: 'NIFTY 50', price: '22,957.50', change: '+0.05%', isUp: true },
    { name: 'NIFTY 100 Largecap', price: '23,372.25', change: '+0.18%', isUp: true },
    { name: 'USD/INR', price: '87.01', change: '+0.00%', isUp: true },
    { name: 'Gold', price: '8,840.72', change: '-0.31%', isUp: false },
    { name: 'USD/INR', price: '87.01', change: '+0.00%', isUp: true },
    { name: 'Gold', price: '8,840.72', change: '-0.31%', isUp: false },
    { name: 'USD/INR', price: '87.01', change: '+0.00%', isUp: true },
]

export default function HomePage() {
    return (
        <div className="min-h-screen   max-w-7xl mx-auto  p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        The market is in <span className="text-orange-500">Fear</span> zone
                    </h1>
                </div>
                <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
                    {['THU', 'FRI', 'MON', 'TUE', 'TODAY'].map((day, index) => (
                        <div key={day} className="text-center">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-yellow-500 mb-2"></div>
                            <span className="text-xs md:text-sm">{day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Market Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
                {marketData.map((item, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-400">{item.name}</span>
                            <span className={item.isUp ? 'text-green-500' : 'text-red-500'}>
                                {item.change}
                            </span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold">{item.price}</div>
                    </div>
                ))}
            </div>

            {/* Screeners Section */}
            <ScreenersSection/>
            {/* App Download Section */}
            <AppDownload/>
        </div>
    );
}