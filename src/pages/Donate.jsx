import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import qr from "../assets/upiqr.jpg"

import {
  HeartHandshake,
  Landmark,
  ShieldCheck
} from "lucide-react"

function Donate() {

  const upiId = "allthingsforgood@upi"

  const copyUPI = async () => {

    try {

      await navigator.clipboard.writeText(upiId)

      alert("UPI ID copied successfully!")

    }

    catch {

      alert("Failed to copy UPI ID")

    }

  }

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-32 px-6 bg-[#f8f6f1] min-h-screen">

        <div className="max-w-7xl mx-auto">

          {/* HERO */}

          <div className="text-center mb-24">

            <p className="text-[#d4a017] font-semibold tracking-[4px] mb-5">
              SUPPORT OUR MISSION
            </p>

            <h1 className="text-6xl md:text-7xl font-bold text-[#0f3d2e] mb-8 leading-tight">
              Your Generosity Creates Hope
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-9">
              Every contribution helps us provide education,
              counselling, advocacy, healthcare access,
              and sustainable opportunities for vulnerable communities.
            </p>

          </div>

          {/* IMPACT CARDS */}

          <div className="grid md:grid-cols-3 gap-10 mb-24">

            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <HeartHandshake
                size={50}
                className="text-[#d4a017] mb-8"
              />

              <h2 className="text-3xl font-bold text-[#0f3d2e] mb-6">
                Sponsor Care
              </h2>

              <p className="text-gray-600 leading-8">
                Help fund counselling,
                education, and emotional support
                for vulnerable individuals and families.
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <Landmark
                size={50}
                className="text-[#d4a017] mb-8"
              />

              <h2 className="text-3xl font-bold text-[#0f3d2e] mb-6">
                Build Futures
              </h2>

              <p className="text-gray-600 leading-8">
                Support skill development,
                vocational training,
                and sustainable livelihood programs.
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <ShieldCheck
                size={50}
                className="text-[#d4a017] mb-8"
              />

              <h2 className="text-3xl font-bold text-[#0f3d2e] mb-6">
                Trusted Giving
              </h2>

              <p className="text-gray-600 leading-8">
                Every donation is directed toward
                meaningful community impact
                with integrity and accountability.
              </p>

            </div>

          </div>

          {/* DONATION METHODS */}

          <div className="grid lg:grid-cols-2 gap-10">

            {/* UPI */}

            <div className="bg-[#0f3d2e] text-white rounded-[40px] p-12 shadow-2xl">

              <h2 className="text-4xl font-bold mb-8">
                Donate via UPI
              </h2>

              <p className="text-white/80 leading-8 mb-10">
                Scan the QR code or use our UPI ID
                to contribute securely and instantly.
              </p>

              <div className="bg-white rounded-[30px] p-6 mb-10 shadow-2xl">

                <img
                  src={qr}
                  alt="UPI QR"
                  className="w-full rounded-2xl"
                />

              </div>

              <div className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center mb-10">

                <p className="text-white/60 mb-4 text-lg">
                  UPI ID
                </p>

                <p className="text-2xl font-bold break-all">
                  {upiId}
                </p>

              </div>

              <button
                onClick={copyUPI}
                className="bg-[#d4a017] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >

                Copy UPI ID

              </button>

            </div>

            {/* BANK DETAILS */}

            <div className="bg-white rounded-[40px] p-12 shadow-2xl">

              <h2 className="text-4xl font-bold text-[#0f3d2e] mb-8">
                Bank Transfer
              </h2>

              <div className="space-y-8 text-lg">

                <div>
                  <p className="text-gray-500 mb-2">
                    Account Name
                  </p>

                  <p className="font-bold">
                    All Things for Good Charitable Trust
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    Bank Name
                  </p>

                  <p className="font-bold">
                    State Bank of India
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    Account Number
                  </p>

                  <p className="font-bold">
                    XXXXXXXXXXXX
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    IFSC Code
                  </p>

                  <p className="font-bold">
                    SBIN000XXXX
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Donate