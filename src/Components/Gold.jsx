export default function DigitalGold() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-blue-400 font-semibold">Introducing <span className="text-blue-500">Digital Gold</span></p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Tackle market volatility with <br /> <span className="text-yellow-400">Digital Gold</span>
          </h2>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✨ Track your gold portfolio in real-time</li>
            <li>✨ Start a SIP and withdraw anytime</li>
            <li>✨ No transaction fee</li>
          </ul>
          {/* Buttons */}
          <div className="mt-6">
            <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Invest Now
            </button>
            <div className="mt-2 bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg inline-block ml-2">
              🎉 Get Free Gold worth ₹100
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/gold.jpg"
            alt="Digital Gold"
            className="max-w-xs md:max-w-md "
          />
        </div>
      </div>
    </section>


  );
}
