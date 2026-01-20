import { Link } from 'react-router-dom';
import recruitmentImg from '../assets/recruitment.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-primary p-1 overflow-hidden group">
                            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                                <img
                                    src={recruitmentImg}
                                    alt="Professional Recruitment"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-1">Professional Recruitment</h3>
                                        <p className="text-white/80">Connecting Talent Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="section-title">About Us</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                <strong className="text-gray-900">M.R. Axis Human Capital Pvt. Ltd.</strong> is a registered foreign employment agency based in Kathmandu, Nepal, operating under Government License No. 367874/81/82. With years of experience in the recruitment industry, we are committed to delivering ethical, efficient, and effective recruitment services to reputable employers and job-seekers worldwide.
                            </p>
                            <p>
                                At M.R. Axis Human Capital, we take pride in delivering intelligent solutions that cater to the specific needs of our clients. Our mission is to help job-seekers find exciting career and growth opportunities, while providing employers with top-tier talent that can help them achieve their business goals.
                            </p>
                            <p>
                                Our commitment to excellence, coupled with our unwavering dedication to our clients, makes us the preferred choice for foreign employment services in Nepal.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link to="/contact" className="btn-primary inline-block">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
