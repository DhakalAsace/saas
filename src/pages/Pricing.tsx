import React from 'react'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    features: [
      'AI-powered analytics',
      'Automated reporting',
      'Up to 1,000 API calls/month',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$299',
    features: [
      'All Basic features',
      'Advanced AI models',
      'Up to 10,000 API calls/month',
      'Priority email & chat support',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Unlimited API calls',
      'Dedicated account manager',
      'On-premise deployment option',
      'Custom AI model development'
    ]
  }
]

const Pricing: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        <p className="text-xl text-center mb-12">Choose the plan that fits your business needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-teal-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-primary w-full text-center">Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing