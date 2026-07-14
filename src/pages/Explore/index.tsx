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

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  useEffect(() => {
    fetchBooks();
  }, [search, category, sort, page]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/books", {
        params: { search, category, sort, page, limit: 8 },
      });
      setBooks(res.data.books || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-emerald-700">Explore Books</h1>
        <p className="mb-8 text-center text-gray-600">Discover amazing books.</p>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="rounded-lg border p-3"
          />

          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded-lg border p-3">
            <option value="">All Categories</option>
            <option value="Novel">Novel</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
            <option value="Fantasy">Fantasy</option>
          </select>

          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="rounded-lg border p-3">
            <option value="latest">Latest</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
          </select>
        </div>

        {books.length===0 ? (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-semibold">No Books Found</h2>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.map(book=>(
                <div key={book._id} className="overflow-hidden rounded-xl bg-white shadow">
                  <img src={book.image || "https://via.placeholder.com/400x250?text=Book"} alt={book.title} className="h-60 w-full object-cover"/>
                  <div className="p-5">
                    <h2 className="text-xl font-bold">{book.title}</h2>
                    <p className="mt-2 text-gray-500">{book.author}</p>
                    <p className="text-emerald-700">{book.category}</p>
                    <div className="mt-4 flex justify-between">
                      <span>৳ {book.price}</span>
                      <span>⭐ {book.rating}</span>
                    </div>
                    <Link to={`/books/${book._id}`}>
                      <button className="mt-5 w-full rounded-lg bg-emerald-700 py-2 font-semibold text-white hover:bg-emerald-800">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-2">
              {Array.from({length: totalPages}, (_,i)=>(
                <button
                  key={i}
                  onClick={()=>setPage(i+1)}
                  className={page===i+1?"rounded border bg-emerald-700 px-4 py-2 text-white":"rounded border border-emerald-700 px-4 py-2 text-emerald-700"}
                >
                  {i+1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;
