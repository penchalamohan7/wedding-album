import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Contact Us
          </span>

          <h2
            className="mt-5 text-4xl font-medium text-stone-900 lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's Create Your
            <br />
            Dream Celebration
          </h2>

          <p className="mx-auto mt-6 text-[17px] leading-9 text-stone-600">
            We'd love to be a part of your special occasion.
            Contact Deepthisri Events today to start planning
            a celebration filled with unforgettable memories.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Phone */}

          <div className="rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <Phone size={34} className="text-amber-700" />

            <h3 className="mt-6 text-2xl font-semibold">
              Call Us
            </h3>

            <p className="mt-4 text-stone-600">
              Pulaparthi Penchalaiah
            </p>

            <a
              href="tel:+918121247675"
              className="mt-3 block font-semibold text-stone-900 hover:text-amber-700"
            >
              +91 81212 47675
            </a>

          </div>

          {/* Instagram */}

          <div className="rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <FaInstagram size={34} className="text-amber-700" />

            <h3 className="mt-6 text-2xl font-semibold">
              Instagram
            </h3>

            <p className="mt-4 leading-8 text-stone-600">
              Explore our latest weddings,
              receptions and event highlights.
            </p>

            <a
              href="https://www.instagram.com/deepthisrievents"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-semibold text-stone-900 hover:text-amber-700"
            >
              @deepthisrievents
            </a>

          </div>

          {/* Service Area */}

          <div className="rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <MapPin size={34} className="text-amber-700" />

            <h3 className="mt-6 text-2xl font-semibold">
              Service Area
            </h3>

            <p className="mt-4 leading-8 text-stone-600">
              Weddings, Receptions,
              Engagements, Birthday
              Celebrations and Corporate
              Events across Andhra Pradesh
              & Telangana.
            </p>

          </div>

          {/* Availability */}

          <div className="rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <Clock size={34} className="text-amber-700" />

            <h3 className="mt-6 text-2xl font-semibold">
              Availability
            </h3>

            <p className="mt-4 leading-8 text-stone-600">
              Available all days for
              consultations and event
              planning. Early booking
              is highly recommended.
            </p>

          </div>

        </div>

        <div className="mt-20 rounded-[36px] bg-stone-900 px-8 py-16 text-center text-white">

          <h3
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready To Plan Your Event?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Let Deepthisri Events transform your special
            occasion into an unforgettable celebration.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="tel:+918121247675"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-stone-900 transition hover:scale-105"
            >
              Call Now
              <ArrowRight size={18} />
            </a>

            <a
              href="https://www.instagram.com/deepthisrievents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-medium text-white transition hover:bg-white hover:text-stone-900"
            >
              <FaInstagram size={18} />
              Instagram
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}