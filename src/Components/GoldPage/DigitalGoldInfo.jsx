import React from "react";

const articles = [
    { title: "How to invest in Digital Gold", date: "2023-10-04", readTime: "1 min read", image: "/more-card1.jpg" },
    { title: "5 reasons why you should invest in Digital Gold", date: "2023-10-05", readTime: "3 min read", image: "/more-card2.jpg" },
    { title: "Myths vs reality about investing in Digital Gold", date: "2023-10-05", readTime: "3 min read", image: "/more-card3.jpg" },
    { title: "How can Digital Gold act as a financial cushion", date: "2023-10-05", readTime: "4 min read", image: "/more-card4.jpg" },
    { title: "Balance & Risk: Diversify your Portfolio with Digital Gold", date: "2023-10-05", readTime: "3 min read", image: "/more-card5.jpg" },
];

const DigitalGoldInfo = () => {
    return (
        <div className="p-6 md:p-12">
            {/* Learn More Section */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Learn More</h1>

            {/* Scrollable Card Section */}
            <div className="relative overflow-x-auto ">
                <div className="flex space-x-4 snap-x snap-mandatory overflow-x-scroll scrollbar-hide p-2 ">
                    {articles.map((article, index) => (
                        <div key={index} className="w-80 bg-gray-100 text-black rounded-lg shadow-lg flex-shrink-0 snap-start mb-5">
                            <img src={article.image} alt={article.title} className="w-full  object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h4 className="font-semibold text-lg">{article.title}</h4>
                                <p className="text-gray-600 text-sm">{article.date} • {article.readTime}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-10 text-center">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-700">
                    Ready to invest in golden opportunities?
                </h1>
                <p className="text-gray-500 mt-2">
                    Have any questions? <a href="#" className="text-blue-500 font-medium">Contact us.</a>
                </p>

                {/* Partner Logos */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                    {[
                        { text: "In partnership with", image: "partner1.webp", alt: "SafeGold" },
                        { text: "Trustee partner", image: "partner2.webp", alt: "Vistra" },
                        { text: "Insured and secured by", image: "partner3.webp", alt: "Brinks" },
                    ].map((partner, index) => (
                        <div key={index} className="text-center">
                            <span className="block text-gray-600">{partner.text}</span>
                            <img src={partner.image} alt={partner.alt} className="h-8 mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalGoldInfo;
