import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 p-6 md:p-8 mt-0.5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-white text-lg font-bold">tickertape</h2>
                    <p className="mt-2 text-sm">
                        Tickertape provides data, information & content for Indian stocks, mutual funds, ETFs & indices.
                    </p>
                    <p className="mt-2 text-sm">
                        Anchorage Technologies Private Limited,<br />
                        #51, 3rd Floor, Le Parc Richmonde,<br />
                        Richmond Road, Shanthala Nagar,<br />
                        Richmond Town, Bangalore - 560025
                    </p>
                </div>

                {/* Assets & Tools */}
                <div>
                    <h3 className="text-white font-semibold">Assets</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Stocks</li>
                        <li>Mutual Funds</li>
                    </ul>
                    <h3 className="text-white font-semibold mt-4">Tools</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>MMI</li>
                        <li>Stock Screener</li>
                        <li>MF Screener</li>
                        <li>Market Movers</li>
                    </ul>
                </div>

                {/* Learn & Share & Fine Print */}
                <div>
                    <h3 className="text-white font-semibold">Learn & Share</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Social</li>
                        <li>Learn</li>
                        <li>Blog</li>
                        <li>Glossary</li>
                        <li>Stock Collections</li>
                    </ul>
                    <h3 className="text-white font-semibold mt-4">Fine Print</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Pricing</li>
                        <li>Disclosures</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Analytical & Information Tools</li>
                        <li>Community Guidelines</li>
                    </ul>
                </div>

                {/* Support & Social Links */}
                <div>
                    <h3 className="text-white font-semibold">Help and Support</h3>
                    <p className="mt-2 text-sm">support@tickertape.in</p>
                    <div className="mt-4 flex space-x-4">
                        <FaYoutube className="text-white text-xl cursor-pointer hover:text-red-500" />
                        <FaInstagram className="text-white text-xl cursor-pointer hover:text-pink-500" />
                        <FaTwitter className="text-white text-xl cursor-pointer hover:text-blue-500" />
                        <FaLinkedin className="text-white text-xl cursor-pointer hover:text-blue-700" />
                    </div>
                    <div className="mt-4 text-sm flex flex-col sm:flex-row sm:space-x-4">
                        <span className="bg-gray-800 p-2 rounded-lg text-center">65+ downloads</span>
                        <span className="mt-2 sm:mt-0 bg-gray-800 p-2 rounded-lg text-center">⭐ 6.2 App Rating</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
