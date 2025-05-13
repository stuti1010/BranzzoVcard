'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

// Pricing data in INR (monthly and yearly)
const pricingData = {
  plans: [
    {
      title: 'Starter',
      monthlyPrice: 499,
      yearlyPrice: 4990, // Approx 12 months * 499 with a 17% discount
      description: 'Perfect for small businesses starting with virtual cards.',
      features: [
        '1 vCard Design',
        'Basic Analytics',
        'Email Support',
        '50 Contacts/Month'
      ],
      buttonText: 'Get Started',
      isPopular: false
    },
    {
      title: 'Pro',
      monthlyPrice: 999,
      yearlyPrice: 9990, // Approx 12 months * 999 with a 17% discount
      description: 'Ideal for growing businesses needing advanced features.',
      features: [
        '3 vCard Designs',
        'Advanced Analytics',
        'Priority Support',
        'Unlimited Contacts'
      ],
      buttonText: 'Choose Pro',
      isPopular: true
    },
    {
      title: 'Enterprise',
      monthlyPrice: 2499,
      yearlyPrice: 24990, // Approx 12 months * 2499 with a 17% discount
      description: 'Tailored for large enterprises with custom needs.',
      features: [
        'Unlimited vCard Designs',
        'Custom Analytics',
        '24/7 Dedicated Support',
        'API Access'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    }
  ]
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  // Animation variants for toggle buttons
  const buttonVariants = {
    active: {
      backgroundColor: '#4f46e5',
      color: '#ffffff',
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    },
    inactive: {
      backgroundColor: '#ffffff',
      color: '#4f46e5',
      scale: 1,
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  // Animation variants for pricing cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: 'spring', stiffness: 100 }
    }),
    hover: {
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 400 }
    }
  }

  // Animation variants for the button in cards
  const ctaButtonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#ffffff',
      color: '#4f46e5',
      transition: { type: 'spring', stiffness: 300 }
    },
    tap: { scale: 0.95 }
  }

  // SVG background wave animation
  const waveVariants = {
    animate: {
      y: [0, -5, 0],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section className="relative w-full py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background SVG Wave Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          variants={waveVariants}
          animate="animate"
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#waveGrad)"
            fillOpacity="0.4"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Monthly/Yearly Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-gray-200 shadow-sm">
            <motion.button
              onClick={() => setIsYearly(false)}
              variants={buttonVariants}
              animate={isYearly ? 'inactive' : 'active'}
              className="px-4 sm:px-6 py-2 rounded-l-full font-semibold text-sm sm:text-base focus:outline-none"
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              variants={buttonVariants}
              animate={isYearly ? 'active' : 'inactive'}
              className="px-4 sm:px-6 py-2 rounded-r-full font-semibold text-sm sm:text-base focus:outline-none"
            >
              Yearly
            </motion.button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`relative bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                plan.isPopular ? 'border-indigo-600' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{plan.description}</p>
              <div className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
                ₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-lg sm:text-xl font-normal text-gray-500">
                  {isYearly ? '/year' : '/month'}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}