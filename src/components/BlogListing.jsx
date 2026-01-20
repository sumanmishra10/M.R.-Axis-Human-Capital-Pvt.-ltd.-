import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import blogBg from '../assets/blog-bg.png';

const BlogListing = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header Section */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blogBg})` }}
            >
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span>Blog</span>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                                    {post.image}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full uppercase">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-xs">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-primary-600 font-bold hover:gap-3 transition-all duration-300"
                                    >
                                        Read More
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListing;
