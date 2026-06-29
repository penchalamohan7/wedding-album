import { motion } from "framer-motion";
import {
  Heart,
  PartyPopper,
  Building2,
  Cake,
  Camera,
  Flower2,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description:
      "Elegant wedding planning with premium décor, stage setup and seamless coordination.",
  },
  {
    icon: PartyPopper,
    title: "Reception",
    description:
      "Luxury receptions with beautiful lighting, floral arrangements and memorable experiences.",
  },
  {
    icon: Cake,
    title: "Birthday Events",
    description:
      "Creative birthday celebrations designed for children and adults with customized themes.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional corporate events, annual meetings and business celebrations.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography and videography to capture every special moment.",
  },
  {
    icon: Flower2,
    title: "Decoration",
    description:
      "Premium floral decoration, mandap setup, entrance décor and stage design.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAF8F5] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Our Services
          </p>

          <h2
            className="mt-4 text-5xl text-stone-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Creating Beautiful Celebrations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            From intimate family functions to grand celebrations,
            we handle every event with creativity, elegance and
            attention to detail.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                  <Icon
                    size={28}
                    className="text-amber-700"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-stone-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}