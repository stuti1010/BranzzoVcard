'use client'
import { motion } from 'framer-motion'

// Brand data in JSON format
const brandData = {
  brands: [
    { name: 'Google', logo: 'https://via.placeholder.com/100x40?text=Google', alt: 'Google Logo' },
    { name: 'Airbnb', logo: 'https://via.placeholder.com/100x40?text=Airbnb', alt: 'Airbnb Logo' },
    { name: 'Stripe', logo: 'https://via.placeholder.com/100x40?text=Stripe', alt: 'Stripe Logo' },
    { name: 'Uber', logo: 'https://via.placeholder.com/100x40?text=Uber', alt: 'Uber Logo' }
  ],
  footerText: 'Join over <strong>1k+</strong> software businesses thriving with Branzzo vCard.'
}

export default function Brands() {
  // Animation variants for brand cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i:number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    }),
    hover: {
      scale: 1.15,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  // Animation for footer text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-12 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {brandData.brands.map((brand, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="h-10 sm:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-12 text-center text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700"
          dangerouslySetInnerHTML={{ __html: brandData.footerText }}
        />
      </div>
    </section>
  )
}