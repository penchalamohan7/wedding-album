import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#FAF8F5]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Logo */}

        <a href="#home">
          <h1
            className="text-xl font-semibold text-stone-900 sm:text-2xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Deepthisri Events
          </h1>

          <p className="text-xs text-stone-500 sm:text-sm">
            Crafting Timeless Celebrations
          </p>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-stone-600 transition hover:text-amber-700"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <a
            href="tel:+918121247675"
            className="rounded-full bg-stone-900 px-4 py-3 text-white transition hover:bg-stone-700"
          >
            <div className="flex items-center gap-2">
              <Phone size={18} />

              <span className="hidden xl:block">
                +91 8121247675
              </span>
            </div>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-stone-300 p-3 transition hover:bg-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

      </div>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-stone-200 bg-[#FAF8F5] lg:hidden"
          >

            <nav className="flex flex-col px-6 py-4">

              {links.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-4 text-stone-700 transition hover:bg-white hover:text-amber-700"
                >
                  {item.name}
                </a>

              ))}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}