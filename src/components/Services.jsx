import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
    // Only show first 8 services on the home page
    const services = servicesData.slice(0, 8);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Categories</h2>
                    <p className="section-subtitle">
                        We provide skilled professionals across multiple industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.slug}
                            className="card group cursor-pointer"
                        >
                            <div className="text-primary-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 text-4xl">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {service.description}
                            </p>
                            <Link
                                to={`/services/${service.slug}`}
                                className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all duration-300"
                            >
                                Read More
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services" className="btn-primary">
                        View All Categories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
