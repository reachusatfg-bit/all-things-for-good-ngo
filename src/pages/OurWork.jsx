import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const programs = [

  {
    title: "Lay Counseling",
    headline: "Bridging the Gap through Task-Shared Care",
    desc: "Providing emotional and spiritual support through community-based care models.",
    link: "/our-work/lay-counselling"
  },

  {
    title: "Skill Development",
    headline: "Empowering Self-Reliance & Sustainable Living",
    desc: "Equipping women and marginalized communities with sustainable livelihood skills.",
    link: "/our-work/skill-development"
  },

  {
    title: "Education & Training",
    headline: "Pathways to Opportunity",
    desc: "Creating learning environments that foster growth and leadership.",
    link: "/our-work/education"
  },

  {
    title: "Advocacy",
    headline: "A Voice for the Voiceless",
    desc: "Promoting justice, awareness, and healthcare accessibility.",
    link: "/our-work/advocacy"
  }

]

function OurWork() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-28 px-6 bg-[#f8f6f1] min-h-screen">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <h1 className="text-6xl font-bold text-[#0f3d2e] mb-6">
              Our Work
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Through compassion, dignity, and sustainable empowerment,
              we serve communities through holistic programs
              designed to restore hope and opportunity.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {programs.map((program, index) => (

              <Link
                key={index}
                to={program.link}
                className="group bg-white p-12 rounded-3xl shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500 border border-transparent hover:border-[#d4a017]"
              >

                <p className="text-[#d4a017] font-semibold mb-4">
                  Program {index + 1}
                </p>

                <h2 className="text-4xl font-bold text-[#0f3d2e] mb-5 group-hover:text-[#d4a017] transition">
                  {program.title}
                </h2>

                <h3 className="text-xl text-gray-700 mb-6 leading-8">
                  {program.headline}
                </h3>

                <p className="text-gray-600 leading-8 text-lg mb-10">
                  {program.desc}
                </p>

                <span className="text-[#d4a017] font-bold text-lg">
                  Explore Program →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default OurWork