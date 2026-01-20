import { Link } from 'react-router-dom';
import legal1 from '../assets/legal1.png';
import legal2 from '../assets/legal2.png';
import legal3 from '../assets/legal3.png';
import legal4 from '../assets/legal4.png';
import legal5 from '../assets/legal5.png';
import legal6 from '../assets/legal6.png';
import legal7 from '../assets/legal7.png';
import legal8 from '../assets/legal8.png';
import legal9 from '../assets/legal9.png';
import legal10 from '../assets/legal10.png';
import legalBg from '../assets/legal-bg.png';

const LegalDocument = () => {
    const documents = [
        { src: legal1, title: 'Company Registration' },
        { src: legal2, title: 'Government License' },
        { src: legal3, title: 'PAN/VAT Certificate' },
        { src: legal4, title: 'FEAN Membership' },
        { src: legal5, title: 'Commerce Certificate' },
        { src: legal6, title: 'Industry Registration' },
        { src: legal7, title: 'Foreign Employment Board' },
        { src: legal8, title: 'Tax Clearance' },
        { src: legal9, title: 'Ministry Permit' },
        { src: legal10, title: 'Operational Certificate' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Section with Background Image */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${legalBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Document</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Legal Document</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliant And Reliable Credentials</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At M.R. Axis Human Capital Pvt. Ltd., we take immense pride in our commitment to operating as a reputable and reliable recruitment agency. Our legal documents solidify our compliance with government regulations and international industry standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 flex items-center justify-center relative">
                                        <img
                                            src={doc.src}
                                            alt={doc.title}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors">
                                            {doc.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">Verified Legal Copy</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Compliance & Security</h3>
                            <p className="text-gray-600 mb-6">
                                Our Government License No. 367874/81/82 signifies our compliance with the regulations set forth by the Ministry of Labour, Employment and Social Security of Nepal. This assures our clients and candidates that we operate within the legal framework established for foreign employment.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Company Registration</p>
                                    <p className="font-bold text-primary-600">Verified ✅</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Ministry License</p>
                                    <p className="font-bold text-primary-600">Active ⚡</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-40 h-40 bg-primary-100 rounded-full flex items-center justify-center border-8 border-primary-50">
                                <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalDocument;
