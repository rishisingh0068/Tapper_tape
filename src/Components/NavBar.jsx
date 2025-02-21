import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsBriefcase, BsCoin } from 'react-icons/bs';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const stockData = [
    { name: 'ITC', price: '407.10', change: '+0.46%', isUp: true },
    { name: 'MARUTI', price: '12,698.00', change: '-0.69%', isUp: false },
    { name: 'RELIANCE', price: '1,227.50', change: '+0.17%', isUp: true },
    { name: 'SBIN', price: '730.70', change: '+0.65%', isUp: true },
    { name: 'TCS', price: '3,792.00', change: '-2.10%', isUp: false },
];
function NavBar({ searchQuery, setSearchQuery }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    return (
        <>
            <nav className="bg-[#1C2127] py-4 px-6 border-b border-gray-700">
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
                        <NavItem to="/portfolio" icon={<BsBriefcase />} text="Portfolio" active={location.pathname === '/portfolio'} />
                        <NavItem to="/GoldPage" icon={<BsCoin />} text="Gold" active={location.pathname === '/GoldPage'} />
                        <NavItem to="/ScreenerPage" icon={<MdScreenSearchDesktop />} text="Screener" active={location.pathname === '/ScreenerPage'} />
                        <NavItem to="/CreditPage" icon={<RiMoneyDollarCircleLine />} text="Credit" active={location.pathname === '/CreditPage'} />
                        
                        <Link to="/SignInPage" className="text-white">
                        <button className="bg-blue-600 px-4 py-2 rounded-lg w-full">Sign Up / Login</button>
                        </Link>
                    </div>

                    <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                        <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                        </div>
                    </button>
                </div>
            </nav>

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
                        <NavItem to="/portfolio" icon={<BsBriefcase />} text="Portfolio" />
                        <NavItem to="/GoldPage" icon={<BsCoin />} text="Gold" />
                        <NavItem to="/ScreenerPage" icon={<MdScreenSearchDesktop />} text="Screener" />
                        <NavItem to="/CreditPage" icon={<RiMoneyDollarCircleLine />} text="Credit" />
                        <Link to="/SignInPage" className="text-white">
                        <button className="bg-blue-600 px-4 py-2 rounded-lg w-full">Sign Up / Login</button>
                        </Link>

                    </div>
                </div>
            )}
        </>
    );
}

function NavItem({ to, icon, text, active }) {
    return (
        <Link to={to} className={`flex items-center space-x-4 ${active ? 'text-blue-500' : ''}`}>
            {icon}
            <span>{text}</span>
        </Link>
    );
}

export default NavBar;
