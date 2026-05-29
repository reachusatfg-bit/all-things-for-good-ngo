import hero from "../assets/hero.jpg"

function Hero() {

  return (

    <section
      className="relative min-h-screen bg-cover bg-center flex items-center pt-40"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-5xl">

          <p className="text-[#d4a017] tracking-[4px] font-semibold mb-8">
            COMPASSION • DIGNITY • HOPE
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-10">

            Changing Lives
            <br />

            Through
            <span className="text-[#d4a017]">
              {" "}Faith, Care &
            </span>

            <br />

            <span className="text-[#d4a017]">
              Action
            </span>

          </h1>

          <p className="text-xl md:text-2xl text-white/85 leading-10 max-w-4xl mb-14">

            Empowering vulnerable communities through education,
            healthcare, counselling, advocacy,
            and sustainable livelihood programs.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-6">

            <button className="bg-[#d4a017] px-10 py-5 rounded-full text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl">

              Donate Now

            </button>

            <button className="border-2 border-white px-10 py-5 rounded-full text-white font-bold text-lg hover:bg-white hover:text-black transition duration-300">

              Explore Our Work

            </button>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero