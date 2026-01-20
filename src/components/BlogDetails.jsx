import { Link, useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';
import blogBg from '../assets/blog-bg.png';

const BlogDetails = () => {
    const { slug } = useParams();
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
                    <Link to="/blog" className="btn-primary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header Section */}
            <div
                className="relative py-24 text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blogBg})` }}
            >
                <div className="container-custom relative z-10">
                    <div className="mb-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">{post.title}</h1>
                    <div className="flex items-center justify-center space-x-4 text-white/90">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 text-center text-8xl py-12 bg-gray-50 rounded-3xl">
                            {post.image}
                        </div>

                        <div
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        >
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <Link to="/blog" className="text-primary-600 font-bold flex items-center hover:gap-2 transition-all">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Back to Blog
                            </Link>
                            <div className="flex gap-4">
                                <span className="text-gray-500 font-medium">Share:</span>
                                {/* Social Share Placeholders */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">f</div>
                                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">t</div>
                                    <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">i</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
