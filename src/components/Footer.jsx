import logo from "../assets/ngoREALlogo.png"
import { Link } from "react-router-dom"
function Footer(){

  return(

    <footer className="bg-[#0f3d2e] text-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>

          <img src={logo} className="w-24 mb-6" />

          <p className="text-white/70 leading-7">
            Serving communities through compassion,
            dignity, education, and hope.
          </p>

        </div>

        <div>

  <h3 className="font-bold text-xl mb-5">
    Quick Links
  </h3>

  <div className="space-y-4">

    <Link
      to="/"
      className="block text-white/70 hover:text-[#d4a017] transition"
    >
      Home
    </Link>

    <Link
      to="/our-work"
      className="block text-white/70 hover:text-[#d4a017] transition"
    >
      Our Work
    </Link>

    <Link
      to="/donate"
      className="block text-white/70 hover:text-[#d4a017] transition"
    >
      Donate
    </Link>

    <Link
      to="/contact"
      className="block text-white/70 hover:text-[#d4a017] transition"
    >
      Contact
    </Link>

  </div>

</div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-white/70">

            <p>allthingsforgood@gmail.com</p>
            <p>+91 74162 16979</p>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl text-black mb-4"
          />

          <button className="bg-[#d4a017] px-6 py-3 rounded-full font-semibold">
            Subscribe
          </button>

        </div>

      </div>

      <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/60">
        © 2026 All Things for Good Charitable Trust
      </div>

    </footer>

  )

}

export default Footer