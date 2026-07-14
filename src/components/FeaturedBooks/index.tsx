import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image?: string;
  price: number;
  rating: number;
}

const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await api.get("/books", {
        params: {
          limit: 6,
        },
      });

      setBooks(res.data.books);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Loading Featured Books...
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-emerald-700">
          Featured Books
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Discover our latest and most popular books.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {books.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={
                  book.image ||
                  "https://via.placeholder.com/400x300?text=Book"
                }
                alt={book.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {book.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {book.author}
                </p>

                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  {book.category}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ৳ {book.price}
                  </span>

                  <span>
                    ⭐ {book.rating}
                  </span>
                </div>

                <Link
                  to={`/books/${book._id}`}
                  className="mt-6 block rounded-lg bg-emerald-700 py-3 text-center font-semibold text-white transition hover:text-yellow-300"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <Link
            to="/explore"
           className="rounded-lg border-2 border-white bg-emerald-700 px-8 py-3 font-semibold text-white transition duration-300 hover:text-yellow-300"
          >
            View All Books
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;