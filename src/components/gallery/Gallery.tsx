import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#FAF8F5] py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="text-sm uppercase tracking-[0.3em] text-amber-700">
            Gallery
          </span>

          <h2
            className="mt-5 text-5xl text-stone-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Beautiful Moments
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-stone-600">
            Our collection of weddings, receptions, engagements and
            celebrations is currently being prepared.
          </p>

          <div className="mt-16 rounded-3xl border-2 border-dashed border-stone-300 bg-white p-16">

            <Camera
              size={60}
              className="mx-auto text-amber-700"
            />

            <h3 className="mt-8 text-3xl font-semibold">
              Gallery Coming Soon
            </h3>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-stone-500">
              We are carefully curating our finest event photographs.
              Stay tuned for an exclusive showcase of unforgettable celebrations.
            </p>

            <a
              href="tel:+918121247675"
              className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}