import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Book Lover",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "BookNest made it incredibly easy to discover new books. The interface is clean and enjoyable to use.",
  },
  {
    name: "Hasan Mahmud",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I use BookNest almost every week to organize my reading list. The search and categories save a lot of time.",
  },
  {
    name: "Nusrat Jahan",
    role: "Teacher",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "A wonderful platform for students and readers. Adding and discovering books is quick and simple.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-emerald-700">
          What Our Readers Say
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Join thousands of readers who trust BookNest to discover,
          organize, and enjoy great books.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="mr-1 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;