import React from 'react'
import { Zap, Users, Shield, Award, Brain, Rocket, Globe, Heart } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">About InnovateTech Solutions</h1>
        
        <section className="mb-20 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-8 text-center">Our Mission</h2>
          <p className="text-2xl mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            At InnovateTech Solutions, we're on a mission to <span className="text-teal-400 font-semibold">revolutionize industries</span> with cutting-edge AI technology. 
            We believe that artificial intelligence has the power to <span className="text-blue-400 font-semibold">transform businesses</span>, streamline operations, 
            and unlock new realms of innovation and growth.
          </p>
        </section>

        <section className="mb-20 animate-fade-in animation-delay-200">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Visionary Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
              { name: 'John Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
              { name: 'Emily Brown', role: 'Head of AI Research', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
            ].map((member, index) => (
              <div key={member.name} className="text-center transform hover:scale-105 transition-transform duration-300">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-lg" />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-xl text-teal-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in animation-delay-400">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 'Innovation', description: 'Pushing the boundaries of AI', icon: Brain },
              { value: 'Integrity', description: 'Transparent and ethical practices', icon: Shield },
              { value: 'Collaboration', description: 'Synergizing with clients', icon: Users },
              { value: 'Excellence', description: 'Delivering unparalleled quality', icon: Award },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                <item.icon className="h-16 w-16 text-teal-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{item.value}</h3>
                <p className="text-lg text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-in animation-delay-600">
          <h2 className="text-4xl font-semibold mb-8 text-center">Join Our Innovative Team</h2>
          <p className="text-2xl mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            We're always seeking passionate individuals who are driven to shape the future of AI and technology. 
            If you're ready to make a significant impact, explore our current openings or reach out to us directly.
          </p>
          <div className="text-center">
            <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-xl px-8 py-4">
              Explore Opportunities
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About