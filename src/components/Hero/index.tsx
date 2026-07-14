import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown, FaBookOpen } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[65vh] bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white">
      <div className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            📚 Welcome to BookNest
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Discover Your
            <span className="block text-yellow-300">
              Next Favorite Book
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Explore thousands of books, discover new authors,
            organize your personal collection, and enjoy reading
            with the BookNest community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/explore"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:text-yellow-300"
            >
              Explore Books
            </Link>

            <Link
              to="/add-book"
              className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:text-yellow-300"
            >
              Add Book
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="flex h-80 w-80 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur-md lg:h-96 lg:w-96">
            <FaBookOpen className="text-[150px] text-yellow-300 lg:text-[180px]" />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="pb-8 text-center"
      >
        <FaArrowDown className="mx-auto text-2xl text-white/80" />
      </motion.div>
    </section>
  );
};

export default Hero;