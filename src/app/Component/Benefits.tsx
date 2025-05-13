'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Sample JSON data
const content = {
  benefits: {
    title: 'Why Partner with Branzzo vCard?',
    items: [
      {
        title: 'Seamless Connectivity',
        description: 'Effortlessly engage your audience with our advanced virtual card solutions, designed for maximum impact.'
      },
      {
        title: 'Tailored Branding',
        description: 'Customize your vCard to reflect your brand’s identity with precision and elegance.'
      },
      {
        title: 'Scalable Innovation',
        description: 'Drive business growth with scalable, future-proof tools built for long-term success.'
      }
    ],
    card1: '/benefit-card1.png',
    card2: '/benefit-card2.png'
  }
}

export default function BenefitsSection() {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
    })
  }

  // Animation variants for benefit items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.2, type: 'spring', stiffness: 100, damping: 15 }
    }),
    hover: {
      scale: 1.02,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  // Animation variants for cards
  const cardVariants = {
    hidden: (i:number) => ({
      x: i === 0 ? -40 : 40,
      opacity: 0
    }),
    visible: (i:number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8 + i * 0.2,
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 400 }
    }
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

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600 mb-8"
          >
            {content.benefits.title}
          </motion.h2>
          <div className="space-y-6">
            {content.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={itemVariants.visible(index)}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={cardVariants.visible(0)}
            whileHover="hover"
            className="absolute z-10"
          >
            <Image
              src={content.benefits.card1}
              alt="Card 1"
              width={300}
              height={200}
              className="rounded-lg shadow-xl object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={cardVariants.visible(1)}
            whileHover="hover"
            className="absolute top-28 left-28 sm:top-36 sm:left-36 lg:top-44 lg:left-44 z-0"
          >
            <Image
              src={content.benefits.card2}
              alt="Card 2"
              width={300}
              height={200}
              className="rounded-lg shadow-xl object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}