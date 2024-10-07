import React from 'react'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Explore how artificial intelligence is reshaping industries and driving innovation.',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Implementing AI: Best Practices for Businesses',
    excerpt: 'Learn the key strategies for successfully integrating AI into your organization.',
    date: 'April 28, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Ethics: Navigating the Challenges',
    excerpt: 'Discover the ethical considerations surrounding AI development and deployment.',
    date: 'April 10, 2024',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
]

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">InnovateTech Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          View All Posts
        </a>
      </div>
    </div>
  )
}

export default Blog