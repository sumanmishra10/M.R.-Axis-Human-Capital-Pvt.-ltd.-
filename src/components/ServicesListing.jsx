import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import servicesBg from '../assets/service.png';

const ServicesListing = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb / Title Section with Background Image */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${servicesBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Services</span>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <div
                                key={service.slug}
                                className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-6 bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center text-primary-600">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {service.description}
                                </p>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center text-primary-600 font-bold hover:gap-3 transition-all duration-300"
                                >
                                    Learn More
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesListing;
