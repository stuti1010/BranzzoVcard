'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Contact data
const contactData = {
  title: 'Get in Touch with Branzzo vCard',
  subtitle: 'We’re here to help you elevate your digital presence with our virtual card solutions. Reach out to us today!',
  contactInfo: {
    email: 'branzzotechnologies@gmail.com',
    phone: '+91 6269957381',
    address: 'Vijay Nagar, Indore, India'
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder for form submission logic (requires backend setup)
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
    })
  }

  // Animation variants for form inputs and button
  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#4f46e5',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#4338ca',
      transition: { type: 'spring', stiffness: 300 }
    },
    tap: { scale: 0.95 }
  }

  // Animation variants for contact info items
  const contactItemVariants = {
    hover: {
      x: 5,
      color: '#4f46e5',
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            {contactData.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-sm sm:text-base resize-none"
                />
              </div>
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm sm:text-base shadow-md hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Contact Details</h2>
              <ul className="space-y-4 text-gray-600 text-sm sm:text-base">
                <motion.li
                  className="flex items-center"
                  initial="rest"
                  whileHover="hover"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
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
                    href={`mailto:${contactData.contactInfo.email}`}
                    variants={contactItemVariants}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {contactData.contactInfo.email}
                  </motion.a>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial="rest"
                  whileHover="hover"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
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
                    href={`tel:${contactData.contactInfo.phone}`}
                    variants={contactItemVariants}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {contactData.contactInfo.phone}
                  </motion.a>
                </motion.li>
                <motion.li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3 mt-1"
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
                  <span>{contactData.contactInfo.address}</span>
                </motion.li>
              </ul>
            </div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="rounded-xl overflow-hidden shadow-lg h-48 sm:h-64"
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4362008719972!2d75.88817547530567!3d22.749187879366442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5630da7d0f%3A0x7b927144557e6b25!2sOmega%20Tower%2C%20Ware%20House%20Rd%2C%20Mechanic%20Nagar%2C%20Badi%20Bhamori%2C%20Indore%2C%20Madhya%20Pradesh%20452002!5e0!3m2!1sen!2sin!4v1747128908135!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
