import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  HeartHandshake
} from "lucide-react"

function Contact() {

  return (

    <>
      <Navbar />

      <section className="pt-40 pb-32 px-6 bg-gradient-to-b from-[#f8f6f1] to-white min-h-screen">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-24">

            <p className="text-[#d4a017] font-semibold tracking-[4px] mb-5">
              CONNECT WITH US
            </p>

            <h1 className="text-6xl md:text-7xl font-bold text-[#0f3d2e] mb-8 leading-tight">
              Let’s Create Hope Together
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-9">
              Whether you'd like to volunteer,
              donate, collaborate, seek support,
              or simply learn more —
              we'd be honored to connect with you.
            </p>

          </div>

          {/* CONTACT GRID */}

          <div className="grid lg:grid-cols-3 gap-10">

            {/* PHONE */}

            <div className="group bg-white rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-transparent hover:border-[#d4a017]">

              <div className="w-20 h-20 rounded-3xl bg-[#0f3d2e] flex items-center justify-center mb-8 group-hover:scale-110 transition">

                <Phone className="text-white" size={36} />

              </div>

              <h2 className="text-4xl font-bold text-[#0f3d2e] mb-6">
                Call Us
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Speak directly with our team regarding partnerships,
                volunteering, counselling, or support inquiries.
              </p>

              <p className="text-2xl font-bold mb-10">
                +91 74162 16979
              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href="tel:+91 7416216979"
                  className="bg-[#d4a017] text-white px-6 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/917416216979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  WhatsApp
                </a>

              </div>

            </div>

            {/* EMAIL */}

            <div className="group bg-white rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-transparent hover:border-[#d4a017]">

              <div className="w-20 h-20 rounded-3xl bg-[#d4a017] flex items-center justify-center mb-8 group-hover:scale-110 transition">

                <Mail className="text-white" size={36} />

              </div>

              <h2 className="text-4xl font-bold text-[#0f3d2e] mb-6">
                Email Us
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Reach out via email and our team
                will respond as quickly as possible.
              </p>

              <p className="text-lg font-bold mb-10 break-all">
                reachus.atfg@gmail.com
              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href="mailto:reachus.atfg@gmail.com"
                  className="bg-[#0f3d2e] text-white px-6 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Mail App
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=reachus.atfg@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Gmail
                </a>

              </div>

            </div>

            {/* LOCATION */}

            <div className="group bg-white rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-transparent hover:border-[#d4a017]">

              <div className="w-20 h-20 rounded-3xl bg-[#0f3d2e] flex items-center justify-center mb-8 group-hover:scale-110 transition">

                <MapPin className="text-white" size={36} />

              </div>

              <h2 className="text-4xl font-bold text-[#0f3d2e] mb-6">
                Reach Us
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Visit us and connect personally with our mission and team.
              </p>

              <p className="text-lg font-bold leading-8 mb-10">
                Thane Prayer Tower,
                Manorama Nagar,
                Thane, Maharashtra
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Thane+Prayer+Tower+Manorama+Nagar+Thane+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4a017] text-white px-6 py-4 rounded-full font-semibold hover:scale-105 transition inline-block"
              >
                Open Google Maps
              </a>

            </div>

          </div>

          {/* CTA SECTION */}

          <div className="mt-28 bg-[#0f3d2e] rounded-[45px] p-16 text-white text-center shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a017]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <div className="flex justify-center mb-8">

                <div className="w-24 h-24 rounded-full bg-[#d4a017] flex items-center justify-center shadow-2xl">

                  <HeartHandshake size={42} />

                </div>

              </div>

              <h2 className="text-5xl font-bold mb-8">
                Every Conversation Matters
              </h2>

              <p className="text-xl text-white/80 leading-9 max-w-4xl mx-auto mb-12">
                Whether you're seeking support,
                exploring collaboration opportunities,
                or looking to contribute toward meaningful change —
                we'd love to walk this journey together.
              </p>

              <div className="flex justify-center gap-5 flex-wrap">

                <a
                  href="https://wa.me/917416216979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Message on WhatsApp
                </a>

                <a
                  href="mailto:allthingsforgood@gmail.com"
                  className="bg-[#d4a017] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Start a Conversation
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Contact