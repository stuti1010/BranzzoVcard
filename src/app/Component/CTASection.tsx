'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import content from '../JsonData/Branzzosection.json'

export default function CTASection() {
  return (
    <section className="bg-[#101717] text-white py-16 px-6 lg:px-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-xl bg-[#141d1d] border border-gray-700 p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-lg"
      >
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={content.cta.image}
            alt="Branzzo Card"
            width={200}
            height={120}
            className="rounded-md shadow-xl"
          />
        </div>

        {/* Text + Form */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{content.cta.title}</h2>
          <p className="text-gray-400">{content.cta.description}</p>

          <form className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="email"
              placeholder={content.cta.placeholder}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2626] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-accent hover:text-white transition"
            >
              {content.cta.buttonText}
            </motion.button>
          </form>

          <label className="flex items-start gap-2 text-sm text-gray-400 mt-2">
            <input type="checkbox" className="accent-accent mt-1" required />
            {content.cta.disclaimer}
          </label>
        </div>
      </motion.div>
    </section>
  )
}
