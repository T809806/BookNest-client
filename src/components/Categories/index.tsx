import { Link } from "react-router-dom";
import {
  FaBook,
  FaFlask,
  FaLandmark,
  FaUser,
  FaDragon,
  FaHeart,
} from "react-icons/fa";

const categories = [
  {
    name: "Novel",
    icon: <FaBook size={38} />,
  },
  {
    name: "Science",
    icon: <FaFlask size={38} />,
  },
  {
    name: "History",
    icon: <FaLandmark size={38} />,
  },
  {
    name: "Biography",
    icon: <FaUser size={38} />,
  },
  {
    name: "Fantasy",
    icon: <FaDragon size={38} />,
  },
  {
    name: "Romance",
    icon: <FaHeart size={38} />,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-emerald-700">
          Browse by Categories
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Choose your favorite category and discover amazing books.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/explore?category=${category.name}`}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-600 hover:shadow-xl"
            >
              <div className="flex justify-center text-emerald-700">
                {category.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {category.name}
              </h3>

              <p className="mt-3 text-gray-500">
                Explore books in the {category.name} category.
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;