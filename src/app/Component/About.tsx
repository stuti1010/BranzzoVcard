'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Sample JSON data
const content = {
  about: {
    title: 'About Branzzo vCard',
    subtitle: 'We empower businesses with cutting-edge digital solutions, delivering seamless and innovative virtual card services to elevate your brand.',
    cardImage: '/card1.png',
    features: [
      { label: 'Innovative Design' },
      { label: 'Seamless Integration' },
      { label: 'Scalable Solutions' }
    ]
  }
}

export default function AboutSection() {
  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' }
    })
  }

  // Animation for feature items
  const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i:number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.6 + i * 0.2, type: 'spring', stiffness: 120 }
  }),
  hover: {
    scale: 1.1,
    color: '#c4b5fd',
    transition: { type: 'spring', stiffness: 300 }
  }
}

  // SVG particle animation
  const particleVariants = {
    animate: (i:number) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.3, 1],
      rotate: [0, 180],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.5
      }
    })
  }

  return (
    <section className="relative w-full py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background SVG Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            custom={i}
            variants={particleVariants}
            animate={particleVariants.animate(i)}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: '20px',
              height: '20px'
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="url(#starGrad)"
            />
            <defs>
              <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Floating Card */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="flex justify-center relative"
        >
          <Image
            src={content.about.cardImage}
            alt="vCard"
            width={400}
            height={250}
            className=" object-cover"
          />
          <motion.div
            className="absolute inset-0 rounded-b-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
          >
            {content.about.title}
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto md:mx-0 mb-6"
          >
            {content.about.subtitle}
          </motion.p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
            {content.about.features.map((feat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="text-indigo-600 font-semibold text-md sm:text-lg bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {feat.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}