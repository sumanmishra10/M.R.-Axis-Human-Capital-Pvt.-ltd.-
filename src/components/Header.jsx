import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHomeClick = (e) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const menuItems = [
        { name: 'Home', href: '/', isPage: true },
        {
            name: 'About',
            href: '#about',
            isPage: false,
            submenu: [
                { name: 'About M.R. AXIS', href: '/about-mraxis' },
                { name: 'Company Overview', href: '/company-overview' },
                { name: 'Legal Document', href: '/legal-document' },
                { name: 'Mission, Vision & Value', href: '/mission-vision-value' },
            ]
        },
        { name: 'Services', href: '/services', isPage: true },
        {
            name: 'Recruitment',
            href: '#recruitment',
            isPage: false,
            submenu: [
                { name: 'Selection Process', href: '/recruitment-process' },
            ]
        },
        { name: 'Blog', href: '/blog', isPage: true },
        { name: 'Contact', href: '/contact', isPage: true },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2" onClick={handleHomeClick}>
                            <div className="w-16 h-16 bg-white/95 rounded-lg flex items-center justify-center overflow-hidden">
                                <img src={logo} alt="M.R. Axis" className="w-full h-full object-contain" />
                            </div>
                            <div className="hidden md:block">
                                <h1 className="text-xl font-bold text-gray-900">M.R. Axis</h1>
                                <p className="text-xs text-gray-600">Human Capital Pvt. Ltd</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) =>
                            item.submenu ? (
                                <div key={item.name} className="relative group">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-4">
                                        <span>{item.name}</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        {item.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.href}
                                                className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 border-b border-gray-50 last:border-0 transition-colors"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : item.isPage ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group py-4"
                                    onClick={item.href === '/' ? handleHomeClick : undefined}
                                >
                                    {item.name}
                                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={isHomePage ? item.href : `/${item.href}`}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group py-4"
                                    onClick={(e) => {
                                        if (!isHomePage) {
                                            e.preventDefault();
                                            window.location.href = `/${item.href}`;
                                        }
                                    }}
                                >
                                    {item.name}
                                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            )
                        )}
                        <Link to="/contact" className="btn-primary">
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down bg-white max-h-[80vh] overflow-y-auto">
                        <nav className="flex flex-col space-y-2">
                            {menuItems.map((item) =>
                                item.submenu ? (
                                    <div key={item.name} className="flex flex-col">
                                        <div className="px-4 py-2 text-primary-600 font-bold bg-gray-50 flex items-center justify-between">
                                            <span>{item.name}</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col space-y-1 bg-white">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    className="pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors border-l-4 border-transparent hover:border-primary-500"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : item.isPage ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 hover:bg-gray-50 rounded-lg"
                                        onClick={(e) => {
                                            setIsMobileMenuOpen(false);
                                            if (item.href === '/') handleHomeClick(e);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={isHomePage ? item.href : `/${item.href}`}
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 hover:bg-gray-50 rounded-lg"
                                        onClick={(e) => {
                                            setIsMobileMenuOpen(false);
                                            if (!isHomePage) {
                                                e.preventDefault();
                                                window.location.href = `/${item.href}`;
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                )
                            )}
                            <Link
                                to="/contact"
                                className="btn-primary mx-4 mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
