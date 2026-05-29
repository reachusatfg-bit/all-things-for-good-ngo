import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function LayCounselling() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-28 px-6 bg-[#f8f6f1] min-h-screen">

        <div className="max-w-6xl mx-auto">

          <div className="mb-20">

            <h1 className="text-6xl font-bold text-[#0f3d2e] mb-6">
              Lay Counseling
            </h1>

            <p className="text-2xl text-[#d4a017] font-semibold">
              Bridging the Gap through Task-Shared Care
            </p>

          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl mb-14">

            <h2 className="text-3xl font-bold mb-8 text-[#0f3d2e]">
              The Need
            </h2>

            <div className="space-y-8 text-lg text-gray-700 leading-9">

              <p>
                In India, the shortage of specialists is critical.
                Current data from the Indian Journal of Psychiatry
                indicates there are only 0.75 psychiatrists
                for every 100,000 people, leaving millions
                without access to clinical care.
              </p>

              <p>
                Research from NIMHANS and global experts like
                Dr. Vikram Patel confirms that community-based,
                “task-shared” models — where trained non-specialists
                provide frontline support — are the most effective
                way to bridge this profound gap.
              </p>

            </div>

          </div>

          <div className="bg-[#0f3d2e] text-white p-12 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-bold mb-10">
              Our Response
            </h2>

            <p className="leading-9 text-lg mb-12 text-white/90">
              We equip lay leaders to be “first responders”
              of emotional and spiritual care.
              Our model integrates clinical insight
              with pastoral compassion.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="text-2xl font-bold text-[#d4a017] mb-3">
                  Empathetic Listening
                </h3>

                <p className="text-white/80 leading-8">
                  Providing a safe space for grief and life transitions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#d4a017] mb-3">
                  Restoring Dignity
                </h3>

                <p className="text-white/80 leading-8">
                  Ensuring every individual feels seen,
                  heard, and valued.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#d4a017] mb-3">
                  Holistic Healing
                </h3>

                <p className="text-white/80 leading-8">
                  Bridging the divide between mental well-being
                  and spiritual peace.
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

export default LayCounselling