import { Link } from 'react-router-dom';
import aboutBg from '../assets/about.png';

const AboutMrAxis = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section with Background Image */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About M.R. Axis</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>About M.R. AXIS</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in border-t-8 border-primary-600">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary-500 inline-block">Welcome to M.R. Axis Human Capital Pvt. Ltd.</h2>

                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                                        A distinguished recruitment agency in Nepal that stands out for its ethical practices, professionalism, and unwavering commitment to customer satisfaction.
                                    </p>

                                    <p>
                                        With years of experience in the industry, we have become a trusted partner for clients seeking reliable and skilled manpower from Nepal. Our dedication to excellence and our track record of success have earned us a prominent position as a leading recruitment agency.
                                    </p>

                                    <p>
                                        At M.R. Axis Human Capital, we prioritize ethics in all aspects of our operations. We understand the importance of responsible recruitment practices and strive to maintain the highest standards of integrity. As a licensed agency specialized in manpower services, we adhere to all legal and regulatory requirements to ensure transparency and fairness in our processes.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Primary Focus</h3>
                                    <p>
                                        Our primary focus is on customer satisfaction, and we go above and beyond to exceed our clients' expectations. We take the time to understand our clients' specific manpower requirements and tailor our recruitment solutions accordingly. Whether you are a company seeking skilled professionals or a household looking for domestic helpers, we have a comprehensive database of qualified candidates to meet your needs.
                                    </p>

                                    <p>
                                        We believe that effective communication, collaboration, and a deep understanding of our clients' expectations are the keys to building successful partnerships. One of our core strengths is our commitment to 100% client and candidate satisfaction.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Global Reach</h3>
                                    <p>
                                        Over the years, we have successfully satisfied the manpower requirements of numerous clients from various parts of the world. Our extensive network and partnerships with reputable companies in European countries, Gulf countries in the Middle East, and Malaysia have enabled us to source the best talent and facilitate seamless placements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500 inline-block">Quick Links</h3>
                                <nav className="flex flex-col space-y-3">
                                    <Link to="/company-overview" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors py-2 border-b border-gray-50">
                                        <span>→</span>
                                        <span>Company Overview</span>
                                    </Link>
                                    <Link to="/legal-document" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors py-2 border-b border-gray-50">
                                        <span>→</span>
                                        <span>Legal Document</span>
                                    </Link>
                                    <Link to="/mission-vision-value" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors py-2 border-b border-gray-50">
                                        <span>→</span>
                                        <span>Mission, Vision & Value</span>
                                    </Link>
                                </nav>
                            </div>

                            <div className="bg-gradient-dark rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary-600/40 transition-colors"></div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
                                    <p className="text-gray-400 mb-8 text-sm">We are here to help you find the best talent or your next great opportunity.</p>
                                    <Link to="/contact" className="btn-primary block w-full py-4 uppercase tracking-widest text-sm font-bold">
                                        Talk To Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMrAxis;
