import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import OurWork from "./pages/OurWork"
import Donate from "./pages/Donate"
import Contact from "./pages/Contact"
import Board from "./pages/Board"

import LayCounselling from "./pages/LayCounselling"
import SkillDevelopment from "./pages/SkillDevelopment"
import Education from "./pages/Education"
import Advocacy from "./pages/Advocacy"

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/our-work" element={<OurWork />} />

        <Route
          path="/our-work/lay-counselling"
          element={<LayCounselling />}
        />

        <Route
          path="/our-work/skill-development"
          element={<SkillDevelopment />}
        />

        <Route
          path="/our-work/education"
          element={<Education />}
        />

        <Route
          path="/our-work/advocacy"
          element={<Advocacy />}
        />

        <Route path="/donate" element={<Donate />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/board" element={<Board />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App