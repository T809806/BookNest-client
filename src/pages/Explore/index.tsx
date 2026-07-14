import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import LoadingSpinner from "../../components/LoadingSpinner";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image?: string;
  price: number;
  rating: number;
}

const Explore = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async () => {
  setLoading(true); // ← এই লাইনটা নতুন যোগ করবে

  try {
    const res = await api.get("/books", {
      params: {
        search,
        category,
        sort,
        page,
        limit: 8,
      },
    });

    setBooks(res.data.books);
    setTotalPages(res.data.totalPages);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false); 
  }
};
 useEffect(() => {
  fetchBooks();
}, [search, category, sort, page]);

  if (loading) {
  return <LoadingSpinner />;
}

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      {/* Heading */}
      <h1 className="mb-8 text-center text-4xl font-bold text-emerald-700">
        Explore Books
      </h1>

      {/* Search + Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
>
  <option value="latest">Latest</option>
  <option value="price_asc">Price: Low → High</option>
  <option value="price_desc">Price: High → Low</option>
</select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
        >
          <option value="">All Categories</option>
          <option value="Novel">Novel</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Biography">Biography</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>

      {/* No Books */}
      {books.length === 0 ? (
        <div className="py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            No Books Found
          </h2>

          <p className="mt-2 text-gray-500">
            Try another search or category.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={
                  book.image ||
                  "https://via.placeholder.com/400x250?text=Book"
                }
                alt={book.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="line-clamp-2 text-xl font-bold">
                  {book.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {book.author}
                </p>

                <p className="mt-1 text-sm font-medium text-emerald-700">
                  {book.category}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700">
                    ৳ {book.price}
                  </span>

                  <span className="font-medium">
                    ⭐ {book.rating}
                  </span>
                </div>

                <div className="mt-10 flex justify-center gap-2 flex-wrap">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setPage(index + 1)}
      className={`rounded-lg px-4 py-2 border-2 transition ${
        page === index + 1
          ? "bg-emerald-700 border-emerald-700 text-white"
          : "border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
      }`}
    >
      {index + 1}
    </button>
  ))}
</div>

                <Link to={`/books/${book._id}`}>
                  <button className="mt-5 w-full rounded-lg bg-emerald-700 py-2 font-semibold text-white transition hover:bg-emerald-800">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;