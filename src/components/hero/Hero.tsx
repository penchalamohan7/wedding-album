import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
  id="home"
  className="overflow-hidden bg-[#FAF8F5] pt-24 lg:pt-32"
>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 mx-auto flex w-full max-w-[560px] flex-col items-center lg:order-1 lg:mx-0 lg:items-start"
          >

            <span className="inline-flex rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-medium text-amber-700 shadow-sm">
              Premium Event Management
            </span>

            <h1
              className="mt-8 max-w-[520px] text-center text-4xl font-medium leading-[1.05] tracking-tight text-stone-900 sm:text-5xl md:text-6xl xl:text-7xl lg:text-left"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Elegant Events.
              <br />
              Lasting Memories.
            </h1>

            <div className="mt-7 h-1 w-20 rounded-full bg-amber-600" />
            <p className="mt-8 max-w-[520px] text-left text-[17px] leading-9 text-stone-600">
  Deepthisri Events creates elegant weddings, receptions, engagements, birthday celebrations and corporate events with thoughtful planning, premium décor and seamless execution, delivering memorable experiences for every family.
</p>
            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-4 text-white transition duration-300 hover:bg-stone-700"
              >
                View Services
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+918121247675"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-4 transition duration-300 hover:shadow-lg"
              >
                <Phone size={18} />
                Contact Us
              </a>

            </div>
                        {/* Founder Card */}

            {/* <div className="mt-12 w-full max-w-sm rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">

              <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                Founder
              </p>

              <h3
                className="mt-3 text-2xl text-stone-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Pulaparthi Penchalaiah
              </h3>

              <p className="mt-2 text-stone-500">
                Deepthisri Events
              </p>

            </div> */}

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
              alt="Deepthisri Events"
              className="w-full max-w-[640px] rounded-[32px] object-cover shadow-xl
                         h-[320px]
                         sm:h-[420px]
                         md:h-[520px]
                         lg:h-[620px]
                         xl:h-[700px]"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}