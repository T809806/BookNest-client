import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/axios";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image?: string;
  price: number;
  rating: number;
  shortDescription: string;
  fullDescription: string;
}

const Details = () => {
  const { id } = useParams();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const res = await api.get(`/books/${id}`);

      setBook(res.data.book);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-20 text-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">
          Book Not Found
        </h1>

        <Link
          to="/explore"
          className="mt-6 inline-block rounded-lg bg-emerald-700 px-6 py-3 text-white hover:bg-emerald-800"
        >
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

        <div className="grid gap-8 md:grid-cols-2">

          
          <div>
            <img
              src={
                book.image ||
                "https://via.placeholder.com/600x800?text=Book"
              }
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </div>

          
          <div className="p-8">

            <h1 className="text-4xl font-bold text-emerald-700">
              {book.title}
            </h1>

            <p className="mt-4 text-xl text-gray-600">
              ✍ Author:
              <span className="font-semibold">
                {" "}
                {book.author}
              </span>
            </p>

            <p className="mt-2">
              📂 Category:
              <span className="font-semibold text-emerald-700">
                {" "}
                {book.category}
              </span>
            </p>

            <p className="mt-2 text-lg">
              ⭐ Rating:
              <span className="font-semibold">
                {" "}
                {book.rating}
              </span>
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-700">
              ৳ {book.price}
            </p>

            <hr className="my-6" />

            <h2 className="text-xl font-semibold">
              Short Description
            </h2>

            <p className="mt-2 text-gray-600">
              {book.shortDescription}
            </p>

            <h2 className="mt-6 text-xl font-semibold">
              Full Description
            </h2>

            <p className="mt-2 leading-8 text-gray-600">
              {book.fullDescription}
            </p>

            <Link
              to="/explore"
              className="mt-8 inline-block rounded-lg bg-emerald-700 px-6 py-3 text-white transition hover:text-yellow-300"
            >
              ← Back to Explore
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;