import { motion } from "framer-motion"

const stats = [
  { number:"500+", label:"Lives Impacted" },
  { number:"200+", label:"Women Empowered" },
  { number:"50+", label:"Programs" },
  { number:"100+", label:"Volunteers" },
]

function Impact() {

  return (

    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-[#0f3d2e] mb-4">
            Our Impact
          </h2>

          <p className="text-gray-600">
            Every number represents a life transformed.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item,index)=>(

            <motion.div
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.2 }}
              className="bg-[#f8f6f1] rounded-3xl p-10 text-center shadow-xl"
              key={index}
            >

              <h3 className="text-5xl font-bold text-[#0f3d2e] mb-4">
                {item.number}
              </h3>

              <p className="text-gray-700">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Impact