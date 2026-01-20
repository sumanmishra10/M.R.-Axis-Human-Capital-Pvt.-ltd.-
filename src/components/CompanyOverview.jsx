import { Link } from 'react-router-dom';
import companyBg from '../assets/company-bg.jpg';

const CompanyOverview = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section with Background Image */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${companyBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Overview</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Company Overview</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in border-t-8 border-primary-600">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary-500 inline-block">Your Trusted Recruitment Partner</h2>

                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                        M.R. Axis Human Capital Pvt. Ltd. is a leading recruitment agency in Nepal, specializing in ethical practices and customer satisfaction.
                                    </p>

                                    <p>
                                        With years of experience, we have successfully met the manpower requirements of clients from European countries, the Middle East, and Malaysia. Our licensed agency operates with transparency and fairness, ensuring that every placement is a step towards progress for both the employer and the employee.
                                    </p>

                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
                                            {[
                                                'Ethical Recruitment Practices',
                                                'Expert Industry Knowledge',
                                                'Global Network of Partners',
                                                'Rigorous Candidate Screening',
                                                'Personalized Talent Solutions',
                                                '100% Satisfaction Guarantee'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                                    <span className="text-primary-600 font-bold">✓</span>
                                                    <span className="font-semibold text-gray-800">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p>
                                        We prioritize professionalism, integrity, and excellence in all aspects of our operations. Our dedicated team ensures 100% client and candidate satisfaction through personalized recruitment solutions. Partner with us for reliable and skilled manpower solutions that meet your specific needs.
                                    </p>

                                    <p>
                                        Providing our clients with intelligent designs and innovative solutions that meet the evolving demands of the global workforce landscape.
                                    </p>
                                </div>

                                {/* Corporate Information Section */}
                                <div className="mt-16">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary-500 inline-block uppercase tracking-wider">Corporate Information</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <tbody>
                                                {[
                                                    { label: 'Name of the Company', value: 'M.R. Axis Human Capital Pvt. Ltd.' },
                                                    { label: 'License No.', value: '367874/81/82' },
                                                    { label: 'Membership', value: 'Nepal Association of Foreign Employment Agencies, Nepal Chamber of Commerce' },
                                                    { label: 'Major Markets', value: 'Europe (Croatia, Romania, Malta, Cyprus etc.), Saudi Arab, Malaysia, Qatar, United Arab Emirates, Oman, Bahrain, Kuwait etc.' },
                                                    { label: 'Availability', value: 'City Center, Kamalpokhari, Kathmandu, Nepal' },
                                                    { label: 'Tel', value: '+977-1-5916558, 5915734, 982-3776661' },
                                                    { label: 'E-mail', value: 'info@mraxis.com.np' },
                                                    // { label: 'Website', value: 'www.mraxis.com.np' },
                                                    { label: 'Established on', value: '2025' },
                                                ].map((row, idx) => (
                                                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 hover:bg-primary-50 transition-colors`}>
                                                        <td className="py-4 px-6 font-bold text-gray-900 w-1/3 border-r border-gray-100">{row.label}</td>
                                                        <td className="py-4 px-6 text-gray-600">{row.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500 inline-block">Quick Links</h3>
                                <nav className="flex flex-col space-y-3">
                                    <Link to="/about-mraxis" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors py-2 border-b border-gray-50">
                                        <span>→</span>
                                        <span>About M.R. AXIS</span>
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

                            <div className="bg-gradient-primary rounded-2xl p-10 text-white text-center shadow-xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="text-4xl font-bold mb-2">5+</h4>
                                    <p className="text-white/80 uppercase tracking-widest text-sm font-bold mb-6">Years of Excellence</p>
                                    <div className="h-1 w-12 bg-white mx-auto mb-6"></div>
                                    <p className="text-sm">Delivering top-tier talent to the world's leading organizations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;
