import React, { useState } from "react";

const faqs = [
    { question: "What is Digital Gold?", answer: "Digital Gold allows you to buy, sell, and store gold digitally without the hassle of physical storage." },
    { question: "Who am I buying the gold from?", answer: "You are purchasing gold from a trusted digital gold provider, ensuring safety and authenticity." },
    { question: "Where is my gold stored?", answer: "Your gold is securely stored in a certified vault by our trustee partner." },
    { question: "Will I be charged for the storage of my gold?", answer: "No, storage fees are covered by the platform for a specified period." },
    { question: "How do I know my gold is secure?", answer: "Our digital gold is insured and secured by reputed vault partners like Brinks." },
    { question: "How can I modify my SIP amount?", answer: "You can adjust your SIP amount anytime through your investment dashboard." },
    { question: "How does the mandate setup & daily SIP work?", answer: "The mandate allows automated deductions for your SIP at scheduled intervals." },
    { question: "What happens to my gold if SafeGold goes into liquidation?", answer: "Your gold is held by an independent trustee, ensuring your ownership remains intact." },
    { question: "How can I sell the gold?", answer: "You can sell your gold anytime at the live market price via our platform." },
    { question: "Can I take physical delivery of gold?", answer: "Yes, you can request physical delivery of your gold in the form of coins or bars." },
    { question: "What is the purity of gold?", answer: "The gold you buy is 24K, 99.9% pure and certified by government-approved agencies." },
    { question: "How is the gold gram value calculated?", answer: "The gold grams you buy are calculated by dividing the amount paid net of GST by the gold rate and rounded down to 4 decimal places." },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" md:p-12">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
                Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 text-left focus:outline-none transition duration-300 ease-in-out hover:bg-blue-50"
                        >
                            <span className={`text-lg font-medium ${openIndex === index ? "text-blue-600" : "text-gray-900"}`}>
                                {faq.question}
                            </span>
                            <span className="text-blue-600 text-2xl">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-600 bg-white border-t border-gray-200 transition-all duration-300 ease-in-out">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
