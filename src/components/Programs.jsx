import { Heart, GraduationCap, HandHeart, Megaphone } from "lucide-react"
import { motion } from "framer-motion"

const programs = [

  {
    icon:<Heart size={40} />,
    title:"Lay Counselling",
    desc:"Emotional and spiritual support for those facing grief and trauma."
  },

  {
    icon:<GraduationCap size={40} />,
    title:"Education & Training",
    desc:"Workshops, literacy programs, and leadership development."
  },

  {
    icon:<HandHeart size={40} />,
    title:"Skill Development",
    desc:"Helping women and families build sustainable livelihoods."
  },

  {
    icon:<Megaphone size={40} />,
    title:"Advocacy",
    desc:"Promoting healthcare access and social justice initiatives."
  }

]

function Programs() {

  return (

    <section className="py-28 px-6 bg-[#f8f6f1]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-[#0f3d2e] mb-5">
            What We Do
          </h2>

          <p className="text-gray-600">
            Holistic programs designed to restore dignity and hope.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((program,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-500"
            >

              <div className="text-[#d4a017] mb-6">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {program.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Programs