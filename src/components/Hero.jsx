import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';

const Hero = () => {
    const videos = [video1, video2, video3, video4, video5];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        handleNextVideo();
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrevVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    key={videos[currentVideoIndex]}
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>

            {/* Video Navigation Controls */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4 md:px-8">
                <button
                    onClick={handlePrevVideo}
                    className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 group shadow-2xl"
                    aria-label="Previous Video"
                >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNextVideo}
                    className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 group shadow-2xl"
                    aria-label="Next Video"
                >
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
                        We Give Solution for all
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-400 font-bold mb-4 animate-slide-up drop-shadow-md">
                        Best Manpower in Nepal
                    </p>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up drop-shadow-md">
                        M.R. Axis Human Capital Pvt. Ltd. is your trusted partner for ethical, efficient, and effective recruitment services. We connect talented professionals with exciting career opportunities worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                        <Link to="/contact" className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-primary-500/50 text-center">
                            Contact Us
                        </Link>
                        <Link to="/about-mraxis" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300 text-lg shadow-xl text-center">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <svg
                    className="w-6 h-6 text-white drop-shadow-lg"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
