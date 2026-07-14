import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";

const AddBook = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail") || "";

      const bookData = {
        title,
        shortDescription,
        fullDescription,
        author,
        category,
        price: Number(price),
        image,
        rating: Number(rating),
        userEmail,
      };

      const res = await api.post("/books/add", bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        toast.success("Book Added Successfully!");

        setTitle("");
        setAuthor("");
        setCategory("");
        setImage("");
        setShortDescription("");
        setFullDescription("");
        setPrice("");
        setRating("");

        navigate("/explore");
      }
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to add book."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-emerald-700">
          Add New Book
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Share your favorite book with everyone.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="mb-2 block font-medium">
              Book Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Book title"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Author */}
          <div>
            <label className="mb-2 block font-medium">
              Author
            </label>

            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            >
              <option value="">Select Category</option>
              <option value="Novel">Novel</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Biography">Biography</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-medium">
              Cover Image URL
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/book.jpg"
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block font-medium">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="300"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="mb-2 block font-medium">
              Rating
            </label>

            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="4.5"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="mb-2 block font-medium">
              Short Description
            </label>

            <textarea
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Short description"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="mb-2 block font-medium">
              Full Description
            </label>

            <textarea
              rows={4}
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              placeholder="Full description"
              required
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-700 py-2.5 text-base font-semibold text-white transition hover:bg-emerald-800"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;