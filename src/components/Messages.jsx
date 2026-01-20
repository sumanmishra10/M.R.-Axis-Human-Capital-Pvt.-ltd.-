import { Link } from 'react-router-dom';

const Messages = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Chairman Message */}
                    <div className="card">
                        <div className="flex items-center mb-6">
                            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                CM
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Chairman's Message</h3>
                                <p className="text-gray-600">Leading With Experience</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            It is with great pleasure and enthusiasm that I extend my warmest greetings to you as the Chairman of M.R. Axis Human Capital Pvt. Ltd. With years of experience as an ethical recruiter, I am honored to lead this dynamic organization that is committed to excellence, integrity, and delivering exceptional results.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our mission is to bridge the gap between talented professionals and global opportunities, ensuring mutual growth and success. We take pride in our ethical practices and dedication to both our clients and candidates.
                        </p>
                        <Link to="/chairman-message" className="text-primary-600 font-semibold inline-flex items-center hover:gap-2 transition-all duration-300">
                            View More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* CEO Message */}
                    <div className="card">
                        <div className="flex items-center mb-6">
                            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                CEO
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">CEO's Message</h3>
                                <p className="text-gray-600">Inspiring Growth & Innovation</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Welcome to M.R. Axis Human Capital Pvt. Ltd., a distinguished recruitment agency in Nepal. As the CEO, I am delighted to extend my warmest greetings and express my commitment to upholding our company's ethos of ethical, efficient, and effective recruitment services.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our dedicated team of professionals has worked tirelessly to establish our reputation as a leading agency in the industry. We take pride in our ability to provide exceptional recruitment services that prioritize both global reach and local excellence.
                        </p>
                        <Link to="/ceo-message" className="text-primary-600 font-semibold inline-flex items-center hover:gap-2 transition-all duration-300">
                            View More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Messages;
