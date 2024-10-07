import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Zap, Cog, MessageSquare, Play } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Revolutionize Your <span className="text-teal-400">Business</span> with AI
              </h1>
              <p className="text-xl mb-8 text-gray-300 animate-fade-in animation-delay-200">
                Harness the power of artificial intelligence to streamline operations, boost productivity, and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-400">
                <Link to="/contact" className="btn-primary group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#demo-video" className="btn-secondary group">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Technology Visualization" 
                  className="w-full rounded-lg shadow-2xl border-4 border-teal-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-teal-400 hover:text-teal-300 transition-colors">
            <ChevronDown className="h-10 w-10" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI-Powered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: Zap },
              { title: 'Automated Workflows', description: 'Streamline processes and boost efficiency', icon: Cog },
              { title: 'Intelligent Chatbots', description: 'Provide 24/7 customer support and engagement', icon: MessageSquare },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">See InnovateTech in Action</h2>
          <div className="relative w-full max-w-4xl mx-auto group">
            <a href="https://www.youtube.com/watch?v=Qm2qdxW7yDo" target="_blank" rel="noopener noreferrer" className="block relative">
              <img 
                src="https://img.youtube.com/vi/Qm2qdxW7yDo/maxresdefault.jpg" 
                alt="InnovateTech Demo Video Thumbnail" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-teal-400 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-12 w-12 text-gray-900" />
                </div>
              </div>
              <div className="absolute inset-0 border-8 border-teal-400 rounded-lg pointer-events-none"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <Link to="/contact" className="btn-primary">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home