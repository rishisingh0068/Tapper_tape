import { useState } from "react";

const faqs = [
    { question: "What is Loan Against Mutual Funds?", answer: "Loan Against Mutual Funds allows you to borrow money by pledging your mutual fund investments as collateral." },
    { question: "What is the credit limit and how is it calculated?", answer: "The credit limit is based on the valuation of your pledged mutual funds and lender policies." },
    { question: "Which mutual funds are accepted for availing a loan against mutual funds?", answer: "Most equity and debt mutual funds from SEBI-registered AMCs are accepted." },
    { question: "What is the tenure of the loan against mutual funds?", answer: "The tenure varies by lender but is usually between 12 to 36 months." },
    { question: "What is the process for availing a loan against mutual funds?", answer: "You need to apply online, submit documents, and pledge your mutual fund units for loan approval." },
    { question: "What will my monthly payments look like?", answer: "Your monthly payments will depend on the loan amount, interest rate, and tenure chosen." },
    { question: "How much loan can I get?", answer: "You can typically get a loan amount ranging from 50% to 80% of the mutual fund's value." }
];

export default function FAQSection() {
    return (
        <div className=" md:px-16 lg:px-24 mt-10 mb-10">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Frequently asked <span className="text-blue-600">questions</span>
            </h2>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} />
                ))}
            </div>

            {/* Contact Section */}
            <div className="mt-10 text-center">
                <p className="text-gray-700">
                    Have any question?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Contact us
                    </a>
                </p>
            </div>

            {/* Disclosures */}
            <div className="mt-6 text-sm text-gray-500 text-center max-w-3xl mx-auto">
                Credit services are facilitated by the non-advisory department of
                Essential Investment Managers Pvt. Ltd., a tickertape group company.
                EIMPL through its non-advisory department has associated with Bajaj
                Finance Limited to enable you to avail loan against securities. By using
                this page, you agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                </a>.
            </div>
        </div>
    );
}

// FAQ Item Component
const FAQItem = ({ faq }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
            >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="text-xl text-blue-600">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div className="p-4 text-gray-700 border-t border-gray-200">
                    {faq.answer}
                </div>
            )}
        </div>
    );
};
