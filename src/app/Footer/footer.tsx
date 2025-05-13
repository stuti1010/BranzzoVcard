'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Footer data
const footerData = {
  companyInfo: {
    name: 'Branzzo vCard',
    description: 'Empowering businesses with innovative virtual card solutions for seamless digital branding and connectivity.',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com/branzzovcard', icon: 'fab fa-twitter' },
      { name: 'LinkedIn', url: 'https://linkedin.com/company/branzzovcard', icon: 'fab fa-linkedin' },
      { name: 'Instagram', url: 'https://instagram.com/branzzovcard', icon: 'fab fa-instagram' }
    ]
  },
  quickLinks: [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Contact', url: '/contact' }
  ],
  services: [
    { name: 'Virtual Card Design', url: '/services/virtual-cards' },
    { name: 'Digital Branding', url: '/services/branding' },
    { name: 'Analytics Dashboard', url: '/services/analytics' },
    { name: 'API Integration', url: '/services/api' }
  ],
  contact: {
    email: 'branzzotechnologies@gmail.com',
    phone: '+91 6269957381',
    address: 'Vijay Nagar , Indore, India'
  }
}

export default function Footer() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
    })
  }

  // Animation variants for links (text and arrow)
  const linkVariants = {
    rest: { x: 0, color: '#4b5563' },
    hover: {
      x: 5,
      color: '#4f46e5',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  // Animation variants for the purple underline
  const underlineVariants = {
    rest: { width: '0%', originX: 0 },
    hover: {
      width: '25%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  // Animation variants for social icons
  const socialIconVariants = {
    rest: { scale: 1, color: '#4b5563' },
    hover: {
      scale: 1.2,
      color: '#c4b5fd',
      transition: { type: 'spring', stiffness: 400 }
    }
  }

  // Animation variants for contact info items
  const contactItemVariants = {
    rest: { x: 0, color: '#4b5563' },
    hover: {
      x: 5,
      color: '#4f46e5',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  return (
    <footer className="relative w-full bg-white text-gray-800 py-12 sm:py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Company Info */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600">
              {footerData.companyInfo.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {footerData.companyInfo.description}
            </p>
            <div className="flex space-x-4 pt-2">
              {footerData.companyInfo.socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="rest"
                  whileHover="hover"
                  className="text-gray-600"
                >
                  <i className={`${social.icon} text-xl sm:text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="relative flex items-center"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.svg
                    variants={linkVariants}
                    className="w-4 h-4 text-indigo-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                  <Link href={link.url}>
                    <motion.span variants={linkVariants} className="text-gray-600 text-sm sm:text-base">
                      {link.name}
                    </motion.span>
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Our Services</h3>
            <ul className="space-y-3">
              {footerData.services.map((service, index) => (
                <motion.li
                  key={index}
                  className="relative flex items-center"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.svg
                    variants={linkVariants}
                    className="w-4 h-4 text-indigo-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                  <Link href={service.url}>
                    <motion.span variants={linkVariants} className="text-gray-600 text-sm sm:text-base">
                      {service.name}
                    </motion.span>
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <motion.li
                className="flex items-center"
                initial="rest"
                whileHover="hover"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l4-4m-4 4l4 4m5-12H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
                  />
                </svg>
                <motion.a
                  href={`mailto:${footerData.contact.email}`}
                  variants={contactItemVariants}
                  className="relative"
                >
                  {footerData.contact.email}
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                  />
                </motion.a>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial="rest"
                whileHover="hover"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m-6 8h12M9 11v2m-6 8h12M9 19v2m6-18v18"
                  />
                </svg>
                <motion.a
                  href={`tel:${footerData.contact.phone}`}
                  variants={contactItemVariants}
                  className="relative"
                >
                  {footerData.contact.phone}
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                  />
                </motion.a>
              </motion.li>
              <motion.li className="flex items-start">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.243l-4.243-4.243m0 0L9.172 16.243m4.242-4.243L9.172 7.757m4.242 4.243l4.243-4.243M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
                <span>{footerData.contact.address}</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-12 sm:mt-16 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-sm sm:text-base">
            © {new Date().getFullYear()} Branzzo vCard. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}