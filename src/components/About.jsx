import children from "../assets/children.jpg"
import { motion } from "framer-motion"

function About(){

  return(

    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <img
            src={children}
            className="rounded-3xl shadow-2xl"
          />

        </motion.div>

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <h2 className="text-5xl font-bold text-[#0f3d2e] mb-8">
            We Believe Every Life Has Value
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            At All Things for Good Charitable Trust,
            we exist to restore dignity, create opportunity,
            and walk alongside communities with compassion.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Through education, counselling, healthcare initiatives,
            advocacy, and skill development,
            we help individuals move from survival to hope.
          </p>

          <blockquote className="border-l-4 border-[#d4a017] pl-6 italic text-gray-600">
            “Faith by itself, if it is not accompanied by action,
            is dead.” — James 2:17
          </blockquote>

        </motion.div>

      </div>

    </section>

  )

}

export default About