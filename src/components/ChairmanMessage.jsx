import { Link } from 'react-router-dom';

const ChairmanMessage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section */}
            <div className="bg-gradient-primary py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Chairman Message</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Chairman Message</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in border-t-8 border-primary-600">
                                <div className="flex items-center mb-8">
                                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6 shadow-lg">
                                        CM
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Dear Valued Clients, Candidate</h2>
                                        <p className="text-primary-600 font-semibold">Message from our Chairman</p>
                                    </div>
                                </div>

                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                                        "With our dedication, expertise, and customer-centric approach, we aim to connect the right talent with the right opportunities, bringing value to both individuals and organizations."
                                    </p>
                                    <p>
                                        As an ethical recruiter, we prioritize fairness, transparency, and equal opportunities for all candidates. We strongly believe in upholding the highest standards of integrity in our operations, ensuring that our clients and candidates can trust us as their reliable recruitment partner.
                                    </p>
                                    <p>
                                        With an ever-evolving job market, we recognize the importance of staying ahead of the curve. We invest in continuous learning and development, keeping abreast of industry trends, and equipping our team with the necessary skills and knowledge to deliver superior services. Our commitment to excellence drives us to constantly challenge ourselves and strive for the highest standards of quality in everything we do.
                                    </p>
                                    <p>
                                        I am proud to lead a team of dedicated professionals who share the same passion and commitment to our mission. Together, we work tirelessly to make a positive impact on the lives of individuals seeking employment opportunities and the businesses that rely on our expertise to meet their manpower needs.
                                    </p>
                                    <p>
                                        I invite you to partner with M.R. Axis Human Capital Pvt. Ltd. and experience our young, energetic, and result-oriented approach to recruitment. Together, let us build successful partnerships and shape a better future.
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <p className="text-gray-900 font-bold text-xl">Thank you for your trust and support.</p>
                                    <p className="text-gray-900 font-bold mt-4">Warm regards,</p>
                                    <p className="text-primary-600 font-bold text-2xl mt-1">Chairman</p>
                                    <p className="text-gray-600 font-medium">M.R. Axis Human Capital Pvt. Ltd.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Special CTA Card */}
                            <div className="bg-gradient-dark rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden group mb-8">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary-600/40 transition-colors"></div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-widest leading-tight">THE RIGHT RECRUITMENT PARTNER FOR YOU</h4>
                                    <p className="text-gray-400 mb-8 text-sm">Excellence and integrity in every placement we make.</p>
                                    <Link to="/contact" className="btn-primary block w-full py-4 shadow-lg hover:shadow-primary-500/50">
                                        Get In Touch With Chairman
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Info Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500 inline-block">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-600">City Center, Kamalpokhari, Kathmandu, Nepal</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-600">+977-1-5916558</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChairmanMessage;
