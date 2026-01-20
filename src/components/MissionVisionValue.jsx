import { Link } from 'react-router-dom';
import missionBg from '../assets/mission-bg.png';

const MissionVisionValue = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section with Background Image */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${missionBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Mission, Vision & Value</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Mission, Vision & Value</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Guiding Principles</h2>
                        <p className="text-lg text-gray-600 italic">
                            "The foundation of our commitment to excellence and ethical recruitment."
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Mission */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-[12px] border-primary-600 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 transition-transform duration-700">
                                <svg className="w-64 h-64 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-primary-500/30">M</span>
                                    Our Mission
                                </h3>
                                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                    Our mission is to connect employers with skilled and qualified manpower from Nepal while upholding the highest ethical standards and providing exceptional service. We strive to bridge the gap between talent and opportunities, ensuring mutual success for both our clients and candidates. Through our dedicated efforts, we aim to contribute to the growth and development of businesses and individuals by facilitating fruitful employment relationships.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-[12px] border-blue-600 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 transition-transform duration-700">
                                <svg className="w-64 h-64 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">V</span>
                                    Our Vision
                                </h3>
                                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                    Our vision is to be recognized as the premier recruitment agency in Nepal, renowned for our integrity, professionalism, and commitment to customer satisfaction. We envision being the go-to partner for companies seeking reliable and skilled manpower, and the trusted advisor for individuals seeking rewarding employment opportunities abroad. We aim to continually expand our network, enhance our services, and innovate our processes to stay ahead in the industry.
                                </p>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-[12px] border-gray-900 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 transition-transform duration-700">
                                <svg className="w-64 h-64 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-10 flex items-center">
                                    <span className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-gray-500/30">V</span>
                                    Our Values
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Integrity', desc: 'Conducting business with honesty and highest ethical standards.' },
                                        { title: 'Professionalism', desc: 'Maintaining top-tier service standards in every interaction.' },
                                        { title: 'Customer Focus', desc: 'Understanding unique needs and delivering tailored solutions.' },
                                        { title: 'Excellence', desc: 'Ingrained in everything we do, from process to delivery.' },
                                        { title: 'Collaboration', desc: 'We believe in the power of partnerships for mutual success.' },
                                        { title: 'Empowerment', desc: 'Matching candidates with opportunities that align with their goals.' }
                                    ].map((value, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                                            <h4 className="font-bold text-gray-900 mb-2 border-b border-primary-200 pb-2 inline-block">{value.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionValue;
