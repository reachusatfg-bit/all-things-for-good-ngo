import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Advocacy() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-28 px-6 bg-white min-h-screen">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold text-[#0f3d2e] mb-6">
            Advocacy
          </h1>

          <p className="text-2xl text-[#d4a017] font-semibold mb-14">
            A Voice for the Voiceless
          </p>

          <div className="bg-[#f8f6f1] p-12 rounded-3xl shadow-xl">

            <p className="text-lg text-gray-700 leading-9 mb-12">
              We stand for justice and the dignity
              of those often unheard.
            </p>

            <div className="space-y-10">

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Healthcare Access
                </h2>

                <p className="text-gray-700 leading-8">
                  Navigating complex systems to help vulnerable communities
                  access essential medical and mental healthcare.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Awareness & Media
                </h2>

                <p className="text-gray-700 leading-8">
                  Utilizing podcasts and digital storytelling
                  to break the deep-seated stigma surrounding
                  mental illness in India.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0f3d2e] mb-4">
                  Social Justice
                </h2>

                <p className="text-gray-700 leading-8">
                  Promoting equal opportunities and providing
                  a consistent presence for those in need of a champion.
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

export default Advocacy