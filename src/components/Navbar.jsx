import logo from "../assets/ngoREALlogo.png"

import { Link } from "react-router-dom"

import {
  Menu,
  X
} from "lucide-react"

import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f3d2e]/95 backdrop-blur-md shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-4"
        >

          <img
            src={logo}
            className="w-14"
          />

          <h1 className="text-white font-bold text-2xl hidden sm:block">
            All Things for Good
          </h1>

        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex items-center gap-12">

          <Link
            to="/"
            className="text-white hover:text-[#d4a017] transition"
          >
            Home
          </Link>

          <Link
            to="/our-work"
            className="text-white hover:text-[#d4a017] transition"
          >
            Our Work
          </Link>

          <Link
            to="/board"
            className="text-white hover:text-[#d4a017] transition"
          >
            Board
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-[#d4a017] transition"
          >
            Contact
          </Link>

          <Link
            to="/donate"
            className="bg-[#d4a017] px-7 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
          >
            Donate
          </Link>

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >

          {
            menuOpen
            ?
            <X size={34} />
            :
            <Menu size={34} />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div className="md:hidden bg-[#0f3d2e] px-6 pb-8 pt-4 border-t border-white/10">

            <div className="flex flex-col gap-6 text-lg">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#d4a017] transition"
              >
                Home
              </Link>

              <Link
                to="/our-work"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#d4a017] transition"
              >
                Our Work
              </Link>

              <Link
                to="/board"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#d4a017] transition"
              >
                Board
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#d4a017] transition"
              >
                Contact
              </Link>

              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="bg-[#d4a017] text-center py-4 rounded-full text-white font-semibold"
              >
                Donate Now
              </Link>

            </div>

          </div>

        )
      }

    </nav>

  )

}

export default Navbar