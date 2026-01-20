import { Link } from 'react-router-dom';
import processBg from '../assets/process-bg.png';

const RecruitmentProcess = () => {
    const steps = [
        {
            number: '01',
            title: 'Sourcing & Sifting',
            description: 'We leverage our extensive database and nationwide network in Nepal to find potential candidates who meet the specific requirements of our clients. This includes advertisement in local media and headhunting for specialized roles.',
            icon: '🔍'
        },
        {
            number: '02',
            title: 'Screening & Shortlisting',
            description: 'Every candidate undergoes a rigorous screening process. Our experts review applications and conduct preliminary interviews to assess skills, experience, and suitability for the specific international work environment.',
            icon: '📋'
        },
        {
            number: '03',
            title: 'Technical Evaluation',
            description: 'For technical roles, we conduct specialized trade tests and skill assessments. This ensures that only the most qualified individuals move forward to the final selection phase.',
            icon: '⚙️'
        },
        {
            number: '04',
            title: 'Final Interview',
            description: 'We present a curated shortlist to our clients. Final interviews can be conducted in person, via video conference, or through client-delegated representatives based on preference.',
            icon: '🤝'
        },
        {
            number: '05',
            title: 'Medical Examination',
            description: 'Selected candidates are referred to authorized medical centers for a comprehensive health check-up, ensuring they meet the health requirements of the host country.',
            icon: '🏥'
        },
        {
            number: '06',
            title: 'Documentation & Visa',
            description: 'Once medically cleared, we handle all the documentation, labor permits, and visa processing through the relevant embassies and government departments in Nepal.',
            icon: '📑'
        },
        {
            number: '07',
            title: 'Orientation & Deployment',
            description: 'Before departure, candidates attend a mandatory pre-departure orientation giving them essential information about the job, culture, and laws of the destination country. Finally, we coordinate their travel and deployment.',
            icon: '✈️'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header Section */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${processBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Selection Process (SOP)</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Selection Process</span>
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <div className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Our Systematic Approach</h2>
                        <p className="text-lg text-gray-600">
                            At M.R. Axis Human Capital Pvt. Ltd., we follow a transparent and ethical Standard Operating Procedure (SOP) to ensure the best results for both employers and job seekers.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 -translate-x-1/2"></div>

                        <div className="space-y-12 relative z-10">
                            {steps.map((step, index) => (
                                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Content Card */}
                                    <div className="w-full lg:w-5/12">
                                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-primary-600 group">
                                            <div className="flex items-center mb-4">
                                                <span className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                                                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Number Circle */}
                                    <div className="my-8 lg:my-0 lg:w-2/12 flex justify-center">
                                        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-primary-500/50 relative z-20">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="hidden lg:block lg:w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-20 text-center bg-primary-600 text-white p-12 rounded-3xl shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6">Need More Information?</h3>
                            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                                Our team is ready to provide you with detailed documentation and answer any queries regarding our recruitment procedures.
                            </p>
                            <Link to="/contact" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors shadow-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruitmentProcess;
