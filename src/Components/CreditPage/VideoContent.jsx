import { useState } from "react";

export default function MutualFundsInfo() {
    return (
        <div className=" gap-2px-6 md:px-16 lg:px-24">
            {/* Section Header */}
            <SectionHeader title="Understand how Loans Against Mutual Funds works" />

            {/* Scrollable Video Cards */}
            <ScrollableContainer>
                {videoData.map((video, index) => (
                    <VideoCard key={index} video={video} />
                ))}
            </ScrollableContainer>

            {/* Learn More Section */}
            <SectionHeader title="Learn more about loan against mutual funds" />

            {/* Learn More Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {learnMoreData.map((item, index) => (
                    <LearnMoreCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

// Section Header Component
const SectionHeader = ({ title }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 mt-8">
        {title}
    </h2>
);

// Scrollable Container with Auto-Hiding Scrollbar
const ScrollableContainer = ({ children }) => (
    <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">{children}</div>
    </div>
);

// Video Card Component with Play Feature
const VideoCard = ({ video }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[350px]  rounded-2xl shadow-2xl overflow-hidden  mb-5 ml-5  p-5">
            {isPlaying ? (
                <iframe
                    className="w-full h-30 sm:h-38"
                    src={video.videoUrl}
                    title={video.title}
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="relative">
                    <img src={video.image} alt={video.title} className="w-full h-40 sm:h-48 object-cover " />
                    {/* Play Button */}
                    <button
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300 "
                        onClick={() => setIsPlaying(true)}
                    >
                        <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                            ▶️
                        </div>
                    </button>
                </div>
            )}
            <div className="p-4">
                <h3 className="font-semibold text-gray-800">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{video.description}</p>
            </div>
        </div>
    );
};

// Learn More Card Component
const LearnMoreCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 block hover:underline">
                Read more
            </a>
        </div>
    </div>
);

// Data
const videoData = [
    {
        title: "Eligibility criteria",
        description: "Who’s eligible for a Loan Against Mutual Funds?",
        image: "your-image-url",
        videoUrl: "https://www.youtube.com/watch?v=8A3s9WP_7l4",
    },
    {
        title: "Easy Monthly Installment",
        description: "Monthly installment on LAMF",
        image: "your-image-url",
        videoUrl: "https://www.youtube.com/watch?v=8A3s9WP_7l4",
    },
    {
        title: "Apply in 4 easy steps",
        description: "Loan application process: step-by-step guide",
        image: "your-image-url",
        videoUrl: "https://www.youtube.com/watch?v=8A3s9WP_7l4",
    },
    {
        title: "Managing a loan",
        description: "How to manage loan repayments, withdrawal, or closure?",
        image: "your-image-url",
        videoUrl: "https://www.youtube.com/watch?v=8A3s9WP_7l4",
    },
];

const learnMoreData = [
    {
        title: "Understanding monthly installments on LAMF in 1 minute",
        image: "Eligibility_criteria",
        link: "#",
    },
    {
        title: "Is LAMF a better alternative than breaking investments?",
        image: "your-image-url",
        link: "#",
    },
    {
        title: "FAQs: Loans Against Mutual Funds on Tickertape",
        image: "your-image-url",
        link: "#",
    },
];
