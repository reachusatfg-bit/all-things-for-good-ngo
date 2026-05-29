import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SkillDevelopment() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-28 px-6 bg-white min-h-screen">

        <div className="max-w-6xl mx-auto">

          <div className="mb-20">

            <h1 className="text-6xl font-bold text-[#0f3d2e] mb-6">
              Skill Development
            </h1>

            <p className="text-2xl text-[#d4a017] font-semibold">
              Empowering Self-Reliance & Sustainable Living
            </p>

          </div>

          <div className="bg-[#f8f6f1] p-12 rounded-3xl shadow-xl">

            <p className="text-lg text-gray-700 leading-9 mb-12">
              We believe economic stability is a cornerstone of dignity.
              Our initiatives transform homes by equipping marginalized
              individuals — specifically women — with the tools to thrive.
            </p>

            <div className="space-y-12">

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Sewing Machine Operation
                </h2>

                <p className="text-gray-700 leading-8 text-lg">
                  Sewing Machine Training provided to over 200 women to help them
                  achieve financial independence and support their families.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Micro-Enterprise
                </h2>

                <p className="text-gray-700 leading-8 text-lg">
                  Practical training for launching and managing
                  small-scale household businesses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Vocational Growth
                </h2>

                <p className="text-gray-700 leading-8 text-lg">
                  Focused skill-building that turns untapped potential
                  into income-generating reality.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default SkillDevelopment