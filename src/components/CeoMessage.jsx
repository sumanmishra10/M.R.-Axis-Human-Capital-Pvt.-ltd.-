import { Link } from 'react-router-dom';

const CeoMessage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section */}
            <div className="bg-gradient-primary py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CEO Message</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>CEO Message</span>
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
                                        CEO
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Inspiring Growth, Innovation</h2>
                                        <p className="text-primary-600 font-semibold">Message from our CEO</p>
                                    </div>
                                </div>

                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                                        "We strive to develop a deep understanding of our clients' needs and aspirations, enabling us to provide tailor-made solutions that precisely align with their requirements."
                                    </p>
                                    <p>
                                        We believe in the power of collaboration and engagement. By working closely with our clients, we ensure that their goals and objectives remain at the forefront of our recruitment strategies. Our unwavering dedication to delivering excellence sets us apart, as we aim to become a trusted partner in their talent acquisition journey.
                                    </p>
                                    <p>
                                        As the CEO, my vision is to continually enhance our services, embracing innovation and staying ahead of industry trends. We invest in the professional growth and development of our team members, empowering them with the skills and knowledge needed to navigate the dynamic landscape of recruitment. Our commitment to staying at the forefront of the industry ensures that we provide our clients with the most effective and cutting-edge solutions.
                                    </p>
                                    <p>
                                        I extend my heartfelt gratitude to our clients, candidates, and team members for their trust and support. Together, we will continue to foster excellence in recruitment services, driving mutual growth and success. Thank you for choosing M.R. Axis Human Capital Pvt. Ltd. as your trusted partner in recruitment.
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <p className="text-gray-900 font-bold text-xl">Sincerely,</p>
                                    <p className="text-primary-600 font-bold text-2xl mt-1">CEO</p>
                                    <p className="text-gray-600 font-medium">M.R. Axis Human Capital Pvt. Ltd.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Contact Card */}
                            <div className="bg-gradient-dark rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden group mb-8">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary-600/40 transition-colors"></div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Passion For Quality</h4>
                                    <p className="text-gray-400 mb-8 text-sm">We are dedicated to providing the highest quality workforce recruitment services from Nepal.</p>
                                    <Link to="/contact" className="btn-primary block w-full py-4 shadow-lg hover:shadow-primary-500/50">
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Contact Info */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500 inline-block">Direct Contact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:info@mraxis.com.np" className="text-gray-600 hover:text-primary-600 transition-colors break-all">info@mraxis.com.np</a>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <svg className="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-600">+977-1-XXXXXXX</span>
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

export default CeoMessage;
