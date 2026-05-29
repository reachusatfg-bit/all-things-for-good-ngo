import volunteer from "../assets/volunteer.jpg"
import { motion } from "framer-motion"

function CTA() {
  return (
    <section
      className="relative py-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${volunteer})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          You Can Become Someone’s Miracle Today
        </h2>

        <p className="text-xl text-white/80 mb-10 leading-8">
          Join us in bringing hope, healing, dignity, and opportunity
          to vulnerable communities.
        </p>

        <button className="bg-[#d4a017] px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
          Support The Mission
        </button>
      </motion.div>
    </section>
  )
}

export default CTA