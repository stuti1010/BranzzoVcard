'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import content from '../JsonData/NavContent.json'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }
    }
  }

  const linkHover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg px-6 lg:px-20 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold text-white tracking-tight">
        <motion.span
          whileHover={{ scale: 1.05, color: '#f3e8ff' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {content.logo}
        </motion.span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {content.navLinks.map((link, index) => (
          <motion.div key={index} whileHover={linkHover}>
            <Link
              href={link.href}
              className="text-white text-base font-medium hover:text-purple-200 transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={content.cta.href}
            className="ml-6 bg-white text-indigo-600 px-6 py-2 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300 font-semibold"
          >
            {content.cta.text}
          </Link>
        </motion.div>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-white"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-4/5 sm:w-3/5 bg-gradient-to-b from-indigo-700 to-purple-800 shadow-2xl flex flex-col items-start gap-8 p-8 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="self-end mb-4 text-white"
            >
              <HiX size={30} />
            </motion.button>
            {content.navLinks.map((link, index) => (
              <motion.div key={index} whileHover={linkHover}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-semibold hover:text-purple-200 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href={content.cta.href}
                onClick={() => setIsOpen(false)}
                className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all duration-300 w-full text-center font-semibold"
              >
                {content.cta.text}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}