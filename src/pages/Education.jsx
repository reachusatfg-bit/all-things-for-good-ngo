import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Education() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-28 px-6 bg-[#f8f6f1] min-h-screen">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold text-[#0f3d2e] mb-6">
            Education & Training
          </h1>

          <p className="text-2xl text-[#d4a017] font-semibold mb-14">
            Pathways to Opportunity
          </p>

          <div className="bg-white p-12 rounded-3xl shadow-xl">

            <p className="text-lg text-gray-700 leading-9 mb-12">
              Education is the blueprint for lasting change.
              We create learning environments that foster growth for all ages.
            </p>

            <div className="space-y-10">

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Life Skills
                </h2>

                <p className="text-gray-700 leading-8">
                  Academic support tailored for children with learning challenges
                  and literacy programs for adults.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Community Workshops
                </h2>

                <p className="text-gray-700 leading-8">
                  Vital training in hygiene, women’s safety,
                  and health awareness.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Leadership Development
                </h2>

                <p className="text-gray-700 leading-8">
                  Raising and mentoring local leaders who are equipped
                  to serve and transform their own communities.
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

export default Education