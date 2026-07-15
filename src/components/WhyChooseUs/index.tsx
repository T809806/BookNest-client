import {
  FaBookOpen,
  FaSearch,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const features = [

  {
    icon: <FaBookOpen size={42} />,
    title: "Extensive Book Collection",
    description:
      "Explore a wide variety of books across multiple genres, from timeless classics to modern bestsellers.",
  },
  {
    icon: <FaSearch size={42} />,
    title: "Quick & Easy Search",
    description:
      "Find books instantly using categories, titles, and authors with a smooth browsing experience.",
  },
  {
    icon: <FaStar size={42} />,
    title: "Trusted Ratings",
    description:
      "Read community ratings and reviews to help you choose your next great read with confidence.",
  },
  {
    icon: <FaShieldAlt size={42} />,
    title: "Secure Platform",
    description:
      "Enjoy a reliable and secure experience with protected user accounts and authenticated actions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">

 <div className="mx-auto max-w-7xl px-6">

  <h2 className="text-center text-4xl font-bold text-emerald-700"> Why Choose BookNest? </h2>

 <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
     BookNest is designed to make discovering, organizing,
     and sharing books simple, enjoyable, and reliable for every reader.
 </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

   </div>

      </div>

    </section>

  );
};

export default WhyChooseUs;