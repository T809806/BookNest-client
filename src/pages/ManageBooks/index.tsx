import { useEffect, useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image?: string;
  price: number;
  rating: number;
}

const ManageBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const userEmail = localStorage.getItem("userEmail");
  const token = localStorage.getItem("token");

  const fetchMyBooks = async () => {
    try {
      const res = await api.get("/books/my-books", {
        params: {
          email: userEmail,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(res.data.books);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBooks();
  }, []);

  if (loading) {
    return (
      <div className="mt-20 text-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("token");

    const res = await api.delete(`/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data.success) {
      toast.success("Book deleted successfully!");

      setBooks((prevBooks) =>
        prevBooks.filter((book) => book._id !== id)
      );
    }
  } catch (error: any) {
    console.error(error);

    toast.error(
      error?.response?.data?.message ||
      "Failed to delete book."
    );
  }
};

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-emerald-700">
        My Books
      </h1>

      {books.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            You haven't added any books yet.
          </h2>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
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
                <h2 className="text-xl font-bold">
                  {book.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {book.author}
                </p>

                <p className="mt-1 text-sm font-medium text-emerald-700">
                  {book.category}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">
                    ৳ {book.price}
                  </span>

                  <span>
                    ⭐ {book.rating}
                  </span>
                </div>

                <button
  onClick={() => handleDelete(book._id)}
  className="mt-5 w-full rounded-lg bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
>
  Delete Book
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBooks;