import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

// Import background images
import agricultureBg from '../assets/agriculture.png';
import constructionBg from '../assets/construction.png';
import driversBg from '../assets/drivers-operators.png';
import electricalBg from '../assets/electricaltechnicians.png';
import engineeringBg from '../assets/engineering.png';
import medicalBg from '../assets/hospitalmedical.png';
import manufacturingBg from '../assets/manufacturing.png';
import officeBg from '../assets/officepersonnel.png';
import oilBg from '../assets/oilandgas.png';

const ServiceDetails = () => {
    const { slug } = useParams();
    const service = servicesData.find((s) => s.slug === slug);

    // Map slug to background image
    const bgMap = {
        'agriculture': agricultureBg,
        'constructions': constructionBg,
        'drivers-operators': driversBg,
        'electrical-technicians': electricalBg,
        'engineering': engineeringBg,
        'hospital-medical': medicalBg,
        'manufacturing': manufacturingBg,
        'office-personnel': officeBg,
        'oil-and-gas': oilBg,
    };

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Service not found</h2>
                    <Link to="/services" className="btn-primary">View All Services</Link>
                </div>
            </div>
        );
    }

    const currentBg = bgMap[slug];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Dynamic Header with Background Image */}
            <div
                className="relative py-24 text-white bg-cover bg-center"
                style={{
                    backgroundImage: currentBg
                        ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentBg})`
                        : 'bg-gradient-primary'
                }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                    <div className="flex items-center space-x-2 text-white/90 font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span>{service.title}</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mb-12 animate-fade-in border-t-8 border-primary-600">
                                <div className="text-6xl mb-8">{service.icon}</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-8 border-l-4 border-primary-500 pl-6 bg-primary-50 py-4">
                                    {service.description}
                                </p>
                                <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                                    <p className="leading-relaxed">
                                        {service.detailedContent}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                        <span className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center mr-4 text-sm">✓</span>
                                        Available Positions
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {service.jobs.map((job, index) => (
                                            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 group hover:border-primary-500 transition-colors">
                                                <span className="text-primary-600 font-bold">{index + 1}.</span>
                                                <span className="text-gray-800 font-medium group-hover:text-primary-700">{job}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Category Navigation */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                                <h3 className="bg-gray-900 text-white p-6 font-bold text-xl uppercase tracking-wider">All Services</h3>
                                <div className="p-4">
                                    <div className="flex flex-col space-y-2">
                                        {servicesData.map((s) => (
                                            <Link
                                                key={s.slug}
                                                to={`/services/${s.slug}`}
                                                className={`p-4 rounded-xl font-bold flex items-center justify-between transition-all duration-300 ${s.slug === slug
                                                    ? 'bg-primary-600 text-white shadow-lg translate-x-1'
                                                    : 'hover:bg-primary-50 text-gray-700 hover:text-primary-700'
                                                    }`}
                                            >
                                                <span className="flex items-center">
                                                    <span className="mr-3">{s.icon}</span>
                                                    {s.title}
                                                </span>
                                                <span>→</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Help CTA */}
                            <div className="bg-gradient-dark rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary-600/40 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Do you need any help?</h4>
                                    <p className="text-gray-400 mb-8">Direct contact with our team for immediate assistance.</p>
                                    <div className="space-y-4">
                                        <a href="mailto:info@mraxis.com.np" className="block p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                            info@mraxis.com.np
                                        </a>
                                        <a href="tel:+977-1-XXXXXXX" className="block p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                            +977-1-XXXXXXX
                                        </a>
                                    </div>
                                    <Link to="/contact" className="btn-primary mt-8 block w-full py-4 uppercase tracking-widest text-sm">
                                        Contact Us
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

export default ServiceDetails;
