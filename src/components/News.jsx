import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const News = () => {
    // Show only the first 3 items from blogData on the Home Page
    const newsItems = blogData.slice(0, 3);

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">News & Updates</h2>
                    <p className="section-subtitle">
                        Stay informed with our latest insights and updates
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="card group">
                            <div className="text-6xl mb-4 text-center">{item.image}</div>
                            <div className="mb-3">
                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {item.excerpt}
                            </p>
                            <Link
                                to={`/blog/${item.slug}`}
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
                    <Link to="/blog" className="btn-primary">
                        View All Blog Posts
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News;
