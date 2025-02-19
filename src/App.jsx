import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { BsBriefcase, BsCoin, BsApple, BsAndroid2 } from 'react-icons/bs'
import { MdScreenSearchDesktop } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Portfolio from './components/Portfolio'
import DigitalGold from './Components/Gold'
// import './App.css'

const stockData = [
  { name: 'ITC', price: '407.10', change: '+0.46%', isUp: true },
  { name: 'MARUTI', price: '12,698.00', change: '-0.69%', isUp: false },
  { name: 'RELIANCE', price: '1,227.50', change: '+0.17%', isUp: true },
  { name: 'SBIN', price: '730.70', change: '+0.65%', isUp: true },
  { name: 'TCS', price: '3,792.00', change: '-2.10%', isUp: false }
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

function NavBar({ searchQuery, setSearchQuery, mobileMenu, setMobileMenu }) {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1C2127] py-4 px-6 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src="/logo.jpg" alt="Tickertape" className="h-12" />
          </Link>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search stocks, MFs, smallcases & more"
              className="w-96 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/portfolio" 
            className={`flex items-center space-x-4 ${location.pathname === '/portfolio' ? 'text-blue-500' : ''}`}
          >
            <BsBriefcase className="text-xl" />
            <span>Portfolio</span>
          </Link>
          <Link 
            to="/Gold" 
            className={`flex items-center space-x-4 ${location.pathname === '/Gold' ? 'text-blue-500' : ''}`}
          >
          <div className="flex items-center space-x-4">
            <BsCoin className="text-xl" />
            <span>Gold</span>
          </div>
          </Link>
          <div className="flex items-center space-x-4">
            <MdScreenSearchDesktop className="text-xl" />
            <span>Screener</span>
          </div>
          <div className="flex items-center space-x-4">
            <RiMoneyDollarCircleLine className="text-xl" />
            <span>Credit</span>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Login
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
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
      <div className="bg-gray-800 rounded-lg p-4 md:p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">Stock Screeners</span>
              <FiSearch />
            </h3>
            {screenersData
              .filter(item => item.category === 'Stock Screeners')
              .map((item, index) => (
                <div key={index} className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">
                  {item.title}
                </div>
              ))
            }
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">Deals</span>
              <FiSearch />
            </h3>
            {screenersData
              .filter(item => item.category === 'Deals')
              .map((item, index) => (
                <div key={index} className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">
                  {item.title}
                </div>
              ))
            }
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">Mutual Fund Screeners</span>
              <FiSearch />
            </h3>
            {screenersData
              .filter(item => item.category === 'Mutual Fund Screeners')
              .map((item, index) => (
                <div key={index} className="py-2 hover:bg-gray-700 px-2 rounded cursor-pointer">
                  {item.title}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="bg-gray-900 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
              Everything you need to redefine your investing experience
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">60,500 Cr</div>
                <div className="text-gray-400">Assets tracked worth</div>
              </div>
              <div>
                <div className="text-2xl font-bold">60 L+ investors</div>
                <div className="text-gray-400">Loved by</div>
              </div>
              <div>
                <div className="text-2xl font-bold">6.2M+</div>
                <div className="text-gray-400">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.2</div>
                <div className="text-gray-400">Rated on Google Play</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg">
                <BsApple className="text-xl" />
                <span>Download on iOS</span>
              </button>
              <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg">
                <BsAndroid2 className="text-xl" />
                <span>Download on Android</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/logo.jpg" 
              alt="App Preview" 
              className="w-full max-w-md mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-[#1C2127] text-white">
        {/* Top Ticker */}
        <div className="overflow-hidden bg-[#1C2127] border-b border-gray-700">
          <div className="flex items-center space-x-8 py-2 animate-scroll">
            {stockData.map((stock, index) => (
              <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                <span className="font-medium">{stock.name}</span>
                <span>{stock.price}</span>
                <span className={stock.isUp ? 'text-green-500' : 'text-red-500'}>
                  {stock.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <NavBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-[#1C2127] p-4 border-b border-gray-700">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stocks, MFs, smallcases & more"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
              <Link to="/portfolio" className="flex items-center space-x-4">
                <BsBriefcase className="text-xl" />
                <span>Portfolio</span>
              </Link>
              

              <Link to="/Gold" className="flex items-center space-x-4">
              <BsCoin className="text-xl" />
                <span>Gold</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <MdScreenSearchDesktop className="text-xl" />
                <span>Screener</span>
              </div>
              <div className="flex items-center space-x-4">
                <RiMoneyDollarCircleLine className="text-xl" />
                <span>Credit</span>
              </div>
              <button className="bg-blue-600 px-4 py-2 rounded-lg w-full">
                Login
              </button>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Gold" element={<DigitalGold/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;