import { motion } from "framer-motion";
import { Award, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-lg lg:mx-0"
          >

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              About Deepthisri Events
            </span>

            <h2
              className="mt-5 text-4xl font-medium leading-tight text-stone-900 lg:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Every Celebration
              <br />
              Tells A Story.
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-amber-600" />

            <p className="mt-8 text-[17px] leading-9 text-stone-600">
              Deepthisri Events specializes in planning elegant
              weddings, receptions, engagements, birthday
              celebrations and corporate events with exceptional
              attention to detail, thoughtful execution and
              personalized service.
            </p>

            <p className="mt-6 text-[17px] leading-9 text-stone-600">
              Led by <strong>Pulaparthi Penchalaiah</strong>, our
              mission is to transform every occasion into a
              memorable celebration that families cherish for
              years to come.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

              <Award
                size={34}
                className="text-amber-700"
              />

              <h3 className="mt-5 text-2xl font-semibold text-stone-900">
                Professional Planning
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-stone-600">
                Every celebration is planned with precision,
                creativity and complete attention to detail.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

                <Users
                  size={30}
                  className="text-amber-700"
                />

                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  Client Focused
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-stone-600">
                  Personalized planning that reflects every
                  family's vision and style.
                </p>

              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

                <HeartHandshake
                  size={30}
                  className="text-amber-700"
                />

                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  Trusted Service
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-stone-600">
                  Reliable execution with a commitment to quality
                  and memorable experiences.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}