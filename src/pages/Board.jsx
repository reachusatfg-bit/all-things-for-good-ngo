import Navbar from "../components/Navbar"

function Board(){

  return(

    <>
      <Navbar />

      <section className="pt-40 px-6 min-h-screen bg-white">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold text-[#0f3d2e] mb-12">
            Board Members
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f8f6f1] p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">
                Chairperson
              </h2>

              <p className="text-gray-700">
                Visionary leadership rooted in compassion and service.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">
                Secretary
              </h2>

              <p className="text-gray-700">
                Coordinating operations with integrity and dedication.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">
                Treasurer
              </h2>

              <p className="text-gray-700">
                Ensuring transparency and responsible stewardship.
              </p>
            </div>

          </div>

        </div>

      </section>

    </>

  )

}

export default Board