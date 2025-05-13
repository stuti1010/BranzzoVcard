'use client'
import { motion } from 'framer-motion'

// Particle animation variants
const particleVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    },
  }),
};


export default function Hero() {
  // Animation variants for text and buttons
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 }
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-16 overflow-hidden">
      {/* Background Particle SVGs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            custom={i}
            animate="animate"
            variants={particleVariants}
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
            <circle cx="12" cy="12" r="10" fill="url(#grad1)" opacity="0.5" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-2xl z-10">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-sm sm:text-base font-semibold text-indigo-600 mb-4 tracking-wide"
        >
          A Trusted Digital Agency
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Quality Digital <br /> Services You{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Really Want!
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-6 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
        >
          We deliver top-level digital services with our best team. Just get started with Branzzo vCard.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="text-indigo-600 hover:text-purple-600 font-medium underline underline-offset-4 transition-colors duration-300"
          >
            How it Works
          </motion.button>
        </div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-500 mt-6"
        >
          Already a member?{' '}
          <a href="#" className="underline text-gray-900 hover:text-indigo-600 transition-colors duration-300">
            Sign in
          </a>
        </motion.p>
      </div>

      {/* Right Image/Graph */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center z-10">
        <motion.img
          src="/hero-user.png"
          alt="Hero"
          className="w-64 sm:w-80 lg:w-96 object-cover relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Floating Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-4 right-4 sm:top-0 sm:right-0 bg-white shadow-2xl rounded-xl px-6 py-4 w-64 sm:w-72 lg:w-80"
        >
          <p className="text-sm sm:text-base font-semibold text-gray-700">Grow Your Own Business!</p>
          <div className="mt-4">
            <div className="w-full h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl">
              760
            </div>
            <p className="text-center text-gray-700 mt-2 text-sm sm:text-base">Excellent</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}