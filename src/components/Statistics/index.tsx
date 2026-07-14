import {
  FaBook,
  FaUsers,
  FaPenNib,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBook size={34} />,
    number: "10,000+",
    title: "Books Available",
  },
  {
    icon: <FaUsers size={34} />,
    number: "2,500+",
    title: "Happy Readers",
  },
  {
    icon: <FaPenNib size={34} />,
    number: "850+",
    title: "Authors",
  },
  {
    icon: <FaStar size={34} />,
    number: "5,000+",
    title: "Reviews",
  },
];

const Statistics = () => {
  return (
    <section className="bg-emerald-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          BookNest in Numbers
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-emerald-100">
          Thousands of readers trust BookNest to discover,
          organize, and enjoy their favorite books.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-5 flex justify-center text-yellow-300">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold">
                {item.number}
              </h3>

              <p className="mt-3 text-lg text-emerald-100">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;